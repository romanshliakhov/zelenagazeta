export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  activeClass: 'active',
  activeClassMode: 'mode',
  header: document.querySelector('header'),
  footer: document.querySelector('footer'),

  videosSliders: document.querySelectorAll('.videos-section__wrapp'),
  discoverySliders: document.querySelectorAll('.discovery-section__slider'),
  categoriesSliders: document.querySelectorAll('.category-section__wrapp'),
  moreArticlesSliders: document.querySelectorAll('.more-section__wrapp'),
  tagsSliders: document.querySelectorAll('.listing-section__tags'),
  // articlesSlider: document.querySelector('.articles-slider'),
  // heroSlider: document.querySelector('.hero-slider'),
  // relatedSlider: document.querySelector('.related-slider'),


  dataHidden: document.querySelectorAll("[data-clip]"),
  search: document.querySelectorAll("[data-search]"),


  mainForms: document.querySelectorAll('.main-form'),
  burger: document.querySelectorAll('.burger'),
  mobileMenu: document.querySelector('.mobile'),
  overlay: document.querySelector('[data-overlay]'),
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
}
