const tabs = document.getElementsByClassName("tab-page");
const contents = document.getElementsByClassName("content");

const faves = {
    movie : {
        index: 0,
        images: ["Marcel.jpg", "memento.jpg", "petmam.jpg"],
        titles: ["Marcel the Shell with Shoes On", "Memento", "Petite Maman"],
        details: [
            [
                "<strong>2021 | Dean Fleischer Camp</strong>",
                "<strong>Synopsis > </strong>A film bout a shell with shoes on looking for his family",
                "<strong>My Review > </strong>There is no other cinematic medium that is as careful as stop-motion animation and Marcel truly embodies that care. The filmakers had to shoot every scene of this movie twice, each time perfectly replicating camera position, lighting and speed. And they pull it off perfectly, every animated critter feels as tangible and real as the world they inhabit. This feeling of realness is also achieved thanks to the amazing dialogue between Marcel, Connie and Dean. Marcel's worldview is revealed through the way he answers Dean's questions, with a lack of prior context or baggage that we all accept as normal. He removes the narrative that we all just believe without question and in doing so shows us that we can just exist and work through through the challenges that we have to deal with every day and that can be enough."
            ],
            [
                "<strong>2000 | Christopher Nolan</strong>",
                "<strong>Synopsis > </strong>A man with short term memory loss tries to find his wife's murderer",
                "<strong>My Review > </strong>We all know that Christopher Nolan excels at writing over complicated time jumping movies, but Memento is the film where he pairs that well with excellently written characters. We are dropped into a story at the peak of it's action and the end of it's narrative. We judge the characters based off what we know but then have to rethink our judgements as we delve back into the past. We place our trust in certain characters who end up betraying that trust, an experience shared by our protaganist Leonard. Throughout most of the runtime he has no control and believes he must do what the nearest person to him says is the right course of action. This makes his decision at the end of the movie to give himself agency so compelling."
            ],
            [
                "<strong>2021 | Celine Sciamma</strong>",
                "<strong>Synopsis > </strong>While visiting her grandmother's house, this little girl makes a friend that seems very familiar",
                "<strong>My Review > </strong>We want to protect our children from the pain we experience as adults, but often the attempt to protect them just causes them the pain we wanted to avoid. Petite Maman is a film where our main character is allowed to share in that pain and grow closer to her mother because of it. It explores it through many childlike activities, like exploring the woods, acting out stories or making a mess in the kitchen. Nelly may not undertand initially but by being open and honest with Marion she comes to terms with it and can comfort her mother through her pain."
            ]
        ]
    },
    game: {
        index: 0,
        images: ["hknight.jpg", "skyrim.jpg", "botw.jpg"],
        titles: ["Hollow Knight", "Skyrim", "The Legend of Zelda: Breath of the Wild"],
        details: [
            [
                "<strong>2017 | Team Cherry</strong>",
                "<strong>Synopsis > </strong>Delve into the world of hallow nest to save it from a plague that has infected its many inhabitants",
                "<strong>My Review > </strong>Metroidvanias are hot right now, but none are as well paced or exciting as hollow knight. The task at hand seems impossible, you are small and irrelevant, or so it seems at first. As you go on, defeating boss after boss and exploring each area, you can find all sorts of small glimpses into the lore of this place and of your character. Who made you? Why are you the only one who can save the world? What is the grubmother? No really, what is she? You may not discover the answers to all of your questions during a playthrough but that idea that there is something larger going on here is inescapable and exciting."
            ],
            [
                "<strong>2011 | Bethesda</strong>",
                "<strong>Synopsis > </strong>An epic adventure of self discovery and dragon slaying",
                "<strong>My Review > </strong>It's iconic. You awake on the way to your execution, not knowing who you are or why you're there, and are fed breadcrumbs of story to pull you into an expansive narrative. Then once you're in there are hooks everywhere that keep pulling you in every direction. Do you want to be an expert thief, a powerful wizard or the saviour of a rebel uprising. Each narrative arc is expertly crafted to make you feel like the most important person in the world. And then there are the smaller narratives dotted around in abandoned shacks, caves, and ruins. Each one gives you a small insight into this larger complex world, showing you how individuals fare in this world controlled by such large factions. Each story, large or small, is important and well crafted by the writers. You just never get bored."
            ],
            [
                "<strong>2017 | Nintendo</strong>",
                "<strong>Synopsis > </strong>After 100 years asleep, you must once again save hyrule from the many monsters that threaten it",
                "<strong>My Review > </strong>When this came out I didn't have a switch so like many people I bought one spicifically to play this game. And I was not dissapointed. Never have I felt freer to explore the world and the story at my own pace and in my own way. Thanks to innovative new mechanics, combat and exploration can be tackled how you see fit. Whether that is just by swinging your sword, throwing bombs or by grabbing massive logs to drop on enemies heads, you are in control. And with exciting things to explore all around the map you cannot help but be diverted from your path by something that looks fun or interesting. Very intentionally however, even if you stray from the path, the designers have made it so that you always find your path again by placing important locations in specific places around the map. Shrines to gain hearts, villages to start quests, or puzzles to solve are always only a quick detour away."
            ]
        ]
    },
    album: {
        index: 0,
        images: ["abbeyroad.webp", "ys.webp", "abso.jpg"],
        titles: ["Abbey Road", "Ys", "Absolutely"],
        details: [
            [
                "<strong>1969 | The Beatles</strong>",
                "<strong>My Review > </strong>"
            ],
            [
                "<strong>2006 | Joanna Newsom</strong>",
                "<strong>My Review > </strong>"
            ],
            [
                "<strong>2021 | Dijon</strong>",
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
    faves[faveType].index = faves[faveType].index > 2 ? 2 : faves[faveType].index < 0 ? 0 : faves[faveType].index;
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