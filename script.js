
let theme = localStorage.getItem('theme');

if (theme == null) {
    setThemeMode('light-mode');
} else {
    setThemeMode(theme);
}


const themeOptionsWrapper = document.querySelector('#theme-options-wrapper');

themeOptionsWrapper.addEventListener('click', function(e) {
    const element = e.target;
    if(element.classList.contains('theme-dot')) {
        let mode = element.id;
        setThemeMode(mode);
    }
});

function setThemeMode(mode) {
    if(mode === 'light-mode') {
        document.getElementById('theme-style').href = "default.css";
    }

    if(mode === 'blue-mode') {
        document.getElementById('theme-style').href = "blue.css";
    }

    if(mode === 'green-mode') {
        document.getElementById('theme-style').href = "green.css";
    }

    if(mode === 'purple-mode') {
        document.getElementById('theme-style').href = "purple.css";
    }

    localStorage.setItem('theme', mode);
}