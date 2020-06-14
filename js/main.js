(function (){

})();

(function () {
      //==========================
  // Satrt Triggering Plugns
  //==========================
  if ($(window).width() >= 992) {
    new WOW().init();
  }
  
  
  //==================================================
  // Adding Class Active and remove if form nav links
  //==================================================
  $(".nav-link").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  //===========================================
  // Adding Class clicked to change bars shape
  //===========================================
  $(".header .navbar .navbar-toggler").on("click", function () {
    $(this).toggleClass("clicked");
  });

  //==============================
  // Chnage navbar with scrolling
  //==============================
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".mynav").removeClass("sticky");
      $(".navbar-brand img").attr("src", "images/logo.svg");
      $(".nav-link").css("color", "#fff");
      $(".navbar-toggler i").css("color", "#FFF");
      $(".navbar-toggler span").css("background", "#FFF");
      // $(".nav-link").each().css("color","#FFF")
    } else {
      $(".mynav").addClass("sticky");
      $(".navbar-brand img").attr("src", "images/logo-2.svg");
      $(".nav-link").css("color", "#2e2e2e");
      $(".navbar-toggler i").css("color", "#000");
      $(".navbar-toggler span").css("background", "#000");
      // $(".nav-link").each().css("color","blue")
    }
  });
  //============================
  // Smoothly Scroll To Section
  //============================
  $(".nav-link").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 50,
      },
      1000
    );
  });

  //=====================================
  // Synchronize class active wirh links
  //=====================================
  $(window).scroll(function () {
    $(".scroll").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top - 20) {
        var sectionId = $(this).attr("id");
        $('.nav-link[data-scroll="' + sectionId + '"]')
          .parent()
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
    });
  });

  //==================
  // Services Cards
  //==================
  $(".offer").each(function () {
    $(this).hover(
      function () {
        $(this).css("border", "2px solid #FE748A");
        $(this).find(".shape").css("transform", "rotate(30deg)");
      },
      function () {
        $(this).css("border", "2px solid #FFF");
        $(this).find(".shape").css("transform", "rotate(0deg)");
      }
    );
  });

  //==================
  // Video PopUp
  //==================
  $(".popup").magnificPopup({
    type: "iframe",
  });

  //==================
  // Users Carousel
  //==================
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    // autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      769: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  //==================
  // Users Carousel
  //==================
  var scrollUp = $(".scroll-up");

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 800) {
      scrollUp.fadeIn(400);
    } else {
      scrollUp.fadeOut(400);
    }
  });

  scrollUp.click(function () {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  //==================
  // Loading
  //==================
  $(window).on("load", function (event) {
    $(".loading-wrapper").fadeOut();
  });
}());