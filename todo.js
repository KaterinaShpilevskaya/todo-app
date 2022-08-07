import {todoElements} from './app/todoElements.js';
import {initializeTodos, updateLocalStorage} from './app/localStorage.js';
import {getDate} from './app/getDate.js';

const {
    todoItemTemplate,
    todosList,
    inputAdd,
    buttonAdd,
    buttonDeleteAll,
} = todoElements;

let todos = initializeTodos();

buttonAdd.addEventListener('click', () => {
    const text = inputAdd.value.trim();
    
    if(text) {
        const newTodo = {
            id : todos.length + 1,
            text,
            date: getDate(new Date()),
        }
        todos.push(newTodo);
        inputAdd.value = '';
    }
    updateLocalStorage(todos);
    inputAdd.focus();
    render();
})

buttonDeleteAll.addEventListener('click', () => {
    todos.splice(0, todos.length);
    updateLocalStorage(todos);
    render();
})



function createTodoItem(id, text, date) {
    const todoItem = document.importNode(todoItemTemplate.content, true);
    const todoData = todoItem.querySelector('[data-todo-date]');
    todoData.textContent = `${date}`;
    const todoDescription = todoItem.querySelector('[data-todo-description]');
    todoDescription.textContent = text;
    
    const buttonDelete = todoItem.querySelector('[data-todo-button-delete]');

    buttonDelete.addEventListener('click', () => {
        todos = todos.filter(todo => todo.id !== id)
        updateLocalStorage(todos);
        render();
    })

    return todoItem;
}

function clearTodoList() {
    todosList.innerHTML = '';
}

function appendTodos() {
    if (todos.length) {
        todos.forEach(el => {
            const todo = createTodoItem(el.id, el.text, el.date);
            todosList.append(todo);
        })
    
    } else {
        todosList.insertAdjacentHTML('beforeend', `<p class = "noTodos"> No todos... </p>` ) 
    }
    updateLocalStorage(todos);
}

function render() {
    clearTodoList();
    appendTodos();
}

render();