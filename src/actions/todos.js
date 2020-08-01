import { TODOS } from '../constants';

const { TOGGLE_TODO, ADD_TODO, DELETE_TODO } = TODOS;

export const addTodo = text => ({
  type: ADD_TODO,
  text
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
