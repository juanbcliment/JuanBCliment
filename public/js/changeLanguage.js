const language = document.querySelector(".switch_language");
let cont = 0;
language.addEventListener("click", func_languag => {
     let f = language.classList.toggle("active");
    if (f) {
      console.log(f)
    }
    
} )

