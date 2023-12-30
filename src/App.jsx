import { useState } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
function App() {
  const [search, setSearch] = useState("");
  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="min-h-screen">
        <div className="p-10 text-center text-3xl font-black text-slate-500 sm:text-3xl md:text-4xl">
          Enter the Github Username
        </div>
        <div className="flex justify-center items-center mx-auto">
        <input
          className="outline-none border border-gray-500 text-slate-800 font-mono text-lg font-bold rounded-xl py-2 px-4 mb-2 md:mb-0 md:mr-2"
          type="text"
          placeholder="Input username"
          onChange={handleOnChange}
          value={search}
        />
        <NavLink
          to={`/user/${search}`}
          className="font-mono bg-slate-300 text-slate-800 px-4 py-2 border border-gray-500 rounded-xl transition duration-300 hover:bg-slate-400 hover:border-slate-400"
        >
          Search
        </NavLink>
        </div>
      </div>
    </>
  );
}

export default App;
