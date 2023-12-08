let state = [
    {id: '1', title: 'Learn JavaScript', isDone: false},
    {id: '2', title: 'Learn HTML', isDone: true},
    {id: '3', title: 'Learn CSS', isDone: true},
];
let subscriber = null;
export function subscribe(listener) {
    subscriber = listener
}
let currentId = ''
export let inputValue = '';
//Присваиваем новое вэлью инпуту при вводе каждого нового символа
export function changeInput(e) {
    inputValue += e
    subscriber()
}
export function getData() {
    const filteredState = state.filter(i => i.id !== currentId)
    return filteredState
}



export function deleteTask(id) {
    state = state.filter(i => i.id !== id)
    currentId = id
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