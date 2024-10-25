import { displayTask } from "../components/displayTask";
import Task from "../models/Task";
import { getFromLocalStorage } from "./storage";
import { updateIncompleteTasksAmount } from "./updateTasksAmount";

export const loadAndDisplayIncompleteTasks = () => {
    let tasks: Task[] = getFromLocalStorage();
    const incompleteTasks = tasks.filter((task) => !task.isCompleted);
    incompleteTasks.sort((a, b) => b.id - a.id); // Sort by most recent (id is timestamp)
    
    // Clear any existing tasks in the listContainer
    const listContainer = document.getElementById("listContainer");
    listContainer!.innerHTML = ""; // Clear current displayed tasks
  
    // Display each incomplete task
    incompleteTasks.forEach((task) => {
      displayTask(task);
    });
    
    updateIncompleteTasksAmount(incompleteTasks);
}