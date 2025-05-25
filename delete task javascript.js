function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1); 
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    renderTasks();
  } else {
    console.error('Invalid task index:', index);
  }
}
