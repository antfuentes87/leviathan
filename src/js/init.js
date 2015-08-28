function init(){
 	var minHeightArray = document.querySelectorAll("[data-min-height]");
	for (var i = 0; i < minHeightArray.length; i++){
		var currentWindowHeight = window.innerHeight;
		var dataHeight = minHeightArray[i].dataset.minHeight;
		var dataPercent = dataHeight / 100;
		var dataPercentHeight = currentWindowHeight * dataPercent;
		minHeightArray[i].style.minHeight = dataPercentHeight + "px";
	}
	
	var verticalArray = document.querySelectorAll(".vertical");	
	for (var z = 0; z < verticalArray.length; z++){
		var verticalHeight = verticalArray[z].offsetHeight;
		var parentHeight = verticalArray[z].parentNode.offsetHeight;
		var marginTop = (parentHeight - verticalHeight) / 2;
		verticalArray[z].style.marginTop = marginTop + "px";
	}
	window.onresize = init;
}