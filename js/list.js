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
 * Adds an textual input item to the n-th list and a button to remove it.
 */
function addTodo(n) {

    var name = document.getElementById("name").value;
    var priority = document.getElementById("priority").value;
    var duedate = document.getElementById("duedate").value;

    if (duedate.length != 0) {
        var todo = new Todo(name, priority, duedate);
    } else {
        todo = new Todo(name, priority, null)
    }

    var node = document.createElement("li");
    var node2 = addStatus();

    if (todo.duedate != null){
            node.innerHTML = todo.priority + " [" + todo.name + "] Due: " + todo.duedate;
    } else {
        node.innerHTML = todo.priority + " [" + todo.name + "]";
    }

    // Adds a remove button to the list
    var node3 = document.createElement("input");
    node3.type = "button";
    node3.onclick = function () {
        document.getElementById("myList").removeChild(node);
    };
    node3.value = "Remove this element";
    node.appendChild(node3);
    document.getElementsByTagName("ul").item(n-1).appendChild(node);
    node.appendChild(node2);
}

function addStatus() {
    var span = document.createElement("span");
    var todo = "[TODO]";
    var done = "[DONE!]";
    span.innerHTML = todo;
    span.onclick = function () {
        var temp = done;
        done = todo;
        todo = temp;
        span.innerHTML = temp;
    };
    return span;
}


/**
 * onclick function for ENTER key
 */
function EnterButton() {
    if (event.keyCode == 13){
        addTodo(function () {
            for (i=0; i<document.getElementsByName("list").length; i++) {
                if (document.getElementsByName("list").item(i).checked = true) {
                    return document.getElementsByName("list").item(i);
                }
            }
        });
        closeDropDown();
    }
}


/**
 * Clears the n-th list.
 * @param n
 */
function clearList(n) {
    var ub = document.getElementById("myList").childElementCount;
    for (var i = 0; i < ub; i++){
        document.getElementById("myList").removeChild(document.getElementsByTagName("ul").item(n).lastChild);
    }
}


