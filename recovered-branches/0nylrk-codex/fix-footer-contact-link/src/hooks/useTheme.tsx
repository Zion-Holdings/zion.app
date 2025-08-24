
import React from 'react';

// This is a simplified version of the theme hook for offline development
export const useTheme = () => {
  return {
    theme: "dark",
    setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`)
  };
};
