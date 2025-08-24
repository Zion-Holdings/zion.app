import React from 'react';

export function useScrollToTop() {
  // Simple hook to scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export function useAuth() {
  // Simple auth hook
  return {
    user: null,
    isAuthenticated: false
  };
}