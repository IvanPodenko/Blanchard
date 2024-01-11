import Swiper, { Navigation, Pagination } from 'swiper';

const swiperEvents = new Swiper('.events__wrapper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 50,

    navigation: {
    nextEl: ".events__wrapper-btn-next",
    prevEl: ".events__wrapper-btn-prev",
  },

    pagination: {
      el: ".events__pagination",
      clickable: true,
    },



  breakpoints: {

      768: {
      slidesPerView: 2,
      spaceBetween: 38
    },

      1024: {
        slidesPerView: 3,
        spaceBetween: 34
      },

  }

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



