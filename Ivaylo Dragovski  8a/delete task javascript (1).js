function clearSelectedTask() {
  if (confirm("Are you sure you want to delete this task?")) {
    const selectedTask = JSON.parse(localStorage.getItem('selectedTask'));
    if (!selectedTask) return;

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(task => task.text !== selectedTask.text);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    localStorage.removeItem('selectedTask');

    window.location.href = 'to-do-list.html';
  }
}
