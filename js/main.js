(function($) {
    "use strict";

    /** ------------------------------------
    * Window loader
    * -------------------------------------*/

    $(window).on("load", function () {
      $('.loading-wrap').fadeOut();
    });
    
    /** ------------------------------------
    * Stellarnav
    * -------------------------------------*/

    $('.stellarnav').stellarNav({
        theme: 'light',
        breakpoint: 991,
        openingSpeed: 350,
        closingDelay: 10,
        position: 'top',
        scrollbarFix: false,
        mobileMode:false,
        closeLabel: '',
        menuLabel: '',
        sticky: false,
        
    });

    /** ------------------------------------
    * Magnificpopup video
    * -------------------------------------*/
    $(".video-item").magnificPopup({
        type: "iframe",
        callbacks: {},
    });


    /** ------------------------------------
    * Lightbox
    * -------------------------------------*/
    $('.img-zoom').simpleLightbox();


    /** ------------------------------------
    * StickyHeader
    * -------------------------------------*/

    function stickyHeader(){
      var headerFixed = $(".header-area");
      if ($(window).scrollTop() > 60) {
          headerFixed.addClass("animated fadeInDown stricky-menu");
      }
      else {
          headerFixed.removeClass("animated fadeInDown stricky-menu");
      }
    }

    
    /** ------------------------------------
    * Pagination list
    * -------------------------------------*/

    $(".pagination-list li a").on('click' ,function(e){
        e.preventDefault();
        // remove classname 'active' from all li who already has classname 'active'
        $(".pagination-list li a.active").removeClass("active"); 
        // adding classname 'active' to current click li 
        $(this).addClass("active"); 
    });
  
    /** ------------------------------------
    * Login with Registration 
    * -------------------------------------*/

    $(".forget-content").hide();
    $(".forget-btn").on('click' ,function(e){
      e.preventDefault();
        $(".forget-content").show();
        $(".login-content").hide();
    });
    $(".back-btn").on('click' ,function(e){
      e.preventDefault();
        $(".forget-content").hide();
        $(".login-content").show();
    });

    $(".plusicon").on('click' ,function(e){
      $(this).toggleClass("plusicon-bg");
      e.preventDefault();
      $(this).parent(".social-share").find(".social-activite").toggleClass("socialopen");
    });
    /** ------------------------------------
    * Testimonial Swiper Slider 
    * -------------------------------------*/

    function aboutTestimonial(){
        let testiSwiper = new Swiper(".about_swiper", {
          spaceBetween: 24,
          loop: true,
          speed: 0,
          freeMoode: true,
          allowTouchMove: true,
          autoplay: {
            delay: 0,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          },
          navigation: {
            nextEl: "",
            prevEl: "",
          },
          breakpoints: {
            300: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          },
        });
        
      }
      aboutTestimonial();


      function homeswiper_slide(){
        let testiSwiper = new Swiper(".homeswiper_slider", {
          spaceBetween: 50,
          loop: true,
          speed: 0,
          freeMoode: true,
          allowTouchMove: true,
          grabCursor: true,
          autoplay: {
            delay: 0,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: "",
            prevEl: "",
          },
          breakpoints: {
            300: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
          },
        });
        
      }
      homeswiper_slide();

    /** ------------------------------------
    * Counterup
    * -------------------------------------*/
     
      $('.counternumber').counterUp({
        delay: 10,
        time: 1000
      });
    
    /** ------------------------------------
    *  Image Animation 
    * -------------------------------------*/

    let gsapImgAnimation = function () {
    gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".gsap-img-animation");
        revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
        scrollTrigger: {
        trigger: container,
        toggleActions: "play none none none"
      }
    });
      tl.set(container, {
        autoAlpha: 1
      });
      tl.from(container, 1, {
        xPercent: -100,
        ease: Power2.out
      });
        tl.from(image, 1, {
          xPercent: 100,
          scale: 1,
          delay: -1,
          ease: Power2.out
        });
      });
  }
  gsapImgAnimation();

   /** ------------------------------------
    * Heading Text Animation
  * -------------------------------------*/
  // if ($('.gsap-text-style').length) {
	// 	let staggerAmount 	= 0.05,
	// 		translateXValue = 0,
	// 		delayValue 		= 0.5,
	// 	   animatedTextElements = document.querySelectorAll('.gsap-text-style');
		
	// 	animatedTextElements.forEach((element) => {
	// 		let animationSplitText = new SplitText(element, { type: "chars, words" });
	// 			gsap.from(animationSplitText.words, {
	// 			duration: 1,
	// 			delay: delayValue,
	// 			x: 10,
	// 			autoAlpha: 0,
	// 			stagger: staggerAmount,
	// 			scrollTrigger: { trigger: element, start: "top 85%" },
	// 			});
	// 	});		
	// }
 /** ------------------------------------
    * Jqueryui custom datepicker
  * -------------------------------------*/
  
  $(".custom-datepicker").datepicker({
    beforeShowDay: function(date) {
      var day = date.getDay();
      return [(day != 6), ''];
    }
  });

  /** ------------------------------------
    * Background image show
    * -------------------------------------*/

  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
  });

  /** ------------------------------------
    * WOW JS
  * -------------------------------------*/

    new WOW().init();

    
  /** ------------------------------------
    * Window on scroll function
  * -------------------------------------*/
 
    $(window).on("scroll", function () {
      stickyHeader();
    });
   
})(jQuery);

