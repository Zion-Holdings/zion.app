import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (e.g., check localStorage, cookies, etc.)
    const checkAuth = () => {
      const storedUser = localStorage.getItem('zion_user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error('Error parsing stored user:', error);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // Implement actual login logic here
    const mockUser: User = {
      id: '1',
      email,
      name: 'User',
      role: 'user'
    };
    
    setUser(mockUser);
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('zion_user');
  };

  const register = async (email: string, password: string, name: string) => {
    // Implement actual registration logic here
    const mockUser: User = {
      id: '1',
      email,
      name,
      role: 'user'
    };
    
    setUser(mockUser);
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    return mockUser;
  };

  return {
    user,
    loading,
    login,
    logout,
    register,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };
}