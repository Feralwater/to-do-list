import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  // function useLocalStorage(key, initialValue) {
  //   const [storedValue, setStoredValue] = useState(() => {
  //     const item = window.localStorage.getItem(key);
  //     return item ? JSON.parse(item) : initialValue;
  //   });
  // }

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('key')) ?? []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    localStorage.setItem('key', JSON.stringify(newTodos));
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((previous) => {
      const newTodos = previous.map((item) => (item.id === todoId ? newValue : item));
      localStorage.setItem('key', JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const removeTodo = (id) => {
    const removeArray = [...todos].filter((todo) => todo.id !== id);
    localStorage.setItem('key', JSON.stringify(removeArray));
    setTodos(removeArray);
  };

  const completeTodo = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    localStorage.setItem('key', JSON.stringify(updateTodos));
    setTodos(updateTodos);
  };

  return (
    <div>
      <h1>What`s the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
