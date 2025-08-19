
import { useState } from 'react';

export function useAuthStatus() {
  // Mock authenticated status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Mock user details
  const [userDetails, setUserDetails] = useState({
    id: 'user-123',
    name: 'Demo User',
    email: 'demo@example.com',
    avatar: ''
  });
  
  // Mock saved talents
  const [savedTalents, setSavedTalents] = useState<string[]>([]);
  
  // Toggle saved talent
  const handleToggleSave = (talentId: string, isSaved: boolean) => {
    if (isAuthenticated) {
      if (isSaved) {
        setSavedTalents(prev => [...prev, talentId]);
      } else {
        setSavedTalents(prev => prev.filter(id => id !== talentId));
      }
    } else {
      // In a real app, we might show a login prompt
      console.log('User needs to log in to save talents');
    }
  };
  
  // For demo purposes, let's provide a login/logout toggle
  const toggleAuth = () => {
    setIsAuthenticated(prev => !prev);
  };
  
  return {
    isAuthenticated,
    userDetails,
    savedTalents,
    handleToggleSave,
    toggleAuth
  };
}
