function renderTasks() {
    const tasksContainer = document.getElementById('to-do-list');
    tasksContainer.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.text} (${task.priority})`;

        if (task.completed) {
            li.classList.add('completed');
        }

        li.addEventListener('click', () => toggleTaskCompletion(task.text));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteTask(task.text);
        });

        li.appendChild(deleteButton);
        tasksContainer.appendChild(li);
    });
}