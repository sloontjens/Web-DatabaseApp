/**
 * @author Auke Schaap
 */

var todo_list = [];

/**
 * @constructor
 *
 * Creates a to do which holds a name, priority and a due date
 *
 * @param name
 * @param priority
 * @param duedate
 */
function Todo(name, priority, duedate) {
    this.name = name;
    this.priority = priority;
    this.duedate = duedate;
    todo_list.push(this);
}


/**
 * Adds an textual input item to the list and a button to remove it.
 */
function addTodo() {

    var name = document.getElementById("name").value;
    var priority = document.getElementById("priority").value;
    var duedate = document.getElementById("duedate").value;

    var todo = new Todo(name, priority, duedate);

    var node = document.createElement("li");
    node.innerHTML = todo.priority + " [" + todo.name + "] Due: " + todo.duedate;

    // Adds a remove button to the list
    var node2 = document.createElement("input");
    node2.type = "button";
    node2.onclick = function () {
        document.getElementById("myList").removeChild(node);
    };
    node2.value = "Remove this element";
    node.appendChild(node2);
    document.getElementById("myList").appendChild(node);
}

/**
 * @param ul The unsorted list that you want to sort on duedate.
 */
function sortTodo_duedate(ul) {

}


function changeList() {
    window.location.href = '../html/Home.html';
}

function moveList() {
    window.location.href = '../html/Home.html';
}
