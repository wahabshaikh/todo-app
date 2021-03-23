import axios from "axios";
import { useState } from "react";
import Checkbox from "./checkbox";

export default function Form() {
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!text) return;

    await axios.post("/api/todos/create", { text });

    setText("");
  };

  return (
    <form
      className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-md max-w-md mx-auto px-7 mt-7 sm:mt-12 h-10 sm:h-12 space-x-1"
      onSubmit={handleSubmit}
    >
      <Checkbox disabled />
      <input
        type="text"
        className="flex-1 border-none text-xs sm:text-base bg-gray-50 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-0"
        placeholder="Create a new todo..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </form>
  );
}
