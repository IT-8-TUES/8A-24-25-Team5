function addTask(taskText, taskPriority) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = {
        text: taskText,
        priority: taskPriority,
        completed: false
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}