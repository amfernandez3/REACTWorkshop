import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./components/TodoList";

const KEY = "todoApp.todos";

export function App() {
  const todoTaskRef = useRef();
  const [todos, setTodos] = useState([
    { id: 1, task: "Aprender React", completed: false },
    { id: 2, task: "Hacer ejercicios de React", completed: false },
  ]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = (event) => {
    const task = todoTaskRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task: task, completed: false }];
    });

    todoTaskRef.current.value = ""; // Limpiamos el campo de entrada
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h2>Lista de tareas pendientes:</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
      <button onClick={handleTodoAdd}>Añadir</button>
      <button onClick={handleClearAll}>Eliminar</button>
      <div>
        {todos.filter((todo) => !todo.completed).length > 0 ? (
          <div>
            <p>Te quedan tareas por terminar:</p>
            <ul>
              {todos.map((todo) =>
                !todo.completed ? (
                  <li key={todo.id}>{todo.task}</li>
                ) : null
              )}
            </ul>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
}
