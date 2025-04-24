import vars from "../_vars.js";
import { toggleCustomClass } from "../functions/customFunctions";

document.addEventListener("DOMContentLoaded", function () {
  const { dataHidden } = vars;

if (dataHidden) {
    dataHidden.forEach(function (item) {
      const btn = item.querySelector("[data-clip-btn]");
      const box = item.querySelector("[data-clip-item]");

      const computedStyle = window.getComputedStyle(box);
      const originalHeight = parseInt(
        computedStyle.getPropertyValue("max-height")
      );

      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const isOpen = box.getAttribute("data-clip-item") === "true";

        if (!isOpen) {
          box.style.maxHeight = box.scrollHeight + "px";
          toggleCustomClass(btn, "active");
          setTimeout(function () {
            box.style.overflow = "hidden";
          }, 450);
          btn.querySelector('span:last-of-type').textContent = " ЗГОРНУТИ";
        } else {
          box.style.maxHeight = originalHeight + "px";
          toggleCustomClass(btn, "active");
          box.style.overflow = "hidden";
          btn.querySelector('span:last-of-type').textContent = " РОЗГОРНУТИ";
        }

        box.setAttribute("data-clip-item", !isOpen);
      });

      box.style.transition = "max-height 0.2s linear";
    });
  }
});