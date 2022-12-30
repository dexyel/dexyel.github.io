const modeButton = document.getElementById('mode-button');

let activeMode = "dark-mode";

document.addEventListener('DOMContentLoaded', () => {
    
    loadMode();
});

modeButton.addEventListener('click', function() {    
    switchMode();
    setModeColors();
    updateTheme();
});

function updateMode() {
    document.body.classList.add(activeMode);

    if (activeMode == "dark-mode") 
    {
        document.body.classList.remove("light-mode");
    }
    else
    {
        document.body.classList.remove("dark-mode");
    }

    saveMode();    
}

function switchMode() {
    if (activeMode == "dark-mode")
    {
        activeMode = "light-mode";
    }
    else
    {
        activeMode = "dark-mode";
    }

    updateMode();
}

function saveMode() {
    localStorage.setItem('mode', activeMode);
}

function loadMode() {
    var savedMode = localStorage.getItem('mode');

    if (savedMode) 
    {
        activeMode = savedMode;
        updateMode();
    }
    else
    {
        activeMode = "dark-mode";
        updateMode();    
    }    
}