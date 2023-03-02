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

const removeTodo =(id) => {
     
        const filtered = todoArray.filter((item) => item.index !== id);
        todoArray = filtered;
        for (let i = 0; i < todoArray.length; i += 1) {
          todoArray[i].index = i + 1;
        }

        localStorage.setItem('todos', JSON.stringify(todoArray));
      }

 describe('todo', () => {
    test('add a todo to todo array', () => {
         addTodo()
        expect(todoArray.length).toBe(1);
      });
    test('remove a todo from todo array', () => {
         removeTodo(1)
        expect(todoArray.length).toBe(0);
      });
 })
