const r = document.querySelector(":root");

let activeMode = "light-mode";
let activeTheme = [];

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add(activeMode);
    setThemeColors();
    activeTheme = blueTheme;
});
