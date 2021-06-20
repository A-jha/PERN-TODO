import React, { useEffect, useState } from "react";
import UpdateTodo from "./Update-Todo";
const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      //window.location = "/";
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const editTodo = (todo) => {};
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonResponse = await response.json();
      setTodos(jsonResponse);
      //console.log(jsonResponse);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className="mt-3 text-center">
        <table className="table-auto m-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border-2">Title</th>
              <th className="px-4 py-2 border-2">EDIT</th>
              <th className="px-4 py-2 border-2">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.todo_id}>
                  <td className="border px-5 py-3">{todo.description}</td>
                  <td className="border px-5 py-3">
                    <button
                      className="bg-green-400 py-1 text-white px-3 shadow rounded"
                      onClick={() => editTodo(todo.todo_id)}
                    >
                      <UpdateTodo todo={todo} />
                    </button>
                  </td>
                  <td className="border px-5 py-3">
                    <button
                      className="bg-red-400 py-1 text-white px-3 shadow rounded"
                      onClick={() => deleteTodo(todo.todo_id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListTodo;
