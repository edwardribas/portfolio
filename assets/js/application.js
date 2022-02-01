// Menu consts
const [burger, nav, back, body] = [
    document.querySelector('.burger'),
    document.querySelector('nav'),
    document.querySelector('#back'),
    document.body
]

// Nav, back, body toggler
const change = () => [nav, back].forEach(e=>e.classList.toggle("active"));

// Calls change function when clicked.
[burger, back].forEach(e=>e.onclick = change);

// Exit menu with ESC key
document.onkeydown = e => {
    if(e.code === "Escape"){
        if(nav.classList.contains("active")){
            change();
        }
    }
}

