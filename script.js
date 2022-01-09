// Define the array of tasks
let taskArray = [];

// Event listener to check if enter key was pressed

addEventListener('keypress',e=>{
    if(e.key=="Enter"){

    addTask();}
})


// Function that adds the written task to the array of tasks
function addTask(){
    
    // Define the HTML input and it's content
    let taskInput = document.getElementById("taskInput");
    let taskContent = taskInput.value;

    // Adds the content of the input to the array of tasks
    taskArray.push(taskContent);


    // Get the item from the Local Storage to a array
    let storedTask = JSON.parse(localStorage.getItem("storage"));

    // Concatenates the array of tasks and the array of the Local Storage
    let arraysConcatenated = storedTask.concat(taskArray);

    // Eliminates duplicates on the array of tasks
    const tasks = arraysConcatenated.filter((item, pos) => arraysConcatenated.indexOf(item) === pos)
    console.log(tasks);

    // Clean the text input and calls the function that prints the tasks
    taskInput.value = "";
    refreshTasks();
}

// Function that removes all the tasks of the array of tasks and from the Local Storage
function cleanTasks(){

    // Cleans the array of tasks and the tasks Local Storage
    taskArray = [];
    localStorage.clear();
    tasks = [];

    console.log("Tasks Cleaned");
    // Calls the function that prints the tasks.
    refreshTasks();
}

// Function that prints the tasks on the HTML
function refreshTasks(){

    // Set the array of tasks to be saved on the Local Storage
    let arrayStorage = localStorage.setItem("storage", JSON.stringify(taskArray));

}


