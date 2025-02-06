<?php
/**
 * Plugin Name:       Services Block
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       services-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_services_block_block_init() {
    register_block_type( __DIR__ . '/build/services-block' );
}
add_action( 'init', 'create_block_services_block_block_init' );

// Allow SVG mime type
function services_block_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'services_block_mime_types');

// Add SVG to allowed upload types
function services_block_file_types_to_uploads($file) {
    if ($file['type'] === 'image/svg+xml') {
        $file['ext'] = 'svg';
        $file['type'] = 'image/svg+xml';
    }
    return $file;
}
add_filter('wp_check_filetype_and_ext', 'services_block_file_types_to_uploads', 10, 4);

// Sanitize SVG during upload
function services_block_sanitize_svg($file) {
    if ($file['type'] === 'image/svg+xml') {
        // Check if file is valid SVG
        $svg = file_get_contents($file['tmp_name']);
        
        // Basic security: Remove PHP tags and script tags
        $svg = preg_replace('/<\?.*\?>/Us', '', $svg);
        $svg = preg_replace('/<script.*>.*<\/script>/Us', '', $svg);
        
        // Load SVG into DOMDocument
        $dom = new DOMDocument();
        libxml_use_internal_errors(true);
        $dom->loadXML($svg);
        libxml_clear_errors();
        
        // Remove potentially harmful attributes
        $elements = $dom->getElementsByTagName('*');
        foreach ($elements as $element) {
            if ($element instanceof DOMElement) {
                $attributes_to_remove = array();
                foreach ($element->attributes as $attribute) {
                    if ($attribute instanceof DOMAttr) {
                        $name = strtolower($attribute->nodeName);
                        // Remove event handlers and javascript
                        if (strpos($name, 'on') === 0 || 
                            strpos($attribute->nodeValue, 'javascript:') !== false ||
                            strpos($attribute->nodeValue, 'data:') === 0) {
                            $attributes_to_remove[] = $attribute->nodeName;
                        }
                    }
                }
                // Remove flagged attributes
                foreach ($attributes_to_remove as $name) {
                    $element->removeAttribute($name);
                }
            }
        }
        
        // Save sanitized SVG back to file
        file_put_contents($file['tmp_name'], $dom->saveXML());
    }
    return $file;
}
add_filter('wp_handle_upload_prefilter', 'services_block_sanitize_svg');

// Validate SVG mime type
function services_block_validate_svg($wp_filetype, $file, $filename, $mimes) {
    if ($wp_filetype['type'] === 'image/svg+xml') {
        // Check if file is valid XML
        $svg = file_get_contents($file);
        if (@simplexml_load_string($svg) === false) {
            $wp_filetype['ext'] = '';
            $wp_filetype['type'] = '';
        }
    }
    return $wp_filetype;
}
add_filter('wp_check_filetype_and_ext', 'services_block_validate_svg', 10, 4);
