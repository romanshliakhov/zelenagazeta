import vars from "../_vars.js";
import { addCustomClass, removeCustomClass } from "../functions/customFunctions";

const { search } = vars;

document.addEventListener("DOMContentLoaded", () => {
    search && search.forEach((container) => {
        const searchBtn = container.querySelector(".search-form__btn");
        const searchWrapper = container.querySelector(".search-wrapper");
        const input = container.querySelector(".search-form__input");

        if (searchBtn && searchWrapper) {
            searchBtn.addEventListener("click", (e) => {
                e.preventDefault();

                if (searchWrapper.classList.contains("active")) {
                    removeCustomClass(searchWrapper, "active");
                    removeCustomClass(container, "active");
                    removeCustomClass(container, "result");
                } else {
                    addCustomClass(searchWrapper, "active");
                    addCustomClass(container, "active");
                }
            });
        }

            input.addEventListener('change', function(e){
                addCustomClass(container, "result");
            })
    });

    document.addEventListener("click", (e) => {
        search && search.forEach((container) => {
            const searchWrapper = container.querySelector(".search-wrapper");
            const searchBtn = container.querySelector(".search-form__btn");
            const input = container.querySelector(".search-form__input");

            if (
                searchWrapper &&
                !searchWrapper.contains(e.target) &&
                !searchBtn.contains(e.target) &&
                !input.contains(e.target)
            ) {
                removeCustomClass(searchWrapper, "active");
                removeCustomClass(container, "active");
                removeCustomClass(container, "result");
            }
        });
    });
});
