export function renderTodolist(state) {
    const container = document.createElement('div');

    container.append(createFilterButtons(), createTodolistItems(state))
    return container;
}

function createTodolistItems(state) {
    const ulElement = document.createElement('ul');

    for (let i = 0; i < state.length; i++) {
        ulElement.append(createItem(state[i].isDone, state[i].title))
    }
    return ulElement
}

function createItem(isDone, title) {
    const container = document.createElement('div'),
          checkboxElement = createCheckbox(isDone),
          titleElement = createTitle(title),
          deleteButton = createDeleteButton();

    container.append(checkboxElement, titleElement, deleteButton)
    return container
}

function createCheckbox(isDone) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isDone
    return checkbox
}
function createTitle(title) {
    const titleElement = document.createElement('span');
    titleElement.innerText = title
    return titleElement
}
function createDeleteButton() {
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.innerText = '❎';
    return deleteButtonElement
}
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