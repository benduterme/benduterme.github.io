'use strict';

// Retour en arrière

var backLink = document.getElementById('back-link');

function changeLink() {
    var backText = document.getElementById('retour-text');

    backLink.style.backgroundColor = '#8D6E63';
    backText.style.color = 'beige';
}

function normalLink() {
    var backText = document.getElementById('retour-text');

    backLink.style.backgroundColor = '';
    backText.style.color = '#8D6E63';
}

if (backLink) {
    backLink.onmouseenter = changeLink;
    backLink.onmouseleave = normalLink;
}

// small-nav appears on click of special-nav

var smallNav = document.getElementById('small-nav');
var specialNavElement = document.getElementById('special-nav-element');

specialNavElement.addEventListener('click', function () {
    smallNav.style.left = '0px';
});

// Small nav dropdown 

var smallDropdownContent = document.getElementById('small-dropdown-content');
var dropdownButton = document.getElementById('dropdown-button');
var closeMenu = document.getElementById('close-menu');

dropdownButton.onclick = function () {
    if (smallDropdownContent.style.display === "block") {
        dropdownButton.innerHTML = "&#x25B6;";
        smallDropdownContent.style.display = "none";
    } else {
        dropdownButton.innerHTML = "&#x25BC;";
        smallDropdownContent.style.display = "block";
    }
};

closeMenu.onclick = function () {
    smallNav.style.left = '-400px';
    smallDropdownContent.style.display = "none";
    dropdownButton.innerHTML = "&#x25B6";
};

// Back to top

var topImg = document.getElementById('top-img');

window.addEventListener('scroll', function () {
    if (topImg) {
        var y = window.scrollY;

        if (y > 1500) {
            topImg.style.display = "block";
        } else {
            topImg.style.display = "none";
        }

        if (topImg.style.display === "block") {
            topImg.onclick = function () {
                window.scrollTo(0, 0);
            };
        }
    }
});

// Go to bottom

var bottomImg = document.getElementById('bottom-img');

window.addEventListener('scroll', function () {

    var order = document.getElementById('order');

    if (bottomImg) {
        var y = window.scrollY;

        if (y > 1500) {
            bottomImg.style.display = "block";
        } else {
            bottomImg.style.display = "none";
        }

        if (bottomImg.style.display === "block") {
            bottomImg.onclick = function () {
                order.scrollIntoView();
            };
        }

        if (y > document.body.scrollHeight - 1500) {
            bottomImg.style.display = "none";
        }
    }
});

// Back to top in shop

var shopTopImg = document.getElementById('shop-top-img');

window.addEventListener('scroll', function () {
    if (shopTopImg) {
        var y = window.scrollY;

        if (y > 1500) {
            shopTopImg.style.display = "block";
        } else {
            shopTopImg.style.display = "none";
        }

        if (shopTopImg.style.display === "block") {
            shopTopImg.onclick = function () {
                window.scrollTo(0, 0);
            };
        }
    }
});

// Open and close CGV

var openCgv = document.getElementById('open-cgv');
var closeCgv = document.getElementById('close-cgv');
var cgv = document.getElementById('cgv');
var closeCgvButton = document.getElementById('close-cgv-button');

if (openCgv) {
    openCgv.addEventListener('click', function () {
        cgv.style.display = "block";
    });
};

if (closeCgv) {
    closeCgv.addEventListener('click', function () {
        cgv.style.display = "none";
    });
};

if (closeCgvButton) {
    closeCgvButton.addEventListener('click', function () {
        cgv.style.display = "none";
    });
};

// Open and close Conditions d'utilisation

var openUtilisation = document.getElementById('open-utilisation');
var closeUtilisation = document.getElementById('close-utilisation');
var utilisation = document.getElementById('utilisation');
var closeUtilisationButton = document.getElementById('close-utilisation-button');

if (openUtilisation) {
    openUtilisation.addEventListener('click', function () {
        utilisation.style.display = "block";
    });
};

if (closeUtilisation) {
    closeUtilisation.addEventListener('click', function () {
        utilisation.style.display = "none";
    });
};

if (closeUtilisationButton) {
    closeUtilisationButton.addEventListener('click', function () {
        utilisation.style.display = "none";
    });
};

// Open and close Politique de confidentialié

var openConfidentialité = document.getElementById('open-confidentialité');
var closeConfidentialité = document.getElementById('close-confidentialité');
var confidentialité = document.getElementById('confidentialité');
var closeConfidentialitéButton = document.getElementById('close-confidentialité-button');

if (openConfidentialité) {
    openConfidentialité.addEventListener('click', function () {
        confidentialité.style.display = "block";
    });
};

if (closeConfidentialité) {
    closeConfidentialité.addEventListener('click', function () {
        confidentialité.style.display = "none";
    });
};

if (closeConfidentialitéButton) {
    closeConfidentialitéButton.addEventListener('click', function () {
        confidentialité.style.display = "none";
    });
};