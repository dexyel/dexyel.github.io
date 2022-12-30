const subtitle = document.getElementById("subtitle");
let counter = document.getElementById("counter");

let seconds = 5;
let x;

subtitle.addEventListener("animationstart", () => {
    startCounter();
});

function startCounter() {
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