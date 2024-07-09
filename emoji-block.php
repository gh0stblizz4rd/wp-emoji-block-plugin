<?php
/**
 * Plugin Name:       Emoji Block
 * Description:       Block that displays users chosen emoji on the frontend of the site
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0
 * Author:            gh0stblizz4rd
 * Author URI: 	      https://github.com/gh0stblizz4rd
 * License:           GPL-2.0
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       emoji-block
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
function create_block_emoji_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_emoji_block_block_init' );
