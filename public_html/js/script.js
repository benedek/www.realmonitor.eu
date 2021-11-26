$(window).on("load", function() {
    "use strict";


    //  ================= Responsive Mobile Menu ================ 

    $(".mobile-menu-btn").on("click", function(){
      $(".responsive-mobile-menu").addClass("active");
      return false;
    });
    $(".close-menu").on("click", function(){
      $(".responsive-mobile-menu").removeClass("active");
    });

    $('.spinner, .overlay').fadeOut();
    
    $('.btn-sbmt').on('click', function(){
      var n = $('#n1');
      var e = $('#e1');
      var m = $('#m1');
      var p = { 
        "n": n.val(), 
        "e": e.val(), 
        "m": m.val() 
      };
      $.ajax({
        url: atob("aHR0cHM6Ly9zbXNrdWxkby5yZWFsbW9uaXRvci5odS9hcGkvdjEvc2VuZA" + "=="),
        type: "POST",
        crossDomain: true,
        data: JSON.stringify(p),
        dataType: "json",
        success: function (r) {
          if (r && r.ok === true) {
            $('.success-message').show();
          } else {
            $('.error-message').show();
          }
          window.setTimeout(() => {
            n.val('');
            e.val('');
            m.val('');
            $('.success-message').hide();
            $('.error-message').hide();
          }, 5000);
        },
        error: function (xhr, status) {
          console.log(xhr);
          $('.error-message').show();
          window.setTimeout(() => {
            $('.success-message').hide();
            $('.error-message').hide();
          }, 5000);
        }
      });
    });


      // ============ Sticky header Function ==========

      if ($(window).width() > 991) {
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 1){  
             $('header').addClass("sticky animated slideInDown");
          }
          else{
             $('header').removeClass("sticky animated slideInDown");
          }
        });
    };

    function slowSlide (e) {
        if (jQuery(this).attr('href') === '#')
        {
            e.preventDefault();
        } else {
            if (jQuery(window).width() < 1024) {
                if (!jQuery(e.target).is('.sub-arrow'))
                {
                    jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top - 77}, 1500);
                    jQuery('.menu-holder').removeClass('show');
                    jQuery('#toggle').removeClass('on');
                    return false;
                }
            } else
            {
                jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top - 77}, 1500);
                return false;
            }
        }
    }

     //Slow Scroll
    jQuery('nav ul li a, .mobile-menu ul li a').on("click", slowSlide);
    jQuery('#explore').on('click', slowSlide);

    jQuery(window).on('scroll resize', function () {
    var currentSection = null;
    jQuery('section').each(function () {
        var element = jQuery(this).attr('id');
        if (jQuery('#' + element).is('*')) {
            if (jQuery(window).scrollTop() >= jQuery('#' + element).offset().top - 115)
            {
                currentSection = element;
            }
        }
    });

    jQuery('nav ul li, .mobile-menu ul li').removeClass('active').find('a[href*="#' + currentSection + '"]').parent().addClass('active');
});



  $('.testimonial-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
    dots:false,
	  asNavFor: '.testimonial-nav'
	});
	$('.testimonial-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.testimonial-slider',
	  dots: false,
    arrows:false,
	  centerMode: true,
	  focusOnSelect: true,
	  responsive: [
	  {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       
      ]
	});


});


