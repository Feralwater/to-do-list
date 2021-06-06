import React, {useState} from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

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
      />
      <button className="todo__button">Add todo</button>
    </form>
  );
};

export default TodoForm;