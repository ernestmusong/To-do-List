//edit function
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

// clear completed tasks
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

