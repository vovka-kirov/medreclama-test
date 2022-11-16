(function($, undefined){
$(function(){
	
	// caro in popup
	//-------------------------------------------//
	
	var $caro_exp = $(".caro--exp .caro__in");	
	$caro_exp.owlCarousel({
		items: 2,
		margin: 20,
		loop: false,
		nav: false,
		dots: false,
		onInitialize: function() {
			$caro_exp.addClass("owl-carousel");	
			$caro_exp.parents(".caro").find(".caro__arr--prev").addClass("is-disabled");
		}
	});
	
	// caro change -> arrs & sections change
	$caro_exp.on("translated.owl.carousel", function(e){
		var len = e.item.count - e.page.size;
		var now = e.item.index;

		var $wrap = $caro_exp.parents(".caro");
		var $prev = $wrap.find(".caro__arr--prev");
		var $next = $wrap.find(".caro__arr--next");
		
		if(now == 0) {
			$prev.addClass("is-disabled");
			$next.removeClass("is-disabled");
		} 
		else if (now == len) {
			$next.addClass("is-disabled");
			$prev.removeClass("is-disabled");
		} 
		else {
			$prev.removeClass("is-disabled");
			$next.removeClass("is-disabled");
		}
	});		
	
	// arrows click
	$caro_exp.parents(".caro").find(".caro__arr--prev").click(function(){
		$caro_exp.trigger("prev.owl.carousel");
		return false;
	});
	$caro_exp.parents(".caro").find(".caro__arr--next").click(function(){
		$caro_exp.trigger("next.owl.carousel");
		return false;
	});	
	// end --------------------------------------//

	
	
});
})(jQuery); 