import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../API/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Importa signOut de firebase/auth

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    // Agrega la función logout para cerrar sesión
    const logout = async () => {
        try {
            await signOut(auth); // Cierra sesión con Firebase
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user: currentUser, logout }}> {/* Añade logout al value del contexto */}
            {children}
        </AuthContext.Provider>
    );
}
