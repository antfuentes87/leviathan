var items = $(".item"),
    titles = $(".title"),
    contentContainers = $(".content-container"),
    activeItem = null;

$.each(contentContainers, function(i,e){

  createAccordionTween(e);

});

$(window).resize(function(){

  $.each(contentContainers, function(i,e) {

    createAccordionTween(e, i);

  });

});



/*
  this function creates the tween for the accordion item
  records the height of the element and then creates a fromTo() instance. Also records the current progress of the element's tween (if any) and then takes the new instance to that point (this only for the active item - if there's an item currently animating)
  the function's target should be a regular DOM element.
  in this case the function will be called in a loop that will pass the DOM element
*/
function createAccordionTween(target, index) {
    
  // clear the height property of previous animations
  TweenLite.set(target, {clearProps:"height"});

  var _this = target,
      $this = $(target),
      targetAnimation = _this.toggleAnimation,// null on the first pass
      /*
        get the paused state to determinate the playhead's direction.
        if the tween exists get the state (could be true or false)
        if the tween doesn't exists set the paused state to null, 
        in this case the animation will be created for the first time
        and we don't care about the playhead's direction.
      */
      targetAnimationActive = targetAnimation ? targetAnimation.isActive() : null,
      // same with the reversed state
      targetAnimationReversed = targetAnimation ? targetAnimation.reversed() : true,
      // get the current's animation progress, if the animation exists
      targetAnimationProg = targetAnimation ? targetAnimation.progress() : 0,
      $thisHeight = $this.outerHeight(),
      // create the new tween and set the current progress
      t = TweenLite.fromTo(_this, 1, {height:0}, {height:$thisHeight, paused:true}).progress(targetAnimationProg);

  /*
    check the direction of the playhead only if the animation was active
    if the animation is going forward => play() else => reverse()
  */
  if( targetAnimationActive ) {

    targetAnimationReversed ? t.reverse() : t.play();

  }

  // attach the animation to the DOM element
  _this.toggleAnimation = t;

}

/*
*  CLICK EVENT
*/
titles.tap(function(){

	var targetContent = $(this).siblings(".content-container")[0],
	targetAnimation = targetContent.toggleAnimation,
	$this = $(this),
	$thisIndex = titles.index($this);
	
	if($thisIndex !== activeItem && activeItem !== null) {
	
		contentContainers[activeItem].toggleAnimation.reverse();
		// remove the active class
		$(".active-accordion").removeClass("active-accordion");
		
		// add the active class to this element
		$this.addClass("active-accordion");
		
		targetAnimation.play();
		
		activeItem = $thisIndex;
	
	} else if(activeItem === null) {
	
		// add the active class to this element
		$this.addClass("active-accordion");
		
		targetAnimation.play();
		
		activeItem = $thisIndex;
	
	} else {
	
		// remove the active class
		$(".active-accordion").removeClass("active-accordion");
		
		targetAnimation.reverse();
		
		activeItem = null;
	}
	
});
