import Swiper from "swiper";
import vars from "../_vars.js";
import { Navigation, Pagination } from "swiper/modules";

document.addEventListener("DOMContentLoaded", function () {
  const { videosSliders, categoriesSliders, discoverySliders, moreArticlesSliders, tagsSliders, podcastsSliders } = vars;

  if (videosSliders) {
    videosSliders.forEach(function (slider) {
      const container = slider.querySelector(".swiper-container");
      const nextBtn = slider.querySelector(".swiper-button.next");
      const prevBtn = slider.querySelector(".swiper-button.prev");
      const pagination = slider.querySelector(".swiper-pagination");
  
      const videosSwiper = new Swiper(container, {
        modules: [Navigation, Pagination],
        spaceBetween: 20,
        slidesPerView: 3,
        speed: 1400,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        loop: true,
  
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        pagination: {
          el: pagination,
          clickable: true,
        },
  
        preventClicks: false,
        preventClicksPropagation: false,
        simulateTouch: false, // если ещё надо полностью убрать "перетаскивание мышкой" по слайдам
  
        breakpoints: {
          320: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          576: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
        },
      });
    });
  }  

  if (discoverySliders) {
    discoverySliders.forEach(function (slider) {
      const container = slider.querySelector(".swiper-container");
      const nextBtn = slider.querySelector(".swiper-button.next");
      const prevBtn = slider.querySelector(".swiper-button.prev");
      const pagination = slider.querySelector(".swiper-pagination");
  
      const discoverySwiper = new Swiper(container, {
        modules: [Navigation, Pagination],
        spaceBetween: 20,
        slidesPerView: 1,
        speed: 1400,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        // loop: true,
  
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        pagination: {
          el: pagination,
          clickable: true,
        },
      });
    });
  }  

  if (categoriesSliders) {
    let categoriesSwipers = [];
    
    function initCategoriesSliders() {
      if (window.innerWidth <= 1024) {
        if (categoriesSwipers.length === 0) {
          categoriesSliders.forEach(function (slider) {
            const container = slider.querySelector(".swiper-container");
            const nextBtn = slider.querySelector(".swiper-button.next");
            const prevBtn = slider.querySelector(".swiper-button.prev");
            const pagination = slider.querySelector(".swiper-pagination");
    
            const swiperInstance = new Swiper(container, {
              modules: [Navigation, Pagination],
              spaceBetween: 20,
              slidesPerView: 3,
              speed: 1400,
              watchOverflow: true,
              observer: true,
              observeParents: true,
              loop: true,
    
              navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
              },
              pagination: {
                el: pagination,
                clickable: true,
              },
    
              preventClicks: false,
              preventClicksPropagation: false,
              simulateTouch: false,
    
              breakpoints: {
                320: {
                  spaceBetween: 10,
                  slidesPerView: 1,
                },
                576: {
                  spaceBetween: 10,
                  slidesPerView: 2,
                },
              },
            });
    
            categoriesSwipers.push(swiperInstance);
          });
        }
      } else {
        categoriesSwipers.forEach(swiper => swiper.destroy(true, true));
        categoriesSwipers = [];
      }
    }
    
    if (categoriesSliders) {
      initCategoriesSliders();
      window.addEventListener('resize', () => {
        initCategoriesSliders();
      });
    }
  }

  if (moreArticlesSliders) {
    moreArticlesSliders.forEach(function (slider) {
      const container = slider.querySelector(".swiper-container");
      const nextBtn = slider.querySelector(".swiper-button.next");
      const prevBtn = slider.querySelector(".swiper-button.prev");
      const pagination = slider.querySelector(".swiper-pagination");
  
      const moreArticlesSwiper = new Swiper(container, {
        modules: [Navigation, Pagination],
        spaceBetween: 20,
        slidesPerView: 3,
        speed: 1400,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        loop: true,
  
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        pagination: {
          el: pagination,
          clickable: true,
        },
  
        breakpoints: {
          320: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          576: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
        },
      });
    });
  }  

  if (tagsSliders) {
    tagsSliders.forEach(function (slider) {
      const container = slider.querySelector(".swiper-container");
      const nextBtn = slider.querySelector(".swiper-button.next");
      const prevBtn = slider.querySelector(".swiper-button.prev");
  
      const tagsSwiper = new Swiper(container, {
        modules: [Navigation],
        spaceBetween: 12,
        slidesPerView: 'auto',
        speed: 1400,
        watchOverflow: true,
        observer: true,
        observeParents: true,
  
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
      });
    });
  }  

  if (podcastsSliders) {
    podcastsSliders.forEach(function (slider) {
      const container = slider.querySelector(".swiper-container");
      const nextBtn = slider.querySelector(".swiper-button.next");
      const prevBtn = slider.querySelector(".swiper-button.prev");
  
      const podcastsSliderSwiper = new Swiper(container, {
        modules: [Navigation, Pagination],
        spaceBetween: 20,
        slidesPerView: 3,
        speed: 1400,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        loop: true,
  
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
  
        breakpoints: {
          320: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
        },
      });
    });
  }  
});
