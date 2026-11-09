<?php
/**
 * Plugin Name: Heatbox
 * Description: Showcase of the Heatbox admin UI used across Mapsteps plugins. Adds Tools → Heatbox with every component and sample data.
 * Version: 1.1.0
 * Author: David Vongries
 * Author URI: https://mapsteps.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: heatbox
 *
 * @package Heatbox
 */

defined( 'ABSPATH' ) || die( "Can't access directly" );

define( 'HEATBOX_VERSION', '1.1.0' );
define( 'HEATBOX_DIR', plugin_dir_path( __FILE__ ) );
define( 'HEATBOX_URL', plugin_dir_url( __FILE__ ) );

/**
 * Register the showcase page under Tools.
 */
function heatbox_showcase_menu() {
	add_management_page( 'Heatbox', 'Heatbox', 'manage_options', 'heatbox', 'heatbox_showcase_page' );
}
add_action( 'admin_menu', 'heatbox_showcase_menu' );

/**
 * Render the showcase page.
 */
function heatbox_showcase_page() {
	require HEATBOX_DIR . 'showcase/template.php';
}

/**
 * Enqueue Heatbox and the showcase script on the showcase page only.
 *
 * @param string $hook The current admin page hook.
 */
function heatbox_showcase_assets( $hook ) {
	if ( 'tools_page_heatbox' !== $hook ) {
		return;
	}

	// Cache-bust on every change while working on the stylesheet.
	$css_version = HEATBOX_VERSION . '.' . filemtime( HEATBOX_DIR . 'heatbox.css' );

	wp_enqueue_style( 'wp-color-picker' );
	wp_enqueue_style( 'heatbox', HEATBOX_URL . 'heatbox.css', array( 'wp-color-picker' ), $css_version );
	wp_enqueue_script( 'heatbox-showcase', HEATBOX_URL . 'showcase/showcase.js', array( 'wp-color-picker' ), HEATBOX_VERSION, true );
}
add_action( 'admin_enqueue_scripts', 'heatbox_showcase_assets' );

/**
 * Add the Heatbox body classes on the showcase page.
 *
 * @param string $classes The admin body classes.
 *
 * @return string
 */
function heatbox_showcase_body_class( $classes ) {
	$screen = get_current_screen();

	if ( $screen && 'tools_page_heatbox' === $screen->id ) {
		$classes .= ' heatbox-admin has-header';
	}

	return $classes;
}
add_filter( 'admin_body_class', 'heatbox_showcase_body_class' );
