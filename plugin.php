<?php
/**
 * Plugin Name:       Imagewize Services Blocks
 * Description:       A collection of blocks featuring a Services Container block for creating service sections and an SVG block for displaying customizable SVG icons with background colors and styling options.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Imagewize
 * Author URI:        https://imagewize.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       imagewize-services-blocks
 *
 * @package Imagewize
 */

if (!defined('ABSPATH')) {
    exit;
}

// Include SVG support functionality
require_once __DIR__ . '/src/svg-block/svg-support.php';

/**
 * Registers blocks using the metadata loaded from the `block.json` files.
 */
function imagewize_register_blocks() {
    register_block_type(__DIR__ . '/build/services-block');
    register_block_type(__DIR__ . '/build/svg-block');
}
add_action('init', 'imagewize_register_blocks');
