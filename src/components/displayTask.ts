import Task from "../models/Task";
import { deleteTask } from "../utils/deleteTask";
import { toggleTaskCompletion } from "../utils/toggleTaskCompletion";
import Swal from "sweetalert2";

export const displayTask = (task: Task) => {
  // Check if the task is valid
  if (!task.id || !task) {
    console.error("Task is undefined or missing id");
    return;
  }

  // Get the list container
  const listContainer = document.getElementById("listContainer");
  if (listContainer) {
    listContainer.className = 'w-full h-52 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300';
  }

  // Create task wrapper
  const taskWrapper: HTMLLIElement = document.createElement("li");
  taskWrapper.className = "task-wrapper flex items-center justify-between gap-1 p-2 mb-1 border border-gray-400"; // Tailwind classes for task wrapper
  taskWrapper.setAttribute("data-id", task.id.toString());

  // Create task text element
  const taskText: HTMLParagraphElement = document.createElement("p");
  taskText.innerText = task.taskInput;
  taskText.className = "w-3/5 mx-auto text-sm italic break-words"; // Tailwind classes for task text

  // Create buttons container
  const buttonsTask: HTMLDivElement = document.createElement("div");
  buttonsTask.id = "buttonsTask";
  buttonsTask.className = "flex items-center "; // Tailwind classes for buttons container

  // Create done and delete buttons
  const doneButton: HTMLButtonElement = document.createElement("button");
  const deleteButton: HTMLButtonElement = document.createElement("button");

  doneButton.innerHTML = '<i class="fas fa-check"></i>';
  doneButton.className = "p-1  text-black hover:rounded-2xl hover:bg-gradient-bl-tr"; // Tailwind class for done button

  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.className = "p-1 text-black hover:rounded-2xl hover:bg-gradient-bl-tr"; // Tailwind class for delete button

  // Append buttons to the buttons container
  buttonsTask.appendChild(doneButton);
  buttonsTask.appendChild(deleteButton);

  // Append task text and buttons to the task wrapper
  taskWrapper.appendChild(taskText);
  taskWrapper.appendChild(buttonsTask);

  // Append task wrapper to the list container
  listContainer?.appendChild(taskWrapper);

  // Handle task completion toggle
  doneButton.addEventListener("click", () => {
    toggleTaskCompletion(task, taskText, taskWrapper);
  });

  // Handle task deletion
  deleteButton.addEventListener("click", () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the task.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      width: "300px", // Fixed width for Swal modal
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(task.id);
        taskWrapper.remove(); // Remove the task from the DOM after confirmation

        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      }
    });
  });
};