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
  const [savedRecipes, setSavedRecipes] = useState(() => {
    // Load from localStorage initially
    const stored = localStorage.getItem("savedRecipes");
    return stored ? JSON.parse(stored) : [];
  });

  const saveRecipes = (recipe, ingredients) => {
    const newSave = {
      ...recipe,
      ingredients,
    };

    const updatedRecipes = [...savedRecipes, newSave];
    setSavedRecipes(updatedRecipes);

    // Save to localStorage
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
  };

  useEffect(() => {
    // Sync localStorage if savedRecipes changes
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
  }, [savedRecipes]);

 

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
