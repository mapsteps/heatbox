<?php
/**
 * Showcase page: every Heatbox component with sample data.
 *
 * Markup here doubles as the reference for plugins using Heatbox.
 *
 * @package Heatbox
 */

defined( 'ABSPATH' ) || die( "Can't access directly" );

$heatbox_img = HEATBOX_URL . 'showcase/';
?>

<div class="wrap heatbox-wrap">

	<!-- Header with tab navigation -->
	<div class="heatbox-header heatbox-has-tab-nav heatbox-margin-bottom">
		<div class="heatbox-container heatbox-container-center">
			<div class="logo-container">
				<div>
					<h1 class="title">
						Heatbox
						<span class="version"><?php echo esc_html( HEATBOX_VERSION ); ?></span>
					</h1>
					<p class="subtitle">The shared admin UI for Mapsteps plugins.</p>
				</div>
				<div>
					<img src="<?php echo esc_url( $heatbox_img . 'logo.svg' ); ?>" alt="">
				</div>
			</div>
			<nav aria-label="Sections">
				<ul class="heatbox-tab-nav">
					<li class="heatbox-tab-nav-item active" data-panel="boxes"><a href="#boxes">Boxes</a></li>
					<li class="heatbox-tab-nav-item" data-panel="forms"><a href="#forms">Forms</a></li>
					<li class="heatbox-tab-nav-item" data-panel="components"><a href="#components">Components</a></li>
				</ul>
			</nav>
		</div>
	</div>

	<!-- ===================================================================
	     Boxes
	     =================================================================== -->
	<div class="heatbox-admin-panel" data-panel="boxes" style="display: block;">
		<div class="heatbox-container heatbox-container-center heatbox-column-container">

			<div class="heatbox-main">

				<!-- WordPress places admin notices after this marker -->
				<hr class="wp-header-end">

				<!-- Simple box -->
				<div class="heatbox">
					<h2>Getting started</h2>
					<div class="heatbox-content">
						<p>Welcome to your plugin. Configure the options below, then save your changes. Settings take effect immediately.</p>
						<p class="description">A regular <code>.heatbox</code> with an <code>h2</code> and <code>.heatbox-content</code>.</p>
					</div>
				</div>

				<!-- Locked box with a badge + attached primary CTA (becomes the box footer) -->
				<div class="heatbox is-locked">
					<h2>Appearance <span class="heatbox-badge">PRO</span></h2>
					<table class="form-table" inert>
						<tr>
							<th scope="row">Accent color</th>
							<td><input type="text" class="regular-text" value="#3858e9"></td>
						</tr>
						<tr>
							<th scope="row">Max width</th>
							<td>
								<input type="number" class="small-text" value="1200"> px
								<p class="description">Default: 1200px</p>
							</td>
						</tr>
					</table>
				</div>
				<div class="heatbox-cta-container is-attached">
					<div class="heatbox-cta primary">
						<p>These settings are available in PRO.</p>
						<a href="#" class="button button-primary">Upgrade to PRO</a>
					</div>
				</div>

				<!-- Grouped box: several sections in one box -->
				<div class="heatbox is-grouped">
					<h2>General</h2>
					<div class="heatbox-content">
						<p>First section of a grouped box.</p>
					</div>
					<h2>Advanced</h2>
					<div class="heatbox-content">
						<p>Each <code>h2</code> after the first gets a top divider.</p>
					</div>
				</div>

				<!-- Two boxes side by side -->
				<div class="heatbox-columns">
					<div class="heatbox">
						<h2>Export</h2>
						<div class="heatbox-content">
							<p class="description">Two boxes next to each other: <code>.heatbox-columns</code>.</p>
						</div>
					</div>
					<div class="heatbox">
						<h2>Import</h2>
						<div class="heatbox-content">
							<p class="description">They stack on small screens.</p>
						</div>
					</div>
				</div>

				<!-- Feature list + attached container holding free content -->
				<div class="heatbox">
					<h2>Go PRO <span class="heatbox-badge">PRO</span></h2>
					<div class="heatbox-content">
						<ul class="heatbox-features">
							<li>
								<span class="dashicons dashicons-yes"></span>
								<div>
									<h3>Advanced settings</h3>
									<p class="description">Unlock additional options to fine-tune every detail.</p>
								</div>
							</li>
							<li>
								<span class="dashicons dashicons-yes"></span>
								<div>
									<h3>Priority support</h3>
									<p class="description">Get help from the developers directly, usually within a day.</p>
								</div>
							</li>
							<li>
								<span class="dashicons dashicons-yes"></span>
								<div>
									<h3>Unlimited sites</h3>
									<p class="description">Use the plugin on as many websites as you like.</p>
								</div>
							</li>
							<li>
								<span class="dashicons dashicons-yes"></span>
								<div>
									<h3>Import &amp; export</h3>
									<p class="description">Move your settings between sites in seconds.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="heatbox-cta-container is-attached">
					<p>Upgrade to <strong>PRO</strong> to get all features and priority support.</p>
					<a href="#" class="button button-primary button-larger">Upgrade to PRO</a>
				</div>

				<!-- Standalone CTAs -->
				<div class="heatbox-cta primary heatbox-margin-bottom">
					<p>Primary CTA, standalone.</p>
					<a href="#" class="button button-primary">Primary action</a>
				</div>

				<div class="heatbox-cta secondary heatbox-margin-bottom">
					<p>Secondary CTA, standalone.</p>
					<a href="#" class="button">Secondary action</a>
				</div>

				<div class="heatbox-cta heatbox-margin-bottom">
					<p>Default CTA, no modifier.</p>
					<a href="#" class="button">Action</a>
				</div>

			</div>

			<div class="heatbox-sidebar">

				<div class="heatbox">
					<h2>Documentation</h2>
					<div class="heatbox-content">
						<p class="description">Not sure how something works? The documentation is a great place to start.</p>
						<a href="#" class="button">Documentation</a>
					</div>
				</div>

				<div class="heatbox">
					<h2>Leave a review</h2>
					<div class="heatbox-content">
						<p class="description">Enjoying the plugin? Help spread the word with a review.</p>
						<a href="#" class="button">Sure, you deserve it!</a>
					</div>
				</div>

				<!-- Box with a full-bleed image on top -->
				<div class="heatbox">
					<a href="#"><img src="<?php echo esc_url( $heatbox_img . 'placeholder.svg' ); ?>" alt=""></a>
					<div class="heatbox-content">
						<h3>Another plugin</h3>
						<p class="description">A box starting with an image gets rounded top corners.</p>
						<a href="#" class="button">Learn more</a>
					</div>
				</div>

			</div>

		</div>

		<!-- Products -->
		<div class="heatbox-container heatbox-container-wide heatbox-container-center heatbox-products">
			<h2>Check out our other products</h2>
			<ul class="products">
				<?php foreach ( array( 'First plugin', 'Second plugin', 'A theme' ) as $heatbox_product ) : ?>
					<li class="heatbox">
						<a href="#" aria-hidden="true" tabindex="-1"><img src="<?php echo esc_url( $heatbox_img . 'placeholder.svg' ); ?>" alt=""></a>
						<div class="heatbox-content">
							<h3><?php echo esc_html( $heatbox_product ); ?></h3>
							<p class="subheadline">A short tagline.</p>
							<p>One or two sentences about the product.</p>
							<a href="#" class="button">Learn more</a>
						</div>
					</li>
				<?php endforeach; ?>
			</ul>
			<p class="credit">Made with ❤ in Torsby, Sweden</p>
		</div>
	</div>

	<!-- ===================================================================
	     Forms
	     =================================================================== -->
	<div class="heatbox-admin-panel" data-panel="forms">
		<div class="heatbox-container heatbox-container-center">

			<form onsubmit="return false;">

				<div class="heatbox">
					<h2>Settings table</h2>
					<table class="form-table">
						<tr>
							<th scope="row">
								Text field
								<p class="description">A description under the label.</p>
							</th>
							<td><input type="text" class="regular-text" placeholder="Placeholder"></td>
						</tr>
						<tr>
							<th scope="row">Select</th>
							<td>
								<select>
									<option>Option one</option>
									<option>Option two</option>
								</select>
							</td>
						</tr>
						<tr>
							<th scope="row">Checkboxes</th>
							<td>
								<div class="setting-fields">
									<div class="setting-field">
										<label class="label checkbox-label">
											Checked
											<input type="checkbox" checked>
											<div class="indicator"></div>
										</label>
									</div>
									<div class="setting-field">
										<label class="label checkbox-label">
											Unchecked
											<input type="checkbox">
											<div class="indicator"></div>
										</label>
									</div>
									<div class="setting-field">
										<label class="label checkbox-label">
											Disabled
											<input type="checkbox" disabled>
											<div class="indicator"></div>
										</label>
									</div>
									<div class="setting-field">
										<label class="label checkbox-label">
											Disabled &amp; checked
											<input type="checkbox" checked disabled>
											<div class="indicator"></div>
										</label>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<th scope="row">Radio buttons</th>
							<td>
								<label class="label radio-label">
									Option A
									<input type="radio" name="heatbox_demo_radio" checked>
									<div class="indicator"></div>
								</label>
								<label class="label radio-label">
									Option B
									<input type="radio" name="heatbox_demo_radio">
									<div class="indicator"></div>
								</label>
								<label class="label radio-label">
									Disabled
									<input type="radio" name="heatbox_demo_radio" disabled>
									<div class="indicator"></div>
								</label>
							</td>
						</tr>
						<tr>
							<th scope="row">Toggle switches</th>
							<td>
								<div class="setting-fields">
									<div class="setting-field">
										<label class="toggle-switch">
											<input type="checkbox" checked>
											<span class="switch-track"><span class="switch-thumb"></span></span>
										</label>
									</div>
									<div class="setting-field">
										<label class="toggle-switch">
											<input type="checkbox">
											<span class="switch-track"><span class="switch-thumb"></span></span>
										</label>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<label for="heatbox-demo-width">Number with a unit</label>
								<p class="description">Uses <code>.small-text</code> + <code>.heatbox-unit</code>.</p>
							</th>
							<td><input type="number" id="heatbox-demo-width" class="small-text" value="320" min="0"> <span class="heatbox-unit">px</span></td>
						</tr>
						<tr>
							<th scope="row">
								<label for="heatbox-demo-color">Color picker</label>
								<p class="description">WP's <code>wp-color-picker</code>.</p>
							</th>
							<td><input type="text" id="heatbox-demo-color" class="heatbox-demo-color" value="#2271b1" data-default-color="#2271b1"></td>
						</tr>
						<tr class="row-disabled">
							<th scope="row">
								Disabled row
								<p class="description">Uses <code>.row-disabled</code>.</p>
							</th>
							<td><input type="text" class="regular-text" value="Read only" readonly></td>
						</tr>
					</table>
				</div>

				<div class="heatbox-form-footer">
					<div>
						<button type="submit" class="button button-primary button-larger">Save Changes</button>
						<span class="heatbox-notice heatbox-demo-notice" role="status"></span>
					</div>
					<div>
						<button type="button" class="button button-larger is-destructive heatbox-demo-reset">Reset Settings</button>
					</div>
				</div>

			</form>

		</div>
	</div>

	<!-- ===================================================================
	     Components
	     =================================================================== -->
	<div class="heatbox-admin-panel" data-panel="components">
		<div class="heatbox-container heatbox-container-center heatbox-column-container">

			<div class="heatbox-main">

				<!-- Buttons -->
				<div class="heatbox">
					<h2>Buttons</h2>
					<div class="heatbox-content">
						<p>
							<a href="#" class="button">Default</a>
							<a href="#" class="button button-primary">Primary</a>
							<a href="#" class="button button-primary button-larger">Larger</a>
							<button type="button" class="button button-primary heatbox-demo-loading">Click to load</button>
						</p>
						<p><a href="#" class="button is-destructive">Destructive</a></p>
						<p><a href="#" class="button button-full">Full width</a></p>
						<p>
							<label class="screen-reader-text" for="heatbox-demo-file">Select a file</label>
							<input type="file" id="heatbox-demo-file">
						</p>
					</div>
				</div>

				<!-- Badges -->
				<div class="heatbox">
					<h2>Badges <span class="heatbox-badge">PRO</span></h2>
					<div class="heatbox-content">
						<p>
							<span class="heatbox-badge is-success">Active</span>
							<span class="heatbox-badge is-warning">Expires soon</span>
							<span class="heatbox-badge is-error">Failed</span>
							<span class="heatbox-badge is-neutral">Inactive</span>
						</p>
						<p class="description">Add <code>.is-success</code>, <code>.is-warning</code>, <code>.is-error</code> or <code>.is-neutral</code> to <code>.heatbox-badge</code>.</p>
					</div>
				</div>

				<!-- Status indicator -->
				<div class="heatbox">
					<h2>
						Status indicator
						<span class="heatbox-status-indicator"></span>
					</h2>
					<div class="heatbox-content">
						<p class="description">Shown in a box title while saving. Click to cycle loading → done.</p>
						<button type="button" class="button heatbox-demo-status">Simulate save</button>
					</div>
				</div>

				<!-- Tags -->
				<div class="heatbox tags-heatbox">
					<h2>
						Placeholder tags
						<span class="action-status">Copied!</span>
					</h2>
					<div class="heatbox-content">
						<p class="description">Click a tag to copy it.</p>
						<div class="tags-wrapper">
							<code>{site_name}</code>
							<code>{site_url}</code>
							<code>{user_login}</code>
							<code>{user_email}</code>
							<code>{first_name}</code>
						</div>
					</div>
				</div>

				<!-- Steps + copy field -->
				<div class="heatbox">
					<h2>Steps</h2>
					<div class="heatbox-content">
						<ol class="heatbox-steps">
							<li>
								<h3>Add the shortcode</h3>
								<p class="description">Paste it into any page or post.</p>
								<div class="heatbox-copy">
									<code>[my-shortcode id="42"]</code>
									<button type="button" class="button heatbox-demo-copy">Copy</button>
								</div>
							</li>
							<li>
								<h3>Save and preview</h3>
								<p class="description">Each <code>li</code> of <code>.heatbox-steps</code> gets a number. Code with a button: <code>.heatbox-copy</code>.</p>
							</li>
						</ol>
					</div>
				</div>

				<!-- Tooltips -->
				<div class="heatbox">
					<h2>Tooltips</h2>
					<div class="heatbox-content">
						<p>
							Hover the icons:
							<span class="heatbox-tooltip" tabindex="0">
								<span class="dashicons dashicons-editor-help"></span>
								<span class="tooltip-content">A plain tooltip with a short explanation.</span>
							</span>
							<span class="heatbox-tooltip has-image" tabindex="0">
								<span class="dashicons dashicons-format-image"></span>
								<span class="tooltip-content">
									<img src="<?php echo esc_url( $heatbox_img . 'placeholder.svg' ); ?>" alt="">
									<span>A tooltip with an image on the side.</span>
								</span>
							</span>
						</p>
					</div>
				</div>

				<div class="heatbox-divider"></div>

				<p class="description">Above: <code>.heatbox-divider</code>.</p>

			</div>

			<div class="heatbox-sidebar">

				<div class="heatbox">
					<h2>Typography</h2>
					<div class="heatbox-content">
						<h3>Heading 3 <span class="heatbox-badge">New</span></h3>
						<p>Body text in a box. <a href="#">A link</a>.</p>
						<p class="description">Description text.</p>
						<p><code>inline code</code></p>
					</div>
				</div>

				<div class="heatbox">
					<h2>Buttons with icons</h2>
					<div class="heatbox-content">
						<p>
							<a href="#" class="button"><span class="dashicons dashicons-book"></span> Documentation</a>
							<a href="#" class="button button-primary"><span class="dashicons dashicons-download"></span> Export</a>
						</p>
						<p>
							<a href="#" class="button button-primary button-larger"><span class="dashicons dashicons-star-filled"></span> Upgrade</a>
						</p>
					</div>
				</div>

			</div>

		</div>
	</div>

</div>
