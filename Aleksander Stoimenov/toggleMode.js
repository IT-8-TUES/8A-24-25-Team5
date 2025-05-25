function toggleTheme() {
    const lightTheme = 'style_light.css';
    const darkTheme = 'styles.css';

    const themeLink = document.getElementById('theme-style');
    const toggle = document.getElementById('mode-toggle');

    window.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme === 'dark') {
        themeLink.setAttribute('href', darkTheme);
        toggle.checked = true;
      } else {
        themeLink.setAttribute('href', lightTheme);
        toggle.checked = false;
      }
    });

    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        themeLink.setAttribute('href', darkTheme);
        localStorage.setItem('theme', 'dark');
      } else {
        themeLink.setAttribute('href', lightTheme);
        localStorage.setItem('theme', 'light');
      }
    }
    )}