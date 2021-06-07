import React, { useEffect, useRef, useState } from 'react';

const TodoForm = (properties) => {
  const [input, setInput] = useState('');

  const inputReference = useRef(null);
  useEffect(() => {
    inputReference.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    properties.onSubmit({
      id: Math.floor(Math.random() * 10_000),
      text: input,
    });
    setInput('');
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={input}
        name="text"
        className="todo__input"
        onChange={handleChange}
        ref={inputReference}
      />
      <button type="submit" className="todo__button">Add todo</button>
    </form>
  );
};

export default TodoForm;
