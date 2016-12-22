/**
 * @author Auke Schaap
 */

window.onload = function() {
    document.getElementById("name").addEventListener("keydown", EnterButton);
    document.getElementById("priority").addEventListener("keydown", EnterButton);
    document.getElementById("duedate").addEventListener("keydown", EnterButton);

    document.getElementById("add_new_input").addEventListener("click", openDropDown);
    document.getElementById("close_dropdwn").addEventListener("click", closeDropDown);
};

/**
 * Creates a new list
 */
function newList() {
    var node = document.createElement("ul");
    var n = document.getElementsByTagName("ul").length+1;
    node.innerHTML = "List " + n;
    var node2 = document.createElement("div");
    node2.className = "list";
    node2.appendChild(node);
    document.getElementsByClassName("content").item(0).appendChild(node2);
}

/**
 * Opens the dropdown bar
 */
function openDropDown() {
    document.getElementById('dropdwn').style.visibility = 'visible';
    document.getElementById('dropdwn').style.height = '20px';
}

function closeDropDown() {
    document.getElementById('dropdwn').style.visibility = 'hidden';
    document.getElementById("dropdwn").style.height = '0';
}
