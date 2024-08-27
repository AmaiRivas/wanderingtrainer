const $ = selector => document.querySelector(selector);
const $$ = selectorAll => document.querySelectorAll(selectorAll);

const $customSelect = $('.custom-select');
const $items = $$('#item-list .item');
const $selectedOptionContainer = $('#selected-option-container');
const $selectedLabel = $('#selected-label');
const $optionsContainer = $('.options-container');

$selectedOptionContainer.addEventListener('click', toggleOptions);
$optionsContainer.addEventListener('click', handleOptionSelection);
document.addEventListener('click', closeOptions);

function toggleOptions() {
  $customSelect.classList.toggle('open');
}

function handleOptionSelection(event) {
  const $option = event.target.closest('.option');
  if ($option) {
    const $imgElement = $option.querySelector('img');
    const label = $option.querySelector('span').textContent;
    const value = $option.getAttribute('data-value');

    const $existingImg = $selectedOptionContainer.querySelector('img');
    if ($existingImg) {
      $existingImg.remove();
    }

    if ($imgElement) {
      const $newImg = document.createElement('img');
      $newImg.src = $imgElement.src;
      $newImg.alt = label;
      $newImg.style.width = '24px';
      $newImg.style.height = '24px';
      $newImg.style.marginRight = '8px';
      $selectedOptionContainer.insertBefore($newImg, $selectedLabel);
    }

    $selectedLabel.textContent = label;
    $customSelect.classList.remove('open');

    $items.forEach($item => {
      const itemCategory = $item.getAttribute('data-category');
      $item.style.display = value === '' || itemCategory === value ? '' : 'none';
    });
  }
}

function closeOptions(event) {
  if (!$customSelect.contains(event.target)) {
    $customSelect.classList.remove('open');
  }
}
