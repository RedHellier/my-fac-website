var tabs = document.getElementsByClassName("tab-page")
var contents = document.getElementsByClassName("content")

for (let t of tabs) {
    t.onclick = function() {
        setActiveTab(t)
    };
}

for (let c of contents) {
    console.log(c)
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