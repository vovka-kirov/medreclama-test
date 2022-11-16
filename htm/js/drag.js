(function($, undefined){ 
$(function(){
	
	// drag n drop via dragula
	//-------------------------------------------//

	var drake = dragula(
		[
			document.querySelector(".dragWrapper_1"),
			document.querySelector(".dragWrapper_11"),
			document.querySelector(".dragWrapper_2"),
			document.querySelector(".dragWrapper_3"),
		], {
		moves: function (el, container, handle) {
			var x = handle.classList.contains("act__h");
			if($(window).width() < 768) { x = false; } // mobile off
			return x;
		}	
	});	

	
	// end --------------------------------------//


});
})(jQuery); 

