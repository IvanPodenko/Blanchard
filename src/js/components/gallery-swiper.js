import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.gallery__swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 3,
  spaceBetween: 30,

  pagination: {
    el: ".gallery__right-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 38
    },

    992: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1201: {
      slidesPerView: 3,
      spaceBetween: 50
    },

    1920: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

});

