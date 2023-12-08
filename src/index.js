import {Header} from './components/header.js'
import {renderAddTask} from "./components/addTask/input.js";
import {getData} from "./data.js";
import {renderTodolist} from "./components/todolist/todolist.js";

function renderApp() {
    const rootElement = document.querySelector('#root')
    const state = getData()
    rootElement.append(Header(), renderAddTask(), renderTodolist(state))
}

renderApp()