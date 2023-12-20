import Swiper, { Navigation } from 'swiper';

const swiperEvents = new Swiper('.events__wrapper', {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 50,

  // pagination: {
  //   el: ".gallery__right-pagination",
  //   type: "fraction",
  // },

  // navigation: {
  //   nextEl: ".btn-next",
  //   prevEl: ".btn-prev",
  // },

  // breakpoints: {

  // //  320: {
  // //     slidesPerView: 1,
  // //     spaceBetween: 20
  // //   },

  //   576: {
  //     slidesPerView: 2,
  //     spaceBetween: 38
  //   },

  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 38
  //   },

  //   1024: {
  //     slidesPerView: 2,
  //     spaceBetween: 34
  //   },

  //   1200: {
  //     slidesPerView: 3,
  //     spaceBetween: 50
  //   }
  // },

});



