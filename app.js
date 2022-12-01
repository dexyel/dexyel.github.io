const themeButton = document.querySelector(".fa-circle-half-stroke");
const r = document.querySelector(":root");
const wrapper = document.querySelector(".wrapper");
const wrapperBackground = document.querySelector(".wrapper-background");
const checkbox = document.querySelector("#active");

const mainColors = ["#F2F2F2","#0D0D0D"];
const blueTheme = ["#3084F2", "#599DF5"];
const greenTheme = ["#85D982", "#9DE19B"];
const yellowTheme = ["#F2A766", "#F5B985"];
const purpleTheme = ["#C966F2", "#D485F5"];

let activeTheme = blueTheme;
let isOpened = false;

themeButton.addEventListener("click", changeTheme);
checkbox.addEventListener("change", () => {
    
    if (checkbox.checked && !isOpened)
    {
        openWrapper();
    }
    else {
        closeWrapperBackground();
    }
});

function changeTheme(event) {
    event.preventDefault();

    let button = event.target;

    if (button.classList.contains("fa-circle-half-stroke")) {
        if (document.body.classList.contains("light-mode"))
        {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");

            r.style.setProperty("--background", mainColors[1]);
            r.style.setProperty("--text", mainColors[0]);
            r.style.setProperty("--theme", activeTheme[1]);
        }
        else
        {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");

            r.style.setProperty("--background", mainColors[0]);
            r.style.setProperty("--text", mainColors[1]);            
            r.style.setProperty("--theme", activeTheme[0]);            
        }
    }
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
    console.log(isOpened);
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