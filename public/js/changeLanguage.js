
const language = document.querySelector(".switch_language");

language.addEventListener("click", func_languag => {
  let activeLanguage_bool = language.classList.toggle("active");
  const textsToChange = document.querySelectorAll("[data-section]");
   const changeLanguage = async lang => {
      const requestJson = await fetch(`../../public/languages/${lang}.json`);
      const texts = await requestJson.json();
      for (const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value]
      }   
  } 
  if (activeLanguage_bool) {
    changeLanguage("en")
      }else{
        changeLanguage('es')
      }     
 
})
