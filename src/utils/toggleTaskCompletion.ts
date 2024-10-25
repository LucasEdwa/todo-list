import Task from "../models/Task";
import { saveUpdatedTaskToLocalStorage } from "./storage";

export const toggleTaskCompletion = (
  task: Task,
  taskText: HTMLLIElement| HTMLParagraphElement,
  taskWrapper: HTMLLIElement | null
) => {
  task.isCompleted = !task.isCompleted;
  taskWrapper?.remove(); // Remove the task from the DOM if completed
  window.location.reload(); // Reload the page

  saveUpdatedTaskToLocalStorage(task);
};
