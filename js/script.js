const tabs = document.getElementsByClassName("tab-page")
const contents = document.getElementsByClassName("content")

for (let t of tabs) {
    t.onclick = function() {
        setActiveTab(t)
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
        document.getElementById("footer").style.bottom = "0";
    } else {
        document.getElementById("footer").style.bottom = "-100px";
    }
}