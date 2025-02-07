<?php
/**
 * Plugin Name: Imagewize Services Blocks
 * Description: A collection of blocks featuring a Services Container block for creating service sections and an SVG block.
 * Version: 0.1.0
 * Requires at least: 6.7
 * Requires PHP: 7.4
 * Author: Imagewize
 * License: GPL-2.0-or-later
 * Text Domain: imagewize-services-block
 *
 * @package Imagewize
 */

if (!defined('ABSPATH')) {
    exit;
}

define('SERVICES_BLOCK_DIR', untrailingslashit(plugin_dir_path(__FILE__)));

class Imagewize_Services_Block {
    const VERSION = '0.1.0';

    public static function register() {
        add_action('init', [self::class, 'register_blocks']);
    }

    public static function register_blocks() {
        register_block_type(SERVICES_BLOCK_DIR . '/build/svg-block');
        register_block_type(SERVICES_BLOCK_DIR . '/build/services-block');
    }
}

Imagewize_Services_Block::register();
