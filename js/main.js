'use strict';

(function() {
	function showPopup(prefix, hidePrefix) {
		var body = document.querySelector('body');
		var toggle = document.getElementById(prefix + '-toggle');
		var menu = document.getElementById(prefix + '-block');
		var close = document.getElementById(prefix + '-close');
		toggle.addEventListener('click', showHideBlock);
		close.addEventListener('click', showHideBlock);
		function showHideBlock(event) {
			event.preventDefault();
			menu.classList.toggle('hide' + hidePrefix);
		}
	}
	showPopup('reg', '');
	showPopup('head', '-advanced');
	showPopup('nav', '-advanced');
}());
