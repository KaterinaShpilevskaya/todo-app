const todoItemTemplate = document.querySelector('[data-todo-item-template]');
const todosList = document.querySelector('[data-todos-container]'); 
const inputAdd = document.querySelector('[data-input-add]');
const buttonAdd = document.querySelector('[data-button-add]');
const buttonDeleteAll = document.querySelector('[data-button-delete-all]');
const taskActive = document.querySelector('[data-counter-active-span]');
const taskCompleted = document.querySelector('[data-counter-completed-span]');

export const todoElements = {
    todoItemTemplate,
    todosList,
    inputAdd,
    buttonAdd,
    buttonDeleteAll,
    taskActive,
    taskCompleted,
};