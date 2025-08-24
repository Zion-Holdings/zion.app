import { useState, useEffect } from 'react';
export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate auth check
        setLoading(false);
    }, []);
    const login = async (email, password) => {
        // Simulate login
        setUser({
            id: '1',
            email,
            name: 'User'
        });
    };
    const logout = () => {
        setUser(null);
    };
    return {
        user,
        loading,
        login,
        logout
    };
};
