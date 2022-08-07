export const initializeTodos = () => {
    return !localStorage.todos
    ? []
    : JSON.parse(localStorage.getItem('todos'));
};


export const updateLocalStorage = (todos) => {
    const item = JSON.stringify(todos);
    localStorage.setItem('todos', item);
};