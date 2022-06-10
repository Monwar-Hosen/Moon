jQuery(document).ready(function () {
	
	jQuery(".navbar ul li a").click (function () {
		jQuery(".navbar ul li a").removeClass("active");
		jQuery(this).addClass("active");
	});

    jQuery(window).scroll(function() {
            var navHight = jQuery("nav").outerHeight();
            var topScroll = jQuery(window).scrollTop();
             
            if (topScroll > navHight) {
                     jQuery("nav").addClass("fixed");
             } 
            else {
              jQuery("nav").removeClass("fixed");
             } 
        });


       var mixer = mixitup(".my-portfolio");
       $(".portfolio-holder ul li a").click(function(){
         return false;
       });

       $(".owl-carousel").owlCarousel({
        margin : 10,
        loop : true,
        stagePadding : 80,
        startPosition : 3,
        dots : false,
        autoplay : true,
        autoplayTimeout : 1000,
        autoplayHoverPause : true,
        responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
       });

   

})