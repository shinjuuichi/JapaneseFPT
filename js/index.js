const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;
const navbar = document.getElementById('main-navbar');

// Set the initial mode based on local storage or default to light
let isDarkMode = localStorage.getItem('dark-mode') === 'true';

function setMode(darkMode) {
    if (darkMode) {
        body.className = 'dark-mode';
        navbar.className = 'navbar navbar-expand-lg navbar-dark-mode';
    } else {
        body.className = 'light-mode';
        navbar.className = 'navbar navbar-expand-lg navbar-light-mode';
    }
    localStorage.setItem('dark-mode', darkMode.toString());
}

// Set the initial mode
setMode(isDarkMode);

// Add event listener to toggle button
toggleButton.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    setMode(isDarkMode);
});