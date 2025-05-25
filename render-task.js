function renderTasks() {
    const tasksContainer = document.getElementById('ToDoList');
    tasksContainer.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.text} (${task.priority})`;
        li.addEventListener('click', () => toggleTaskCompletion(task.text));
        tasksContainer.appendChild(li);
    });
}
