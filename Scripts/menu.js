const checkbox = document.querySelector("#active");
const wrapper = document.querySelector(".wrapper");
const wrapperBackground = document.querySelector(".wrapper-background");

let isOpened = false;

checkbox.addEventListener("change", () => {
    
    if (checkbox.checked && !isOpened)
    {
        openWrapper();
    }
    else {
        if (pageMode)
        {
            closePage();
        }

        closeWrapperBackground();
    }
});

function openWrapper() {
    if (!isOpened)
    {
        wrapper.addEventListener("transitionend", openWrapperBackground);
        wrapper.classList.add("wrapper-open");
    }

    isOpened = true;
}

function openWrapperBackground() {
    wrapper.removeEventListener("transitionend", openWrapperBackground);
    wrapperBackground.classList.add("wrapper-background-open");
}

function closeWrapper() {
    wrapperBackground.removeEventListener("transitionend", closeWrapper);
    wrapper.classList.remove("wrapper-open");

    isOpened = false;
}

function closeWrapperBackground() {
    if (isOpened)
    {
        wrapperBackground.addEventListener("transitionend", closeWrapper);
        wrapperBackground.classList.remove("wrapper-background-open");
    }
}