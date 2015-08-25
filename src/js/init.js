/*var callback = function() {
		var elements = document.querySelectorAll('.section');
		for (var i = 0; i < elements.length; i++) {
				var rowHeight = $(elements[i]).outerHeight();
				$(elements[i]).height(rowHeight);
		}
};*/

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

$('h2').matchHeight({
	byRow: true,
	property: 'height',
	target: null,
	remove: false
});

$('p').matchHeight({
	byRow: true,
	property: 'height',
	target: null,
	remove: false
});

$(document).ready(callback);
$(window).load(callback);