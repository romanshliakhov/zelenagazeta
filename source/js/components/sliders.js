import Swiper from "swiper";
import vars from "../_vars.js";
import { Navigation, Pagination, EffectCards, Autoplay, EffectFade} from "swiper/modules";

document.addEventListener("DOMContentLoaded", function () {
  const { marqueSliders, bestSliders, articlesSlider, heroSlider, relatedSlider} = vars;

  marqueSliders && marqueSliders.forEach(function (slider) {
    const container = slider.querySelector(".swiper-container");

    const mainSwiper = new Swiper(container, {
      modules: [Autoplay],
      spaceBetween: 75,
      slidesPerView: 'auto',
      loop: true,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      speed: 5000,
      simulateTouch: false,
      mousewheel: false,
      keyboard: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          spaceBetween: 30,
        },
        768: {
          spaceBetween: 35,
        },
        1024: {
          spaceBetween: 40,
        },
        1240: {
          spaceBetween: 50,
        },
        1440: {
          spaceBetween: 75,
        },
      },
    });
  });

  bestSliders && bestSliders.forEach(function (slider) {
    const container = slider.querySelector(".swiper-container");
    const nextBtn = slider.querySelector(".swiper-button.next");
    const prevBtn = slider.querySelector(".swiper-button.prev");

    const bestSwiper = new Swiper(container, {
      modules: [Navigation, Pagination],
      spaceBetween: 20,
      slidesPerView: 4,
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
        320:{
          slidesPerView: 'auto',
        },
        600:{
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  });

  if (heroSlider) {
    const heroSwiper = new Swiper(heroSlider.querySelector(".swiper-container"), {
      modules: [Pagination, EffectFade, Autoplay],
      spaceBetween: 20,
      // speed: 1600,
      slidesPerView: 1,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      loop: true,
      autoHeight: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: heroSlider.querySelector(".swiper-pagination"),
        clickable: true,
      },
      breakpoints: {
        320: {
          speed: 600,
        },
        1024: {
          speed: 1600,
        },
      },
    });

    // const updateAutoplay = () => {
    //   if (window.innerWidth < 1024) {
    //     heroSwiper.autoplay.stop();
    //   } else {
    //     heroSwiper.autoplay.start();
    //   }
    // };

    // updateAutoplay();

    window.addEventListener("resize", updateAutoplay);
  }


  if (articlesSlider) {
    let swiperInstance = null;

    function initSwiper() {
      swiperInstance = new Swiper(articlesSlider.querySelector(".swiper-container"), {
        modules: [EffectCards],
        spaceBetween: 0,
        effect: "cards",
        grabCursor: true,
        speed: 800,
        centeredSlides: true,
        initialSlide: 2,

        cardsEffect: {
          rotate: false,
          slideShadows: false,
        },
        loop: true,

        breakpoints: {
          320: {
            enabled: true,
            slidesPerView: 1.18,
          },

        },
      });

      articlesSlider.querySelector(".swiper-container").style.transform = "translateX(-3%)";
    }

    function destroySwiper() {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }

    function handleResize() {
      if (window.innerWidth < 576) {
        if (!swiperInstance) {
          initSwiper();
        }
      } else {
        destroySwiper();
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);
  }

  if (relatedSlider) {
    const relatedSwiper = new Swiper(relatedSlider.querySelector(".swiper-container"), {
      modules: [Pagination, EffectFade, Autoplay],
      spaceBetween: 20,
      speed: 1200,
      slidesPerView: 1,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      pagination: {
        el: relatedSlider.querySelector(".swiper-pagination"),
        clickable: true,
      }
    });
  }
});
