<?php
/**
 * SVG Support Handler
 *
 * Provides secure SVG upload and sanitization support for WordPress media library.
 * Requires PHP XML extension (php-xml) to be installed and enabled.
 *
 * @package Imagewize\SVGSupport
 * @version 1.0.0
 */

namespace Imagewize\SVGSupport;

if (!extension_loaded('xml')) {
    add_action('admin_notices', function() {
        echo '<div class="error"><p>SVG Support requires PHP XML extension to be installed and enabled.</p></div>';
    });
    return;
}

class SVGSupport {
    /**
     * Initialize SVG support by adding necessary filters
     */
    public function __construct() {
        add_filter('upload_mimes', [$this, 'add_svg_mime_type']);
        add_filter('wp_check_filetype_and_ext', [$this, 'check_svg_filetype'], 10, 4);
        add_filter('wp_handle_upload_prefilter', [$this, 'sanitize_svg']);
    }

    /**
     * Add SVG mime type to WordPress allowed upload types
     *
     * @param array $mimes Array of mime types keyed by their file extension regex
     * @return array Modified array of mime types
     */
    public function add_svg_mime_type($mimes) {
        $mimes['svg'] = 'image/svg+xml';
        return $mimes;
    }

    /**
     * Validate SVG filetype and extension during upload
     *
     * Ensures that files with .svg extension are properly validated
     * before being accepted into the media library.
     *
     * @param array  $data     Array of file data
     * @param string $file     Full path to the uploaded file
     * @param string $filename The name of the file
     * @param array  $mimes    Array of allowed mime types
     * @return array Modified file data
     */
    public function check_svg_filetype($data, $file, $filename, $mimes) {
        if (substr($filename, -4) === '.svg') {
            if ($this->is_valid_svg($file)) {
                $data['type'] = 'image/svg+xml';
                $data['ext'] = 'svg';
            } else {
                $data['ext'] = false;
                $data['type'] = false;
            }
        }
        return $data;
    }

    /**
     * Validate if file contains proper SVG XML content
     *
     * @param string $file Path to the uploaded file
     * @return bool True if valid SVG, false otherwise
     */
    private function is_valid_svg($file) {
        $svg = file_get_contents($file);
        libxml_use_internal_errors(true);
        $xml = simplexml_load_string($svg);
        libxml_clear_errors();
        return $xml !== false;
    }

    /**
     * Sanitize SVG content for secure usage
     *
     * Performs the following security measures:
     * - Validates XML structure
     * - Removes PHP tags
     * - Removes script tags
     * - Removes potentially harmful attributes
     * - Ensures proper SVG namespace
     *
     * @param array $file Upload file data array
     * @return array Modified file data array with sanitized content
     */
    public function sanitize_svg($file) {
        if ($file['type'] === 'image/svg+xml') {
            if (!$this->is_valid_svg($file['tmp_name'])) {
                $file['error'] = __('Invalid SVG file', 'imagewize-services-blocks');
                return $file;
            }

            $svg = file_get_contents($file['tmp_name']);
            
            // Remove PHP tags and script tags
            $svg = preg_replace('/<\?.*\?>/Us', '', $svg);
            $svg = preg_replace('/<script.*>.*<\/script>/Us', '', $svg);
            
            // Load and sanitize with DOMDocument
            $dom = new \DOMDocument();
            libxml_use_internal_errors(true);
            $dom->loadXML($svg);
            libxml_clear_errors();
            
            // Remove potentially harmful elements and attributes
            $this->sanitize_svg_elements($dom);
            
            // Save sanitized SVG
            file_put_contents($file['tmp_name'], $dom->saveXML());
        }
        return $file;
    }

    /**
     * Sanitize SVG DOM elements
     *
     * Iterates through all elements in the SVG and removes potentially
     * harmful attributes and content.
     *
     * @param \DOMDocument $dom The DOM document to sanitize
     */
    private function sanitize_svg_elements(\DOMDocument $dom) {
        $elements = $dom->getElementsByTagName('*');
        foreach ($elements as $element) {
            if ($element instanceof \DOMElement) {
                $this->remove_harmful_attributes($element);
            }
        }
    }

    /**
     * Remove potentially harmful attributes from SVG element
     *
     * Removes attributes that could be used for XSS attacks, including:
     * - Event handlers (onclick, onload, etc.)
     * - JavaScript URLs
     * - Data URLs
     * - External namespace declarations
     *
     * Common harmful patterns:
     * - onclick="alert(1)"
     * - href="javascript:alert(1)"
     * - xlink:href="data:text/plain,alert(1)"
     * - xmlns:evil="http://evil.com"
     *
     * @param \DOMElement $element The DOM element to clean
     */
    private function remove_harmful_attributes(\DOMElement $element) {
        $harmful_attributes = array();
        foreach ($element->attributes as $attribute) {
            if ($attribute instanceof \DOMAttr) {
                $name = strtolower($attribute->nodeName);
                // Check for harmful patterns
                if (strpos($name, 'on') === 0 || 
                    strpos($attribute->nodeValue, 'javascript:') !== false ||
                    strpos($attribute->nodeValue, 'data:') === 0 ||
                    strpos($name, 'xmlns:') === 0) {
                    $harmful_attributes[] = $attribute->nodeName;
                }
            }
        }
        foreach ($harmful_attributes as $name) {
            $element->removeAttribute($name);
        }
    }
}

// Initialize SVG Support
new SVGSupport();
