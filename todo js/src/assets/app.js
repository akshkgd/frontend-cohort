let todos = [];
let initTask = document.querySelector('#addTaskButton');
let addTaskContainer = document.querySelector('#addTaskContainer');
let addTask = document.getElementById('addTask');
let taskInput = document.getElementById('task');
let dueDateInput = document.getElementById('dueDate');
let todosContainer = document.getElementById('todosContainer');
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };


initTask.addEventListener('click', ()=>{
    addTaskContainer.classList.remove('hidden');
})


function renderTodos(){
    todosContainer.innerHTML = ""
    let statusClass = ""
    todos.forEach((todo, index)=>{
        if(todo.status === 'done'){
            statusClass = 'bg-green-50 border-green-400'
        }
        else{
            statusClass = "border-neutral-200 bg-white "
        }
        let date = new Date(todo.dueDate);
        fDate = date.toLocaleDateString('en', options)
        let div = document.createElement('div');
        div.innerHTML = `<div id="taskStatus" class="border  bg-neutral-0 mb-3  rounded-xl p-3 ${statusClass}">    
        <p>${todo.task}</p>   
        <p class=" text-[14px] font-light  text-neutral-700">${fDate}</p>
        <div class="flex gap-4 ">
            <button id="task-completed" data-id="${index}" class="text-neutral-400 hover:text-green-600 flex gap-3 font-light mt-2 text-sm items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
              </svg> Mark as done</button>
            <button id="delete-task" data-id="${index}" class="text-neutral-400 hover:text-red-500 flex gap-3 font-light mt-2 text-sm items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
              </svg> Delete</button>
        </div>
     </div>`;
     
     todosContainer.appendChild(div);
    })
    let taskCompletedBtn = document.querySelectorAll('#task-completed');
    let deleteTaskBtn = document.querySelectorAll('#delete-task');

    taskCompletedBtn.forEach((taskCompleted)=>{
        taskCompleted.addEventListener('click', (e)=>{
            let index = e.target.getAttribute('data-id');
           let todo = todos[index];
           todo.status = 'done'
           
           renderTodos();
        })
        
    })

    deleteTaskBtn.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            e.stopPropagation();
            let index = e.target.getAttribute('data-id');
            todos.splice(index, 1)
          console.log(todos)
           renderTodos();
        })
        
    })
   
}

addTask.addEventListener('click', ()=>{
    let task = {
        task : taskInput.value,
        dueDate : dueDateInput.value,
    }
    addTaskContainer.classList.add('hidden')
    todos.push(task);
    console.log(todos);
    todosContainer.innerHTML = ""
    renderTodos();
})


var el = document.getElementById('todosContainer');
new Sortable(el, {
    animation: 150,
    ghostClass: 'blue-background-class'
});