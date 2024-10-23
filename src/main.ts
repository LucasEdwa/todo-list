import { createHtml } from "./components/createHtml";
import { displayTask } from "./components/displayTask";
import Task from "./models/Task";
import "./styles/style.css";
import { getFromLocalStorage, saveToLocalStorage } from "./utils/storage";

let todos: Task[] = getFromLocalStorage();


createHtml();

for (let i=0;i < todos.length; i++){
 displayTask(todos[i])
}


document.getElementById("input-form")?.addEventListener("submit", (e) => {
  e.preventDefault();

  let taskInput = document.getElementById("taskInput") as HTMLInputElement;
  let task = taskInput.value;

  if (task.trim() !== "") {
    const newTodo = new Task(task, Date.now(), false);
    todos.push(newTodo);
    saveToLocalStorage(todos);
    displayTask(newTodo);
    taskInput.value=''

  }
});
