const themeButton = document.querySelector(".fa-circle-half-stroke");
const r = document.querySelector(":root");
const wrapper = document.querySelector(".wrapper");
const wrapperBackground = document.querySelector(".wrapper-background");
const checkbox = document.querySelector("#active");
const blueButton = document.querySelector("#blueButton");
const greenButton = document.querySelector("#greenButton");
const orangeButton = document.querySelector("#orangeButton");
const purpleButton = document.querySelector("#purpleButton");
const aboutMeButton = document.querySelector("#aboutMe");
const contactButton = document.querySelector("#contact");
const aboutMe = document.querySelector(".about-me");
const contact = document.querySelector(".contact");

const mainColors = ["#F2F2F2","#0D0D0D"];
const blueTheme = ["#3084F2", "#599DF5"];
const greenTheme = ["#85D982", "#9DE19B"];
const orangeTheme = ["#F2A766", "#F5B985"];
const purpleTheme = ["#C966F2", "#D485F5"];

let activeTheme = blueTheme;
let isOpened = false;
let pageMode = false;
let pageType = "";

document.addEventListener("DOMContentLoaded", setThemeColors);
themeButton.addEventListener("click", switchDarkMode);
blueButton.addEventListener("click", switchBlue);
greenButton.addEventListener("click", switchGreen);
orangeButton.addEventListener("click", switchOrange);
purpleButton.addEventListener("click", switchPurple);
aboutMeButton.addEventListener("click", openPage);
contactButton.addEventListener("click", openPage);

checkbox.addEventListener("change", () => {
    
    if (checkbox.checked && !isOpened)
    {
        openWrapper();
    }
    else {
        if (pageMode)
        {
            closePage();
        }

        closeWrapperBackground();
    }
});

function switchDarkMode(event) {
    event.preventDefault();

    let button = event.target;

    if (button.classList.contains("fa-circle-half-stroke")) 
    {
        if (document.body.classList.contains("light-mode"))
        {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");

            r.style.setProperty("--background", mainColors[1]);
            r.style.setProperty("--text", mainColors[0]);
        }
        else
        {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");

            r.style.setProperty("--background", mainColors[0]);
            r.style.setProperty("--text", mainColors[1]);
        }

        updateColor();
    }

    setThemeColors();
}

function openWrapper() {
    if (!isOpened)
    {
        wrapper.addEventListener("transitionend", openWrapperBackground);
        wrapper.classList.add("wrapper-open");
    }

    isOpened = true;
}

function openWrapperBackground() {
    wrapper.removeEventListener("transitionend", openWrapperBackground);
    wrapperBackground.classList.add("wrapper-background-open");
}

function closeWrapperBackground() {
    if (isOpened)
    {
        wrapperBackground.addEventListener("transitionend", closeWrapper);
        wrapperBackground.classList.remove("wrapper-background-open");
    }
}

function closeWrapper() {
    wrapperBackground.removeEventListener("transitionend", closeWrapper);
    wrapper.classList.remove("wrapper-open");

    isOpened = false;
}

function setThemeColors() {
    if (document.body.classList.contains("light-mode"))
    {
        blueButton.style.color = blueTheme[0];
        greenButton.style.color = greenTheme[0];
        orangeButton.style.color = orangeTheme[0];
        purpleButton.style.color = purpleTheme[0];
    }
    else
    {
        blueButton.style.color = blueTheme[1];
        greenButton.style.color = greenTheme[1];
        orangeButton.style.color = orangeTheme[1];
        purpleButton.style.color = purpleTheme[1];
    }
}

function switchBlue(event) {
    event.preventDefault();
    
    var button = event.target;

    if (button.id === "blueButton")
    {
        activeTheme = blueTheme;
    }

    updateColor();
}

function switchGreen(event) {
    event.preventDefault();
    
    var button = event.target;

    if (button.id === "greenButton")
    {
        activeTheme = greenTheme;
    }

    updateColor();
}

function switchOrange(event) {
    event.preventDefault();
    
    var button = event.target;

    if (button.id === "orangeButton")
    {
        activeTheme = orangeTheme;
    }

    updateColor();
}

function switchPurple(event) {
    event.preventDefault();
    
    var button = event.target;

    if (button.id === "purpleButton")
    {
        activeTheme = purpleTheme;
    }

    updateColor();
}

function updateColor() {
    if (document.body.classList.contains("light-mode"))
    {
        r.style.setProperty("--theme", activeTheme[0]);
    }
    else
    {
        r.style.setProperty("--theme", activeTheme[1]);
    }
}

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

function openAbout() {
    return;
}

function closePage() {
    wrapperBackground.classList.remove("wrapper-background-page");
    wrapper.classList.remove("wrapper-page");
    aboutMeButton.classList.remove("menu-indicator");
    contactButton.classList.remove("menu-indicator");
    pageMode = false;
    pageType = "";
}