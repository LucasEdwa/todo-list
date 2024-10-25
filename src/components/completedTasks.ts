import Task from "../models/Task";
import { toggleTaskCompletion } from "../utils/toggleTaskCompletion";
import { updateCompletedTasksAmount } from "../utils/updateTasksAmount";

// Function to display completed tasks
export const completedTasks = () => {
  const app = document.getElementById("app");

  // Create container for completed tasks
  const completedTasksContainer: HTMLDivElement = document.createElement('div');
  completedTasksContainer.className = "bg-[rgba(171,146,146,0.321)] rounded-lg p-6 w-[330px] lg:flex-wrap lg:h-[415px] mx-auto  lg:mr-[20rem]  flex flex-col items-center"; // Tailwind classes for container
  
  // Create heading
  const heading: HTMLHeadingElement = document.createElement("h2");
  heading.textContent = "Completed Tasks";
  heading.className = "text-center text-l font-bold mb-1 text-[#3e1919]"; // Tailwind classes for heading

  const completedTaskAmount: HTMLHeadingElement = document.createElement("h3");
  completedTaskAmount.className = "text-sm text-[#3e1919] mb-2"; // Tailwind classes for task amount text
  completedTaskAmount.id = "completedTaskAmount";
  // Retrieve and parse stored tasks from local storage
  const storedTasksString = localStorage.getItem("tasks");
  const storedTasks: Task[] = storedTasksString ? JSON.parse(storedTasksString) : [];
  
  // Filter out completed tasks
  const completedTasks = storedTasks.filter((task: Task) => task.isCompleted);

  
  // Create list for completed tasks
  const completedTasksList: HTMLUListElement = document.createElement("ul");
  completedTasksList.id = 'completedTasksList';
  completedTasksList.className = "w-full  h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300"; // Tailwind classes for completed tasks list
  
  // Append heading and list to container
  completedTasksContainer.appendChild(heading);
  completedTasksContainer.appendChild(completedTaskAmount);
  completedTasksContainer.appendChild(completedTasksList);

  // Check if there are completed tasks
  if (completedTasks.length > 0) {
    completedTasks.forEach((task: Task) => {
      // Create list item for each completed task
      const taskLink: HTMLLIElement = document.createElement("li");
      taskLink.className = "flex items-center justify-between gap-1 p-2 mb-1 border border-gray-400"; // Tailwind classes for task link

      const taskText: HTMLParagraphElement = document.createElement('p');
      taskText.textContent = task.taskInput;
      taskText.className = "w-3/5 mx-auto text-sm italic break-words"; // Tailwind classes for task text

      // Create button to undo completion
      const completedTaskButton: HTMLButtonElement = document.createElement("button");
      completedTaskButton.innerHTML = '<i class="fas fa-undo"></i> ';
      completedTaskButton.className = "p-1  text-black rounded hover:bg-gradient-bl-tr hover:rounded-2xl"; // Tailwind classes for undo button

      // Append task text and button to the list item
      taskLink.appendChild(taskText);
      taskLink.appendChild(completedTaskButton);
      completedTasksList.appendChild(taskLink);

      // Add event listener to the button for toggling completion
      completedTaskButton.addEventListener("click", () => {
        toggleTaskCompletion(task, taskText, null);
      });
    });
  } else {
    // If no tasks are completed, display a message
    const noTasks: HTMLParagraphElement = document.createElement("p");
    noTasks.textContent = "No tasks completed yet.";
    noTasks.className = "text-center text-sm italic"; // Tailwind classes for no tasks message
    completedTasksList.appendChild(noTasks);
  }

  // Append completed tasks container to the app
  if (app) {
    app.appendChild(completedTasksContainer);
  }
  updateCompletedTasksAmount(completedTasks);
};