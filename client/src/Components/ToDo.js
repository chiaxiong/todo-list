import React from "react";

export default function ToDo({ todos, deleteTodo }) {
  return todos.map(todo => (
    <div key={todo._id}>
      <div>{todo.title}</div>
      <div>
        <button onClick={() => deleteTodo(todo._id)}>delete</button>
      </div>
      <div>
        <button>edit</button>
      </div>
    </div>
  ));
}
