import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
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