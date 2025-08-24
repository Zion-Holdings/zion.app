import { useState, useEffect } from 'react';
export const useAuth = () => {
    const [authState, setAuthState] = useState({
        user: null,
        isAuthenticated: false,
        isLoading: true,
    });
    useEffect(() => {
        // Check if user is logged in (e.g., check localStorage, cookies, etc.)
        const checkAuth = () => {
            const token = localStorage.getItem('authToken');
            if (token) {
                // In a real app, you would validate the token with your backend
                setAuthState({
                    user: {
                        id: '1',
                        email: 'user@example.com',
                        name: 'John Doe',
                        role: 'user',
                        userType: 'creator',
                    },
                    isAuthenticated: true,
                    isLoading: false,
                });
            }
            else {
                setAuthState({
                    user: null,
                    isAuthenticated: false,
                    isLoading: false,
                });
            }
        };
        checkAuth();
    }, []);
    const login = async (email, password) => {
        // In a real app, you would make an API call to your backend
        setAuthState({
            user: {
                id: '1',
                email,
                name: 'John Doe',
                role: 'user',
                userType: 'creator',
            },
            isAuthenticated: true,
            isLoading: false,
        });
        localStorage.setItem('authToken', 'dummy-token');
    };
    const logout = () => {
        setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
        });
        localStorage.removeItem('authToken');
    };
    return Object.assign(Object.assign({}, authState), { login,
        logout });
};
