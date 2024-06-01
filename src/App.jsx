import "./App.css";
import { Auth } from "./components/auth";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="dark:bg-slate-800 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <Auth />
      </div>
    </div>
  );
}

export default App;
