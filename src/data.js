let state = [
    {id: '1', title: 'Learn JavaScript', isDone: false},
    {id: '2', title: 'Learn HTML', isDone: true},
    {id: '1', title: 'Learn CSS', isDone: true},
]

export function getData() {
    console.log(state)
    return state
}