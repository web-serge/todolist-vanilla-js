export function renderAddTask() {
    const containerElement = document.createElement('div');
    containerElement.append(createInputElement(), createButtonElement())
    return containerElement
}

function createInputElement() {
    const inputElement = document.createElement('input')
    inputElement.placeholder = 'Write your task';
    return inputElement
}

function createButtonElement() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = '➕';
    return buttonElement;
}