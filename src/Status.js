import UI from './ui.js';

export default class STATUS {
  static checkStatus(e) {
    const checkBtns = [...document.querySelectorAll('.checkbox')];
    checkBtns.forEach((btn) => {
      if (e.target === btn) {
        const todoArr = JSON.parse(localStorage.getItem('todos'));
        const checked = todoArr.find((item) => item.index.toString() === e.target.id.toString());
        if (checked) {
          checked.completed = true;
        }
        localStorage.setItem('todos', JSON.stringify(todoArr));
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
}
