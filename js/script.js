const tabs = document.getElementsByClassName("tab-page");
const contents = document.getElementsByClassName("content");

const movies = {
    index: 0,
    images: ["Marcel", "memento", "petmam", "PotC3", "prd"],
    titles: ["Marcel the Shell with Shoes On", "Memento", "Petite Maman", "Pirates of the Carribean 3", "Pretty Red Dress"],
    details: [
        [
            "<strong>2021 - Dean Fleischer Camp</strong>",
            "<strong>Synopsis > </strong>A film bout a shell with shoes on looking for his family",
            "<strong>My Review > </strong>There is no other cinematic medium that is as careful as stop-motion animation and Marcel truly embodies that care. The filmakers had to shoot every scene of this movie twice, each time perfectly replicating camera position, lighting and speed. "
        ],
        [
            "<strong>2000 - Christopher Nolan</strong>",
            "<strong>Synopsis > </strong>A man with short term memory loss tries to find his wife's murderer"
        ],
        [
            "<strong>2021 - Celine Sciamma</strong>",
            "<strong>Synopsis > </strong>While visiting her grandmother's house, this little girl makes a friend that seems very familiar"
        ],
        [
            "<strong>2007 - Gore Verbinski</strong>",
            "<strong>Synopsis > </strong>The epic finale to the origoinal Pirates trilogy, who will make it out on top?"],
        [
            "<strong>2022 - Dionne Edwards</strong>",
            "<strong>Synopsis > </strong>Are we who we want to be or who we want others to think we are?"
        ]
    ]
}

let figures;
let activeContent;
let currentFigure;

setActiveTab(tabs.item(0));
changeMovie(0);

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

function changeMovie(direction) {
    movies.index += direction;
    movies.index = movies.index > 4 ? 4 : movies.index < 0 ? 0 : movies.index;
    document.getElementById("movie-image").setAttribute("src","images/MoviePosters/" + movies.images[movies.index] + ".jpg");
    document.getElementById("movie-title").innerHTML = movies.titles[movies.index];
    document.getElementById("movie-details").innerHTML = "";
    for (let d of movies.details[movies.index]) {
        document.getElementById("movie-details").innerHTML += "<p>" + d + "</p>";
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