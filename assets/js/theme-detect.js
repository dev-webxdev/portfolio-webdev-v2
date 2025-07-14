function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    /*
    document.getElementById('logo').src =
      theme === 'dark'
        ? 'assets/images/dark/logo.svg'
        : 'assets/images/light/logo.svg';
    */
  }
  
  function applyPreferredTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
  applyPreferredTheme();
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    setTheme(e.matches ? 'dark' : 'light');
  });
  
  /*
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
  */