document.addEventListener('DOMContentLoaded', () => {
    const taskDetailsDiv = document.getElementById('taskDetails');
    const taskJSON = localStorage.getItem('selectedTask');

    if (!taskJSON) {
        taskDetailsDiv.textContent = 'No task selected.';
        return;
    }

    const task = JSON.parse(taskJSON);

    taskDetailsDiv.innerHTML = `
        <p><strong>Task:</strong> ${task.text}</p>
        <p><strong>Priority:</strong> ${task.priority}</p>
        <p><strong>Completed:</strong> ${task.completed ? 'Yes' : 'No'}</p>
    `;
});