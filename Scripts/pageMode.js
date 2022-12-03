const aboutMeButton = document.querySelector("#aboutMe");
const contactButton = document.querySelector("#contact");
const aboutMe = document.querySelector(".about-me");
const contact = document.querySelector(".contact");

let pageMode = false;
let pageType = "";

aboutMeButton.addEventListener("click", openPage);
contactButton.addEventListener("click", openPage);

function openPage(event) {
    event.preventDefault();
    
    var button = event.target;

    if (!pageMode)
    {
        if (button.id === "contact" || button.id === "aboutMe")
        {
            wrapper.addEventListener("transitionend", wrapperBackgroundPage);
            wrapper.classList.add("wrapper-page");  
            
            function wrapperBackgroundPage() {
                wrapper.removeEventListener("transitionend", wrapperBackgroundPage);
                wrapperBackground.classList.add("wrapper-background-page");                
            }

            pageMode = true;
        }
    }

    if (button.id === "contact" && pageType != "contact")
    {
        pageType = "contact";

        contact.style.display = "flex";
        aboutMe.style.display = "none";

        aboutMeButton.classList.remove("menu-indicator");
        contactButton.classList.add("menu-indicator");
    }

    if (button.id === "aboutMe" && pageType != "about")
    {
        pageType = "about";
        
        contact.style.display = "none";
        aboutMe.style.display = "block";
        
        contactButton.classList.remove("menu-indicator");
        aboutMeButton.classList.add("menu-indicator");
    }
}

function closePage() {
    wrapperBackground.classList.remove("wrapper-background-page");
    wrapper.classList.remove("wrapper-page");
    aboutMeButton.classList.remove("menu-indicator");
    contactButton.classList.remove("menu-indicator");
    pageMode = false;
    pageType = "";
}