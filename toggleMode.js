function toggleTheme() {
    const themeLink = document.getElementById('theme-style');
    const currentTheme = themeLink.getAttribute('href');

    if (currentTheme === 'styles.css') {
        themeLink.setAttribute('href', 'light_style.css');
        localStorage.setItem('theme', 'light');
    } else {
        themeLink.setAttribute('href', 'styles.css');
        localStorage.setItem('theme', 'dark');
    }
}