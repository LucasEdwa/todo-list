import Todo from "../models/Task";
import { getFromLocalStorage, saveToLocalStorage } from "./storage";

let todos:Todo[] = []
export const deleteTodo = (id:number) =>{
    todos = todos.filter(todo=>{
        return todo.id !==id
    })
    saveToLocalStorage(todos)
    document.querySelector(`[data-id="${id}"]`)?.remove(); // Remove task from UI

}