const dark_mode = document.querySelector(".switch_dark");

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
    document.body.style.visibility = "hidden";

  
    dark_mode.classList.toggle("active_dark");
    document.body.classList.toggle("active_dark");

  
    saveDarkModeStorage(document.body.classList.contains("active_dark"));

   
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
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
    }
    
  } catch (error) {
    console.error("Error al cargar el estado del modo oscuro desde localStorage:", error);
  }
}