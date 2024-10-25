import { getFromLocalStorage } from "../utils/storage"; 
import { updateIncompleteTasksAmount } from "../utils/updateTasksAmount"; 
import Task from "../models/Task"; 

export const createHtml = () => {
  const app = document?.getElementById("app");
  document.body.className = "m-0 p-0"; 

  if (app) {
    app.className = "flex flex-col lg:flex-row  gap-2 lg:gag-0 items-center bg-app-bg bg-cover bg-center bg-no-repeat justify-center h-screen font-poppins p-4"; 
  }

  const container: HTMLDivElement = document.createElement("div");
  container.className = "container bg-[rgba(171,146,146,0.321)] rounded-lg p-6 w-[330px] mx-auto lg:ml-[25rem]   lg:mr-[0.2rem] lg:flex-wrap flex flex-col items-center"; 

  const appTitle: HTMLHeadingElement = document.createElement("h2");
  appTitle.innerHTML = "To-do List";
  appTitle.className = "text-center text-xl font-bold mb-4 text-[#3e1919]"; 

  const inputForm: HTMLFormElement = document.createElement("form");
  inputForm.id = "input-form";
  inputForm.className = "flex gap-2 mb-4"; 

  const input: HTMLInputElement = document.createElement("input");
  input.id = "taskInput";
  input.placeholder = "Start to write your tasks";
  input.className = "flex-1 px-4 py-2 bg-none rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:placeholder:italic focus:placeholder:scale-90"; 

  const button: HTMLButtonElement = document.createElement("button");
  button.id = "createItem";
  button.innerText = "Enter";
  button.className = "px-4 py-2 text-black hover:rounded-3xl hover:bg-gradient-bl-tr"; 

  const listContainer: HTMLUListElement = document.createElement("ul");
  listContainer.id = "listContainer";
  listContainer.className = "w-full h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300";

  const incompletedTaskAmount: HTMLHeadingElement = document.createElement("h3");
  incompletedTaskAmount.id = "incompletedTaskAmount";
  incompletedTaskAmount.className = "text-sm text-[#3e1919] mb-4"; 

  container.appendChild(appTitle);
  container.appendChild(inputForm);
  container.appendChild(incompletedTaskAmount);

  inputForm.appendChild(input);
  inputForm.appendChild(button);

  container.appendChild(listContainer);

  app?.appendChild(container);

  const tasks: Task[] = getFromLocalStorage();

  const incompleteTasks = tasks.filter((task) => !task.isCompleted);

  updateIncompleteTasksAmount(incompleteTasks);
};