import axios from "axios";
import { useEffect, useState } from "react";

export default function Nav({ todos, reloadTodos }) {
  const [remainingTodos, setRemainingTodos] = useState(todos);

  useEffect(() => {
    const remainingTodos = todos?.filter((todo) => !todo.completed);
    setRemainingTodos(remainingTodos);
  }, [todos]);

  const deleteCompletedTodos = () => {
    todos.forEach((todo) => {
      if (todo.completed) {
        axios.post("/api/todos/delete", { id: todo._id }).then(reloadTodos);
      }
    });
  };

  return (
    <>
      <div className="sm:hidden flex justify-between text-sm text-gray-500 bg-white dark:bg-gray-800 rounded-b-md py-4 px-6">
        <p>{`${remainingTodos?.length || 0} items left`}</p>
        <button onClick={deleteCompletedTodos}>Clear Completed</button>
      </div>
      <nav className="text-sm sm:flex justify-between items-center bg-white dark:bg-gray-800 text-gray-500 rounded-md sm:rounded-t-none mt-6 px-3 sm:mt-0">
        <p className="hidden sm:block">{`${
          remainingTodos?.length || 0
        } items left`}</p>
        <ul className="flex justify-center items-center space-x-2 h-12 font-bold">
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
        <button
          className="hidden sm:block focus:outline-none"
          onClick={deleteCompletedTodos}
        >
          Clear Completed
        </button>
      </nav>
    </>
  );
}
