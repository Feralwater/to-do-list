import React, { useState } from 'react';
import { RiCloseCircleLine, TiEdit } from 'react-icons/all';
import TodoForm from './TodoForm';

const Todo = (properties) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    properties.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return properties.todos.map((todo) => (
    <div className={todo.isComplete ? 'todo__row complete' : 'todo__row'} key={Math.floor(Math.random() * 100_000).toString()}>
      <div
        key={todo.id}
        onClick={() => {
          properties.completeTodo(todo.id);
        }}
        onKeyDown={() => {
          properties.completeTodo(todo.id);
        }}
      >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => {
            properties.removeTodo(todo.id);
          }}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => {
            setEdit({ id: todo.id, value: todo.text });
          }}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
