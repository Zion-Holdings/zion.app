import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simple mock authentication
    setUser(null);
    setLoading(false);
  }, []);

  return {
    user,
    loading,
    isAuthenticated: !!user,
    login: () => {},
    logout: () => setUser(null),
  };
}