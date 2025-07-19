import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useDarkMode } from "../context/DarkModeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const { user, logout } = useAuth();
  const { darkMode, setDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();


  const handleLogout=()=>{
    logout();
    navigate('/login');
  }

  return (
    <nav className="bg-slate-800 fixed top-0 w-full shadow z-50">
      <div className="px-5 py-3 flex justify-between items-center text-white font-medium">
        <div className="flex items-center gap-3">
          <img
            src="https://images.pexels.com/photos/29850004/pexels-photo-29850004.jpeg"
            alt="logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-lg md:text-xl font-bold">Recipe App</span>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {user ? (
            <>
              <NavItem to="/home" label="Home" />
              <NavItem to="/saved" label="Recipes" />
              <NavItem to="/grocery" label="Grocery" />
              <li>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                  title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                  {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 rounded-md border font-medium transition-colors duration-200 bg-white text-slate-700 hover:bg-slate-200"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
            <NavItem to="/login" label="Login" />
            <NavItem to="/register" label="Sign Up" />
            </>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-700 text-white px-5 py-4">
          <ul className="flex flex-col gap-4">
            {user ? (
              <>
                <NavItem to="/home" label="Home" onClick={() => setMenuOpen(false)} />
                <NavItem to="/saved" label="Recipes" onClick={() => setMenuOpen(false)} />
                <NavItem to="/grocery" label="Grocery" onClick={() => setMenuOpen(false)} />
                <li>
                  <button
                    onClick={() => {
                      setDarkMode(!darkMode);
                      setMenuOpen(false);
                    }}
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                  >
                    {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="px-3 py-1 rounded-md border bg-white text-slate-700 hover:bg-slate-200 w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
              <NavItem to="/login" label="Login" onClick={() => setMenuOpen(false)} />
              <NavItem to="/register" label="Sign Up" onClick={() => setMenuOpen(false)} />
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

// Reusable NavLink Item
function NavItem({ to, label, onClick }) {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `px-3 py-1 rounded-md border cursor-pointer font-medium transition-colors duration-200 ${
            isActive
              ? "bg-slate-700 text-white"
              : "bg-white text-slate-700 hover:bg-slate-200"
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  );
}
