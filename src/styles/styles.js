// Retour en arrière

const backLink = document.getElementById('back-link');

function changeLink () {
    const backText = document.getElementById('retour-text');

    backLink.style.backgroundColor = '#8D6E63';
    backText.style.color = 'beige';
}

function normalLink () {
    const backText = document.getElementById('retour-text');

    backLink.style.backgroundColor = '';
    backText.style.color = '#8D6E63';
}

if(backLink) {
    backLink.onmouseenter = changeLink;
    backLink.onmouseleave = normalLink;
}

// small-nav appears on click of special-nav

const smallNav = document.getElementById('small-nav');
const specialNavElement = document.getElementById('special-nav-element');

specialNavElement.addEventListener('click', () => {
    smallNav.style.left = '0px';
});

// Small nav dropdown 

const smallDropdownContent = document.getElementById('small-dropdown-content');
const dropdownButton = document.getElementById('dropdown-button');
const closeMenu = document.getElementById('close-menu');

dropdownButton.onclick = function () {
    if (smallDropdownContent.style.display === "block") {
        dropdownButton.innerHTML = "&#x25B6;";
        smallDropdownContent.style.display = "none";
    } else {
        dropdownButton.innerHTML = "&#x25BC;";
        smallDropdownContent.style.display = "block";
    }
}

closeMenu.onclick = function() {
    smallNav.style.left = '-400px';
    smallDropdownContent.style.display = "none";
    dropdownButton.innerHTML = "&#x25B6";
}

// Back to top

const topImg = document.getElementById('top-img');

window.addEventListener('scroll', () => {
    if (topImg) {
        const y = window.scrollY;
    
        if (y > 1500) {
            topImg.style.display = "block";
        } else {
            topImg.style.display = "none";
        }
    
        if (topImg.style.display === "block") {
            topImg.onclick = function () {
                window.scrollTo(0, 0);
            }
        } 
    }
});

// Go to bottom

const bottomImg = document.getElementById('bottom-img');

window.addEventListener('scroll', () => {

    const order = document.getElementById('order');

    if (bottomImg) {
        const y = window.scrollY;

        if (y > 1500) {
            bottomImg.style.display = "block";
        } else {
            bottomImg.style.display = "none";
        }

        if (bottomImg.style.display === "block") {
            bottomImg.onclick = function () {
                order.scrollIntoView();
            }
        }

        if (y > (document.body.scrollHeight - 1500)) {
            bottomImg.style.display = "none";
        }
    }
});

// Back to top in shop

const shopTopImg = document.getElementById('shop-top-img');

window.addEventListener('scroll', () => {
    if (shopTopImg) {
        const y = window.scrollY;
    
        if (y > 1500) {
            shopTopImg.style.display = "block";
        } else {
            shopTopImg.style.display = "none";
        }
    
        if (shopTopImg.style.display === "block") {
            shopTopImg.onclick = function () {
                window.scrollTo(0, 0);
            }
        } 
    }
});

// Open and close CGV

const openCgv = document.getElementById('open-cgv');
const closeCgv = document.getElementById('close-cgv');
const cgv = document.getElementById('cgv');
const closeCgvButton = document.getElementById('close-cgv-button');

if(openCgv) {
    openCgv.addEventListener('click', () => {
        cgv.style.display = "block";
    })
};

if(closeCgv) {
    closeCgv.addEventListener('click', () => {
        cgv.style.display = "none";
    })
};

if(closeCgvButton) {
    closeCgvButton.addEventListener('click', () => {
        cgv.style.display = "none";
    })
};

// Open and close Conditions d'utilisation

const openUtilisation = document.getElementById('open-utilisation');
const closeUtilisation = document.getElementById('close-utilisation');
const utilisation = document.getElementById('utilisation');
const closeUtilisationButton = document.getElementById('close-utilisation-button');

if(openUtilisation) {
    openUtilisation.addEventListener('click', () => {
        utilisation.style.display = "block";
    })
};

if(closeUtilisation) {
    closeUtilisation.addEventListener('click', () => {
        utilisation.style.display = "none";
    })
};

if(closeUtilisationButton) {
    closeUtilisationButton.addEventListener('click', () => {
        utilisation.style.display = "none";
    })
};

// Open and close Politique de confidentialié

const openConfidentialité = document.getElementById('open-confidentialité');
const closeConfidentialité = document.getElementById('close-confidentialité');
const confidentialité = document.getElementById('confidentialité');
const closeConfidentialitéButton = document.getElementById('close-confidentialité-button');

if(openConfidentialité) {
    openConfidentialité.addEventListener('click', () => {
        confidentialité.style.display = "block";
    })
};

if(closeConfidentialité) {
    closeConfidentialité.addEventListener('click', () => {
        confidentialité.style.display = "none";
    })
};

if(closeConfidentialitéButton) {
    closeConfidentialitéButton.addEventListener('click', () => {
        confidentialité.style.display = "none";
    })
};