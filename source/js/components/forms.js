import vars from "../_vars.js";

const { mainForms } = vars;

mainForms &&
  mainForms.forEach((form) => {
    form.querySelectorAll(".main-form__field").forEach((field) => {
      const deleteBtn = field.querySelector(".main-form__delete");
      const input = field.querySelector("input");

      if (deleteBtn && input) {
        deleteBtn.addEventListener("click", (e) => {
          e.preventDefault();
          input.value = "";
        });
      }
    });
  });
