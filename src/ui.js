const inputField = document.querySelector('.input-field');
const list = document.querySelector('#list-wrap');
const counter = document.querySelector('#count');

let todoArr = [];
const todo = {
  description: String,
  completed: false,
};

export default class UI {
  static addTodo() {
    if (inputField.value.length !== 0) {
      todo.description = inputField.value;
      todoArr.push(todo);
      inputField.value = '';
      for (let i = 0; i < todoArr.length; i += 1) {
        todoArr[i].index = i + 1;
      }
      localStorage.setItem('todos', JSON.stringify(todoArr));
    }
  }

  static displayTodos() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    counter.textContent = todos.length;
    if (todos) {
      todoArr = todos;
    }
    let result = '';
    todoArr.map((todo) => {
      result += `
        <li id=${todo.index} class="list-item">
            <form id=${todo.index} class='edit-todo' action="">
                <div class="label-wrap">
                    <label for="checkbox">
                        <input class="checkbox" type="checkbox" name="checkbox" id=${todo.index}>
                    </label>
                    <label for=${todo.index}>
                        <input class="input" type="text" name="add-item" id=${todo.index} value="${todo.description}">
                    </label>
                </div>
                </form>
                <button id=${todo.index} class="drag">remove</button>
        </li>
              `;
      return result;
    });

    list.innerHTML = result;
    return result;
  }

  static removeTodo(e) {
    const deleteBtns = [...document.querySelectorAll('.drag')];
    deleteBtns.forEach((btn) => {
      if (e.target === btn) {
        const filtered = todoArr.filter((item) => item.index.toString() !== e.target.id.toString());
        todoArr = filtered;
        for (let i = 0; i < todoArr.length; i += 1) {
          todoArr[i].index = i + 1;
        }

        localStorage.setItem('todos', JSON.stringify(todoArr));
        UI.displayTodos();
      }
    });
  }

  static editTodo(e) {
    const editTodos = [...document.querySelectorAll('.input')];
    editTodos.forEach((todo) => {
      if (e.target === todo) {
        const item = todoArr.find((item) => item.index.toString() === e.target.id.toString());
        if (e.target.value.length !== 0) {
          item.description = e.target.value;
        }

        localStorage.setItem('todos', JSON.stringify(todoArr));
      }
    });
  }
}
