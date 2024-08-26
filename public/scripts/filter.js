// public/scripts/filter.js

document.addEventListener('DOMContentLoaded', () => {
  const customSelect = document.querySelector('.custom-select');
  const selectedOptionContainer = customSelect.querySelector('#selected-option-container');
  const selectedLabel = customSelect.querySelector('#selected-label');
  const optionsContainer = customSelect.querySelector('.options-container');
  const items = document.querySelectorAll('#item-list .item');

  selectedOptionContainer.addEventListener('click', () => {
    customSelect.classList.toggle('open');
  });

  optionsContainer.addEventListener('click', (event) => {
    const option = event.target.closest('.option');
    if (option) {
      const imgElement = option.querySelector('img');
      const label = option.querySelector('span').textContent;
      const value = option.getAttribute('data-value');

      const existingImg = selectedOptionContainer.querySelector('img');
      if (existingImg) {
        existingImg.remove();
      }

      if (imgElement) {
        const newImg = document.createElement('img');
        newImg.src = imgElement.src;
        newImg.alt = label;
        newImg.style.width = '24px';
        newImg.style.height = '24px';
        newImg.style.marginRight = '8px';
        selectedOptionContainer.insertBefore(newImg, selectedLabel);
      }

      selectedLabel.textContent = label;

      customSelect.classList.remove('open');

      //MAIN FILTERING ALGORITHM
      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (value === '' || itemCategory === value) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }
  });

  document.addEventListener('click', (event) => {
    if (!customSelect.contains(event.target)) {
      customSelect.classList.remove('open');
    }
  });
});
