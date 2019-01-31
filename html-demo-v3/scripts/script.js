var list = document.createElement("ul");
var info = document.createElement("p");
var html = document.querySelector("html");

info.textContent = "A dynamic list."

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
    var listItem = document.createElement("li");
    var listContent = prompt("input:");
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(e) {
        e.stopPropagation();
        var listContent = prompt("input again:");
        this.textContent = listContent;
    }
}
