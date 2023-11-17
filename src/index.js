let toDos = [];
let todoContainer = document.querySelector('#list-wrap');
let countEl = document.querySelector('#count');


const displayTodos = () => {
    let result = '';
    let todos = JSON.parse(localStorage.getItem('todos'))
    if(todos){
        toDos = todos
    }
    toDos.map((todo) => {
        result += `
        <li id='' class="list-item">
            <form id='' class='edit-todo' action="">
                <div class="label-wrap"> 
                     
                     <label for="checkbox">
                      <input onClick=showDeleteBtn(${todo.id}) class="checkbox" type="checkbox" name="checkbox" id='checkbox'>
                     </label>
                      <label for='todo'> 
                    <input class="input" type="text" name="add-item" data-id="${todo.id}" value="${todo.text}">
                </label>
                    
                </div>
            </form>
            <button onClick=showEditing(${todo.id})  class="drag edit" data-edit="${todo.id}">edit</button>
            <button onClick=editTodo(${todo.id})  class="drag update hide" data-update="${todo.id}">update</button>
            <button onClick=deleteTodo(${todo.id}) id="${todo.id}" class="drag hide">remove</button>

        </li>
        `
        return result;
    })
    todoContainer.innerHTML = result;
    countEl.innerHTML = toDos.length;
    return result;
}

let todo = {
    text: '',
    completed: false
}

let form = document.querySelector('.form');
let textInput = document.querySelector('#add-item');

const addTodo = () => {
   if(textInput.value.length !== 0){
    todo.text = textInput.value
    toDos.push(todo);
    textInput.value = ''
   }
   for(let i=0; i<toDos.length; i++){
    toDos[i].id = i + 1
   }
   localStorage.setItem('todos', JSON.stringify(toDos))
   console.log(toDos)
   displayTodos();
}

const deleteTodo = (id) => {
    let todos = toDos.filter((item) => item.id !== id)
    localStorage.setItem('todos', JSON.stringify(todos))
    displayTodos()
    return todos;
}

const showDeleteBtn = (id) => {
    let deleteBtn = document.getElementById(id)
    let todo = toDos.find((todo) => todo.id === id)
    todo.completed = !todo.completed
    deleteBtn.classList.toggle('hide')
}
 
// Edit Todo
const showEditing = (id) => {
    let todo = toDos.find((todo) => todo.id === id)
    let updateBtn = document.querySelector(`[data-update="${todo.id}"]`)
    let editBtn = document.querySelector(`[data-edit="${todo.id}"]`)
    let input = document.querySelector(`[data-id="${todo.id}"]`)
    input.style.border = "1px solid red";
    updateBtn.classList.toggle('hide')
    editBtn.classList.toggle('hide')
    console.log(input)
    console.log(updateBtn)
}
const editTodo = (id) =>{
    let todo = toDos.find((todo) => todo.id === id)
    let updateBtn = document.querySelector(`[data-update="${todo.id}"]`)
    let editBtn = document.querySelector(`[data-edit="${todo.id}"]`)
    let input = document.querySelector(`[data-id="${todo.id}"]`)
    if(input.value.length !== 0){
        todo.text = input.value;
        localStorage.setItem('todos', JSON.stringify(toDos))
    }
    updateBtn.classList.toggle('hide')
    editBtn.classList.toggle('hide')
    displayTodos()
}


const clearAll = () => {
    let todos = toDos.filter((todo) => todo.completed === false)
    localStorage.setItem('todos', JSON.stringify(todos))
    displayTodos()
    return todos;
}
 
window.addEventListener('DOMContentLoaded', () => {
    displayTodos();
})
 
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    addTodo();
     
})