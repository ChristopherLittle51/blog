document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const fontToggle = document.getElementById('fontToggle');
    const fontToggleText = fontToggle.querySelector('.font-toggle-text');
    const body = document.body;
    const darkModeIcon = darkModeToggle.querySelector('i');

    function updateDarkModeButton() {
        if (body.classList.contains('dark-mode')) {
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
            darkModeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
            darkModeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    function updateFontToggleButton() {
        if (body.classList.contains('font-sans-serif')) {
            // Body IS sans-serif, button text should be handwritten to indicate switch TO handwritten
            fontToggleText.style.fontFamily = "'Nothing You Could Do', 'Caveat', 'Kalam', 'Handlee', 'Indie Flower', 'Patrick Hand', cursive";
            fontToggleText.textContent = 'S'; // Keep 'S', but its font changes
            fontToggle.setAttribute('aria-label', 'Switch to handwritten font');
        } else {
            // Body IS NOT sans-serif (i.e., handwritten), button text should be sans-serif to indicate switch TO sans-serif
            fontToggleText.style.fontFamily = "'Helvetica Neue', 'Segoe UI', Helvetica, Arial, sans-serif";
            fontToggleText.textContent = 'S'; // Keep 'S', but its font changes
            fontToggle.setAttribute('aria-label', 'Switch to sans-serif font');
        }
    }

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }
    updateDarkModeButton(); // Set initial icon

    // Check for saved font preference
    if (localStorage.getItem('fontStyle') === 'sans-serif') {
        body.classList.add('font-sans-serif');
    }
    updateFontToggleButton(); // Set initial font style for button

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
        updateDarkModeButton();
    });

    fontToggle.addEventListener('click', function() {
        body.classList.toggle('font-sans-serif');
        if (body.classList.contains('font-sans-serif')) {
            localStorage.setItem('fontStyle', 'sans-serif');
        } else {
            localStorage.setItem('fontStyle', 'handwritten');
        }
        updateFontToggleButton();
    });
});
