import "./App.css";
import ExpensesTracker from "./pages/ExpensesTracker";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Landing from "./pages/Landing";
import Login from "./components/Login";
import Protected from "./components/Protected";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/home"
            element={
              <Protected>
                <ExpensesTracker />
              </Protected>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
