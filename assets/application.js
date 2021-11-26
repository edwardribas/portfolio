// Website Menu

const [burger, nav, back, body] = [
    document.querySelector('.burger'),
    document.querySelector('nav'),
    document.querySelector('#back'),
    document.body
]

const change = () => [nav, back, body].forEach(e=>e.classList.toggle("active"));
[burger, back].forEach(e=>e.onclick = change);

// Theme Toggler

const [toggler, moon, sun] = [
    document.querySelector("#nav-btn ul"),
    document.querySelector("#moon"),
    document.querySelector("#sun")
]

const changeToLight = () => {sun.style.display = "none", moon.style.display = "block"};
const changeToDark = () => {sun.style.display = "block", moon.style.display = "none"};

// Keep theme setting in local storage
if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
}
if(localStorage.getItem("theme") == "light"){
    document.body.classList.remove("dark")
    changeToLight();
}else{
    document.body.classList.add("dark")
    changeToDark();
}

// Alternate the theme
toggler.onclick = () => {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("theme", "dark")
        changeToDark();
    }else{
        localStorage.setItem("theme", "light")
        changeToLight();
    }
}