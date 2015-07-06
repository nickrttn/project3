$(document).ready(function(){
	var link = $('a.btn')[0];

	$(window).keydown(function(e){
		console.log(e.keyCode);
		if(e.keyCode === 32){
			link.click();
		}
	}); 
});