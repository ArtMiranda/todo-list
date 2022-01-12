// Define the array of tasks
let taskArrayFromInput = [];
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
        conctenateTasks();
    }

}

function addTask() {

    taskArrayFromInput.push(taskInput.value);

    conctenateTasks();

}

let storedTask = JSON.parse(localStorage.getItem("storage"));

function conctenateTasks() {

    let arraysConcatenated = storedTask.concat(taskArrayFromInput);
    tasks = arraysConcatenated.filter((item, pos) => arraysConcatenated.indexOf(item) === pos)
    taskInput.value = "";
    console.log(tasks);

    printTasks();

}

function removeTasks() {

    taskArrayFromInput = [];
    localStorage.clear();
    storedTask = []; 
    tasks = [];
    taskInput.value = "";
    alert("Tasks have been removed");

    printTasks();
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
            let del = e.target.parentElement.parentElement
            console.log(del);
            del.remove();

            tasks = tasks.filter(e => e !== del.innerText);

            console.log(tasks);
            console.log(storedTask);
        });

        imgDelete.classList.add("deleteImage");
        tdDelete.appendChild(imgDelete);


    }
}
