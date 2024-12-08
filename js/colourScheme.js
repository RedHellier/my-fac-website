// const fs = require("fs")

// fs.copyFile("../styles/colour_schemes/default_red.css","../styles/scheme.css",(err) => {
//     if (err) {
//         console.log("Error Found:", err);
//     }
// });
const reader = new FileReader()
//reader.readAsArrayBuffer("styles/colour_schemes/default_red.css")
//console.log(document.querySelector("input[type=file"))
//const file = new File("styles/colour_schemes/default_red.css","styles/scheme.css")

const colourSchemeLink = document.getElementById("colour-scheme");
const colourSchemeChangeButtons = document.getElementsByClassName("colour-change-button");
console.log("new script")
let colourScheme;

const link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = `styles/colour_schemes/${colourScheme}.css`;
document.getElementsByTagName("head")[0].appendChild(link);

// document.getElementById("head").appendChild()

function changeColourScheme(scheme) {
    console.log("change");
    colourSchemeLink = `styles/colour_schemes/${scheme}.css`;
    colourScheme.setAttribute("href",colourSchemeLink);
}

for (let btn of colourSchemeChangeButtons) {
    btn.addEventListener("click",function() {
        changeColourScheme(btn.id);
    })
}