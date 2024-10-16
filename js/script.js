const tabs = document.getElementsByClassName("tab-page")
const contents = document.getElementsByClassName("content")
let figures = document.getElementsByClassName("figure")

/*for (let i=0; i< figures.length; i++) {
    let top = i*85;;
    figures.item(i).style.top = top + "vh";
}*/

for (let t of tabs) {
    t.onclick = function() {
        setActiveTab(t)
    };
}
/**
 * Returns the sum of all numbers passed to the function.
 * @param {HTMLElement | number} element A positive or negative number
 */
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
    document.getElementById("scroller").style.marginTop = multiplier*scrollDistance + "px";
    if (multiplier > 0.99) {
        document.getElementById("header").style.top = "-100px";
    } else {
        document.getElementById("header").style.top = "0";
    }
    figureScroll(multiplier);
}

function figureScroll(pageDistance) {
    let transitionPoint = 1/figures.length;
    let currentSection = Math.floor(pageDistance/transitionPoint);
    console.log(currentSection)
}