const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');

burgerBtn.addEventListener('click', () => {
  const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
  burgerBtn.setAttribute('aria-expanded', String(!isExpanded));
  navMenu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav ul li");

  function activateMenuOnScroll() {
    let scrollY = window.pageYOffset;
    const offset = 150;

    navLinks.forEach(li => li.classList.remove("active"));

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute("id");

      if (scrollY + offset >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(li => {
          const a = li.querySelector("a");
          if (a && a.getAttribute("href") === "#" + sectionId) {
            li.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateMenuOnScroll);
  activateMenuOnScroll();
});
