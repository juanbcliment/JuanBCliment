

const dark_mode = document.querySelector(".switch_dark");



document.addEventListener("DOMContentLoaded", e =>{
    uploadDarkModeLocalStorage()
    dark_mode.addEventListener("click", toggleDarkMode)
})


function toggleDarkMode(){
    dark_mode.classList.toggle("active_dark");
    document.body.classList.toggle("active_dark")
    saveDarkModeStorage(dark_mode.classList.contains("active_dark"))
}

function saveDarkModeStorage(estado){
    localStorage.setItem("darkMode", estado)
}
function uploadDarkModeLocalStorage(){
    const darkModeSave = localStorage.getItem("darkMode") === "true";
    if (darkModeSave){
        dark_mode.classList.add("active_dark");
        document.body.classList.add("active_dark")
    }
}