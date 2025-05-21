import Swiper from 'swiper';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';

const reviewSlider = new Swiper('.reviews__container', {
  modules: [Navigation, Scrollbar],
  containerModifierClass: 'reviews-',
  eventsPrefix: 'reviews-',
  slideClass: 'reviews__item',
  slideActiveClass: 'reviews__item--current',
  wrapperClass: 'reviews__list',
  slideNextClass: 'reviews__item--next',
  slidePrevClass: 'reviews__item--prev',
  grabCursor: true,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  scrollbar: {
    el: '.reviews__scrollbar',
  },
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },

    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
      allowTouchMove: false,
      grabCursor: false,
    }
  },
});

reviewSlider.init();
