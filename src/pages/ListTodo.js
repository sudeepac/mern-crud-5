import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api";

export const ListTodo = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const todos = await getTodos();
      setItems(todos);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Todo List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((todo) => (
              <tr key={todo._id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.status}</td>
                <td>
                  <Link to={`/view/${todo._id}`}>View</Link> &nbsp;
                  <Link to={`/edit/${todo._id}`}>Edit</Link> &nbsp;
                  <Link to={`/delete/${todo._id}`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
