/* Theme Toggler */

const [toggler, moon, sun] = [
    document.querySelector("#nav-btn ul"),
    document.querySelector("#moon"),
    document.querySelector("#sun")
]

const changeToLight = () => {sun.style.display = "none", moon.style.display = "block"};
const changeToDark = () => {sun.style.display = "block", moon.style.display = "none"};
const setItem = e => localStorage.setItem("default", e)

// Keep theme setting in local storage
if(localStorage.getItem("default") == null){
    setItem("light")
}
if(localStorage.getItem("default") == "light"){
    document.body.classList.remove("dark");
    changeToLight();
}else{
    document.body.classList.add("dark");
    changeToDark();
}

// Alternate the theme
toggler.onclick = () => {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        setItem("dark");
        changeToDark();
    }else{
        setItem("light");
        changeToLight();
    }
}