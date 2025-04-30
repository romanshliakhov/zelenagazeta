const referralCards = document.querySelectorAll(".share-form");

referralCards && referralCards.forEach(function (card) {
  const valueEl = card.querySelector("[data-value]");
  const copyBtn = card.querySelector(".copy");

  copyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const value = valueEl.getAttribute("data-value");
    navigator.clipboard.writeText(value).then(() => {
      valueEl.style.color = "#C3E9C7";
    }).catch(err => {
      valueEl.style.color = "#D14038";
    });
  });
});