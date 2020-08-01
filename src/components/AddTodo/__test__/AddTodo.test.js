import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import AddTodo from '../AddTodo';

describe('todo component', () => {
  it('renders without crashing', () => {
    const { container } = render(<AddTodo />);
    expect(container).toBeInTheDocument();
  });

  it('calls the callback with the proper value', async () => {
    const props = {
      onAddTodo: jest.fn()
    };
    const value = 'todo text';
    const { getByLabelText } = render(<AddTodo {...props} />);

    await wait(() => {
      fireEvent.change(getByLabelText('add-todo-input'), {
        target: { value }
      });
    });

    await wait(() => {
      fireEvent.click(getByLabelText('submit-todo'));
    });

    expect(props.onAddTodo).toHaveBeenCalledWith(value);
  });

  it('matches the snapshot', () => {
    const { container } = render(<AddTodo />);
    expect(container).toMatchSnapshot();
  });
});
