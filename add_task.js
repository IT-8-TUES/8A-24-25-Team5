function addTask(taskText, taskPriority) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = {
        text: taskText,
        priority: taskPriority,
        completed: false
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}
document.getElementById("taskForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const taskText = document.getElementById("taskText").value;
  const taskPriority = document.getElementById("taskPriority").value;
  addTask(taskText, taskPriority);
  document.getElementById("taskText").value = "";
  document.getElementById("taskPriority").value = "medium";
});
