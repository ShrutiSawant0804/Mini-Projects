function loadToDos(){
  // this function will load the to-dos from localStorage
  let todos = JSON.parse(localStorage.getItem("todos")) || {"todoList" : []};
  console.log(todos);
  return todos;
}

function addTodoToLocalStorage(todoText) {
  const todos = loadToDos();
  todos.todoList.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
};


function appendToDoInHTML(todoText) {
  // this function will append the todo to the HTML
  const todoList = document.getElementById("tasklist"); // Get the task list element from the DOM
  const li = document.createElement("li"); // Create a new list item element
  li.textContent = todoText;

  li.classList.add("todoItem"); // Add a class to the new list item


  const wrapper = document.createElement("div"); // Create a wrapper div for the todo item
  wrapper.classList.add("todoWrapper"); // Add a class to the wrapper div


  // Create buttons for edit and delete functionality
  const editBtn = document.createElement("button"); // Create an edit button
  editBtn.textContent = "Edit"; // Set the text for the edit button
  editBtn.classList.add("editBtn"); // Add a class to the edit button

  const deleteBtn = document.createElement("button"); // Create a delete button
  deleteBtn.textContent = "Delete"; // Set the text for the delete button
  deleteBtn.classList.add("deleteBtn"); // Add a class to the delete button

  const markCompleteBtn = document.createElement("button"); // Create a mark complete button
  markCompleteBtn.textContent = "Mark Complete"; // Set the text for the mark complete
  markCompleteBtn.classList.add("markCompleteBtn"); // Add a class to the mark

  wrapper.appendChild(editBtn); // Append the edit button to the list item
  wrapper.appendChild(deleteBtn); // Append the delete button to the list item
  wrapper.appendChild(markCompleteBtn); // Append the mark complete button to the list item

  li.appendChild(wrapper); // Append the wrapper to the list item

  todoList.appendChild(li); // Append the new list item to the task list
}


// Event listener 
document.addEventListener("DOMContentLoaded",() => {

 const todoInput = document.getElementById("todoInput");

   const addButton = document.getElementById("addtodo");

   const todoList = document.getElementById("tasklist");
  // Get the input field and button from the DOM
  addButton.addEventListener("click", (event)=> {
  // this callback method is fired when the button is clicked
  const todoText = todoInput.value;
  if(todoText == ""){
    alert("Please write something in the input field");
  }else{
    addTodoToLocalStorage(todoText);
    appendToDoInHTML(todoText);
    todoInput.value = ""; // Clear the input field after adding the todo
  }
  })


 todoInput.addEventListener("change", (event) => {
  //this call back method s fired everytime there is a change in the input tag
  const todoText = event.target.value; // Get the value from the input field

  event.target.value = todoText.trim(); // Trim whitespace from the input

 });



  const todos = loadToDos();

  todos.todoList.forEach(todo => {
    appendToDoInHTML(todo); // Append each todo to the HTML
  });
});