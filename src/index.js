import _ from 'lodash';
import './style.css';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faRotate } from "@fortawesome/free-solid-svg-icons/faRotate";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons/faArrowTurnDown";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons/faEllipsisVertical";

library.add(faRotate, faArrowTurnDown, faEllipsisVertical);
dom.watch();

const todos = [
  {
    index: 1,
    description: "First item",
    completed: false,
  },
  {
    index: 2,
    description: "Second item",
    completed: false,
  },
  {
    index: 3,
    description: "Third item",
    completed: false,
  }
]

const listWrap = document.querySelector('#list-wrap');

const displayList = (todos) => {
  let result = '';
  todos.map(item => {
    result += `
    <li class="list-item">
    <form action="">
        <div class="label-wrap">
            <label for="checkbox">
                <input class="checkbox" type="checkbox" name="checkbox" id="checkbox">
            </label>
            <label for="add-item">
                <input class="input-field" type="text" name="add-item" id="add-item" value="${item.description}">
            </label>
        </div>
        <button class="drag"><i class="fa-solid fa-ellipsis-vertical"></i></button>
    </form>
</li>
    `
    return result;
  })

  listWrap.innerHTML = result;
  return result;
}

window.addEventListener('DOMContentLoaded', () => {
  displayList(todos);
})
