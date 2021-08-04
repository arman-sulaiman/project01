jQuery(document).ready(function( $ )
{
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});



// js-for-test


(function($){
	"use strict"; 
	
	
	
	$(".test_img").click(function(){
		$(".testimonial_app").show(); 
        $(".testimonial_app_ex").hide(); 
        $(".testimonial_app_fx").hide(); 
        $(".testimonial_app_gx").hide(); 
	}); 

    $(".test_img_a").click(function(){
		$(".testimonial_app_ex").show(); 
        $(".testimonial_app").hide(); 
        $(".testimonial_app_fx").hide(); 
        $(".testimonial_app_gx").hide(); 
	}); 

    $(".test_img_b").click(function(){
		$(".testimonial_app_fx").show(); 
        $(".testimonial_app").hide(); 
        $(".testimonial_app_ex").hide(); 
        $(".testimonial_app_gx").hide(); 
	}); 

    $(".test_img_c").click(function(){
		$(".testimonial_app_gx").show(); 
        $(".testimonial_app").hide(); 
        $(".testimonial_app_fx").hide(); 
        $(".testimonial_app_ex").hide(); 
	}); 
	
	
	
	
})(window.jQuery); 
	
	


// js-for-test