// Check if there are tasks in localStorage, if not, add default and passion-related tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [
    { text: "Complete project report 📑", completed: false },
    { text: "Read 10 pages of a book 📖", completed: false },
    { text: "Go for a 30-minute walk 🚶‍♂️", completed: false },
    { text: "Organize workspace 🗂️", completed: false },
    { text: "Plan next week's schedule 📝", completed: false },

    // Passion & Self-Care Tasks  
    { text: "Play guitar for 15 minutes 🎸", completed: false },
    { text: "Paint something creative 🎨", completed: false },
    { text: "Follow a skincare routine 🧖‍♀️", completed: false },
    { text: "Listen to relaxing music 🎶", completed: false },
    { text: "Try meditation for 10 minutes 🧘‍♂️", completed: false }
];

// Function to display tasks
function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="toggleTask(${index})">✔</button>
            <button onclick="deleteTask(${index})">❌</button>
        `;
        taskList.appendChild(taskItem);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks
}

// Toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Call displayTasks() when the page loads
window.onload = displayTasks;

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const taskCategory = document.getElementById("task-category");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Function to add task
    addTaskBtn.addEventListener("click", function() {
        if (taskInput.value.trim() !== "") {
            tasks.push({ text: `${taskInput.value} (${taskCategory.value})`, completed: false });
            displayTasks();
            taskInput.value = ""; // Clear input field
        }
    });

    // Enable Dark Mode Toggle
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});

