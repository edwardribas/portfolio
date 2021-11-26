// responsive menu
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const back = document.querySelector("#back");
const html = document.querySelector("html")
burger.onclick = () => {
    nav.classList.toggle("active");
    back.classList.toggle("active");
};
back.onclick = () => {
    if(nav.classList.contains("active")){
        nav.classList.remove("active");
        back.classList.remove("active");
    }
}

// dark mode toggler

const togBtn = document.querySelector("#nav-btn ul");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
}
var localData = localStorage.getItem("theme")

if(localData == "light"){
    document.body.classList.remove("dark")
    sun.style.display = "none";
    moon.style.display = "block"
}else{
    document.body.classList.add("dark")
    sun.style.display = "block";
    moon.style.display = "none"
}

togBtn.onclick = () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark")
        sun.style.display = "block";
        moon.style.display = "none"
    }else{
        localStorage.setItem("theme", "light")
        sun.style.display = "none";
        moon.style.display = "block"
    }
}