/**
 * @jest-environment jsdom
 */

let todoArray = [];
const todo = {
  description: String,
  completed: false,
};
const inputField = document.createElement('input');
inputField.value = "one"

const addTodo = () => {
    
    if (inputField.value.length !== 0) {
      todo.description = inputField.value;
      todoArray.push(todo);
      for (let i = 0; i < todoArray.length; i += 1) {
        todoArray[i].index = i + 1;
      }
      localStorage.setItem('todos', JSON.stringify(todoArray));
    }
  }

 describe('todo', () => {
    test('add a todo to todo array', () => {
         addTodo()
        expect(todoArray.length).toBe(1);
      });
    
 })