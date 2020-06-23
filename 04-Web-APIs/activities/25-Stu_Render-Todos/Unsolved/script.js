var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// todoList.textContent = ""; 

// var count = 0;

function renderTodo(){
    //clear todoList element and update todoCountSpan, Dump everything!
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length
   
    //Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
        var todo = todo[i];

        var li = document.createElement("li");
        li.textContent = todo; 
        todoList.appendChild(li);
    }
}

renderTodo();

