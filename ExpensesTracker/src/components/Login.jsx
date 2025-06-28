import { useState } from "react"
import { useAuth } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";

export default function Login(){

    const navigate=useNavigate();
    const { login }=useAuth();
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(login(username,password)){
            navigate('/home')
        }
        else{
            alert("Invalid crediental");
        }
    }

    return(
        <div className="min-h-screen flex justify-center items-center px-10 bg-cover bg-no-repeat bg-fixed" style={{
            backgroundImage: `url('https://images.pexels.com/photos/7267612/pexels-photo-7267612.jpeg')`,
        }}>
        <form onSubmit={handleSubmit} className="max-w-2xl w-full ">
        <div className="bg-white flex-col opacity-95   px-10 py-5 rounded-xl shadow-2xl shadow-gray-600">
          <div className="mb-5">
            <label htmlFor="username" className="block mb-2 text-lg ">
             User Name
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="rounded-md border w-full border-slate-700 px-4 py-2"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-lg ">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md border w-full border-slate-700 px-4 py-2"
            />
          </div>
          <button
            type="submit"
            className="rounded-md hover:bg-slate-900 cursor-pointer px-4 py-2 w-full font-semibold bg-slate-800 text-white text-lg"
          >
            Login
          </button>
        </div>
      </form>
      </div>
    )
}