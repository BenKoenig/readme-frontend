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
