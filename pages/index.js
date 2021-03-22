import Head from "next/head";
import Form from "../components/form";
import ToggleThemeButton from "../components/toggle-theme-button";

export default function Home() {
  return (
    <div className="font-body">
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <header className="bg-mobile-light dark:bg-mobile-dark sm:bg-desktop-light sm:dark:bg-desktop-dark bg-cover bg-center min-h-[200px] sm:min-h-[300px] px-6 py-10 sm:py-16">
        <div className="flex justify-between max-w-md mx-auto">
          <h1 className="text-xl sm:text-3xl text-white font-bold tracking-[0.625rem]">
            TODO
          </h1>
          <ToggleThemeButton />
        </div>
        <Form />
      </header>
    </div>
  );
}
