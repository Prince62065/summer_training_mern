import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-slate-800 fixed top-0 w-full shadow z-50">
      <div className="px-5 py-5 flex justify-end items-center gap-10 text-white font-medium ">
        <img src="https://images.pexels.com/photos/5484739/pexels-photo-5484739.jpeg" alt="logo" className="w-12 h-12 rounded-full absolute left-10" />
        {user ? (
          <>
            <ul className="flex gap-6">
              <li className="list-none ">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `px-3 py-1  rounded-md border cursor-pointer font-medium transition-colors  ${
                      isActive
                        ? "bg-slate-700 text-white"
                        : "bg-white text-slate-700 hover:bg-slate-200"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="list-none ">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-3 py-1 rounded-md border cursor-pointer font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-slate-700 text-white"
                        : "bg-white text-slate-700 hover:bg-slate-200"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="list-none ">
                <NavLink
                  to="/logout"
                  className={({ isActive }) =>
                    `px-3 py-1 rounded-md border  font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-slate-700 text-white"
                        : "bg-white text-slate-700 hover:bg-slate-200"
                    }`
                  }
                >
                <button onClick={()=>logout()} className="cursor pointer"> Logout</button> 
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <li className="list-none ">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-3 py-1 rounded-md border cursor-pointer font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-white text-slate-700 hover:bg-slate-200"
                    : " bg-slate-700 text-white"
                }`
              }
            >
              Login
            </NavLink>
          </li>
        )}
      </div>
    </nav>
  );
}
