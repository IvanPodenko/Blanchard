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

      1024: {
        slidesPerView: 2,
        spaceBetween: 50
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 50
      },


    }

  }
)
