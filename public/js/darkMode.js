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
    dark_mode.classList.toggle("active_dark");
    document.body.classList.toggle("active_dark");

    // Alternar entre los íconos
    if (themeIcon.classList.contains("fa-sun")) {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    } else {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }

    // Guardar el estado en localStorage
    saveDarkModeStorage(document.body.classList.contains("active_dark"));
  } catch (error) {
    console.error("Error al alternar el modo oscuro:", error);
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

      // Configurar el ícono según el estado guardado
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