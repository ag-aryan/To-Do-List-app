document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task) {
        addTask(task);
        input.value = '';
    }
});

function addTask(task) {
    const list = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    const taskText = document.createElement('span');
    taskText.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        list.removeChild(listItem);
    });

    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
}
