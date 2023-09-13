// Function to add task to the ToDo list.
function addTask() {
    const taskText = document.getElementById('new-task').value;
    if (taskText.trim() === '') return;

    const tasksList = document.getElementById('tasks');
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" onchange="toggleTask(this)">
        <label>${taskText}</label>
        <button class="delete-button" onclick="removeTask(this)">Delete</button>
    `;
    tasksList.appendChild(li);

    document.getElementById('new-task').value = '';
    updateTotalTasksCount();
}

// Function to remove task from the list.

function removeTask(button) {
    const listItem = button.parentElement;
    listItem.style.transform = 'scale(0)';
    setTimeout(() => {
        listItem.remove();
        updateTotalTasksCount();
    }, 200);
}


// Function to toggle a task as completed or not completed.
function toggleTask(checkbox) {
    const listItem = checkbox.parentElement;
    listItem.classList.toggle('checked');
}


// Function to count the total no. of tasks.
function updateTotalTasksCount() {
    const totalTasks = document.querySelectorAll('#tasks li').length;
    document.getElementById('total-count').textContent = totalTasks;
}
