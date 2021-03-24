import axios from "axios";
import Checkbox from "./checkbox";
import CrossIcon from "../icons/cross";

export default function Todo({ todo, reloadTodos }) {
  const toggleCompleted = () => {
    axios
      .post("/api/todos/update", {
        id: todo._id,
        text: todo.text,
        completed: !todo.completed,
      })
      .then(reloadTodos);
  };

  const deleteTodo = () => {
    axios.post("/api/todos/delete", { id: todo._id }).then(reloadTodos);
  };

  return (
    <div className="flex justify-between space-x-3 bg-white dark:bg-gray-800 shadow-sm py-4 px-6 border-b dark:border-gray-700">
      <Checkbox completed={todo.completed} toggleCompleted={toggleCompleted} />
      <p
        className={`flex-1 text-sm text-gray-900 dark:text-gray-100 ${
          todo.completed && "line-through text-gray-400 dark:text-gray-500"
        }`}
      >
        {todo.text}
      </p>
      <button
        aria-label="Delete Todo"
        className="focus:outline-none"
        type="button"
        onClick={deleteTodo}
      >
        <CrossIcon />
      </button>
    </div>
  );
}
