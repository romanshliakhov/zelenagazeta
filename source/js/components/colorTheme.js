const radios = document.querySelectorAll('input[name="color-theme"]');
const body = document.body;

// Загружаем сохранённую тему
const savedTheme = localStorage.getItem('color-theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
  document.querySelector(`input[value="${savedTheme}"]`).checked = true;
}

// При смене темы
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    const selectedTheme = radio.value;
    body.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('color-theme', selectedTheme);
  });
});
