const blueButton = document.querySelector("#blueButton");
const greenButton = document.querySelector("#greenButton");
const orangeButton = document.querySelector("#orangeButton");
const purpleButton = document.querySelector("#purpleButton");

const mainColors = ["#F2F2F2","#0D0D0D"];
const blueTheme = ["#3084F2", "#599DF5"];
const greenTheme = ["#85D982", "#9DE19B"];
const orangeTheme = ["#F2A766", "#F5B985"];
const purpleTheme = ["#C966F2", "#D485F5"];

blueButton.addEventListener("click", switchBlue);
greenButton.addEventListener("click", switchGreen);
orangeButton.addEventListener("click", switchOrange);
purpleButton.addEventListener("click", switchPurple);

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