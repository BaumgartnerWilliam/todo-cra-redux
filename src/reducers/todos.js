import { TODOS } from '../constants';
import { v1 as uuidv1 } from 'uuid';

const { TOGGLE_TODO, ADD_TODO, DELETE_TODO } = TODOS;
const initialState = [
  { id: '1', text: 'note 1', done: false },
  { id: '2', text: 'note 2', done: false },
  { id: '3', text: 'note 3', done: true }
];

const todos = (state = initialState, { type, id, text }) => {
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuidv1(),
          text,
          done: false
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => id !== todo.id);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

export default todos;
