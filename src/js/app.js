import "swiper/css";
import "../scss/style.scss";
import Swiper, { Navigation } from "swiper";

window.onload = () => {
  const $burger = document.querySelector(".burger-menu__button");
  const $menu = document.querySelector(".menu");

  document.body.classList.remove("transition-lock");

  if ($burger && $menu) {
    $burger.addEventListener("click", function () {
      $burger.classList.toggle("active");
      $menu.classList.toggle("active");
    });

    $menu.addEventListener("click", () => {
      $burger.classList.remove("active");
      $menu.classList.remove("active");
    });
  }

  new Swiper(".swiper", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 18,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      960: {
        slidesPerView: 1,
      },
      1239: {
        slidesPerView: "auto",
      },
      1240: {
        slidesPerView: 2,
      },
    },
  });
};
