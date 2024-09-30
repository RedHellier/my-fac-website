var tabs = document.getElementsByClassName("tab")
console.log(tabs)

for (let t of tabs) {
    t.onclick = function() {setActiveTab(t)};
}

function setActiveTab(element) {
    if (element.getAttribute("active")!=="true") {
        for (let t of tabs) {
            if (element.id===t.id) {
                t.setAttribute("active","true");
            } else {
                t.setAttribute("active","false");
            }
        }
    }
}