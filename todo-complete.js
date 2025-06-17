var taskList = [];
const inputField = document.body.querySelector('input');
const datePicker = document.body.querySelector('.datePick');
const addButton = document.body.querySelector('button');
const tasksContainer = document.body.querySelector('div');

function addTask(){
    let value1 = inputField.value;
    let value2 = datePicker.value;
    if(value1 !== "" && value2 !== ""){
        taskList.push({name: value1, date: value2});
        renderTask();
    }
    
    inputField.value = "";
    datePicker.value = "";
}

function renderTask(){
    let tasks = '';
    for(let i = 0; i < taskList.length; i++){
        const item = taskList[i];
        //const itemName = item.name;
        //const itemDate = item.date;
        const {name, date} = item;
        tasks += `<p>${name} ${date} <button onclick=deleteTask(${i})>Delete</button></p>`;
    }

    tasksContainer.innerHTML = tasks;
}

function deleteTask(index){
    taskList.splice(index, 1);
    renderTask();
}

addButton.addEventListener('click', () =>{
    addTask();
});

/*
Para lang di ko malimutan:
1. When add button is triggered, addTask function will be called
2. Variable value gets the value in the input field. 
If the input field is not empty, it will push it in the array 
and renderTask will be called. then the input field will be cleared.
3. tasks will be added in the variable tasks by looping through the
array. it also comes with the delete button. delete button
will call the deleteTask function.
4. Delete task functrion will delete the task through splice 
which takes the index of the task, and the number of items??
the it will call again the renderTask  function.



*/