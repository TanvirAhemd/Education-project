(function ($) {
  "use strict";

  var windowOn = $(window);



  //more jquery...

  //count up
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });


  //feather icon
  feather.replace()

  //smooth scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
  });




  ////////////////////////////////////////////////////
  // 21. swiper slider
  var galleryThumbs = new Swiper('.hero2__nav', {
    loop: true,
    speed: 700,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    autoplay: {
      delay: 2000,
    },

  });

  //testimonial slider
  var galleryThumbs = new Swiper('.testimonial-slider', {
    slidesPerView: 2,
    loop: true,
    speed: 700,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    autoplay: {
      delay: 1000,
    },
    breakpoints: {
      // when window width is >= 320px
      220: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 30
      },

      // when window width is >= 640px
      992: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      // when window width is >= 1024px
      1024: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }

  });


    //testimonial slider
    var galleryThumbs = new Swiper('.testimonial2-slider', {
      slidesPerView: 2,
      loop: true,
      speed: 700,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        // when window width is >= 320px
        220: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 30
        },
  
        // when window width is >= 640px
        992: {
          slidesPerView: 2,
          spaceBetween: 30
        },
  
        // when window width is >= 1024px
        1024: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
  
    });

 //swiper for the brand slider

  var swiper = new Swiper('.brand__slider', {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      220: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      // when window width is >= 640px
      992: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      // when window width is >= 1024px
      1024: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
  });

  ////////////////////////////////////////////////////
  //  Masonary Js
  $('.grid').imagesLoaded(function () {
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item',
      }
    });


    // filter items on button click
    $('.masonary-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });

    //for menu active class
    $('.masonary-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

  });

  $(document).ready(function(){
    $(".button").click(function(){
        $("#menu").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $(".button2").click(function(){
        $("#menu2").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $(".button3").click(function(){
        $("#menu3").slideToggle("slow");
    });
  });


  lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true
  })

})(jQuery);
