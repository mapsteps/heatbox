// Generates alternatives/heatbox-alt-{1,2,3}.css from ../heatbox.css.
//
// Each output = heatbox.css with in-place rule changes + new components inserted before "/* RTL */".
// Every change must match exactly once, so the build fails loudly if heatbox.css drifts.
//
// Usage: node alternatives/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = path.dirname(fileURLToPath(import.meta.url));
// Normalize line endings so the exact-match changes work on CRLF checkouts too.
const base = fs.readFileSync(path.join(outDir, '..', 'heatbox.css'), 'utf8').replace(/\r\n/g, '\n');

const accent = 'var(--wp-admin-theme-color, #3858e9)';
const accentSoft = `color-mix(in srgb, ${accent} 8%, #fff)`;

// ---------------------------------------------------------------------------
// Changes to existing rules.
// ---------------------------------------------------------------------------

const headerChanges = [
	[
		`.heatbox-header {
	background: #fff;
	padding-top: 40px;
	border-bottom: 1px solid #ddd;
}`,
		`.heatbox-header {
	background: #fff;
	padding-top: 24px;
	border-bottom: 1px solid #e0e0e0;
}`,
	],
	[
		`.heatbox-header .logo-container {
	display: flex;
	align-items: center;
	margin-bottom: 40px;
}`,
		`.heatbox-header .logo-container {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	margin-bottom: 24px;
}`,
	],
	[
		`.heatbox-header .logo-container div {
	width: 50%;
}`,
		`.heatbox-header .logo-container > div {
	width: auto;
}`,
	],
	[
		`.heatbox-header .logo-container img {
	width: 100px;
	height: auto;
	float: right;
}`,
		`.heatbox-header .logo-container img {
	display: block;
	width: 44px;
	height: auto;
	float: none;
}`,
	],
	[
		`.heatbox-wrap .title {
	margin: 0;
	padding: 0;
	font-size: 34px;
	font-weight: 700;
	line-height: 1;
}`,
		`.heatbox-wrap .title {
	margin: 0;
	padding: 0;
	color: #1e1e1e;
	font-size: 20px;
	font-weight: 600;
	line-height: 1.3;
}`,
	],
	[
		`.heatbox-wrap .subtitle {
	margin: 20px 0 0 0;
	padding: 0;
	font-size: 20px;
	line-height: 1;
}`,
		`.heatbox-wrap .subtitle {
	margin: 4px 0 0 0;
	padding: 0;
	color: #646970;
	font-size: 13px;
	line-height: 1.5;
}`,
	],
	[
		`.heatbox-wrap .version {
	font-size: 45%;
	opacity: 0.6;
	font-weight: 600;
	background: #ccc;
	border-radius: 5px;
	padding: 5px 12px;
	line-height: 1;
	vertical-align: middle;
	margin: 0 5px;
}`,
		`.heatbox-wrap .version {
	font-size: 12px;
	font-weight: 500;
	color: #646970;
	background: #f0f0f1;
	border-radius: 20px;
	padding: 2px 8px;
	line-height: 1.5;
	vertical-align: middle;
	margin: 0 5px;
}`,
	],
];

const boxChanges = [
	[
		`.heatbox {
	background: #fff;
	margin-bottom: 20px;
	border: 1px solid #ddd;
}`,
		`.heatbox {
	background: #fff;
	margin-bottom: 20px;
	border: 1px solid #e0e0e0;
	border-radius: 8px;
}`,
	],
	[
		`.heatbox h2 {
	border-bottom: 1px solid #ddd;
	margin: 0;
	padding: 20px;
}`,
		`.heatbox h2 {
	border-bottom: 1px solid #f0f0f1;
	margin: 0;
	padding: 16px 20px;
	font-size: 15px;
}`,
	],
	[
		`.heatbox-cta-container.is-attached {
	padding: 20px;
	background: #fff;
	margin-top: -20px;
	margin-bottom: 20px;
	border: 1px solid #ddd;
	border-top: none;
}`,
		`.heatbox-cta-container.is-attached {
	padding: 20px;
	background: #fff;
	margin-top: -20px;
	margin-bottom: 20px;
	border: 1px solid #e0e0e0;
	border-top: none;
	border-radius: 0 0 8px 8px;
}

.heatbox:has(+ .heatbox-cta-container.is-attached) {
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}`,
	],
	[
		`	font-weight: 700;
	border: 1px solid #ddd;
	background: #fff;
}`,
		`	font-weight: 700;
	border: 1px solid #e0e0e0;
	border-radius: 6px;
	background: #fff;
}`,
	],
	[
		`.heatbox-cta.primary {
	background: #197cff;
	color: #fff;
	border: none;
}`,
		`.heatbox-cta.primary {
	background: ${accentSoft};
	color: #1e1e1e;
	font-weight: 400;
	border: none;
}`,
	],
	[
		`.heatbox-cta.secondary {
	background: #f1f1f1;
}`,
		`.heatbox-cta.secondary {
	background: #f6f7f7;
	font-weight: 400;
}`,
	],
	[
		`.heatbox-cta.primary .button {
	background: rgba(0, 45, 96, 0.5);
}

.heatbox-cta.primary .button:hover {
	background: rgba(0, 45, 96, 0.6);
}`,
		`.heatbox-cta.primary .button {
	font-weight: 600;
}`,
	],
];

// ---------------------------------------------------------------------------
// New components.
// ---------------------------------------------------------------------------

const headerComponents = `/* Brand (logo + title) */
.heatbox-header .heatbox-brand {
	display: flex;
	align-items: center;
	gap: 14px;
}

/* Header actions */
.heatbox-header .heatbox-header-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}
`;

const common = `/* Container - Narrow */
.heatbox-container-narrow {
	max-width: 1000px;
}

/* Badge */
.heatbox-badge {
	display: inline-block;
	padding: 2px 7px;
	border-radius: 4px;
	background: #f0f0f1;
	color: #1e1e1e;
	font-size: 10px;
	font-weight: 600;
	letter-spacing: 0.04em;
	line-height: 1.4;
	text-transform: uppercase;
	vertical-align: middle;
}

.heatbox-badge.is-pro {
	background: #00a32a;
	color: #fff;
}

/* Field */
.heatbox .heatbox-field .field-label {
	display: block;
	margin-bottom: 4px;
	font-weight: 600;
}

.heatbox .heatbox-field .description {
	margin: 4px 0 0 0;
}

.heatbox-inline-fields {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 8px 24px;
	margin: 12px 0;
}

.heatbox-inline-fields > label {
	display: inline-flex;
	align-items: center;
	gap: 6px;
}

/* Code */
.heatbox-code {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 8px;
	padding: 6px 6px 6px 12px;
	background: #f6f7f7;
	border: 1px solid #e0e0e0;
	border-radius: 6px;
}

.heatbox-code code {
	flex: 1;
	min-width: 0;
	padding: 0;
	background: transparent;
	font-size: 13px;
	white-space: pre-wrap;
	word-break: break-all;
}

.heatbox-code .button {
	flex: 0 0 auto;
}

/* Inner call to action */
.heatbox > .heatbox-cta {
	border: none;
	border-top: 1px solid #e0e0e0;
	border-radius: 0 0 8px 8px;
}

/* Credit */
.heatbox-credit {
	margin: 20px 0;
	text-align: center;
	opacity: 0.5;
}
`;

const features = `/* Features */
.heatbox-features {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 20px 24px;
	margin: 0;
}

.heatbox-features.is-3-col {
	grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media screen and (max-width: 782px) {
	.heatbox-features,
	.heatbox-features.is-3-col {
		grid-template-columns: 1fr;
	}
}

.heatbox-features li {
	display: flex;
	gap: 12px;
	margin: 0;
}

.heatbox-features .dashicons {
	flex: 0 0 32px;
	width: 32px;
	height: 32px;
	padding-top: 6px;
	border-radius: 6px;
	background: ${accentSoft};
	color: ${accent};
	font-size: 20px;
	text-align: center;
}

.heatbox .heatbox-features h3 {
	margin: 0 0 2px 0;
	font-size: 13px;
}

.heatbox .heatbox-features p {
	margin: 0;
	color: #646970;
}

/* Product list */
.heatbox-product-list {
	margin: 0;
}

.heatbox-product-list li {
	display: flex;
	align-items: center;
	gap: 12px;
	margin: 0;
	padding: 8px 0;
}

.heatbox-product-list img {
	flex: 0 0 56px;
	width: 56px;
	height: 40px;
	object-fit: cover;
	border-radius: 4px;
}

.heatbox-product-list a {
	display: block;
	font-weight: 600;
	text-decoration: none;
}

.heatbox-product-list span {
	color: #646970;
	font-size: 12px;
}
`;

const steps = `/* Steps */
.heatbox-steps {
	margin: 0;
	padding: 0;
	list-style: none;
	counter-reset: heatbox-step;
}

.heatbox-steps > li {
	position: relative;
	margin: 0;
	padding: 0 0 20px 44px;
	counter-increment: heatbox-step;
}

.heatbox-steps > li + li {
	padding-top: 20px;
	border-top: 1px solid #f0f0f1;
}

.heatbox-steps > li:last-child {
	padding-bottom: 0;
}

.heatbox-steps > li::before {
	content: counter(heatbox-step);
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 28px;
	height: 28px;
	border-radius: 50%;
	background: ${accentSoft};
	color: ${accent};
	font-weight: 600;
}

.heatbox-steps > li + li::before {
	top: 20px;
}

.heatbox .heatbox-steps h3 {
	margin: 4px 0 12px 0;
	font-size: 14px;
}
`;

const tabbed = `/* Split */
.heatbox-split {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
}

.heatbox-split > .heatbox-content + .heatbox-content {
	border-left: 1px solid #f0f0f1;
}

@media screen and (max-width: 782px) {
	.heatbox-split {
		grid-template-columns: 1fr;
	}

	.heatbox-split > .heatbox-content + .heatbox-content {
		border-left: none;
		border-top: 1px solid #f0f0f1;
	}
}

/* Tip */
.heatbox-tip {
	display: flex;
	gap: 8px;
	margin-top: 16px;
	padding: 10px 12px;
	background: #fcf9e8;
	border-radius: 6px;
}

.heatbox .heatbox-tip p {
	margin: 0;
}

.heatbox-tip .dashicons {
	flex: none;
	color: #996800;
}

/* Locked */
.heatbox-locked {
	position: relative;
	overflow: hidden;
	min-height: 320px;
}

.heatbox-locked .locked-content {
	filter: blur(1.5px);
	opacity: 0.55;
	pointer-events: none;
	user-select: none;
}

.heatbox-locked .locked-overlay {
	position: absolute;
	inset: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background: rgba(255, 255, 255, 0.82);
	text-align: center;
}

.heatbox-locked .locked-overlay .dashicons-lock {
	width: 40px;
	height: 40px;
	padding-top: 8px;
	border-radius: 50%;
	background: ${accentSoft};
	color: ${accent};
}

.heatbox-locked .locked-overlay h2 {
	margin: 12px 0 4px 0;
	padding: 0;
	border: none;
	font-size: 16px;
}

.heatbox-locked .locked-overlay p {
	margin: 0 0 16px 0;
	color: #646970;
}

/* Tiles */
.heatbox-tiles {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 20px;
}

@media screen and (max-width: 782px) {
	.heatbox-tiles {
		grid-template-columns: 1fr;
	}
}

.heatbox-tiles > .heatbox {
	display: block;
	margin: 0;
	padding: 20px;
	color: inherit;
	text-decoration: none;
	transition: border-color 0.15s;
}

.heatbox-tiles > .heatbox:hover,
.heatbox-tiles > .heatbox:focus {
	border-color: ${accent};
	color: inherit;
}

.heatbox-tiles .dashicons {
	width: 24px;
	height: 24px;
	color: ${accent};
	font-size: 24px;
}

.heatbox-tiles .heatbox h3 {
	margin: 10px 0 4px 0;
	font-size: 14px;
}

.heatbox-tiles .heatbox p {
	margin: 0;
	color: #646970;
}

/* Section title */
.heatbox-wrap .heatbox-section-title {
	margin: 32px 0 12px 0;
	font-size: 14px;
}

.heatbox-product-list.is-row {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 20px;
}

.heatbox-product-list.is-row li.heatbox {
	margin: 0;
	padding: 12px;
}

@media screen and (max-width: 782px) {
	.heatbox-product-list.is-row {
		grid-template-columns: 1fr;
	}
}
`;

const hero = `/* Hero */
.heatbox-hero {
	background: linear-gradient(135deg, #1d2327 0%, #22296b 100%);
	color: #fff;
}

.heatbox-hero > .heatbox-container {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 40px;
	align-items: center;
	padding-top: 40px;
	padding-bottom: 40px;
}

@media screen and (max-width: 1080px) {
	.heatbox-hero > .heatbox-container {
		grid-template-columns: 1fr;
	}
}

.heatbox-hero .heatbox-brand {
	display: flex;
	align-items: center;
	gap: 8px;
	margin: 0 0 12px 0;
	color: #c3c4c7;
	font-weight: 500;
}

.heatbox-hero .heatbox-brand img {
	width: 28px;
	height: 28px;
}

.heatbox-hero .version {
	background: rgba(255, 255, 255, 0.12);
	color: #dcdcde;
}

.heatbox-hero .headline {
	display: block;
	margin: 0 0 24px 0;
	font-size: 30px;
	font-weight: 600;
	line-height: 1.25;
}

.heatbox-hero .heatbox {
	margin: 0;
	border: none;
	color: #1e1e1e;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

/* Hero panel */
.heatbox-hero-panel {
	margin-top: 16px;
	padding: 14px 16px;
	background: rgba(255, 255, 255, 0.08);
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 8px;
}

.heatbox-hero-panel .panel-title {
	display: flex;
	align-items: center;
	gap: 8px;
	margin: 0 0 10px 0;
	font-weight: 600;
}

.heatbox-hero-panel .panel-controls {
	display: flex;
	flex-wrap: wrap;
	gap: 8px 20px;
}

.heatbox-hero-panel .panel-controls label {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	color: #dcdcde;
}

.heatbox-hero-panel input[type="color"] {
	width: 32px;
	height: 24px;
	padding: 0;
	border: 1px solid rgba(255, 255, 255, 0.3);
	background: none;
	cursor: pointer;
}

.heatbox-hero-panel input[type="range"] {
	width: 100px;
	accent-color: #fff;
}

.heatbox-hero-panel .panel-note {
	margin: 10px 0 0 0;
	color: #a7aaad;
	font-size: 12px;
}

.heatbox-hero-panel .panel-note a {
	color: #fff;
}

/* Browser mockup */
.heatbox-browser {
	overflow: hidden;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.heatbox-browser .browser-bar {
	display: flex;
	gap: 6px;
	padding: 10px 12px;
	background: #f0f0f1;
}

.heatbox-browser .browser-bar i {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #c3c4c7;
}

.heatbox-browser .browser-page {
	position: relative;
	aspect-ratio: 16 / 9;
	padding: 24px;
}

.heatbox-browser .browser-skeleton b {
	display: block;
	height: 10px;
	margin-bottom: 10px;
	border-radius: 5px;
	background: #f0f0f1;
}

.heatbox-browser .browser-skeleton b:first-child {
	width: 60%;
	height: 16px;
}

.heatbox-browser .browser-skeleton b:nth-child(3) {
	width: 80%;
}

.heatbox-browser .browser-overlay {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}

.heatbox-browser .browser-overlay[hidden] {
	display: none;
}

.heatbox-browser .browser-media {
	display: flex;
	align-items: center;
	justify-content: center;
	aspect-ratio: 16 / 9;
	max-height: 85%;
	border-radius: 2px;
	background: linear-gradient(135deg, #3c434a, #101517);
	transition: width 0.15s;
}

.heatbox-browser .browser-media .dashicons {
	width: 40px;
	height: 40px;
	color: rgba(255, 255, 255, 0.8);
	font-size: 40px;
}

.heatbox-browser .browser-close {
	position: absolute;
	top: 6px;
	right: 10px;
	padding: 0;
	border: none;
	background: none;
	color: #fff;
	font-size: 22px;
	line-height: 1;
	cursor: pointer;
}

/* Comparison table */
.heatbox-table-scroll {
	overflow-x: auto;
}

.heatbox-compare {
	width: 100%;
	border-collapse: collapse;
}

.heatbox-compare th,
.heatbox-compare td {
	padding: 10px 12px;
	border-bottom: 1px solid #f0f0f1;
	text-align: left;
}

.heatbox-compare td,
.heatbox-compare thead th:not(:first-child) {
	width: 100px;
	text-align: center;
}

.heatbox-compare tbody th {
	font-weight: 400;
}

.heatbox-compare .is-highlighted {
	background: ${accentSoft};
}

.heatbox-compare thead .is-highlighted {
	border-radius: 6px 6px 0 0;
	color: ${accent};
}

.heatbox-compare .dashicons-yes-alt {
	color: #00a32a;
}

.heatbox-compare .is-missing {
	color: #a7aaad;
}

/* Footer links */
.heatbox-footer-links {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 8px 20px;
}

.heatbox-footer-links a {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	text-decoration: none;
}

.heatbox-footer-links .dashicons {
	width: 16px;
	height: 16px;
	font-size: 16px;
}

.heatbox-footer-links .spacer {
	flex: 1;
}

.heatbox-footer-links .label {
	color: #646970;
}
`;

// ---------------------------------------------------------------------------
// Build.
// ---------------------------------------------------------------------------

const variants = {
	1: { changes: [...headerChanges, ...boxChanges], components: [headerComponents, common, steps, features] },
	// The tabbed variant keeps the existing header + .heatbox-tab-nav untouched.
	2: { changes: boxChanges, components: [common, features, tabbed] },
	3: { changes: [...headerChanges, ...boxChanges], components: [common, hero] },
};

for (const [n, { changes, components }] of Object.entries(variants)) {
	let css = base;

	for (const [from, to] of changes) {
		const count = css.split(from).length - 1;

		if (count !== 1) {
			throw new Error(`heatbox-alt-${n}: expected 1 match, found ${count}:\n${from}`);
		}

		css = css.replace(from, () => to);
	}

	const marker = '/* RTL */';

	if (!css.includes(marker)) {
		throw new Error('RTL marker not found');
	}

	css = css.replace(marker, () => components.join('\n') + '\n' + marker);

	fs.writeFileSync(path.join(outDir, `heatbox-alt-${n}.css`), css);
	console.log(`heatbox-alt-${n}.css`, css.split('\n').length, 'lines');
}
