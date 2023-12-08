import {Header} from './components/header.js'
import {renderAddTask} from "./components/addTask/input.js";
import {getData, subscribe} from "./data.js";
import {renderTodolist} from "./components/todolist/todolist.js";

const rootElement = document.querySelector('#root')
function renderApp() {
    rootElement.innerHTML = ''
    const state = getData()
    rootElement.append(Header(), renderAddTask(), renderTodolist(state))
}
subscribe(renderApp)
renderApp()