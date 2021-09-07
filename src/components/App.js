import { useState } from 'react';
import Input from './Input';
import TodoItems from './TodoItems';
import FilterItems from './FilterItems';
import '../styles/app.css';
import Button from './Button';

function App() {
  // State
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const [filters, setFilters] = useState([
    { id: 1, text: 'All', isActiveClass: true },
    { id: 2, text: 'Completed', isActiveClass: false },
    { id: 3, text: 'In Progress', isActiveClass: false },
  ]);
  // Filtration

  const doFiltration = filterId => {
    const newFilters = filters.map(item => {
      if (item.id === filterId) {
        return {
          ...item,
          isActiveClass: !item.isActiveClass,
        };
      }

      return {
        ...item,
        isActiveClass: false,
      };
    });

    setFilters(newFilters);
  };

  // Add Todo
  const addTodo = () => {
    if (inputValue) {
      const newTodos = [...todos, { textTodo: inputValue, isCompleted: false }];
      setTodos(newTodos);
      setInputValue('');
    } else {
      alert('Please input text');
    }
  };
  // Mark Todo
  const markTodo = text => {
    const newTodos = [...todos].map(todo => {
      if (todo.textTodo === text) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodos(newTodos);
  };
  // Remove Todo
  const removeTodo = text => {
    const newTodos = [...todos].filter(todo => todo.textTodo !== text);
    setTodos(newTodos);
  };
  // Clear All

  const deleteAllTodo = () => {
    setTodos([]);
    console.log('clear', todos);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDos</h1>

        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo();
          }}
          className="todo_form"
        >
          <Input
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          />
          <Button type="submit" text="Add" />
        </form>

        <TodoItems
          todos={todos}
          markTodo={markTodo}
          removeTodo={removeTodo}
          activeFilter={filters.find(item => item.isActiveClass)}
        />

        <FilterItems
          deleteAllTodo={deleteAllTodo}
          doFiltration={doFiltration}
          filters={filters}
        />
      </div>
    </div>
  );
}

export default App;
