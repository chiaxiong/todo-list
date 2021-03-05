import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

export default function ToDo({ todos, deleteTodo, updateTodoItem }) {
  const [editValue, setEditValue] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const completeTodo = () => {
    !isCheck ? setIsCheck(true) : setIsCheck(false);
  };

  const updateSubmit = (todoId, value) => {
    updateTodoItem(todoId, value);
    setEditValue(editValue);
  };

  if (editValue) {
    return <ToDoForm edit={editValue} onSubmit={updateSubmit} />;
  }

  return todos.map(todo => (
    <div key={todo._id}>
      <div>{todo.title}</div>
      <input type="checkbox" onClick={completeTodo} />
      <div>
        <button onClick={() => deleteTodo(todo._id)}>delete</button>
      </div>
      <div>
        <button onClick={() => setEditValue(todo.title)}>edit</button>
      </div>
    </div>
  ));
}
