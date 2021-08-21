import React from "react";
import { useForm } from "react-hook-form";

export const TodoForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="text">Text:</label>
          <input
            className="form-control"
            type="text"
            placeholder="title"
            {...register("title", { required: true })}
          />

          <label htmlFor="description">Description:</label>
          <input
            className="form-control"
            type="text"
            placeholder="description"
            {...register("description", { required: true })}
          />

          <label htmlFor="status">Status:</label>
          <select
            className="form-control"
            {...register("status", { required: true })}
          >
            <option value="open">open</option>
            <option value=" in progress"> in progress</option>
            <option value=" closed"> closed</option>
          </select>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Save Todo
          </button>
        </div>
      </form>
    </div>
  );
};
