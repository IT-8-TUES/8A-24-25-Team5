function deleteAllTasks() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    localStorage.removeItem('tasks');
    renderTasks();
  }
}
