var tabs = document.getElementsByClassName("tab")
console.log(tabs)

for (let t of tabs) {
    t.onclick = function() {setActiveTab(t)};
}
/*
var aboutTab = document.getElementById("about");
tabs.push(aboutTab)
var workTab = document.getElementById("work");
tabs.push(workTab)
var favesTab = document.getElementById("faves");
tabs.push(favesTab)*/

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