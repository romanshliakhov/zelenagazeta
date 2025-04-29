import { disableScroll } from "../functions/disable-scroll.js";
import { enableScroll } from "../functions/enable-scroll.js";
import { addCustomClass, removeCustomClass, removeClassInArray, fadeIn, fadeOut } from "../functions/customFunctions.js";

class ModalManager {
  constructor({ activeMode = '', fadeInTimeout = 200, fadeOutTimeout = 200 }) {
    this.overlay = document.querySelector('[data-overlay]');
    this.modalsButton = document.querySelectorAll("[data-btn-modal]");
    this.innerButtonModal = document.querySelectorAll("[data-btn-inner]");
    this.modals = document.querySelectorAll('[data-popup]');
    this.activeClass = 'active';
    this.activeMode = activeMode;
    this.mobileMenu = document.querySelector('.mobile');
    this.burger = document.querySelectorAll('.burger');
    this.innerButton = null;
    this.timeIn = fadeInTimeout;
    this.timeOut = fadeOutTimeout;
    this.bindEvents();
  }

  bindEvents() {
    this.overlay.addEventListener("click", (e) => this.overlayClickHandler(e));
    this.modalsButton.forEach(btn =>
      btn.addEventListener("click", (e) => this.buttonClickHandler(e, "data-btn-modal"))
    );
    this.innerButtonModal.forEach(btn =>
      btn.addEventListener("click", (e) => this.innerButtonClickHandler(e))
    );
  }

  findAttribute(element, attributeName) {
    let target = element;
    while (target && target !== document) {
      if (target.hasAttribute(attributeName)) {
        return target.getAttribute(attributeName);
      }
      target = target.parentNode;
    }
    return null;
  }

  buttonClickHandler(e, buttonAttribute) {
    e.preventDefault();
    const attributeValue = this.findAttribute(e.target, buttonAttribute);
    if (!attributeValue) return;
    this.openModal(attributeValue);
  }

  openModal(attributeValue) {
    const modal = this.overlay.querySelector(`[data-popup="${attributeValue}"]`);
    if (!modal) return;

    this.mobileMenu && removeCustomClass(this.mobileMenu, this.activeClass);
    this.burger && removeClassInArray(this.burger, this.activeClass);

    // Закрыть активную модалку, если она есть (но не текущую)
    const activeModal = Array.from(this.modals).find(
      m => m.classList.contains(this.activeClass) && m !== modal
    );
    if (activeModal) {
      fadeOut(activeModal, this.timeOut);
      removeCustomClass(activeModal, this.activeClass);
    }

    addCustomClass(this.overlay, this.activeClass);
    addCustomClass(this.overlay, this.activeMode);
    addCustomClass(modal, this.activeClass);
    fadeIn(modal, this.timeIn, 'flex');
    disableScroll();

    this.innerButton = modal.querySelector('.close');
  }

  closeModal() {
    removeCustomClass(this.overlay, this.activeMode);
    removeCustomClass(this.overlay, this.activeClass);
    removeClassInArray(this.modals, this.activeClass);
    this.modals.forEach(modal => fadeOut(modal, this.timeOut));
    enableScroll();
  }

  overlayClickHandler(e) {
    if (e.target === this.overlay || e.target === this.innerButton) {
      this.closeModal();
    }
  }

  innerButtonClickHandler(e) {
    e.preventDefault();

    const current = e.currentTarget;
    const prevModal = current.closest('[data-popup]');
    const prevId = this.findAttribute(prevModal, 'data-popup');
    const currentModalId = current.getAttribute("data-btn-inner");
    const currentModal = this.overlay.querySelector(`[data-popup="${currentModalId}"]`);

    if (!prevId || !currentModal) return;

    // Закрыть предыдущую модалку
    fadeOut(prevModal, this.timeOut);
    removeCustomClass(prevModal, this.activeClass);

    // Убедиться, что другие тоже не активны
    this.modals.forEach(modal => {
      if (modal !== currentModal) {
        removeCustomClass(modal, this.activeClass);
        modal.style.display = 'none';
      }
    });

    // Показать новую модалку
    fadeIn(currentModal, this.timeIn, 'flex');
    addCustomClass(currentModal, this.activeClass);
    addCustomClass(this.overlay, this.activeClass);
    disableScroll();

    this.innerButton = currentModal.querySelector('.close');
  }
}

export default ModalManager;

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  new ModalManager({ activeMode: 'mode' });
});
