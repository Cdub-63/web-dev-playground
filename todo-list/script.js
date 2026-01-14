const tasks = [];

while(true) {
    // Prompt the user to enter a task
    let task = prompt("Enter a task (or type 'done' to finish):");

    // Check if the user wants to finish entering tasks
    if (task.toLowerCase() === 'done') {
        break; // Exit the loop
    }
    tasks.push(task); // Add the task to the array
}

// Display the tasks
console.log("Your tasks:");

for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
}

// tasks.forEach((task, index) => {
//     console.log(`${index + 1}. ${task}`);
// });