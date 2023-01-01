const sideButton = document.getElementById('menu-button');
const side = document.getElementById('side-container');
const sideBackground = document.getElementById('side-background');
const aboutButton = document.getElementById('about-button');
const contactButton = document.getElementById('contact-button');
const aboutContainer = document.getElementById('about-container');
const contactContainer = document.getElementById('contact-container');

let pageType = "";

sideButton.addEventListener('click', openMenu);
aboutButton.addEventListener('click', e => {
    extendMenu(e);
});
contactButton.addEventListener('click', e => {
    extendMenu(e);
});

function openMenu() {
    if (side.classList.contains('close'))
    {        
        side.classList.remove('close'); 
        sideBackground.classList.remove('close');
        side.classList.add('open'); 
        sideBackground.classList.add('open');
    }
    else if (side.classList.contains('open'))
    {
        sideBackground.classList.remove('open');
        sideBackground.classList.add('close');                  

        setTimeout(() => {
            side.classList.remove('open');
            side.classList.add('close'); 
        }, 400)
    }
    else if (side.classList.contains('extend'))
    {
        sideBackground.classList.remove('extend');
        sideBackground.classList.add('close'); 

        setTimeout(() => {
            side.classList.remove('extend');
            side.classList.add('close');
            pageType = "";
            contactContainer.style.visibility = "hidden";
            aboutContainer.style.visibility = "hidden";   
        }, 400)
    }
}

function extendMenu(e) {
    if (!side.classList.contains('extend') && pageType == "")
    {
        pageType = e.target.innerHTML;

        side.classList.remove('open');        
        side.classList.add('extend');

        if (pageType == "About")
        {
            aboutContainer.style.visibility = "visible";
            contactContainer.style.visibility = "hidden";
        }
        else
        {
            contactContainer.style.visibility = "visible";
            aboutContainer.style.visibility = "hidden";            
        }

        setTimeout(() => {
            sideBackground.classList.remove('open');
            sideBackground.classList.add('extend');        
        }, 400)
    }
    else if (pageType != e.target.innerHTML)
    {
        pageType = e.target.innerHTML;

        sideBackground.classList.remove('extend');
        sideBackground.classList.add('retract');

        setTimeout(() => {
            if (pageType == "About")
            {
                aboutContainer.style.visibility = "visible";
                contactContainer.style.visibility = "hidden";                
            }
            else
            {
                contactContainer.style.visibility = "visible";
                aboutContainer.style.visibility = "hidden";                                    
            }

            sideBackground.classList.remove('retract');
            sideBackground.classList.add('extend');            
        }, 400)        
    }
}