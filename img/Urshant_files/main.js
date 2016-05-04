'use strict';

(function() {
	var toggleLink = document.getElementById('reg-toggle');
	var singUpBar = document.getElementById('reg-block');
	var otherArea = document.getElementById('body');
	toggleLink.addEventListener('click', showHideBlock);
	function showHideBlock(event) {
		event.preventDefault();
		singUpBar.classList.toggle('hide');
	}
}());