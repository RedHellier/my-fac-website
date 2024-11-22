const tabs = document.getElementsByClassName("tab-page");
const contents = document.getElementsByClassName("content");

let figures;
let activeContent;
let currentFigure;

setActiveTab(tabs.item(0));


for (let t of tabs) {
    t.onclick = function() {
        setActiveTab(t)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        currentFigure = 0;
    };
}

function setActiveTab(element) {
    if (element.getAttribute("active-tab")!=="true") {

        for (let t of tabs) {
            if (element.id===t.id) {
                t.setAttribute("active-tab","true");
            } else {
                t.setAttribute("active-tab","false");
            }
        }
        
        for (let c of contents) {
            if (element.id===c.id) {
                c.setAttribute("active-page","true");
                figures = c.getElementsByClassName("figure");
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                currentFigure = 0;
                document.getElementById("scrollerText").innerHTML = figures.item(currentFigure).getAttribute("title");
            } else {
                c.setAttribute("active-page","false");
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