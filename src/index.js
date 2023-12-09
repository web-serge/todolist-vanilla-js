import {Header} from './components/header.js'
import {getData, subscribe} from "./data.js";
import {renderTodolist} from "./components/todolist/todolist.js";

const rootElement = document.querySelector('#root')
function renderApp() {
    rootElement.innerHTML = ''
    const state = getData()
    rootElement.append(Header(), renderTodolist(state))
}
subscribe(renderApp)
renderApp()