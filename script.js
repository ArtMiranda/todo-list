// Define the array of tasks
let taskArray = [];

// Function to check if 'enter' key was pressed
function checkEnter(e){
    if(e.keyCode == 13){
        addTask();
    }
}

// Function that adds the written task to the array of tasks
function addTask(){
    
    let taskInput = document.getElementById("taskInput");
    let taskContent = taskInput.value;

    taskArray.push(taskContent);

    let arrayStorage = localStorage.setItem("storage", JSON.stringify(taskArray))
    

    refreshTasks();
}

// Function that removes all the tasks of the array of tasks and from the local storage
function cleanTasks(){

    taskArray = [];
    
    localStorage.clear();

    refreshTasks();
}

// Function that prints the tasks on the HTML
function refreshTasks(){
    let storedTask = JSON.parse(localStorage.getItem("storage"));

    taskArray.concat (storedTask);

    console.log(taskArray);


}


