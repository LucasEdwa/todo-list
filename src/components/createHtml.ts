export const createHtml = () => {
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
  input.placeholder='Start to write your tasks'
  const button: HTMLButtonElement = document.createElement("button");
  button.id = "createItem";
  button.innerText = "Enter";
  const listContainer: HTMLUListElement = document.createElement("ul");
  listContainer.id = "listContainer";

  container.appendChild(appTitle);
  container.appendChild(inputForm);
  inputForm.appendChild(input);
  inputForm.appendChild(button);
  container.appendChild(listContainer);
  //if
  app?.appendChild(container);
};
