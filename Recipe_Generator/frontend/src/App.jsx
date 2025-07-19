import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SavedRecipes from "./pages/SavedRecipes";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Login from "./components/Login";
import { DarkModeProvider } from "./context/DarkModeContext";
import GroceryList from "./pages/GroceryList";
import SignUp from "./pages/SignUp";
import Protected from "./components/Protected";

function App() {
 const [savedRecipes, setSavedRecipes] = useState([]);


  const saveRecipes = async (recipe, ingredients) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:3002/api/recipes/save",
        { ...recipe, ingredients },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSavedRecipes((prev) => [...prev, res.data]); // Add newly saved recipe from backend response
    } catch (err) {
      console.error("Failed to save recipe", err);
    }
  };

 

  return (
    <DarkModeProvider>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/home" element={<Protected><Home saveRecipes={saveRecipes} /></Protected> } />
          <Route
            path="/saved"
            element={<Protected><SavedRecipes savedRecipes={savedRecipes} /></Protected>}
          />
          <Route
            path="/grocery"
            element={<Protected><GroceryList savedRecipes={savedRecipes} /> </Protected>}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </DarkModeProvider>
  );
}

export default App;
