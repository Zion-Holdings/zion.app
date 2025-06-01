import { createContext, useContext, useEffect, useState } from 'react';
import { toggleFavorite as toggleFavoriteRequest } from '@/api/favorites';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        // ignore invalid JSON
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = async productId => {
    try {
      await toggleFavoriteRequest(productId);
      setFavorites(prev =>
        prev.includes(productId)
          ? prev.filter(id => id !== productId)
          : [...prev, productId]
      );
    } catch (err) {
      console.error('Toggle favorite failed', err);
    }
  };

  const isFavorite = id => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
