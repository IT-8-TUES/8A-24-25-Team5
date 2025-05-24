function deleteTask(index) {
  if(confirm("Are yopu sure you want to delete the task")){
  const task = JSON.parse(localStorage.getItem('task')) || [];
  task.splice(index, 1); 
  localStorage.setItem('task', JSON.stringify(task));
  renderTasks(); 
}
}