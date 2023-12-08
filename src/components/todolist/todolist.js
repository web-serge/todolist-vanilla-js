import {deleteTask} from "../../data.js";

export function renderTodolist(state) {
    const container = document.createElement('div');
    container.append(createFilterButtons(), createTodolistItems(state))
    return container;
}
//рендер всех тасок ul > li ...
function createTodolistItems(state) {
    const ulElement = document.createElement('ul');

    for (let i = 0; i < state.length; i++) {
        ulElement.append(createItem(state, state[i].isDone, state[i].title, state[i].id))
    }
    return ulElement
}
//создаём разметку для таски
function createItem(state, isDone, title, id) {
    const container = document.createElement('div'),
          checkboxElement = createCheckbox(isDone),
          titleElement = createTitle(title),
          deleteButton = createDeleteButton(id);

    container.append(checkboxElement, titleElement, deleteButton)
    return container
}
//Разметка чекбокс
function createCheckbox(isDone) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isDone
    return checkbox
}
//Разметка заголовка
function createTitle(title) {
    const titleElement = document.createElement('span');
    titleElement.innerText = title
    return titleElement
}
//Разметка кнопки удаления таски
function createDeleteButton(id) {
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.innerText = '❎';
    deleteButtonElement.addEventListener('click', () => deleteTask(id))
    return deleteButtonElement
}
//Разметка кнопок фильтрации
function createFilterButtons() {
    const container = document.createElement('div');
    const allButton = document.createElement('button')
    allButton.innerText = 'All'
    const incompleteButton = document.createElement('button')
    incompleteButton.innerText = 'Incomplete'
    const completeButton = document.createElement('button')
    completeButton.innerText = 'Complete'
    container.append(allButton, incompleteButton, completeButton)
    return container
}