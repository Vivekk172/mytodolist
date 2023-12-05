const input = document.querySelector(".inputbox");
const button = document.querySelector(".addbutton");
const todoList = document.querySelector(".todolist");

button.addEventListener("click", addToDo);
todoList.addEventListener("click",deleteToDo)

function addToDo(event){
    event.preventDefault();

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todocontainer")

    const todoItem = document.createElement("li")
    todoItem.classList.add("todoitem")
    todoItem.innerText=input.value;
    todoDiv.appendChild(todoItem);

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("deletebtn")
    deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>'
    todoDiv.appendChild(deleteButton);

    const completeButton = document.createElement("button")
    completeButton.classList.add("completebtn")
    completeButton.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    todoDiv.appendChild(completeButton);

    todoList.appendChild(todoDiv)
    input.value="";
}

function deleteToDo(event){
    const item = event.target;
    if(item.classList[0] === "deletebtn"){
    const delItem = item.parentElement;
    delItem.remove();
    }
    if(item.classList[0] === "completebtn"){
    const delItem = item.parentElement;
    delItem.classList.toggle("completed");
    }
}