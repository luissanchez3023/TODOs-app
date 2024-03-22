import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemTodo from "./components/ItemTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <section className="todo-section">
      <h1>TODO LIST</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            <ItemTodo to={`/DetailTodo/${index + 1}`} title={todo.title} />
            <button onClick={() => handleDeleteTodo(index)}>X</button>
          </div>
        ))}
      </div>
      <Link to={"/NewTodo"}>
        {" "}
        <button>New ToDo</button>{" "}
      </Link>
    </section>
  );
}

export default App;
