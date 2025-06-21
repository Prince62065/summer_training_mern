import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numallowed, setNumAllowed] = useState(false);
  const [charallowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let passInput = Math.floor(Math.random() * str.length );
      pass += str.charAt(passInput);
    }
    setPassword(pass);
  }, [length, numallowed, charallowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numallowed, charallowed, passwordGenerator]);

  const copyToClipboard = () => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-slate-900 px-4">
        <div className="bg-white  px-10 py-5 rounded-xl shadow-lg  w-170">
          <h1 className="md:text-4xl text-3xl font-bold text-center mt-4">
            Password Generator
          </h1>
          <div className="flex gap-4 mt-4 overflow-hidden ">
            <input
              type="text"
              className="w-full bg-gray-200 border border-slate-500 rounded-md  px-2 py-2 md:text-xl"
              value={password}
              placeholder="Password"
              readOnly
              ref={passRef}
            />
            <button
              className="bg-slate-800 text-white font-semibold text-md px-5 py-2 rounded-lg hover:bg-slate-900 hover:font-bold cursor-pointer"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mt-5 text-lg">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                className=""
                min={8}
                max={100}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                className="scale-125"
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label>Number</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                className="scale-125"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>Special Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
