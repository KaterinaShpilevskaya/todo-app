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
    
    if (text) {
        const newTodo = {
            id : Date.now(),
            checked: false,
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


function createTodoItem(id, text, date, checked) {
    const todoItem = document.importNode(todoItemTemplate.content, true);
    const todoCheck = todoItem.querySelector('[data-todo-checkbox]');
    todoCheck.checked = checked;

    todoCheck.addEventListener ('change', (e) => {
    //     todos = todos.map( item => {
    //         if (item.id === id) {
    //              item.checked = e.target.checked;
    //         }
    //         return item
    //    });

            todos.forEach( todo => {
                if (todo.id === id) {
                    todo.checked = e.target.checked;
                }
            })

       updateLocalStorage(todos);
       });
    const todoDescription = todoItem.querySelector('[data-todo-description]');
    todoDescription.textContent = text;
    const todoData = todoItem.querySelector('[data-todo-date]');
    todoData.textContent = `${date}`;
    
    
    
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
            const todo = createTodoItem(el.id, el.text, el.date, el.checked);
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