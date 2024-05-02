import * as React from "react";
import { Checkbox } from "../checkbox";
import "./todo-list.scss";

export const TodoList = (props) => {
  const { todos, setTodos } = props;

  const handleDelete = (id) => {
    const filterTodos=todos.filter((todo)=>{
      return todo.id!=id;
    })
    setTodos(filterTodos)
  };

  const toggleCheck = (id) => {
    const updatedTodo = todos.map(todo => {
     
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
  
      return todo;
    });
    setTodos(updatedTodo)
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode == 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox key={todoItem.id}
              id={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
