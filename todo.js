var taskList = [];
const inputField = document.body.querySelector('input');
const addButton = document.body.querySelector('button');
const tasksContainer = document.body.querySelector('div');

function addTasks(){
    let value = inputField.value;
    let tasks = '';
    taskList.push(value);
    for(let i = 0; i < taskList.length; i++){
        tasks += `<p>${taskList[i]}</p>`;
    }

    tasksContainer.innerHTML = tasks;
    console.log(tasks);
}

addButton.addEventListener('click', () =>{
    addTasks();
});