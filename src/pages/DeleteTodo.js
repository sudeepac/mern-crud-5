import React, { useState, useEffect } from "react";
// import { TodoForm } from "./TodoForm";
import { useRouteMatch } from "react-router-dom";
import { deleteTodo } from "../api";

export const DeleteTodo = () => {
  const match = useRouteMatch();

  const [status, setTodo] = useState();

  useEffect(() => {
    const fetchTodo = async () => {
      await deleteTodo(match.params.id);
      setTodo("deleted");
    };
    fetchTodo();
  }, [match.params.id]);

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">DELETE Request with Async/Await</h5>
      <div className="card-body">Status: {status}</div>
    </div>
  );
};
