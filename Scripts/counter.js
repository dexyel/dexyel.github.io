const subtitle = document.querySelector(".subtitle");
let counter = document.getElementById("counter");

let seconds = 7;
let x;

subtitle.addEventListener("animationend", () => {
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