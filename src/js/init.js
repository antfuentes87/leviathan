function init(){
 	var arr = document.querySelectorAll("[data-min-height]");
	for (var i = 0; i < arr.length; i++){
		var currentWindowHeight = window.innerHeight;
		var dataHeight = arr[i].dataset.minHeight;
		var dataPercent = dataHeight / 100;
		var dataPercentHeight = currentWindowHeight * dataPercent;
		arr[i].style.minHeight = dataPercentHeight + "px";
	}
	
	var newArr = document.querySelectorAll(".vertical");	
	for (var z = 0; z < arr.length; z++){
		var verticalHeight = newArr[z].offsetHeight;
		var parentHeight = newArr[z].parentNode.offsetHeight;
		var marginTop = (parentHeight - verticalHeight) / 2;
		newArr[z].style.marginTop = marginTop + "px";
	}
	window.onresize = init;
}