$(document).ready(function(){

	$('.parts-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
	autoplay:true,
  prevArrow: false,
  nextArrow: '<button type="button" class="slick-button slick-next">Next <i class="fa-solid fa-arrow-right-long"></i></button>',
	autoplaySpeed: 5000,

responsive: [
    {
      breakpoint: 775,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 545,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



	$('.testimonial-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
	autoplay:true,
  arrows: false,
  dots: true,
	autoplaySpeed: 5000
});
	
   });


