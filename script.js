// Define the array of tasks
let newTasks = [];
let tasks = [];

addEventListener('keypress', e => {
    if (e.key == "Enter") {

        avoidBlank();
    }
})

function onloadFunction() {

    if (typeof storedTask !== "") {
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

function addTask() {

    newTasks.push(taskInput.value);

    sumArrays();

}

let storedTask = JSON.parse(localStorage.getItem("storage"));

function sumArrays() {

    let summedArrays = storedTask.concat(newTasks);
    tasks = summedArrays.filter((item, pos) => summedArrays.indexOf(item) === pos);
    taskInput.value = "";
    console.log(tasks);

    printTasks();

}

function removeTasks() {

    let confirm = window.confirm("Do you want to remove all the tasks?")
    if(confirm == true){ 
        newTasks = [];
        localStorage.clear();
        storedTask = []; 
        tasks = [];
        taskInput.value = "";

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
            let confirm1 = window.confirm("Do you want to remove this task?");
                if (confirm1 == true){
                let del = e.target.parentElement.parentElement
                console.log(del);
                del.remove();
    
                tasks = tasks.filter(e => e !== del.innerText);

                arrayStorage = localStorage.setItem("storage", JSON.stringify(tasks));

                arrayStorage = tasks;
                taskStorage = tasks;
                storedTask = tasks;

                console.log(tasks);
                console.log(storedTask)
                }
        });

        imgDelete.classList.add("deleteImage");
        tdDelete.appendChild(imgDelete);


    }
}
