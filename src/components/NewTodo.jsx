import { useEffect, useState } from "react";
import "../index.css";

function NewTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creation, setCreation] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { title, description, creation };

    const updatedTodos = [...todos, newTodo];

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    setTitle("");
    setDescription("");
    setCreation("");

    setTodos(updatedTodos);

    window.location.href = "/";
  };

  return (
    <section className="todo-section">
      <form className="todo-list" onSubmit={handleSubmit}>
        <h1>Title</h1>
        <input
          className="todo-item"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description</label>
        <input
          className="todo-item"
          type="descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Date</label>
        <input
          className="todo-item"
          type="date"
          value={creation}
          onChange={(e) => setCreation(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </section>
  );
}

export default NewTodo;
