import Task from "../models/Task";
import { deleteTodo } from "../utils/deleteTodo";

export const displayTask=(task: Task)=>{
    const listContainer = document.getElementById("listContainer");

    const taskWrapper: HTMLLIElement = document.createElement("li");
    const buttonsTask :HTMLDivElement = document.createElement('div')
    taskWrapper.className='task-wrapper';
    taskWrapper.setAttribute('data-id', task.id.toString())
    const taskText: HTMLParagraphElement = document.createElement("p");
    const doneButton: HTMLButtonElement = document.createElement("button");
    const deleteButton: HTMLButtonElement = document.createElement("button");

    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    taskText.innerText = task.taskInput;
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    
    taskWrapper.appendChild(taskText);
    buttonsTask.appendChild(doneButton);
    buttonsTask.appendChild(deleteButton);
    taskWrapper.appendChild(buttonsTask);

    listContainer?.appendChild(taskWrapper)
console.log(task)
    deleteButton.addEventListener('click', ()=>{
      deleteTodo(task.id)  
    })

}