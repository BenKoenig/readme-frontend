/*
import anime from "animejs";
const dots = document.querySelectorAll('.j-dot');
const menuBtn = document.querySelector('#j-menuBtn');


menuBtn.addEventListener("mouseenter", e =>  {
    menuBtn.style.marginTop = "20px";
    for(let i = 0; i < dots; i++) {
        anime({
            targets: dots[2],
            translateX: 250
        });
    }
})
*/

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
