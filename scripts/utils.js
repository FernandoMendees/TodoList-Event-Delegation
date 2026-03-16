export function addTask(task, taskList) {
    const li = document.createElement("li")
        li.classList.add("task-card");

    const span = document.createElement("span");
        span.textContent = task;
        span.classList.add("task-text");
    
    const buttonComplete = document.createElement("button");
        buttonComplete.textContent = "Complete";
        buttonComplete.classList.add("btn-complete", "btn");

    const buttonRemove = document.createElement("button");
        buttonRemove.textContent = "Remove";
        buttonRemove.classList.add("btn-remove", "btn");

    const div = document.createElement("div");
        div.classList.add("task-actions");
        div.appendChild(buttonComplete);
        div.appendChild(buttonRemove);
    
    li.appendChild(span);
    li.appendChild(div);
    
    taskList.appendChild(li);
};