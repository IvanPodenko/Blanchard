import Swiper from 'swiper';
import { Autoplay } from 'swiper';


const swiper = new Swiper('.hero__swiper', {
  modules: [ Autoplay ],
  allowTouchMove: false,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});






