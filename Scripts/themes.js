const r = document.querySelector(":root");

const blueButton = document.getElementById("blue-button");
const greenButton = document.getElementById("green-button");
const orangeButton = document.getElementById("orange-button");
const purpleButton = document.getElementById("purple-button");

const blueTheme = ["48, 132, 242", "89, 157, 245"];
const greenTheme = ["133, 217, 130", "157, 225, 155"];
const orangeTheme = ["242, 167, 102", "245, 185, 133"];
const purpleTheme = ["201, 102, 242", "212, 133, 245"];

var activeTheme = blueTheme;

document.addEventListener("DOMContentLoaded", () => {
    setModeColors();
    loadTheme();
});

function setModeColors() {
    if (document.body.classList.contains("dark-mode"))
    {
        blueButton.style.color = "rgb(" + blueTheme[1] + ")";
        greenButton.style.color = "rgb(" + greenTheme[1] + ")";
        orangeButton.style.color = "rgb(" + orangeTheme[1] + ")";
        purpleButton.style.color = "rgb(" + purpleTheme[1] + ")";
    }
    else
    {
        blueButton.style.color = "rgb(" + blueTheme[0] + ")";
        greenButton.style.color = "rgb(" + greenTheme[0] + ")";
        orangeButton.style.color = "rgb(" + orangeTheme[0] + ")";
        purpleButton.style.color = "rgb(" + purpleTheme[0] + ")";    
    }
}

blueButton.addEventListener("click", function() {
    activeTheme = blueTheme;
    updateTheme();
});
greenButton.addEventListener("click", function() {
    activeTheme = greenTheme;
    updateTheme();
});
orangeButton.addEventListener("click", function() {
    activeTheme = orangeTheme;
    updateTheme();
});
purpleButton.addEventListener("click", function() {
    activeTheme = purpleTheme;
    updateTheme();
});

function updateTheme() {
    if (document.body.classList.contains("dark-mode"))
    {
        r.style.setProperty("--theme", activeTheme[1]);        
    }
    else
    {
        r.style.setProperty("--theme", activeTheme[0]);
    }

    saveTheme();
}

function saveTheme() {
    localStorage.setItem('theme', JSON.stringify(activeTheme));
}

function loadTheme() {
    var savedTheme = localStorage.getItem('theme');

    if (savedTheme) 
    {
        activeTheme = JSON.parse(savedTheme);
        updateTheme();
    }
    else
    {
        activeTheme = blueTheme;
        updateTheme();    
    }    
}