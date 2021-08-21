export const getTodos = () =>
  fetch("http://localhost:4000/api/todo/").then((res) => res.json());

export const getTodo = (id) =>
  fetch(`http://localhost:4000/api/todo/${id}`).then((res) => res.json());

export const createTodo = (todo) =>
  fetch("http://localhost:4000/api/todo/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const updateTodo = (todo, id) =>
  fetch(`http://localhost:4000/api/todo/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const deleteTodo = (id) =>
  fetch(`http://localhost:4000/api/todo/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((res) => res.json());
