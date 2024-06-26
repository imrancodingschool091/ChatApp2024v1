import { useContext, useState, createContext } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    let initialAuth = localStorage.getItem("SChatApp");

    const [authUser, setAuthUser] = useState(
        initialAuth ? JSON.stringify(initialAuth) : undefined
    );

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
