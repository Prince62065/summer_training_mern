import { useState } from "react";
import "./App.css";
import "tailwindcss";

function App() {
  const [color, setColor] = useState("darkolivegreen");

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="h-screen w-screen flex  flex-col items-center justify-center"
      >
        <h1 className="text-3xl font-bold text-white text-center px-5">
          Background Color Changer
        </h1>
        <p className="text-white text-lg font-semibold mt-4 text-center px-5">On clicking a color button, the background will change to the respective color.</p>
        <div className="fixed bottom-12 inset-x-0 px-4 md:px-12 lg:px-80">
        <div className="flex flex-wrap justify-center gap-8 bg-white p-4 rounded-2xl shadow-md overflow-auto">
          <button
            className="bg-red-700 text-white px-4 py-2 rounded-full font-semibold cursor-pointer"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="bg-green-700 text-white px-4 py-2 rounded-full font-semibold cursor-pointer"
            onClick={() => {
              setColor("Green");
            }}
          >
            Green
          </button>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded-full font-semibold cursor-pointer"
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-full font-semibold cursor-pointer"
            onClick={() => {
              setColor("gray");
            }}
          >
            Gray
          </button>
          <button
            className="bg-indigo-700 text-white px-4 py-2 rounded-full font-semibold cursor-pointer"
            onClick={() => {
              setColor("indigo");
            }}
          >
            Indigo
          </button>
          <button
            className="bg-pink-700 text-white px-4 py-2 rounded-full font-semibold cursor-pointer"
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
          <button
            className="bg-purple-700 text-white px-4 py-2 rounded-full font-semibold cursor-pointer"
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className="bg-orange-700 text-white px-4 py-2 rounded-full font-semibold cursor-pointer"
            onClick={() => {
              setColor("orange");
            }}
          >
            Orange
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
