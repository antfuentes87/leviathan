$.fn.matchHeight._beforeUpdate = function(event, groups) {
	$("[data-min-height]").each(function() {
		var dataHeight = $(this).data("min-height");
		var dataPercent = dataHeight / 100;
		$(this).css("min-height", function() {
			return $(window).height() * dataPercent;
		});
	});
	$('.vertical').flexVerticalCenter();
};