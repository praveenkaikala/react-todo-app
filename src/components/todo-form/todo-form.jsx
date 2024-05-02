import * as React from "react";
import "./todo-form.scss";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    if(task.length>0)
    {
       const todo={
      id:todos.length,
      label:task,
      checked:false
    }
    setTodos(prev=>[...prev,todo])
    setTask("")
    }
   
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <TextField id="outlined-basic" label="enter new task" value={task} onChange={(e) => setTask(e.target.value)} onKeyUp={handleKeyUp} variant="outlined" />
     
      <Button variant="contained" onClick={handleAddTodo}>Add task</Button>
    </div>
  );
};
