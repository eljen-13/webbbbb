
const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function loadTodos() {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    storedTodos.forEach(task => {
        createTodoElement(task.text, task.completed);
    });
}

function createTodoElement(taskText, isCompleted) {
    const li = document.createElement('li');
    li.textContent = taskText;

    if (isCompleted) {
        li.classList.add('completed');
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        deleteTask(li);
    });

    li.appendChild(deleteButton);
    li.addEventListener('click', () => {
        toggleTaskCompletion(li);
    });

    todoList.appendChild(li);
}

function saveTodos() {
    const todos = [];
    const allTasks = document.querySelectorAll('#todo-list li');
    allTasks.forEach(task => {
        todos.push({
            text: task.textContent.replace('Supprimer', '').trim(),
            completed: task.classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

addButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();

    if (taskText === '') {
        alert('Veuillez entrer une tâche.');
        return;
    }

    createTodoElement(taskText, false);
    saveTodos();
    todoInput.value = '';
});

function toggleTaskCompletion(taskElement) {
    taskElement.classList.toggle('completed');
    saveTodos();
}

function deleteTask(taskElement) {
    taskElement.remove();
    saveTodos();
}

loadTodos();


