const radios = document.querySelectorAll('input[name="color-theme"]');
const html = document.documentElement;

// Устанавливаем тему при загрузке
const savedTheme = localStorage.getItem('color-theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
  const radio = document.querySelector(`input[name="color-theme"][value="${savedTheme}"]`);
  if (radio) radio.checked = true;
}

// При смене темы
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    const selectedTheme = radio.value;
    html.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('color-theme', selectedTheme);
  });
});
