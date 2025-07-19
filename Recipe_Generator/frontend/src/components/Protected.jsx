import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export default function Protected({ children }) {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            navigate("/login");
        }
    }, [user, loading, navigate]);

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <p className="text-xl">Checking Authentication...</p>
            </div>
        );
    }

    return children;
}
