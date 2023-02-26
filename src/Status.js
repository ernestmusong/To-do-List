import UI from './ui.js';

export default class STATUS {
  static checkStatus(e) {
    const clearBtn = document.querySelector('#clear-all');
    const checkBtns = [...document.querySelectorAll('.checkbox')];
    checkBtns.forEach((btn) => {
      if (e.target === btn) {
        const todoArr = JSON.parse(localStorage.getItem('todos'));
        const checked = todoArr.find((item) => item.index.toString() === e.target.id.toString());
        if (checked.completed === false) {
          checked.completed = true;
          localStorage.setItem('todos', JSON.stringify(todoArr));
        } else if (checked.completed === true) {
          checked.completed = false;
          localStorage.setItem('todos', JSON.stringify(todoArr));
        }
        for (let i = 0; i < todoArr.length; i += 1) {
          if (todoArr[i].completed === true) {
            clearBtn.style.opacity = 1;
            clearBtn.style.textDecoration = 'underline';
          }
        }
      }
    });
  }

  static clearAll() {
    let todoArr = JSON.parse(localStorage.getItem('todos'));
    const checkedTodos = todoArr.filter((item) => item.completed === false);
    todoArr = checkedTodos;
    for (let i = 0; i < todoArr.length; i += 1) {
      todoArr[i].index = i + 1;
    }
    localStorage.setItem('todos', JSON.stringify(todoArr));
    UI.displayTodos();
  }

  static resetCompleted() {
    const todoArr = JSON.parse(localStorage.getItem('todos'));
    todoArr.forEach((item) => item.completed === false);
    localStorage.setItem('todos', JSON.stringify(todoArr));
    return todoArr;
  }
}
