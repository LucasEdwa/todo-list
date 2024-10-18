import Todo from "./models/Todo";
import "./style.css";
const saveToLocalStorage = (todos: Todo[])=>{
  localStorage.setItem('todos', JSON.stringify(todos))
}
const getFromLocalStorage=()=>{
  const storedTodos = localStorage.getItem('todos')
  return storedTodos? JSON.parse(storedTodos) : []
}
const createHtml = () => {
  const app = document?.getElementById("app");

  //create container
  const container: HTMLDivElement = document.createElement("div");
  container.className = "container";
  //create header
  const appTitle: HTMLHeadingElement = document.createElement("h2");
  appTitle.innerHTML = "To-do List";
  const inputForm: HTMLFormElement = document.createElement("form");
  inputForm.id = "input-form";
  const input: HTMLInputElement = document.createElement("input");
  input.id = "taskInput";
  const button: HTMLButtonElement = document.createElement("button");
  button.id = "createItem";
  button.innerText = "Enter";
  const listContainer: HTMLElement = document.createElement("section");
  listContainer.id = "listContainer";

  container.appendChild(appTitle);
  container.appendChild(inputForm);
  inputForm.appendChild(input);
  inputForm.appendChild(button);
  container.appendChild(listContainer);
  //if
  app?.appendChild(container);
};
createHtml();

const displayTask=(todo: Todo)=>{
    const listContainer = document.getElementById("listContainer");

    const taskWrapper: HTMLDivElement = document.createElement("div");
    taskWrapper.className='task-wrapper';
    taskWrapper.setAttribute('data-id', todo.id.toString())
    const taskText: HTMLParagraphElement = document.createElement("p");
    const doneButton: HTMLButtonElement = document.createElement("button");
    const deleteButton: HTMLButtonElement = document.createElement("button");

    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    taskText.innerText = todo.taskInput;
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    
    taskWrapper.appendChild(taskText);
    taskWrapper.appendChild(doneButton);
    taskWrapper.appendChild(deleteButton);

    listContainer?.appendChild(taskWrapper)

    deleteButton.addEventListener('click', ()=>{
      deleteTodo(todo.id)  
    })

}
const deleteTodo = (id:number) =>{
    todos = todos.filter(todo=>{
        return todo.id !==id
    })
    saveToLocalStorage(todos)
    document.querySelector(`[data-id="${id}"]`)?.remove(); // Remove task from UI

}
let todos: Todo[] = getFromLocalStorage();
for (let i=0;i < todos.length; i++){
  displayTask(todos[i])
}
document.getElementById("input-form")?.addEventListener("submit", (e) => {
  e.preventDefault();

  let taskInput = document.getElementById("taskInput") as HTMLInputElement;
  let task = taskInput.value;

  if (task.trim() !== "") {
    const newTodo = new Todo(task, Date.now());
    todos.push(newTodo);
    saveToLocalStorage(todos);
    displayTask(newTodo);
    taskInput.value=''

  }
});
