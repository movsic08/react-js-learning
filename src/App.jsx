import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(Number(localStorage.getItem("number")));
  useEffect(() => {
    localStorage.setItem("number", number);
  }, [number]);

  return (
    <>
      <div>
        <h2 className=" text-slate-900 p-4 bg-blue-600 rounded-lg">HEllo</h2>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setNumber((number) => number + 3)}>
          {" "}
          your number is {number}
        </button>
      </div>
    </>
  );
}

export default App;
