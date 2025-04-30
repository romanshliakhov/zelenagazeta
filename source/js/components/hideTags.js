document.addEventListener('DOMContentLoaded', function () {
    const tagList = document.querySelector('.tags-section__items');
    if (!tagList) return;
  
    const tagItems = tagList.querySelectorAll('li');
    if (tagItems.length === 0) return;
  
    const moreBtn = tagList.querySelector('.tag--more')?.closest('li');
    const visibleCount = 5;
  
    tagItems.forEach((li, index) => {
      if (index > visibleCount && li !== moreBtn) {
        li.classList.add('hidden');
      }
    });
  
    if (moreBtn) {
      moreBtn.addEventListener('click', () => {
        tagItems.forEach(li => li.classList.remove('hidden'));
        moreBtn.remove();
      });
    }
  });
  