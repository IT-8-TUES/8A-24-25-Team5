renderTasks();
function renderTasks() {
    const tasksContainer = document.getElementById('ToDoList');
    tasksContainer.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.text} (${task.priority})`;
        li.addEventListener('click', () => toggleTaskCompletion(task.text));
        tasksContainer.appendChild(li);
    });
}
