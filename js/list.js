/**
 * @author Auke Schaap
 * @author Sam Loontjens
 */

/**
 * holds the number of lists made
 */
var list_count = 0;

var todo_count = 0;

/**
 * @constructor
 *
 * Creates a list which holds todos
 *
 */
function newList() {
    //add id to the list
    list_count += 1;
    var list_number = list_count;

    //create new div
    var node = document.createElement("div");
    //with the id of list1, list2, etc
    node.id = "list" + list_number;
    node.className = "list";
    node.onkeydown = function () {
        //if the enter key is pressed
        if (event.keyCode == 13){
            //add a todo_item to the list
            newTodo(node.id);
        }
    }

    var node2 = document.createElement("INPUT");
    node2.setAttribute("type", "text");
    node2.id = "name" + list_number;


    var node3 = document.createElement("INPUT");
    node3.setAttribute("type", "number");
    node3.id = "importance" + list_number;

    var node4 = document.createElement("INPUT");
    node4.setAttribute("type", "date");
    node4.id = "duedate" + list_number;

    var node5 = document.createElement("BUTTON");
    node5.setAttribute("type", "button");
    node5.id = "addbutton" + list_number;
    node5.innerHTML = "Add to list";
    node5.onclick = function () {
        newTodo(node.id);
    };

    var node6 = document.createElement("BUTTON");
    node6.setAttribute("type", "button");
    node6.id = "addbutton" + list_number;
    node6.innerHTML = "Remove list";
    node6.onclick = function () {
        document.getElementById("lists").removeChild(node);
    };

    //create a ul list
    var node7 = document.createElement("ul");
    node7.innerHTML = "List " + list_number;

    //node 1 gets node 2 and content gets all.
    node.appendChild(node2);
    node.appendChild(node3);
    node.appendChild(node4);
    node.appendChild(node5);
    node.appendChild(node6);
    node.appendChild(node7);
    document.getElementById("lists").appendChild(node);
}

/**
 * @constructor
 *
 * Creates a to do which holds a name, priority and a due date
 *
 * @param list_id
 */
function newTodo(list_id) {
    //add to counter
    todo_count += 1;
    var todo_number = todo_count;

    //get the number of the list to add to
    var list_number = list_id.replace('list','');

    var name = document.getElementById("name"+ list_number).value;
    var priority = document.getElementById("importance"+ list_number).value;
    var duedate = document.getElementById("duedate"+ list_number).value;

    //create li element as node 1
    var node = document.createElement("li");
    node.id = "todo" + todo_number;
    node.className = "todo";
    node.innerHTML = todo_number +" Priority: "+ priority + " Date: "+ duedate + " " + name;
    var node2 = addStatus();

    //a remove button as node 2
    var node3 = document.createElement("input");
    node3.type = "button";
    node3.onclick = function () {
        document.getElementById(list_id).removeChild(node);
    };
    node3.value = "Remove this element";

    node.appendChild(node2);
    node.appendChild(node3);
    document.getElementById(list_id).appendChild(node);
}

/**
 * Creates status button
 */
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
 * Clears the n-th list.
 *
 */
function removeAll() {
    var myNode = document.getElementById("lists");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}
