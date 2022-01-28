let newTasks = [];
let tasks = [];
let storedTask = []; 
let summedArrays = [];

addEventListener('keypress', e => {
    if (e.key == "Enter") {

        avoidBlank();
    }
})

function onloadFunction() {

    if (storedTask !== "") {
        avoidBlank();
    }
    else {
        let arrayStorage = localStorage.setItem("storage", JSON.stringify(tasks));
    }
}

function avoidBlank() {

    let taskInput = document.getElementById("taskInput");

    if (taskInput.value !== "") {
        addTask();
    }

    else {
        tasks.pop();
        sumArrays();
    }

}

// console.log(tasks);

function addTask() {

    if(taskInput.value == "clear"){
        removeTasks();
    }
    
    newTasks.push(taskInput.value);

    sumArrays();

}

storedTask = JSON.parse(localStorage.getItem("storage"));

function sumArrays() {

    if (storedTask !== null){  
    summedArrays = storedTask.concat(newTasks);
    }
    else{
        summedArrays = newTasks;
    }
    tasks = summedArrays.filter((item, pos) => summedArrays.indexOf(item) === pos);
    taskInput.value = "";    
  
    printTasks();

}

function removeTasks() {

    let confirm = window.confirm("Do you want to remove all the tasks?")
    if (confirm == true) {
        localStorage.clear();
        newTasks = [];
        storedTask = [];
        tasks = [];
        summedArrays = [];
        taskInput.value = "";

        sumArrays();

        printTasks();
    }

}

function printTasks() {


    let arrayStorage = localStorage.setItem("storage", JSON.stringify(tasks));


    let tbody = document.getElementById('tbody');

    tbody.innerText = "";

    for (let i = 0; i < tasks.length; i++) {
        let tr = tbody.insertRow();
        let tdTask = tr.insertCell();
        let tdDelete = tr.insertCell();

        tdTask.innerText = tasks[i];
        tdTask.classList.add("taskContent");

        let imgDelete = document.createElement("img");
        imgDelete.src = "./images/delete.png";
        imgDelete.addEventListener("click", e => {
                let del = e.target.parentElement.parentElement;
                del.remove();

                tasks = tasks.filter(e => e !== del.innerText);

                arrayStorage = localStorage.setItem("storage", JSON.stringify(tasks));

                arrayStorage = tasks;
                taskStorage = tasks;
                storedTask = tasks;
                newTasks = tasks;
        });
        imgDelete.classList.add("deleteImage");
        tdDelete.appendChild(imgDelete);
    }   
}
