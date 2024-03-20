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
      spaceBetween: 28
    },

      1024: {
        slidesPerView: 3,
        spaceBetween: 27
      },

      1400: {
        slidesPerView: 3,
        spaceBetween: 50

      }

  }

});



