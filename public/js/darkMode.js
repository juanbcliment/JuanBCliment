const dark_mode = document.querySelector(".switch_dark");
const themeIcon = document.getElementById("theme-icon");

document.addEventListener("DOMContentLoaded", (e) => {
  try {
    uploadDarkModeLocalStorage();
    dark_mode.addEventListener("click", toggleDarkMode);
  } catch (error) {
    console.error("Error al inicializar el modo oscuro:", error);
  }
});

function toggleDarkMode() {
  try {

    const currentScrollPosition = window.scrollY;
    console.log("Scroll guardado (modo oscuro):", currentScrollPosition);
    document.body.style.visibility = "hidden";

    dark_mode.classList.toggle("active_dark");
    document.body.classList.toggle("active_dark");

   
    if (themeIcon.classList.contains("fa-sun")) {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    } else {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }

    
    saveDarkModeStorage(document.body.classList.contains("active_dark"));

     requestAnimationFrame(() => {
      requestAnimationFrame(() => { 
        console.log("Intentando scroll (modo oscuro) a:", currentScrollPosition); 
        window.scrollTo(0, currentScrollPosition);
        document.body.style.visibility = "visible";
      });
    });

  } catch (error) {
    console.error("Error al alternar el modo oscuro:", error);
     document.body.style.visibility = "visible";
  }
}

function saveDarkModeStorage(estado) {
  try {
    localStorage.setItem("darkMode", estado);
  } catch (error) {
    console.error("Error al guardar el estado del modo oscuro en localStorage:", error);
  }
}

function uploadDarkModeLocalStorage() {
  try {
    const darkModeSave = localStorage.getItem("darkMode") === "true";
    if (darkModeSave) {
      dark_mode.classList.add("active_dark");
      document.body.classList.add("active_dark");

      
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    } else {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }
  } catch (error) {
    console.error("Error al cargar el estado del modo oscuro desde localStorage:", error);
  }
}