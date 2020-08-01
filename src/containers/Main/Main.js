import './Main.css';
import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import { TODOS as TODOS_ACTIONS } from '../../actions';
import { AddTodo, TodoList } from '../../components';

const { toggleTodo, addTodo, deleteTodo } = TODOS_ACTIONS;

export const Main = ({ todos, onToggleTodo, onAddTodo, onDeleteTodo }) => (
  <Container className="mt-5 col-6">
    <AddTodo onAddTodo={onAddTodo} />
    <TodoList
      todos={todos}
      onToggleTodo={onToggleTodo}
      onDeleteTodo={onDeleteTodo}
    />
  </Container>
);

const mapState = ({ todos }) => {
  return {
    todos
  };
};

const mapDispatch = dispatch => ({
  onToggleTodo: id => dispatch(toggleTodo(id)),
  onAddTodo: text => dispatch(addTodo(text)),
  onDeleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(mapState, mapDispatch)(Main);
