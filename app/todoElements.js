const todoItemTemplate = document.querySelector('[data-todo-item-template]');
const todosList = document.querySelector('[data-todos-container]'); 
const inputAdd = document.querySelector('[data-input-add]');
const buttonAdd = document.querySelector('[data-button-add]');
const buttonDeleteAll = document.querySelector('[data-button-delete-all]');

export const todoElements = {
    todoItemTemplate,
    todosList,
    inputAdd,
    buttonAdd,
    buttonDeleteAll
};