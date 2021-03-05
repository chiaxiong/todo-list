import React, { useState } from "react";

export default function ToDoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit : "");

  const handleInput = e => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        {edit ? (
          <>
            <input
              onChange={handleInput}
              value={input}
              placeholder="update task"
            />
            <button type="submit">update</button>
          </>
        ) : (
          <>
            <input
              onChange={handleInput}
              value={input}
              placeholder="add task"
            />
            <button type="submit">add</button>
          </>
        )}
      </form>
    </div>
  );
}
