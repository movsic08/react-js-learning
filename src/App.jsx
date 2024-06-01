import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Auth } from "./components/auth";

function App() {
  const [number, setNumber] = useState(Number(localStorage.getItem("number")));
  useEffect(() => {
    localStorage.setItem("number", number);
  }, [number]);

  return (
    <div className=" w-screen h-full flex flex-col items-center justify-center">
      <h2 className=" text-slate-100 mb-4 p-4 bg-blue-600 rounded-lg">
        Firebase and ReactJS Exploration
      </h2>
      <Auth></Auth>
      <div className="card">
        <button onClick={() => setNumber((number) => number + 3)}>
          {" "}
          your number is {number}
        </button>
      </div>
    </div>
  );
}

export default App;
