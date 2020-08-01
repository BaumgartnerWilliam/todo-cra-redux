import { addTodo, deleteTodo, toggleTodo } from '../todos';
import { TODOS } from '../../constants';

const { ADD_TODO, DELETE_TODO, TOGGLE_TODO } = TODOS;

describe('todo action creators', () => {
  describe('addTodo', () => {
    it(`should match ${ADD_TODO} action type`, () => {
      const text = 'my todo text';
      expect(addTodo(text)).toEqual({
        type: ADD_TODO,
        text
      });
    });
  });

  describe('toggleTodo', () => {
    it(`should match ${TOGGLE_TODO} action type`, () => {
      const id = 12;
      expect(toggleTodo(id)).toEqual({
        type: TOGGLE_TODO,
        id
      });
    });
  });

  describe('deleteTodo', () => {
    it(`should match ${DELETE_TODO} action type`, () => {
      const id = 99;
      expect(deleteTodo(id)).toEqual({
        type: DELETE_TODO,
        id
      });
    });
  });
});
