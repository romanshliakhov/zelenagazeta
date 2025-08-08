const videoBox = document.querySelector('.article-section__video');

if (videoBox) {
  const poster = videoBox.querySelector('.article-section__video-poster');
  const btnPlay = videoBox.querySelector('.article-section__video-controls');
  const videoPlayer = videoBox.querySelector('.article-section__video-player');
  const iframe = videoBox.querySelector('.article-section__video-player iframe');
  const originalSrc = iframe.getAttribute('src');

  btnPlay.addEventListener('click', () => {
    const newSrc = originalSrc.includes('?') 
      ? `${originalSrc}&autoplay=1`
      : `${originalSrc}?autoplay=1`;

    iframe.setAttribute('src', newSrc);

    videoPlayer.classList.add('active');
    poster.classList.add('active');
    btnPlay.classList.add('active');
  });
}
