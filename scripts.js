 $(function(){
		  $('.our-work').magnificPopup({
		  	type:'image',
		  	delegate:'a',
		  	gallery: {
		      enabled: true
		    }
		  });

		   $(".owl-carousel").owlCarousel({

	     	  	items:3,
	     	  	autoplay:true,
	     	  	smartSpeed:700,
	     	  	loop:true

	     	});

		    $(".customer-testimonials").owlCarousel({

	     	  	item:1,
	     	  	autoplay:true,
	     	  	smartSpeed:700,
	     	  	loop:true

	     	  });

			$('.counter').counterUp({
			    delay: 10,
			    time: 2000
			});
			
				$(".clients").owlCarousel({

	     	  	items:6,
	     	  	autoplay:true,
	     	  	smartSpeed:700,
	     	  	loop:true

	});
});

 
	     	 



