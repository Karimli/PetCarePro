$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    nav:true,
    loop:true,
    autoplay:true,
    autoPlayTimeOut: 3000,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ]
  });
});
