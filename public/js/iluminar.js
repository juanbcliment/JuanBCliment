
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu__link"); 
    const sections = document.querySelectorAll("section"); 

   
    function activateNavLink(id) {
        menuLinks.forEach(link => {
            link.classList.remove("active-nav-link"); 
        });
        const activeLink = document.querySelector(`a[href="#${id}"]`);
        if (activeLink) {
            activeLink.classList.add("active-nav-link");
        }
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    activateNavLink(id);
                }
            });
        },
        {
            threshold: 0.5, 
        }
    );

    sections.forEach((section) => {
        observer.observe(section); 
    });

   
    const initialSection = document.querySelector("section"); 
    if (initialSection) {
        activateNavLink(initialSection.id);
    }
});