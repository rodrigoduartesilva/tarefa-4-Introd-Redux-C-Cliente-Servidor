import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            setUserLogged(true);
        }

        setLoading(false);
    }, []);

    const loginUser = async (inputValues) => {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValues)
        });
        const data = await response.json();
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/sucessoLogin');
        setUserLogged(true);
    }

    const logOutUser = () => {
        setUserLogged(false);
        localStorage.clear();
        navigate('/login');
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <AuthContext.Provider value={{ userLogged, loginUser, logOutUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };