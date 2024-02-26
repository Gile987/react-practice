import React, { useState } from 'react';

const todo = [
  {
    id: 1,
    title: "Rise and shine!",
    completed: true,
  },
  {
    id: 2,
    title: "Take a shower",
    completed: true,
  },
  {
    id: 3,
    title: "Summon the demons from the abyss",
    completed: false,
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(todo);
  const [newTodo, setNewTodo] = useState('');
  const [nextId, setNextId] = useState(todo.length + 1);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: nextId, title: newTodo, completed: false }]);
      setNewTodo('');
      setNextId(nextId + 1);
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo item"
      />
      <button onClick={handleAddTodo}>Add</button>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onClick={() => handleToggleComplete(todo.id)}
            />
            <label
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginLeft: '5px',
                cursor: 'pointer'
              }}
            >
              {todo.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
