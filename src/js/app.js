// import "@fancyapps/fancybox";

import "../scss/style.scss";
(function ($) {
  "use strict";
  $(function () {
    $(".header__menu-opener").on("click", function () {
      const $self = $(this).find(".burger");
      const $menu = $(".header__list");

      $self.toggleClass("js-active");
      $menu.toggleClass("js-active");
      $("body").toggleClass("scroll-block");
      $(".overlay").toggleClass("js-active");
    });

    $(".overlay").on("click", function () {
      $(".js-active").removeClass("js-active");
      $("body").removeClass("scroll-block");
      $(this).removeClass("js-active");
    });

    $(".header__link").on("click", function () {
      if (window.matchMedia("(max-width: 1240px)")) {
        $(".js-active").removeClass("js-active");
        $("body").removeClass("scroll-block");
        $(this).removeClass("js-active");
      }
    });

    $(".js-copy").on("click", function () {
      navigator.clipboard.writeText($(this).attr("data-copy"));

      const $tip = $(this).find(".js-tip");
      const currentText = $tip.text();
      $tip.text("Скопировано!");
      setTimeout(function () {
        $tip.removeClass("js-active");
        $tip.text(currentText);
      }, 1000);
    });

    $(".js-copy").on("mouseenter", function () {
      const $tip = $(this).find(".js-tip");
      $tip.addClass("js-active");
    });

    $(".js-copy").on("mouseleave", function () {
      const $tip = $(this).find(".js-tip");
      console.log("mouseleave");
      $tip.removeClass("js-active");
    });

    // const forEq = [
    //   {parent: ".how", child: ".js-eq-1"},
    // ]

    // $(window).on("resize", function() {
    //   forEq.forEach(item => {
    //     changeHeight(item.parent, item.child)
    //   })
    // })
  });
})(jQuery);
