const tabs = document.getElementsByClassName("tab-page");
const contents = document.getElementsByClassName("content");

const faves = {
    movie : {
        index: 0,
        images: ["Marcel.jpg", "memento.jpg", "petmam.jpg", "PotC3.jpg", "prd.jpg"],
        titles: ["Marcel the Shell with Shoes On", "Memento", "Petite Maman", "Pirates of the Carribean 3: At World's End", "Pretty Red Dress"],
        details: [
            [
                "<strong>2021 | Dean Fleischer Camp</strong>",
                "<strong>Synopsis > </strong>A film bout a shell with shoes on looking for his family",
                "<strong>My Review > </strong>There is no other cinematic medium that is as careful as stop-motion animation and Marcel truly embodies that care. The filmakers had to shoot every scene of this movie twice, each time perfectly replicating camera position, lighting and speed. "
            ],
            [
                "<strong>2000 | Christopher Nolan</strong>",
                "<strong>Synopsis > </strong>A man with short term memory loss tries to find his wife's murderer"
            ],
            [
                "<strong>2021 | Celine Sciamma</strong>",
                "<strong>Synopsis > </strong>While visiting her grandmother's house, this little girl makes a friend that seems very familiar"
            ],
            [
                "<strong>2007 | Gore Verbinski</strong>",
                "<strong>Synopsis > </strong>The epic finale to the origoinal Pirates trilogy, who will make it out on top?"
            ],
            [
                "<strong>2022 | Dionne Edwards</strong>",
                "<strong>Synopsis > </strong>Are we who we want to be or who we want others to think we are?"
            ]
        ]
    },
    game: {
        index: 0,
        images: ["hknight.jpg", "skyrim.jpg", "botw.jpg", "hades.jpg", "lostfuture.png"],
        titles: ["Hollow Knight", "Skyrim", "The Legend of Zelda: Breath of the Wild", "Hades", "Professor Layton and the Lost Future"],
        details: [
            [
                "<strong>2017 | Team Cherry</strong>",
                "<strong>Synopsis > </strong>",
                "<strong>My Review > </strong>"
            ],
            [
                "<strong>2011 | Bethesda</strong>",
                "<strong>Synopsis > </strong>",
                "<strong>My Review > </strong>"
            ],
            [
                "<strong>2017 | Nintendo</strong>",
                "<strong>Synopsis > </strong>",
                "<strong>My Review > </strong>"
            ],
            [
                "<strong>2020 | Supergiant Games</strong>",
                "<strong>Synopsis > </strong>",
                "<strong>My Review > </strong>"
            ],
            [
                "<strong>2010 | Level-5</strong>",
                "<strong>Synopsis > </strong>",
                "<strong>My Review > </strong>"
            ]
        ]
    },
    album: {
        index: 0,
        images: ["abbeyroad.webp", "ys.webp", "22am.webp", "abso.jpg", "plasticbeach.jpg"],
        titles: ["Abbey Road", "Ys", "22, A Million", "Absolutely", "Plastic Beach"],
        details: [
            [
                "<strong>1969 | The Beatles</strong>",
                "<strong>Synopsis > </strong>",
                "<strong>My Review > </strong>"
            ],
            [
                "<strong>2006 | Joanna Newsom</strong>",
                "<strong>Synopsis > </strong>",
                "<strong>My Review > </strong>"
            ],
            [
                "<strong>2016 | Bon Iver</strong>",
                "<strong>Synopsis > </strong>",
                "<strong>My Review > </strong>"
            ],
            [
                "<strong>2021 | Dijon</strong>",
                "<strong>Synopsis > </strong>",
                "<strong>My Review > </strong>"
            ],
            [
                "<strong>2010 | Gorillaz</strong>",
                "<strong>Synopsis > </strong>",
                "<strong>My Review > </strong>"
            ]
        ]
    }
}

let figures;
let activeContent;
let currentFigure;

setActiveTab(tabs.item(0));
for (let f in faves) {
    changeFave(0,f);
}

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

function changeFave(direction,faveType) {
    faves[faveType].index += direction;
    faves[faveType].index = faves[faveType].index > 4 ? 4 : faves[faveType].index < 0 ? 0 : faves[faveType].index;
    document.getElementById(faveType + "-image").setAttribute("src","images/" + faveType + "/" + faves[faveType].images[faves[faveType].index]);
    document.getElementById(faveType + "-title").innerHTML = faves[faveType].titles[faves[faveType].index];
    document.getElementById(faveType + "-details").innerHTML = "";
    for (let d of faves[faveType].details[faves[faveType].index]) {
        document.getElementById(faveType + "-details").innerHTML += "<p>" + d + "</p>";
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