const darkModeButton = document.querySelector(".fa-circle-half-stroke");

darkModeButton.addEventListener("click", switchDarkMode);

function switchDarkMode(event) {
    event.preventDefault();

    let button = event.target;

    if (button.classList.contains("fa-circle-half-stroke")) 
    {
        if (activeMode === "light-mode")
        {
            activeMode = "dark-mode";

            r.style.setProperty("--background", mainColors[1]);
            r.style.setProperty("--text", mainColors[0]);
        }
        else
        {
            activeMode = "light-mode";

            r.style.setProperty("--background", mainColors[0]);
            r.style.setProperty("--text", mainColors[1]);
        }

        updateColor();
    }

    setThemeColors();
}