import React, { useState } from 'react';
import { Col, Form, Button } from 'react-bootstrap';

const AddTodo = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    const {
      addTodo: { value }
    } = event.target.elements;

    if (value) {
      // input has some value
      onAddTodo(value);
      setInputValue('');
    }
  };

  const onInputValueChange = ({ target: { value } }) => setInputValue(value);

  return (
    <Col>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Add Todo</Form.Label>
          <Form.Control
            name="addTodo"
            aria-label="add-todo-input"
            placeholder="my todo note"
            onChange={onInputValueChange}
            value={inputValue}
          />
        </Form.Group>
        <div>
          <Button
            aria-label="submit-todo"
            disabled={!inputValue}
            variant="primary"
            type="submit">
            Add
          </Button>
        </div>
      </Form>
    </Col>
  );
};

export default AddTodo;
