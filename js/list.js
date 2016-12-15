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
 * Adds an textual input item to the list
 */
function addList() {
    var List_input = document.getElementById("L_inp").value;
    var text_input = document.createTextNode(List_input);
    var node = document.createElement("LI");
    node.appendChild(text_input);
    document.getElementById("myList").appendChild(node);
}

/**
 * Removes the last item from the list
 */
function removeListLast() {
    document.getElementById("myList").removeChild(document.getElementById("myList").lastElementChild);
}

function changeList() {
    window.location.href = '../html/Home.html';
}

function moveList() {
    window.location.href = '../html/Home.html';
}
