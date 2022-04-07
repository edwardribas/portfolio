// Variables
const icon = document.querySelector("#toggler");
const localTheme = localStorage.getItem('theme');

// Application
const setItem = value => localStorage.setItem('theme', value);
const toggleClass = n => icon.classList = `fa-solid ${n}`;

const changeTheme = bool => {
    document.body.classList.toggle('dark', bool);
    setItem(bool ? 'dark' : 'light');
    toggleClass(bool ? 'fa-sun' : 'fa-moon')
}

if (!localTheme || localTheme == 'light') changeTheme(0)
else changeTheme(1);

icon.onclick = () => changeTheme(!document.body.classList.contains("dark"));

// Sistemas de cores baseados nas preferências do sistema

// window.onload = () => {
//     if(window.matchMedia('(prefers-color-scheme: dark)').matches){
//         changeTheme(1)
//     }else{
//         changeTheme(0)
//     }
// }
// window.matchMedia('(prefers-color-scheme: dark)').onchange = () => {
//     if(window.matchMedia('(prefers-color-scheme: dark)').matches){
//         changeTheme(1)
//     }else{
//         changeTheme(0)
//     }
// }