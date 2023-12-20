import {addNewTask, changeInput, inputValue} from "../../data.js";

export function renderAddTask() {
    const containerElement = document.createElement('div');
    containerElement.classList.add('addTask')
    const inputElement = createInputElement()
    containerElement.append(inputElement, createButtonElement(inputElement))
    return containerElement
}

function createInputElement() {
    const inputElement = document.createElement('input')
    inputElement.placeholder = 'Write your task';
    inputElement.value = inputValue;
    inputElement.type = 'text'
    inputElement.addEventListener('input', (e) => {
        inputElement.classList.remove('active')
        console.log(inputElement.value)
        changeInput(inputElement.value)
    })
    // Для фокуса поля ввода при перерисовке используем setTimeOut или requestAnimationFrame
    // setTimeout(() => {inputElement.focus()}, 0)
    requestAnimationFrame(() => {
        inputElement.focus()
    })
    return inputElement
}

function createButtonElement(inputElement) {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('addTask__button')
    buttonElement.addEventListener('click', () => {
        if (inputElement.value.trim() === '') {
            inputElement.classList.add('active')
            inputElement.placeholder = 'Fill in the field'
            return
        }
        addNewTask(inputElement.value)
    })
    return buttonElement;
}