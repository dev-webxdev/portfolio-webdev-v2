const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');

burgerBtn.addEventListener('click', () => {
  const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
  burgerBtn.setAttribute('aria-expanded', String(!isExpanded));
  navMenu.classList.toggle('active');
});