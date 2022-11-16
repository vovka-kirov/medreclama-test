(function($, undefined){ 
$(function(){
	
	// mask
	//-------------------------------------------//
	$(".is-mask_tel").inputmask({
		'autoUnmask': true,
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}); 

	// end --------------------------------------//


	
	//  form validate
	//-------------------------------------------//
	$(document).on("submit", "form", function(e){
		var $but = $(this).find(".but[type='submit']");
		$but.prop("disabled", true);
		
		if(!form_validate($(this))) {			
			e.preventDefault();
		}
		
		$but.prop("disabled", false);
	});

	
	function form_validate(f) {
		var is_valid = true; // flag
		
		function add_message(el, msg) {
			if(!el.find(".f_msg").length) {
				el.append("<div class=\"f_msg is-active\">" + msg + "</div>");
			}
			else {
				el.find(".f_msg").addClass("is-active");
			}
		};
		
		function del_message(el) {
			el.find(".f_msg").removeClass("is-active");
		};		
		
		// check all inputs 
		f.find(".inp").each(function(){
			var $inp = $(this);
			var name = $inp.attr("name");			
			var val  = $inp.val();	
			var $wrp = $inp.closest(".f_item");			
			
			// check name
			if(name === "name") {
				if(!(/^[A-zА-яЁё\s]+$/.test(val)) || (val === "") || (val === null) || (val === " ")) {
					is_valid = false;
					add_message($wrp, "Заполните поле правильно");
				}
				else {
					del_message($wrp);
				}
			}
			
			// check tel
			else if(name === "tel") {
				if (!$inp.inputmask("isComplete")){
					is_valid = false;
					add_message($wrp, "Заполните поле правильно");					
				}
				else {
					del_message($wrp);
				}
			}			
		});
		
		console.log("=", is_valid);
		return is_valid;
	}
	// end --------------------------------------//

});
})(jQuery); 

