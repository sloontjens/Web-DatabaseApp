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

    if (duedate.length != 0) {
        var todo = new Todo(name, priority, duedate);
    } else {
        todo = new Todo(name, priority, null)
    }

    var node = document.createElement("li");
    if (todo.duedate != null){
            node.innerHTML = todo.priority + " [" + todo.name + "] Due: " + todo.duedate;
    } else {
        node.innerHTML = todo.priority + " [" + todo.name + "]";
    }

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


function EnterButton() {
    if (event.keyCode == 13){
        addTodo();
    }
}


function clearList() {
    var ub = document.getElementById("myList").childElementCount;
    for (var i = 0; i < ub+1; i++){
        document.getElementById("myList").removeChild(document.getElementById("myList").firstChild);
    }
}


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("navbar").style.height = "50px";
    document.getElementById("main").style.marginTop = "50px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("navbar").style.height = "50px";
    document.getElementById("main").style.marginTop = "50px";

}