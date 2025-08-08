document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const startPopupPodcast = document.querySelector('.starting-podcasts');

    if (startPopupPodcast) {
      startPopupPodcast.click();
    }
  }, 100);
});