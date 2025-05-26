const languageButton = document.querySelector(".switch_language");
const textsToChange = document.querySelectorAll("[data-section]");
const cvLink = document.querySelector("#cv-link");

const changeLanguage = async (lang) => {
  try {
    
    const currentScrollPosition = window.scrollY;
    document.body.style.visibility = "hidden";

    const requestJson = await fetch(`public/languages/${lang}.json`);
    const texts = await requestJson.json();

    textsToChange.forEach((textToChange) => {
      const section = textToChange.dataset.section;
      const value = textToChange.dataset.value;
      textToChange.innerHTML = texts[section][value];
    });

    if (texts.cv && texts.cv["cv-href"]) {
      cvLink.href = texts.cv["cv-href"];
  }

    window.scrollTo(0, currentScrollPosition);
    document.body.style.visibility = "visible";


    localStorage.setItem("selectedLanguage", lang);
  } catch (error) {
    console.error("Error al cargar el archivo de idioma:", error);
    document.body.style.visibility = "visible";
  }
};

const getBrowserLanguage = () => {
  const navLang = navigator.language || navigator.userLanguage; 
  const lang = navLang.split('-')[0].toLowerCase(); 
};

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("selectedLanguage");
  const defaultLanguage = "en";

  if (savedLanguage) {
    changeLanguage(savedLanguage);
    if (savedLanguage === "en") {
      languageButton.classList.add("active");
    }
  } else { 
    const browserLanguage = getBrowserLanguage();
    if (browserLanguage === "en" || browserLanguage === "es") {
        defaultLanguage = browserLanguage; 
    }
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
