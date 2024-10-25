import Task from "../models/Task";

export const updateIncompleteTasksAmount = (incompleteTasks: Task[]) => {
  const taskAmount = document.getElementById("incompletedTaskAmount");
  if (taskAmount) {
    if (incompleteTasks.length === 0) {
      taskAmount.textContent = "Great! You have been setting life onTrack. It's time to add some tasks!";
    } else {
      taskAmount.textContent =
        "Great! You have been setting life onTrack but you still have " +
        incompleteTasks.length +
        " tasks waiting to be completed. Keep going!";
    }
  }
}

export const updateCompletedTasksAmount = (completedTasks: Task[]) => {
  const completedTaskAmount = document.getElementById("completedTaskAmount");
  if (completedTaskAmount) {
    if (completedTasks.length === 0) {
      completedTaskAmount.textContent = "You haven't completed any tasks yet. Let's get started!";
    } else {
      completedTaskAmount.textContent =
        "Great job! You have completed " +
        completedTasks.length +
        " tasks. Keep up the good work!";
    }
  }
}