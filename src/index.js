/* eslint no-unused-vars: 0 */
/* eslint import/extensions: 0 */
import './style.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faRotate } from '@fortawesome/free-solid-svg-icons/faRotate';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons/faArrowTurnDown';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';
import UI from './ui.js';
import STATUS from './Status.js';

library.add(faRotate, faArrowTurnDown, faEllipsisVertical, faTrashAlt);
dom.watch();

const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit');
const clearBtn = document.querySelector('#clear-all');

window.addEventListener('DOMContentLoaded', () => {
  UI.displayTodos();
});

submitBtn.addEventListener('click', (e) => {
  UI.editTodo(e);
  UI.displayTodos();
});

window.addEventListener('click', (e) => {
  UI.removeTodo(e);
});

window.addEventListener('change', (e) => {
  UI.editTodo(e);
  STATUS.checkStatus(e);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  UI.addTodo();
  UI.displayTodos();
});

window.addEventListener('load', () => {
  UI.displayTodos();
});

clearBtn.addEventListener('click', () => {
  STATUS.clearAll();
  clearBtn.style.opacity = '0.5';
  clearBtn.style.textDecoration = 'none';
});

window.onbeforeunload = () => {
  STATUS.resetCompleted();
};