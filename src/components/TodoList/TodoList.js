import React from 'react';
import { Container } from 'react-bootstrap';
import Todo from '../Todo/Todo';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) =>
  todos && todos.length ? (
    <Container className="mt-5">
      <ul aria-label="todo-list" className="list-group">
        {todos.map((todo, idx) => (
          <Todo
            key={todo.id}
            {...todo}
            onComplete={() => onToggleTodo(todo.id)}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        ))}
      </ul>
    </Container>
  ) : null;

export default TodoList;
