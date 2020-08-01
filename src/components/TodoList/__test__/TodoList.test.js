import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList component', () => {
  it('renders without crashing', () => {
    const { container } = render(<TodoList />);
    expect(container).toBeInTheDocument();
  });

  it('renders passed in todos', () => {
    const todos = [
      { id: 1, text: 'abc' },
      { id: 2, text: 'abc' }
    ];
    const { getByLabelText } = render(<TodoList todos={todos} />);
    const displayedTodos = getByLabelText('todo-list').querySelectorAll(
      '[aria-label="todo"]'
    );
    expect(displayedTodos.length).toBe(2);
  });
});
