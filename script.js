let taskArray = [];

function checkEnter(e){
    if(e.keyCode == 13){
        addTask();
    }
}


function addTask(){
    
    let taskInput = document.getElementById("taskInput");
    let taskContent = taskInput.value;

    taskArray.push(taskContent);

    let taskMemory = localStorage.setItem("oldTask", JSON.stringify(taskArray));
    let taskStorage = localStorage.getItem(taskMemory);

    console.log(taskStorage);


    // tasksArray.push(taskStorage);

    // console.log(tasksArray);

    // console.log(tasksArray);


    refreshTasks();
}

function cleanTasks(){

    tasksArray = [];
    
    console.log(tasksArray);

    refreshTasks();
}

function refreshTasks(){



}


