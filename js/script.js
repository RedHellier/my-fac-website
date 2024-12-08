const tabs = document.getElementsByClassName("tab-page");
const dropdownTabs = document.getElementsByClassName("tab-dropdown");
const contents = document.getElementsByClassName("content");
const figures = document.getElementsByClassName("figure");
const dropdowns = document.getElementsByClassName("dropdown-list");
// const colourScheme = document.getElementById("colour-scheme");
// const colourSchemeChangeButtons = document.getElementsByClassName("colour-change-button");

let activeContent;
let currentFigure;
// let colourSchemeLink;

document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
currentFigure = 0;
document.getElementById("scrollerText").innerHTML = figures.item(currentFigure).getAttribute("title");

function displayDropdown(dropdown) {
    document.getElementById(`dropdown-${dropdown}-window`).classList.toggle("show-dropdown");
}

function hideDropdowns() {
    for (let d of dropdowns) {
        if (d.classList.contains('show-dropdown')) {
            d.classList.remove('show-dropdown');
        }
    }
}
  
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        hideDropdowns();
    }
}

window.onscroll = function() {
    scrollFunction();
    hideDropdowns();
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

// function changeColourScheme(scheme) {
//     console.log("change");
//     colourSchemeLink = `styles/colour_schemes/${scheme}.css`;
//     colourScheme.setAttribute("href",colourSchemeLink);
// }

// for (let btn of colourSchemeChangeButtons) {
//     btn.addEventListener("click",function() {
//         changeColourScheme(btn.id);
//     })
// }