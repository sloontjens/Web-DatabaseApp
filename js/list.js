/**
 * @author Auke Schaap
 */

/**
 *
 */
function searchLists() {
    ;
}

/**
 * Adds an textual input item to the list and a button to remove it.
 */
function addTodo() {

    // Adds a new to-do item to the list
    var name = document.getElementById("name").value;
    var priority = document.getElementById("priority").value;
    var node = document.createElement("li");

    node.innerHTML = priority + ": " + name + " ";

    // Adds a remove button to the list
    var node2 = document.createElement("input");
    node2.type = "button";
    node2.onclick = function () {
        removeTodo();
    };
    node2.value = "Remove this element";
    node.appendChild(node2);
    document.getElementById("myList").appendChild(node);
}

/**
 * Removes the last 2 items from the list which are the to do item and the button.
 */
function removeTodo() {
    ul.removeChild(ul.lastElementChild);
}

function changeList() {
    window.location.href = '../html/Home.html';
}

function moveList() {
    window.location.href = '../html/Home.html';
}
