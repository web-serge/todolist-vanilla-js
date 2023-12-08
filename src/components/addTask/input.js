import {addNewTask, changeInput, inputValue} from "../../data.js";

export function renderAddTask() {
    const containerElement = document.createElement('div');
    const inputElement = createInputElement()
    containerElement.append(inputElement, createButtonElement(inputElement.value))
    return containerElement
}

function createInputElement() {
    const inputElement = document.createElement('input')
    inputElement.placeholder = 'Write your task';
    inputElement.value = inputValue;
    inputElement.addEventListener('input', (e) => {
        inputElement.blur()
        changeInput(e.data)
    })
    return inputElement
}

function createButtonElement(value) {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = '➕';
    buttonElement.addEventListener('click', () => addNewTask(value))
    return buttonElement;
}