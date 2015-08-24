var callback = function() {
		var elements = document.querySelectorAll('.section');
		for (var i = 0; i < elements.length; i++) {
				var rowHeight = $(elements[i]).height();
				$(elements[i]).height(rowHeight);
		}
};

window.viewportUnitsBuggyfill.init({
	refreshDebounceWait: 5,
	hacks: window.viewportUnitsBuggyfillHacks
});

$('.col').matchHeight({
	byRow: true,
	property: 'height',
	target: null,
	remove: false
});

$(document).ready(callback);
$(window).load(callback);