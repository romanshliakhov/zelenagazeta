document.addEventListener("DOMContentLoaded", () => {
  const cookiesBlock = document.querySelector(".cookies");
  if (!cookiesBlock) return;

  const applyBtn = cookiesBlock.querySelector(".cookies__apply");
  const cancelBtn = cookiesBlock.querySelector(".cookies__cancel");

  const cookiesAccepted = localStorage.getItem("cookiesConsent");

  // Только если пользователь не согласился — показываем
  if (!cookiesAccepted) {
    cookiesBlock.classList.add("visible");
  }

  const closeCookiesBlock = () => {
    cookiesBlock.classList.remove("visible");
  };

  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesConsent", "accepted");
      closeCookiesBlock();
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      closeCookiesBlock(); // ничего не сохраняем
    });
  }
});
