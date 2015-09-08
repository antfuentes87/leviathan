var items = $(".acc-item"),
activeItem = null;

$.each(items, function(i, e) {
	var content = $(e).children(".acc-content");
	t = TweenLite.from(content, 0.5, {
		height: 0,
		paused: true,
		reversed: true
	});
	e.toggleAnimation = t;
});

items.tap(function(){
	var _this = this,
	$self = $(this),
	$selfIndex = items.index($self);
	
	if ($selfIndex !== activeItem && activeItem !== null) {
		items[activeItem].toggleAnimation.reverse();
		this.toggleAnimation.play();
		activeItem = $selfIndex;
	}else if (activeItem === null){
		this.toggleAnimation.play();
		activeItem = $selfIndex;
	}else{
		this.toggleAnimation.reverse();
		activeItem = null;
	}
});