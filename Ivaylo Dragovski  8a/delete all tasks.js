renderTasks();
function clearAllTasks() {
  localStorage.removeItem('tasks');
  renderTasks();
}
document.getElementById('Clear tasks').addEventListener('click', clearAllTasks);
renderTasks();
