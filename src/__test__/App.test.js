import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import App from '../App';

describe('app', () => {
  it('renders without errors', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('starts the app with 3 notes', () => {
    const { queryAllByLabelText } = render(<App />);
    expect(queryAllByLabelText('todo').length).toBe(3);
  });

  it('has an add button', () => {
    const { getByText } = render(<App />);
    getByText(/^Add$/);
  });

  it('can add and remove todos', async () => {
    const { getByPlaceholderText, queryAllByLabelText, getByText } = render(
      <App />
    );

    await wait(() => {
      fireEvent.change(getByPlaceholderText(/my todo note/), {
        target: { value: 'my new todo' }
      });
    });

    await wait(() => {
      fireEvent.click(getByText(/^Add$/));
    });

    const todos = queryAllByLabelText('todo');

    expect(todos.length).toBe(4);
    const deleteButton = todos[3].querySelector('[aria-label="delete-todo"]');

    await wait(() => {
      fireEvent.click(deleteButton);
    });

    expect(queryAllByLabelText('todo').length).toBe(3);
  });

  it('matches snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
