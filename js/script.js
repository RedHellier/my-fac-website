const tabs = document.getElementsByClassName("tab-page");
const dropdownTabs = document.getElementsByClassName("tab-dropdown");
const contents = document.getElementsByClassName("content");
const figures = document.getElementsByClassName("figure");

let activeContent;
let currentFigure;

document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
currentFigure = 0;
document.getElementById("scrollerText").innerHTML = figures.item(currentFigure).getAttribute("title");

function displayDropdown() {
    document.getElementById("dropdown-window").classList.toggle("show-dropdown");
}

function displayColourDropdown() {
    document.getElementById("dropdown-colour-window").classList.toggle("show-dropdown");
}
  
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-list");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-dropdown')) {
                openDropdown.classList.remove('show-dropdown');
            }
        }
    }
}

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    let multiplier = window.scrollY/(document.documentElement.scrollHeight-window.innerHeight);
    let scrollDistance = document.getElementById("scrollbar").offsetHeight - document.getElementById("scroller").offsetHeight;
    currentFigure = Math.floor(multiplier/(1.01/figures.length));

    document.getElementById("scroller").style.marginTop = multiplier*scrollDistance + "px";

    if (multiplier > 0.99) {
        document.getElementById("header").style.top = "-100px";
    } else {
        document.getElementById("header").style.top = "0";
    }

    document.getElementById("scrollerText").innerHTML = figures.item(currentFigure).getAttribute("title");
}