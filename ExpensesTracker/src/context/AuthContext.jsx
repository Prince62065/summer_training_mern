import { createContext,useContext,useState } from "react";

const AuthContext=createContext();

export  function AuthProvider({children}){

     const [user, setUser] = useState(null);
    const login=(username,password)=>{
        if(username === "admin" && password === "root123"){
            setUser({name:"Admin"});
            return true;
        }
        return false;
    }

    const logout=()=>{
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user , setUser , login ,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);