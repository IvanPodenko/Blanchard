import Swiper, { Navigation } from 'swiper';

const swiperEvents = new Swiper('.projects__partners', {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,

      navigation: {
      nextEl: ".projects__partners-button-next",
      prevEl: ".projects__partners-button-prev",
    },

  }
)
