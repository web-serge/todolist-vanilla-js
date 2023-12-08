// Data
let state = [
    {id: '1', title: 'Learn JavaScript', isDone: false},
    {id: '2', title: 'Learn HTML', isDone: true},
    {id: '3', title: 'Learn CSS', isDone: true},
];
export let inputValue = '';
let subscriber = null;
//
export function subscribe(listener) {
    subscriber = listener
}
let currentValue = null

//getter data
export function getData() {
    const filteredState = state.filter(i => i.isDone !== currentValue)
    return filteredState
}

//Присваиваем новое вэлью инпуту при вводе каждого нового символа
export function changeInput(e) {
    inputValue += e
    subscriber()
}

//удаление тасок
export function deleteTask(id) {
    state = state.filter(i => i.id !== id)
    subscriber()
}

//Добавляем новую таску
export function addNewTask(value) {
    const newTask = {
        id: Math.random().toString(),
        title: value,
        isDone: false
    }
    state.push(newTask)
    inputValue = ''
    subscriber()
}

//фильтрация тасок
export function filteredTask(value) {
    currentValue = value
    subscriber()
}

//Отслеживаем изменение чекбоксов
export function changeChecked(isDone, id) {
    //Находим таску по id, которой нужно изменить состояние чекбокса
    const currenTask = state.find(task => task.id === id)
    //делаем проверку и изменяем состояние
    if (!!currenTask) {
        currenTask.isDone = isDone
    }
    subscriber()
}