import { useState } from 'react';
export function useAuth() {
    const [authState, setAuthState] = useState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
    });
    const login = async (email, password) => {
        setAuthState({ ...authState, isLoading: true });
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            const user = {
                id: '1',
                email,
                name: 'User',
            };
            setAuthState({
                user,
                isAuthenticated: true,
                isLoading: false,
            });
            return { success: true };
        }
        catch (error) {
            setAuthState({ ...authState, isLoading: false });
            return { success: false, error: 'Login failed' };
        }
    };
    const logout = () => {
        setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
        });
    };
    const signup = async (email, password, name) => {
        setAuthState({ ...authState, isLoading: true });
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            const user = {
                id: '1',
                email,
                name,
            };
            setAuthState({
                user,
                isAuthenticated: true,
                isLoading: false,
            });
            return { success: true };
        }
        catch (error) {
            setAuthState({ ...authState, isLoading: false });
            return { success: false, error: 'Signup failed' };
        }
    };
    return {
        ...authState,
        login,
        logout,
        signup,
    };
}
