import "slick-carousel";
import $ from "jquery";

import "../../node_modules/slick-carousel/slick/slick";
import "../scss/style.scss";

("use strict");

window.onload = () => {
  const smoothScroll = () => {
    const links = document.querySelectorAll(".menu-link");

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const section = document.querySelector(link.getAttribute("href"));

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      });
    });
  };

  smoothScroll();

  const openMenu = () => {
    const burger = document.querySelector(".header__menu");

    burger.addEventListener("click", (event) => {
      const mobile = document.querySelector(".header__mobile");
      mobile.classList.toggle("action");
    });
  };

  openMenu();

  const closeMenu = () => {
    const close = document.querySelector(".menu__close");

    close.addEventListener("click", (event) => {
      const mobile = document.querySelector(".header__mobile");
      mobile.classList.remove("action");
    });
  };

  closeMenu();

  const openSpoiler = () => {
    const tabs = document.querySelectorAll(".products__link");
    const hiddens = document.querySelectorAll(".products__sub");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        if (tab.classList.contains("products__link-active")) {
          tab.classList.remove("products__link-active");
          hiddens[index].classList.add("hidden");
        } else {
          hiddens.forEach((hidden) => {
            hidden.classList.add("hidden");
          });
          tabs.forEach((tab) => {
            tab.classList.remove("products__link-active");
          });
          hiddens[index].classList.remove("hidden");
          tab.classList.add("products__link-active");
        }
      });
    });
  };

  openSpoiler();
};

$(document).ready(function () {
  $(".swiper-wrapper").slick({
    dots: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    infinite: false,
    variableWidth: true,
    rows: 0,
    nextArrow: ".swiper-button-right",
    prevArrow: ".swiper-button-left",
    responsive: [
      {
        breakpoint: 1176,
        settings: {
          dots: true,
          nextArrow: ".mob-arr__right",
          prevArrow: ".mob-arr__left",
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  });
});
