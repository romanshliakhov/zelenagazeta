document.addEventListener('DOMContentLoaded', () => {
    const productBlocks = document.querySelectorAll('.product-btns');
    if (productBlocks.length === 0) {
      return;
    }

    document.body.addEventListener('click', (event) => {
      if (event.target.closest('.product-btns__plus')) {
        const input = event.target
          .closest('.product-btns')
          .querySelector('.product-btns__quantity');
        if (input) {
          const currentValue = parseInt(input.value, 10) || 0;
          input.value = currentValue + 1;
        }
      }

      if (event.target.closest('.product-btns__minus')) {
        const input = event.target
          .closest('.product-btns')
          .querySelector('.product-btns__quantity');
        if (input) {
          const currentValue = parseInt(input.value, 10) || 0;
          input.value = currentValue > 0 ? currentValue - 1 : 0;
        }
      }
    });
  });
  