import Swiper, { Navigation } from 'swiper';

const swiperEvents = new Swiper('.projects__partners', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,

      navigation: {
      nextEl: ".projects__partners-button-next",
      prevEl: ".projects__partners-button-prev",
    },

    breakpoints: {

      768: {
        slidesPerView: 2,
        spaceBetween: 50
      },

      1370: {
        slidesPerView: 2,
        spaceBetween: 50
      },


      1439: {
        slidesPerView: 3,
        spaceBetween: 50
      },

    }

  }
)
