import { v1 as uuidv1 } from 'uuid';
import todoReducer from '../todos';
import { TODOS as TODO_ACTIONS } from '../../actions';

const { addTodo, deleteTodo, toggleTodo } = TODO_ACTIONS;

jest.mock('uuid');
uuidv1.mockImplementation(() => 'my_id')

describe('todo reducer', () => {
  it('should add a todo to the state', () => {
    const beForeState = [];
    const input = 'my todo';

    const state = todoReducer(beForeState, addTodo(input));
    expect(state).toEqual([
      {
        text: input,
        done: false,
        id: 'my_id'
      }
    ]);
  });

  it('should remove a given todo by id from state', () => {
    const todo = {
      id: 1,
      text: 'abc',
      done: false
    };
    const beForeState = [todo];
    const state = todoReducer(beForeState, deleteTodo(todo.id));
    expect(state).toEqual([]);
  });

  it('should toggle a given todo state by id', () => {
    const todo1 = { id: 10, text: 'abc', done: false };
    const todo2 = { id: 12, text: 'abc', done: false };
    const beForeState = [todo1, todo2];
    const state = todoReducer(beForeState, toggleTodo(12));

    expect(state).toEqual([todo1, { ...todo2, done: true }]);
  });
});
