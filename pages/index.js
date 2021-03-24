import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Form from "../components/form";
import Todo from "../components/todo";
import ToggleThemeButton from "../components/toggle-theme-button";
import Nav from "../components/nav";
import Container from "../components/container";

export default function Home() {
  const [status, setStatus] = useState("loading");
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    let cancelled = false;

    if (status !== "loading") return;

    axios("/api/todos").then((res) => {
      if (cancelled) return;

      if (res.status !== 200) {
        console.error("Error loading todos!");
        console.error(res);
        return;
      }

      setTodos(res.data.todos);
      setStatus("loaded");
    });

    return () => {
      cancelled = true;
    };
  }, [status]);

  const reloadTodos = () => setStatus("loading");

  return (
    <>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <div className="flex flex-col font-body min-h-screen">
        <header className="bg-mobile-light dark:bg-mobile-dark sm:bg-desktop-light sm:dark:bg-desktop-dark bg-cover bg-center min-h-[200px] sm:min-h-[300px]">
          <Container>
            <div className="flex justify-between">
              <h1 className="text-xl sm:text-3xl text-white font-bold tracking-[0.625rem]">
                TODO
              </h1>
              <ToggleThemeButton />
            </div>
            <Form reloadTodos={reloadTodos} />
          </Container>
        </header>
        <main className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Container>
            {todos ? (
              <ul className="-mt-16 sm:-mt-28 rounded-t-md overflow-hidden">
                {todos.map((todo) => (
                  <li key={todo._id}>
                    <Todo todo={todo} reloadTodos={reloadTodos} />
                  </li>
                ))}
              </ul>
            ) : (
              <div>Loading...</div>
            )}

            <Nav todos={todos} reloadTodos={reloadTodos} />
            <small className="text-gray-500 text-center mt-6">
              Drag and drop to reorder list
            </small>
          </Container>
        </main>
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-500 text-center">
          <small>
            Challenge by{" "}
            <a
              className="underline"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a className="underline" href="https://wahabshaikh.github.io">
              Wahab Shaikh
            </a>
            .
          </small>
        </footer>
      </div>
    </>
  );
}
