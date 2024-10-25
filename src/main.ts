import Swal from "sweetalert2";
import { completedTasks } from "./components/completedTasks";
import { createHtml } from "./components/createHtml";
import { displayTask } from "./components/displayTask";
import Task from "./models/Task";
import "./styles/style.css";
import { loadAndDisplayIncompleteTasks } from "./utils/loadAndDisplayTasks";
import { getFromLocalStorage, saveToLocalStorage } from "./utils/storage";

createHtml();

completedTasks();

loadAndDisplayIncompleteTasks()
// Handle form submission for new tasks
document.getElementById("input-form")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskInputElement = document.getElementById(
    "taskInput"
  ) as HTMLInputElement;
  const taskInput = taskInputElement.value.trim();
  
  
  if (taskInput&& taskInput.length >= 7) {
    const newTask = new Task(taskInput, Date.now(), false);
    const currentTasks = getFromLocalStorage(); // Retrieve existing tasks

    currentTasks.push(newTask);
    saveToLocalStorage(currentTasks);

    displayTask(newTask);
    taskInputElement.value = "";
    loadAndDisplayIncompleteTasks()

  } else {
    console.warn("Input is empty, task not created.");
    Swal.fire({
      icon: 'warning', // You can set the icon type: 'success', 'error', 'warning', 'info', 'question'
      title: 'Input Error', // Title of the alert
      text: 'You need more characters on the input', // Message text
      confirmButtonText: 'OK', // Text for the confirmation button
      width:'300px'
    });
    
  }
});
