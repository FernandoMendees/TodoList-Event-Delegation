import { addTask } from "../scripts/utils.js";

const taskInput = document.getElementById("task-input");
const buttonAddTask = document.getElementById("btn-add");
const taskList = document.getElementById("task-list");

buttonAddTask.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if(!taskText) return;

    addTask(taskText, taskList);
    taskInput.value = "";
});

taskList.addEventListener("click", (event)=> {
    const li = event.target.closest("li");

    if(!li) return;

    if(event.target.classList.contains("btn-remove")){
        li.remove();
        return;
    }
    if(event.target.classList.contains("btn-complete")){
        li.classList.add("task-complete");
        return
    }
});