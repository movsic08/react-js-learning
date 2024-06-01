import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Auth } from "./components/auth";

function App() {
  // Retrieve the initial state from localStorage or default to falses
  const [dark, setDark] = useState(() => {
    const savedDarkMode = localStorage.getItem("dark");
    return savedDarkMode === "true";
  });

  useEffect(() => {
    localStorage.setItem("dark", dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="dark:bg-slate-800 min-h-screen flex flex-col">
      <div className="flex w-full justify-between items-center px-2 py-1 bg-sky-600">
        <h2 className="text-slate-100 p-2 rounded-lg">
          Firebase and ReactJS Exploration
        </h2>
        <button
          className="hover:bg-slate-400 text-slate-100 duration-200 p-1 rounded-lg"
          onClick={() => {
            setDark(!dark);
          }}
        >
          {" "}
          {!dark ? (
            <svg
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.752 15.952A9.6 9.6 0 0 1 8.048 3.248a9.601 9.601 0 1 0 12.704 12.704Z"></path>
            </svg>
          ) : (
            <svg
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.4a1.2 1.2 0 0 1 1.2 1.2v1.2a1.2 1.2 0 1 1-2.4 0V3.6A1.2 1.2 0 0 1 12 2.4Zm4.8 9.6a4.8 4.8 0 1 1-9.6 0 4.8 4.8 0 0 1 9.6 0Zm-.557 5.94.849.848a1.2 1.2 0 0 0 1.696-1.696l-.848-.849a1.2 1.2 0 0 0-1.697 1.697Zm2.544-12.728a1.2 1.2 0 0 1 0 1.696l-.847.849a1.2 1.2 0 1 1-1.697-1.697l.849-.848a1.2 1.2 0 0 1 1.696 0ZM20.4 13.2a1.2 1.2 0 1 0 0-2.4h-1.2a1.2 1.2 0 0 0 0 2.4h1.2ZM12 18a1.2 1.2 0 0 1 1.2 1.2v1.2a1.2 1.2 0 1 1-2.4 0v-1.2A1.2 1.2 0 0 1 12 18ZM6.06 7.757A1.2 1.2 0 1 0 7.758 6.06l-.85-.848a1.2 1.2 0 0 0-1.696 1.696l.848.849ZM7.757 17.94l-.849.848a1.2 1.2 0 0 1-1.696-1.696l.848-.849a1.2 1.2 0 0 1 1.697 1.697ZM4.8 13.2a1.2 1.2 0 1 0 0-2.4H3.6a1.2 1.2 0 0 0 0 2.4h1.2Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <Auth />
      </div>
    </div>
  );
}

export default App;
