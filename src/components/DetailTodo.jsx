import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


    function DetailTodo (){
        const { id } = useParams();
        const [todos, setTodos] = useState([]);
        const [todoSelected, setTodoSelected] = useState(null);
    
        useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            const parsedTodos = JSON.parse(storedTodos);
            setTodos(parsedTodos);
    

            const selectedIndex = parseInt(id) - 1;
            const selectedTodo = parsedTodos[selectedIndex];
            setTodoSelected(selectedTodo);
        }
        }, [id]);
    
        const back = () => {
        window.location.href = "/";
        }
    
        return (
        <div className="todo-section">
            {todoSelected ? (
            <div className="todo-list">
                <h1>{todoSelected.title}</h1>
                <p className="todo-item">Descripción: {todoSelected.description}</p>
                <p className="todo-item">Fecha de creación: {todoSelected.creation}</p>
               
            </div>
            ) : (
            <p>No se encontró el elemento que elegiste</p>
            )}
             <button onClick={back}>Back to List</button>
        </div>
        );
    }

    export default DetailTodo;