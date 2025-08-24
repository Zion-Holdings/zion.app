import { useState, useEffect, useCallback } from 'react';

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const login = useCallback(async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: '1',
        email,
        name: email.split('@')[0],
      };
      
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      
      return { success: true, user };
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return { success: false, error };
    }
  }, []);

  const logout = useCallback(() => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  }, []);

  const signup = useCallback(async (email: string, password: string, name?: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: '1',
        email,
        name: name || email.split('@')[0],
      };
      
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      
      return { success: true, user };
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return { success: false, error };
    }
  }, []);

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        // Simulate checking for existing session
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // For now, no existing session
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      } catch (error) {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    checkAuth();
  }, []);

  return {
    ...authState,
    login,
    logout,
    signup,
  };
}