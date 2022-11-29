const themeButton = document.querySelector(".theme-button");
const r = document.querySelector(":root");

themeButton.addEventListener("click", changeTheme);

Splitting();

function changeTheme(event) {
    event.preventDefault();

    let button = event.target;

    if (button.classList.contains("theme-button")) {

        if (document.body.classList.contains("light-mode"))
        {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");

            r.style.setProperty("--background", "#0D0D0D");
            r.style.setProperty("--text", "#F2F2F2");          
        }
        else
        {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");

            r.style.setProperty("--background", "#F2F2F2");
            r.style.setProperty("--text", "#0D0D0D");
            
        }
    }
}