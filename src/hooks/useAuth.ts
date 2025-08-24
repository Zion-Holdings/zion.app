import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    setTimeout(() => {
      setIsAuthenticated(false);
      setUser(null);
      setLoading(false);
    }, 1000);
  }, []);

  const signIn = async (email: string, password: string) => {
    // Simulate sign in
    setIsAuthenticated(true);
    setUser({ email, id: '1' });
  };

  const signOut = async () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    loading,
    signIn,
    signOut
  };
};