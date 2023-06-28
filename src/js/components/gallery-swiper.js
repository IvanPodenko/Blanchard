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
  }
});

