const seconds = 5;
let x;

function redirect() {
    document.location.href = "128.0.0.1:5500";
}

function updateCounter() {
    document.getElementById("counter").innerHTML = seconds;
    seconds--;

    if (seconds == -1)
    {
        clearInterval(x);
        redirect();
    }
}

function startCounter() {
    x = setInterval(() => {
        updateCounter() 
    }, 1000);
}

startCounter();