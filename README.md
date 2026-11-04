# Heatbox

A lightweight admin UI for WordPress plugin settings pages, used across all [Mapsteps](https://mapsteps.com) plugins. It's a single CSS file with no build step and no dependencies, and it follows the user's admin color scheme.

![Heatbox boxes](screenshots/boxes.png)

| Forms | Components |
|---|---|
| ![Heatbox forms](screenshots/forms.png) | ![Heatbox components](screenshots/components.png) |

## Showcase plugin

This repo is also a WordPress plugin. Activate **Heatbox** and open **Tools → Heatbox** to see every component with sample data. The markup in [`showcase/template.php`](showcase/template.php) is the reference for how to use each component. `showcase/` is demo only and is not copied into plugins.

## Usage

Copy `heatbox.css` into your plugin (e.g. `assets/css/`) and enqueue it on your settings page:

```php
wp_enqueue_style( 'heatbox', PLUGIN_URL . 'assets/css/heatbox.css', array(), PLUGIN_VERSION );
```

Add `heatbox-admin has-header` to the admin body class on that page. This removes the WP side padding so the header spans the full width:

```php
add_filter( 'admin_body_class', function ( $classes ) {
	return 'settings_page_my-plugin' === get_current_screen()->id ? $classes . ' heatbox-admin has-header' : $classes;
} );
```

## Theming

All colors, borders, radii and spacing are `--heatbox-*` custom properties (section 1 of `heatbox.css`). The accent color comes from the user's admin color scheme. Override any token per plugin:

```css
.my-plugin .heatbox-wrap {
	--heatbox-accent: #e63946;
	--heatbox-radius: 12px;
}
```

## Components

| Class | What |
|---|---|
| `.heatbox-wrap` | Page wrapper |
| `.heatbox-header`, `.logo-container`, `.title`, `.subtitle`, `.version` | Page header |
| `.heatbox-tab-nav` (`li.active`) | Tabs in the header |
| `.heatbox-container` (`-wide`, `-center`) | Max-width container |
| `.heatbox-column-container` > `.heatbox-main` + `.heatbox-sidebar` | Two columns |
| `.heatbox` > `h2` + `.heatbox-content` | Box (`.is-grouped` for several sections) |
| `.heatbox.is-locked` | Faded, non-clickable box content (e.g. PRO-only settings) |
| `.heatbox-badge` | Pill badge, e.g. PRO next to a title |
| `.heatbox-features` > `li` > `.dashicons` + `div` | Two-column feature list with check marks |
| `.heatbox .form-table`, `.setting-fields` > `.setting-field` | Settings |
| `.label.checkbox-label` / `.label.radio-label` + `.indicator` | Checkbox / radio |
| `.toggle-switch` > `input` + `.switch-track` > `.switch-thumb` | Toggle |
| `.button.is-loading`, `.button-larger`, `.button-full`, `.button > .dashicons` | Button modifiers |
| `.heatbox-cta` (`.primary`, `.secondary`), `.heatbox-cta-container.is-attached` | Call to action |
| `.heatbox-status-indicator` (`.is-loading`, `.is-done`) | Save status in a box title |
| `.tags-heatbox`, `.tags-wrapper code` | Copyable tags |
| `.heatbox-tooltip` > `.tooltip-content` (`.has-image`) | Tooltip |
| `.heatbox-divider`, `.heatbox-margin-top/-bottom`, `.row-disabled` | Utilities |

RTL is supported, mostly through logical properties. It works in all current browsers and uses `:has()` and `color-mix()`.

## License

GPL v2 or later.
