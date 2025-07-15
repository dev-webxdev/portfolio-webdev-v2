const themeToggle = document.getElementById('theme-toggle');
const logos = { logo: 'webxdev', logo2: 'logo' };

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  Object.entries(logos).forEach(([id, name]) => {
    document.getElementById(id).src = `assets/images/${theme}/${name}.svg`;
  });
  themeToggle.checked = (theme === 'dark');
  themeToggle.setAttribute('aria-checked', themeToggle.checked);
}

setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => setTheme(e.matches ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  setTheme(current === 'dark' ? 'light' : 'dark');
});