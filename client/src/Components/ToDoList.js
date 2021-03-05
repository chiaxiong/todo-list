import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import axios from "axios";
import baseURL from "../api/api";

export default function ToDoList() {
  const [todo, setTodo] = useState([]);
  const [reload, setReload] = useState(true);

  const addTodo = async value => {
    try {
      await axios.post(baseURL, {
        title: value,
      });
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (todoId, value) => {
    try {
      console.log(`update to do is: ${value}`);
      await axios.put(baseURL + todoId, {
        title: value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodo = async todoId => {
    try {
      await axios.delete(baseURL + todoId);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios.get(baseURL);
        setTodo(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [reload]);

  return (
    <div>
      <ToDoForm onSubmit={addTodo} />
      <ToDo todos={todo} deleteTodo={removeTodo} updateTodoItem={updateTodo} />
    </div>
  );
}
