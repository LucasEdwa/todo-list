import Task from "../models/Task";

export const saveToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
export const getFromLocalStorage = (): Task[] => {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    try {
      const parsedTasks = JSON.parse(storedTasks) as Task[]; // Cast to Task[]
      return parsedTasks.map(
        (task) => new Task(task.taskInput, task.id, task.isCompleted)
      ); // Reconstruct Task instances
    } catch (error) {
      console.error("Error parsing tasks from local storage: ", error);
    }
  }

  return []; // Return an empty array if there are no tasks
};
export const saveUpdatedTaskToLocalStorage = (updatedTask: Task) => {
  // Retrieve existing tasks from local storage
  const storedTasks: Task[] = getFromLocalStorage();

  // Update the task in the stored tasks array
  const updatedTasks = storedTasks.map((task) =>
    task.id === updatedTask.id ? updatedTask : task
  );

  // Save the updated tasks array back to local storage
  saveToLocalStorage(updatedTasks);
};
