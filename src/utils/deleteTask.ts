import Task from "../models/Task"; // Ensure the path to Task is correct
import { getFromLocalStorage, saveToLocalStorage } from "./storage";
import { updateIncompleteTasksAmount } from "./updateTasksAmount";

// Function to delete a task by its ID
export const deleteTask = (id: number) => {
  const tasks: Task[] = getFromLocalStorage();

  // Filter out the task with the specified ID
  const updatedTasks = tasks.filter((task) => task.id !== id);

  saveToLocalStorage(updatedTasks);

  // Remove the task from the UI
  const taskElement = document.querySelector(`[data-id="${id}"]`);
  if (taskElement) {
    taskElement.remove();
  } else {
    console.warn(`Task with ID ${id} not found in the UI.`);
  }
 // Filter incomplete tasks
 const incompleteTasks = updatedTasks.filter((task) => !task.isCompleted);

 // Update the incomplete tasks amount
 updateIncompleteTasksAmount(incompleteTasks);

};
