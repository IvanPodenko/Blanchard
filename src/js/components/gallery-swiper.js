import Swiper, { Navigation } from 'swiper';

const swiper = new Swiper('.gallery__swiper', {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
});

