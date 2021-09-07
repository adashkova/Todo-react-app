import React from 'react';
import Button from './Button';
import IfNoTodos from './IfNoTodos';
import '../styles/todoItems.css';

const TodoItems = ({ todos, markTodo, removeTodo, activeFilter }) => {
  const newTodos = todos.filter(item => {
    if (activeFilter.id === 2) {
      return item.isCompleted;
    }

    if (activeFilter.id === 3) {
      return !item.isCompleted;
    }

    return item;
  });

  if (newTodos.length) {
    const todoItems = newTodos.map(item => {
      return (
        <div
          key={item.textTodo}
          className="todo_item"
          style={{ textDecoration: item.isCompleted ? 'line-through' : '' }}
        >
          <h3 onClick={() => markTodo(item.textTodo)}>{item.textTodo}</h3>
          <Button onClick={() => removeTodo(item.textTodo)} text={'X'}></Button>
        </div>
      );
    });
    return <div className="todo_items">{todoItems}</div>;
  } else {
    return <IfNoTodos />;
  }
};
export default TodoItems;
