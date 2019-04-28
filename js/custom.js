/*==========================================
               SERVICES
============================================*/
$(function () {
  // animate on scroll
  new WOW().init();
});

/*==========================================
               WORK
============================================*/
$(function () {
  $('#work').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

/*==========================================
               TEAM
============================================*/
$(function () {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive : {
      // breakpoint from 0 up
      0 : {
          items:1
          
      },
      // breakpoint from 57+ up
      576 : {
          
          items:2
      },
      // breakpoint from 768 up
      768 : {
         items:3
          
      },
    
  }
  });
  /*==========================================
               TESTIMONIALS
============================================*/
  $("#custumers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });

  /*==========================================
               COUNTER
  ============================================*/
  $('.counter').counterUp({
    delay: 10,
    time: 2000,

  });
  /*==========================================
               CLIENT
  ============================================*/
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive : {
      // breakpoint from 0 up
      0 : {
          items:1
          
      },
      // breakpoint from 576 up
      576 : {
          
          items:3
      },
      // breakpoint from 768 up
      768 : {
         items:5
          
      },
      // breakpoint from 992 up
      992 :{
        items:6
      }
  }
  });
  /*==========================================
              NAV
  ============================================*/
  //Show and hide nav and back to top btn
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      //hide
      $('nav').removeClass("vesco-top-nav");
      $("#back-to-top").fadeOut();
    } else {
      //show
      $('nav').addClass("vesco-top-nav");
      $("#back-to-top").fadeIn();
    }
  });

  //smoth scroll
 $("a.smoth-scroll").click(function (event) {
    event.preventDefault();
    //get/ return id eg. #home, #work etc
    var section = $(this).attr("href")
    $("html, body").animate({
      scrollTop: $(section).offset().top -50
    },1250, "easeInOutExpo");
  });

  //close mobile menu on click
  $(".navbar-collapse ul li a").on("click touch",function(){
    $(".navbar-toggler").click();
  });

});