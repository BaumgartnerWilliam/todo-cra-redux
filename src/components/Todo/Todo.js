import React, { memo } from 'react';
import cx from 'classnames';

const ENTER_KEY_CODE = 13;
const onKeyPressBind = fn => event => {
  if (event.which === ENTER_KEY_CODE || event.keyCode === ENTER_KEY_CODE) {
    fn();
    return false;
  }
  return true;
};

// todo: svgs can be extracted to their own component
const Todo = ({ id, done, text, onComplete, onDelete }) => {
  return (
    <li
      aria-label="todo"
      tabIndex="0"
      className={cx(
        'noselect list-group-item list-group-item-action d-flex align-items-center justify-content-between',
        {
          'list-group-item-warning': done
        }
      )}
      onClick={onComplete}
      onKeyPress={onKeyPressBind(onComplete)}>
      {!done && (
        <span aria-label="unchecked" style={{ paddingRight: '16px' }}></span>
      )}
      {done && (
        <span aria-label="checked">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-check2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </span>
      )}
      <span>{text}</span>
      <span
        aria-label="delete-todo"
        tabIndex="0"
        onClick={onDelete}
        onKeyPress={onKeyPressBind(onDelete)}>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-trash-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
          />
        </svg>
      </span>
    </li>
  );
};

export default memo(Todo);
