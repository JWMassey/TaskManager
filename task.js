//Task Manager - Jack Massey//

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

const tasks = [ // Array for storing tasks
  `Charge MacBook`,
  `Master JavaScript`
];
let showTasks = ``; // For displaying tasks to the user
let newTask; // For storing the value of a new task
let num; // For storing the number of the task to be removed
let removed = ''; // For storing the value of the removed task
let repeatCheck = false //For checking if a task already on the list is input as a new task

//Displays the menu for the user to select an option. Sets response to the userInput variable.
let userInput = prompt(menu).toUpperCase().trim();

//Continues to display the menu until the user selects CLOSE
while (userInput !== `CLOSE`) {
    if (userInput == 'TASKS') {
        if (tasks.length == 0) {
            alert(`The Tasks list is empty. Use "NEW" to add more tasks.`)
        } else {
            count = 1
            showTasks = ``
            for (task of tasks) {
                showTasks += count + ") " + task + "\n"
                count++
            }
            alert(showTasks) 
        }
    } else if (userInput == `NEW`) {
        newTask = prompt(`Enter your new task: `)
        repeatCheck = false
        for (task of tasks) {
            if (newTask.toUpperCase() == task.toUpperCase()) {
                repeatCheck = true
                break;
            }
        }
        if (repeatCheck) {
            alert("That task is already on the list.")
        } else {
            tasks.push(newTask)
            alert(`Task "${newTask}" added successfully.`)
        }
    } else if (userInput == `REMOVE`) {
        count = 1
        showTasks = ``
        for (task of tasks) {
            showTasks += count + ") " + task + "\n"
            count++
        }
        if (tasks.length == 0) {
            alert(`The Tasks list is empty. Use "NEW" to add more tasks.`)
        } else {
            num = prompt(showTasks + `\nEnter the number of the task you wish to remove: `)
            while (num != parseInt(num) || num < 1 || num > tasks.length) {
                num = prompt(showTasks + `\nInvalid Input. Enter the number of the task you wish to remove: `)
            }
            num = parseInt(num) - 1
            removed = tasks.splice(num, 1);
            alert(`Task "${removed}" removed successfully.`)
        }
    }
    userInput = prompt(menu).toUpperCase().trim();
}
alert("Thank you for using the Task Manager.")