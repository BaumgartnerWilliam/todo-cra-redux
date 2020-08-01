import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from '../Todo';

describe('todo component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Todo />);
    expect(container).toBeInTheDocument();
  });

  it('fires the onClick event properly', () => {
    const todo = {
      id: 12,
      text: 'todo',
      done: false,
      onComplete: jest.fn(),
      onDelete: jest.fn(),
    };
    const { getByLabelText } = render(<Todo {...todo} />);
    getByLabelText('unchecked')
    expect(todo.onComplete).not.toHaveBeenCalled();
    fireEvent.click(getByLabelText('todo'));
    expect(todo.onComplete).toHaveBeenCalled();
  });

  it('fires the onDelete event properly', () => {
    const todo = {
      id: 12,
      text: 'todo',
      done: false,
      onComplete: jest.fn(),
      onDelete: jest.fn(),
    };
    const { getByLabelText } = render(<Todo {...todo} />);
    expect(todo.onDelete).not.toHaveBeenCalled();
    fireEvent.click(getByLabelText('delete-todo'));
    expect(todo.onDelete).toHaveBeenCalled();
  });

  it('matches unchecked snapshot', () => {
    const todo = {
      id: 99,
      text: 'my todo text',
      done: false
    };
    const { container, getByText, getByLabelText } = render(<Todo {...todo} />);

    getByText(todo.text);
    getByLabelText('unchecked')
    expect(container).toMatchSnapshot();
  });

  it('matches checked snapshot', () => {
    const todo = {
      id: 99,
      text: 'my todo text',
      done: true
    };
    const { container, getByText, getByLabelText } = render(<Todo {...todo} />);

    getByText(todo.text);
    getByLabelText('checked')
    expect(container).toMatchSnapshot();
  });
});
