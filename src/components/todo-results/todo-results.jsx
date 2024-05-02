import * as React from "react";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;

  const calculateChecked = () => {
   let count=0;
   todos.map((todo)=>{
    if(todo.checked===true)
    {
      count++;
    }
   })
   return count;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
