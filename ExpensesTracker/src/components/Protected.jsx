import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { useEffect } from "react";

export default function Protected({children}){

    const { user }=useAuth();
    const navigate=useNavigate();

    useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);


  return children;
}