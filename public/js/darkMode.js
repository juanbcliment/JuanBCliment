

const dark_mode = document.querySelector(".switch_dark");

dark_mode.addEventListener("click", func_dark => {
    dark_mode.classList.toggle("active_dark");
    document.body.classList.toggle("active_dark")
} )

