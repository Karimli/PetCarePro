// $(document).ready(function(){
//   $(window).on('scrool',function(){
//     if ($(window).scroolTop()>=109){
//       $('#header').addClass('.fixed');
//     }else{
//       $('#header').removeClass('.fixed');
//     }
//   })
// })

$('.slid_txt h1').addClass('animated fadeInUp');
$('.slid_txt h3').addClass('animated fadeInUp');
$('.slid_txt p').addClass('animated fadeInUp');

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small> </small>';
			}
		}
	});
})




$("#carouselHead").owlCarousel({
        items:1,
        nav:true,
        loop:true,
        mouseDrag:false,
        pagination:false,
        autoplay:true,
        autoPlayTimeOut: 3000,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });


$('.sf-menu .ga ul').addClass('animated fadeInRight');

$(document).ready(function () {
    $("#menu").superfish({
        pathLevels: 1,
        delay: 0,
        animation: { opacity: 'show' },
        animationOut: { opacity: 'hide' },
        speed: 'fast',
        speedOut: 'fast',
        cssArrows: true,
        disableHI: false,
    });
    $("#menu").slicknav();

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > $("header").height()) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    })
});


$("#carousel1").owlCarousel({
        items:1,
        nav:true,
        loop:true,
        pagination:false,
        autoplay:true,
        autoPlayTimeOut: 2000,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ]
    });
    $(function () {
      $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '50', // Distance from top before showing element (px)
        topSpeed: 1000, // Speed back to top (ms)
        animation: 'slide', // Fade, slide, none
        animationInSpeed: 0, // Animation in speed (ms)
        animationOutSpeed: 1000, // Animation out speed (ms)
        scrollText: [
            "<i class='fa fa-angle-up'></i>",

        ], // Text for element
        activeOverlay: true, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      });
    });
