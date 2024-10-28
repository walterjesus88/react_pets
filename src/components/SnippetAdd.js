// src/components/AddTodo.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSnippet } from "../redux/snippetAction";

const AddSnippet = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSnippet({ title, code }));
    setTitle("");
    setCode("");
  };

  return (
    <div>
      <h2>Agregar Snippet</h2>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la tarea"
          required
        />
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Codigo de la tarea"
        ></textarea>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddSnippet;
