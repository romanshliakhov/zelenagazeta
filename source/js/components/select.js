import { addCustomClass, toggleCustomClass, removeCustomClass } from "../functions/customFunctions";

const closeSelect = function (selectBody, select, className = "active") {
  selectBody.style.height = 0;
  removeCustomClass(select, className);
};

const openSelect = function (selectBody, select, className = "active") {
  selectBody.style.height = "fit-content";
  addCustomClass(select, className);
};

const checkIsSelectOpen = function (select) {
  return select.classList.contains("active");
};

const select = document.querySelectorAll("[data-select]");
if (select.length) {
  select.forEach((item) => {
    const selectCurrent = item.querySelector(".select__current");
    const selectInput = item.querySelector(".select__input");
    const selectBody = item.querySelector(".select__body");

    // svg элементы делаем некликабельными
    const selectOptions = [...item.querySelectorAll("svg")];
    selectOptions.forEach((option) => {
      option.style.pointerEvents = "none";
    });

    // сохраняем placeholder из разметки
    const placeholderEl = selectCurrent.querySelector(".placeholder");
    const placeholderText = placeholderEl ? placeholderEl.outerHTML : "";

    // инициализация value
    if (selectInput) {
      const currentId = selectCurrent.getAttribute("data-id");
      if (currentId) {
        selectInput.setAttribute("value", currentId);
      } else {
        selectInput.setAttribute("value", "");
        selectCurrent.innerHTML = placeholderText;
      }
    }

    item.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() !== "a") {
        e.preventDefault();
      }

      const isSelectOpen = checkIsSelectOpen(item);
      const el = e.target.dataset.type;
      const innerSelect = e.target.textContent?.trim();
      const items = item.querySelectorAll(`.select__list [data-id]`);
      const currentItem = item.querySelector(
        `.select__list [data-id='${selectInput.getAttribute("value")}']`
      );

      if (el === "option") {
        selectCurrent.innerHTML = innerSelect;
        selectInput.setAttribute("value", e.target.getAttribute("data-id"));
        selectCurrent.setAttribute("data-id", e.target.getAttribute("data-id"));
      }

      items.forEach((opt) => (opt.style.display = "flex"));
      if (currentItem) currentItem.style.display = "none";

      if (isSelectOpen) {
        closeSelect(selectBody, item);
      } else {
        openSelect(selectBody, item);
      }
    });

    document.addEventListener("click", function (event) {
      if (!item.contains(event.target) && checkIsSelectOpen(item)) {
        closeSelect(selectBody, item);
      }
    });

    // 👇 Хелпер для сброса селекта и возврата placeholder
    item.resetSelect = function () {
      selectInput.value = "";
      selectCurrent.setAttribute("data-id", "");
      selectCurrent.innerHTML = placeholderText;
    };
  });
}
