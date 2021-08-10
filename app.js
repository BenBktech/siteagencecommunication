let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let liens = document.getElementsByClassName('menu__link');

for(let i = 0 ; i < liens.length ; i++) {
    liens[i].addEventListener('click', function() {
        body.classList.toggle('open');
    })
}

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

let tl = gsap.timeline();

tl.from('.accueil', {
    duration: 1.25,
    filter: "blur(10px)"
})

tl.from('.overlay', {
    duration: 0.75,
    x: '-100%'
})

tl.from('.logo, .menu, .toggle', {
    duration: 0.75,
    opacity: 0
});

tl.from('.accueil__text__top, .accueil__text__mid, .accueil__text__bot', {
    duration: 0.75,
    opacity: 0
})

tl.from('.accueil__text__top .sep', {
    duration: 0.75,
    width: '0px'
})