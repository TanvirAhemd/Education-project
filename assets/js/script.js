/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. btn js
03. meanmenu
04. sidebar jquery
05. Cart Toggle Js
06. Sticky Header Js
07. Data-Background Js
08. Back to top
09. Show or hide the sticky footer button
10. Animate the scroll to yop
11. WoW Js
12. Cart Plus Minus Js
13. Show Login Toggle Js
14. Show Coupon Toggle Js
15. Create An Account Toggle Js
16. Shipping Box Toggle Js
17.  count up
18. feather icon
19. paralex js
20. Counter Js
21. Parallax Js
22. swiper slider

****************************************************/




(function ($) {
    "use strict";

    var windowOn = $(window);
    ////////////////////////////////////////////////////
    // 01. PreLoader Js
    windowOn.on('load', function () {
        $("#loading").fadeOut(500);
    });

    ////////////////////////////////////////////////////
    // 02. btn js
    $('.m-btn').on('mouseenter, mouseout', function (e) {
        var elOffset = $(this).offset(),
            dX = e.pageX - elOffset.left,
            dY = e.pageY - elOffset.top;
        $(this).find('span').css({
            top: dY,
            left: dX
        });
    });

    ////////////////////////////////////////////////////
     // 03. meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fa fa-plus"></i>'],
    });


     ////////////////////////////////////////////////////
   // 04. sidebar jquery
    $("#sidebar-toggle").on("click", function () {
        $(".sidebar__area").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function () {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });


    ////////////////////////////////////////////////////
    // 05. Cart Toggle Js
    $(".cart-toggle-btn").on("click", function () {
        $(".cartmini__wrapper").addClass("opened");
        $(".body-overlay").addClass("opened");
    });
    $(".cartmini__close-btn").on("click", function () {
        $(".cartmini__wrapper").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });
    $(".body-overlay").on("click", function () {
        $(".cartmini__wrapper").removeClass("opened");
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });

        // 00. Search Js
	$(".searchOpen").on("click", function () {
		$(".search-wrapper").addClass("search-open");
		$(".body-overlay").addClass("opened");
	});
	$(".search-close").on("click", function () {
		$(".search-wrapper").removeClass("search-open");
		$(".body-overlay").removeClass("opened");
	});




    ////////////////////////////////////////////////////
    // 06. Sticky Header Js
    windowOn.on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    });
    // 06. Sticky Header Js
        windowOn.on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 100) {
                $("#header3-sticky").removeClass("sticky");
            } else {
                $("#header3-sticky").addClass("sticky");
            }
        });

    ////////////////////////////////////////////////////
    // 07. Data-Background Js
    $("[data-background").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");

    });

     ////////////////////////////////////////////////////
    // 08. back to top
    var btn = $('#button');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });

      ////////////////////////////////////////////////////
    // 09. Show or hide the sticky footer button
    windowOn.on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('#scroll').fadeIn(200)
        } else {
            $('#scroll').fadeOut(200)
        }
    });

     ////////////////////////////////////////////////////
    // 10. Animate the scroll to yop
    $('#scroll').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    ////////////////////////////////////////////////////
    // 11. WoW Js
    new WOW().init();

    ////////////////////////////////////////////////////
    // 12. Cart Plus Minus Js
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });




    ////////////////////////////////////////////////////
    // 13. Show Login Toggle Js
    $('#showlogin').on('click', function () {
        $('#checkout-login').slideToggle(900);
    });

    ////////////////////////////////////////////////////
    // 14. Show Coupon Toggle Js
    $('#showcoupon').on('click', function () {
        $('#checkout_coupon').slideToggle(900);
    });

    ////////////////////////////////////////////////////
    // 15. Create An Account Toggle Js
    $('#cbox').on('click', function () {
        $('#cbox_info').slideToggle(900);
    });

    ////////////////////////////////////////////////////
    // 16. Shipping Box Toggle Js
    $('#ship-box').on('click', function () {
        $('#ship-box-info').slideToggle(1000);
    });

     ////////////////////////////////////////////////////
    // 17. count up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

     ////////////////////////////////////////////////////
    // 18. feather icon
    feather.replace()

     ////////////////////////////////////////////////////
     // 19. paralex js
    if ($('.scene').length > 0) {
        $('.scene').parallax({
            scalarX: 10.0,
            scalarY: 15.0,
        });
    };

    ////////////////////////////////////////////////////
     // 20. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

     ////////////////////////////////////////////////////
    // 21. swiper slider
  

})(jQuery);


