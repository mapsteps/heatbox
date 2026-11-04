/**
 * Heatbox showcase interactions (demo only, not part of heatbox.css).
 */
(function () {
	var tabs = document.querySelectorAll('.heatbox-tab-nav-item');
	var panels = document.querySelectorAll('.heatbox-admin-panel');

	function showPanel(name) {
		var found = false;

		panels.forEach(function (panel) {
			var match = panel.dataset.panel === name;
			panel.style.display = match ? 'block' : 'none';
			if (match) found = true;
		});

		if (!found) return showPanel('boxes');

		tabs.forEach(function (tab) {
			tab.classList.toggle('active', tab.dataset.panel === name);
		});
	}

	window.addEventListener('hashchange', function () {
		showPanel(location.hash.slice(1));
	});

	showPanel(location.hash.slice(1) || 'boxes');

	// Loading button.
	document.querySelectorAll('.heatbox-demo-loading').forEach(function (button) {
		button.addEventListener('click', function () {
			button.classList.add('is-loading');
			setTimeout(function () {
				button.classList.remove('is-loading');
			}, 1500);
		});
	});

	// Status indicator.
	document.querySelectorAll('.heatbox-demo-status').forEach(function (button) {
		var indicator = button.closest('.heatbox').querySelector('.heatbox-status-indicator');

		button.addEventListener('click', function () {
			indicator.classList.remove('is-done');
			indicator.classList.add('is-loading');
			indicator.textContent = '';

			setTimeout(function () {
				indicator.classList.remove('is-loading');
				indicator.textContent = 'Saved';
				// Restart the fade-out animation.
				void indicator.offsetWidth;
				indicator.classList.add('is-done');
			}, 1200);
		});
	});

	// Copyable tags.
	document.querySelectorAll('.tags-heatbox').forEach(function (box) {
		var status = box.querySelector('.action-status');

		box.querySelectorAll('.tags-wrapper code').forEach(function (tag) {
			tag.addEventListener('click', function () {
				if (navigator.clipboard) navigator.clipboard.writeText(tag.textContent);
				status.classList.add('is-shown');
				setTimeout(function () {
					status.classList.remove('is-shown');
				}, 1200);
			});
		});
	});

	// Copy field.
	document.querySelectorAll('.heatbox-demo-copy').forEach(function (button) {
		button.addEventListener('click', function () {
			var code = button.closest('.heatbox-copy').querySelector('code');
			if (navigator.clipboard) navigator.clipboard.writeText(code.textContent);
			button.classList.add('is-copied');
			button.textContent = 'Copied!';
			setTimeout(function () {
				button.classList.remove('is-copied');
				button.textContent = 'Copy';
			}, 1200);
		});
	});

	// Demo links go nowhere.
	document.querySelectorAll('.heatbox-wrap a[href="#"]').forEach(function (link) {
		link.addEventListener('click', function (e) {
			e.preventDefault();
		});
	});
})();
