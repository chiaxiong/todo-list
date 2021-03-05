import React, { useState } from "react";

export default function ToDoForm({ onSubmit }) {
  const [input, setInput] = useState("");

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
        <label>task</label>
        <input onChange={handleInput} value={input} />
        <button type="submit">add</button>
      </form>
    </div>
  );
}
