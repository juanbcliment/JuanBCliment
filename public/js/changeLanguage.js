const languageButton = document.querySelector(".switch_language");
const textsToChange = document.querySelectorAll("[data-section]");


const changeLanguage = async (lang) => {
  try {
    const requestJson = await fetch(`/public/languages/${lang}.json`);
    const texts = await requestJson.json();

    textsToChange.forEach((textToChange) => {
      const section = textToChange.dataset.section;
      const value = textToChange.dataset.value;
      textToChange.innerHTML = texts[section][value];
    });


    localStorage.setItem("selectedLanguage", lang);
  } catch (error) {
    console.error("Error al cargar el archivo de idioma:", error);
  }
};


document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("selectedLanguage");
  const defaultLanguage = "es";

  if (savedLanguage) {
    changeLanguage(savedLanguage);

    if (savedLanguage === "en") {
      languageButton.classList.add("active");
    }
  } else {
    changeLanguage(defaultLanguage);
  }
});

languageButton.addEventListener("click", () => {
  const isActive = languageButton.classList.toggle("active");

  if (isActive) {
    changeLanguage("en");
  } else {
    changeLanguage("es");
  }
});