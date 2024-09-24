
var entries = ["1999","2005","2011","2024"];

const list = document.createElement('ul');
document.body.appendChild(list);
document.body.insertBefore

for (let en of entries) {
    var listItem = document.createElement('li');
    listItem.innerHTML = en;
    list.appendChild(listItem)
}