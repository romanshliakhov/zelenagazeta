document.addEventListener("DOMContentLoaded", () => {
    const cookiesBlock = document.querySelector(".cookies");
    if (!cookiesBlock) return; 
  
    const applyBtn = cookiesBlock.querySelector(".cookies__apply");
    const cancelBtn = cookiesBlock.querySelector(".cookies__cancel");
  
    const cookiesAccepted = localStorage.getItem("cookiesConsent");
    if (!cookiesAccepted) {
      cookiesBlock.style.display = "block";
    } else {
      cookiesBlock.style.display = "none";
    }
  
    const closeCookiesBlock = (consent) => {
      cookiesBlock.style.opacity = "0";
      cookiesBlock.style.pointerEvents = "none";
      setTimeout(() => {
        cookiesBlock.style.display = "none";
      }, 300);
  
      localStorage.setItem("cookiesConsent", consent);
    };
  
    if (applyBtn) {
      applyBtn.addEventListener("click", () => closeCookiesBlock("accepted"));
    }
  
    if (cancelBtn) {
      cancelBtn.addEventListener("click", () => closeCookiesBlock("rejected"));
    }
  });
  