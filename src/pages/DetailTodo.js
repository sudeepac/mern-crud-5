import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { getTodo } from "../api";

export const DetailTodo = () => {
  const match = useRouteMatch();

  const [todo, setTodo] = useState();

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await getTodo(match.params.id);

      setTodo(todo);
    };
    fetchTodo();
  }, [match.params.id]);

  return (
    <div className="card text-left m-3">
      <h5 className="card-header">Detail View</h5>
      <div className="card-body">
        {todo ? (
          <>
            <p>Title: {todo.title}</p>
            <p>Description: {todo.description}</p>
            <p>Status: {todo.status}</p>
          </>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};
