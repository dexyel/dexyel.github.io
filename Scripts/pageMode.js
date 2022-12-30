const aboutButton = document.querySelector("#about");
const contactButton = document.querySelector("#contact");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");

let pageMode = false;
let pageType = "";

aboutButton.addEventListener("click", openPage);
contactButton.addEventListener("click", openPage);

function openPage(event) {
    event.preventDefault();
    
    var button = event.target;

    if (button.id === "contact" || button.id === "about")
    {
        if (!pageMode)   
        {   
            wrapper.addEventListener("transitionend", wrapperBackgroundPage);
            wrapper.classList.add("wrapper-page");  
                
            function wrapperBackgroundPage() {
                wrapper.removeEventListener("transitionend", wrapperBackgroundPage);
                wrapperBackground.classList.add("wrapper-background-page");                
            }

            pageMode = true;

            if (button.id === "contact")
            {
                pageType = "contact";    
                contact.style.visibility = "visible";
        
                aboutButton.classList.remove("menu-indicator");
                contactButton.classList.add("menu-indicator");
            }
            
            if (button.id === "about")
            {
                pageType = "about";    
                about.style.visibility = "visible";
                
                contactButton.classList.remove("menu-indicator");
                aboutButton.classList.add("menu-indicator");
            }
        }
        else
        {
            if (pageType != button.id)
            {
                switchPages(button.id);
            }
        }
    }
}    

function closePage() {
    wrapperBackground.classList.remove("wrapper-background-page");
    wrapper.classList.remove("wrapper-page");
    aboutButton.classList.remove("menu-indicator");
    contactButton.classList.remove("menu-indicator");
    pageMode = false;
    pageType = "";
}

function switchPages(target) {
    wrapperBackground.classList.remove("wrapper-background-page");
    wrapperBackground.addEventListener("transitionend", hidePages);

    function hidePages() {
        wrapperBackground.removeEventListener("transitionend", hidePages);
        console.log("hidePages called");
        if (pageType === "contact") {
            about.style.visibility = "hidden";
            contact.style.visibility = "visible";
            contactButton.classList.add("menu-indicator");
            aboutButton.classList.remove("menu-indicator");
        }

        else {
            console.log("about");
            contact.style.visibility = "hidden";
            about.style.visibility = "visible";
            aboutButton.classList.add("menu-indicator");
            contactButton.classList.remove("menu-indicator");            
        }
    }
    
    pageType = target;

    wrapperBackground.addEventListener("transitionend", wrapperBackgroundPage);    

    function wrapperBackgroundPage() {
        wrapperBackground.removeEventListener("transitionend", wrapperBackgroundPage);
        wrapperBackground.classList.add("wrapper-background-page");                
    }
}