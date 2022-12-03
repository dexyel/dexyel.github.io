const redirectMessage = document.querySelector("p[class='redirect']");
const counter = document.getElementById("counter");

let seconds = 5;
let x;

redirectMessage.addEventListener("animationend", () => {
    startCounter();
});

function startCounter() {
    console.log("ok");

    x = setInterval(() => {
        updateCounter() 
    }, 1000);
}

function updateCounter() {
    counter.innerHTML = seconds;
    seconds--;

    if (seconds == -1)
    {
        clearInterval(x);
        redirect();
    }
}

function redirect() {
    document.location.href = "https://dexyel.github.io/";
}