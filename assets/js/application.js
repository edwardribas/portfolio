// Menu consts
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const back = document.querySelector('#back');

// Nav and back toggler
const change = () => [nav, back].forEach(e=>e.classList.toggle("active"));

// Calls change function when clicked.
burger.onclick = back.onclick = change;

// Exit menu with ESC key
document.onkeydown = e => {
    if (e.key == 'Escape' && nav.classList.contains("active")) change();
};