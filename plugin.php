<?php
/**
 * Plugin Name:       Block Context Example
 * Description:       A team members grid.
 * Requires at least: 5.7
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Chintan Hingarajiya
 * Text Domain:       team-members
 *
 * @package           block-context
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function blocks_course_team_members_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'blocks_course_team_members_block_init' );
