import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../API/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

// Custom hook para usar el contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Suscribirse al estado de autenticación del usuario
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });

        // Limpiar la suscripción cuando el componente se desmonta
        return unsubscribe;
    }, []);

    // Función para cerrar sesión
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user: currentUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}