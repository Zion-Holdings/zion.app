import {
import { logError } from '@/utils/productionLogger';

  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { toggleFavorite as toggleFavoriteRequest } from '@/api/favorites';
import { toast } from '@/hooks/use-toast';
import { safeStorage } from '@/utils/safeStorage';

export interface FavoritesContextType {
  favorites: Array<string | number>;
  toggleFavorite: (productId: string) => Promise<void>;
  isFavorite: (id: string | number) => boolean;
}

const FavoritesContext =
  createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Array<string | number>>([]);

  useEffect(() => {
    const stored = safeStorage.getItem('favorites');
    if (stored) {
      try {
        const parsed: Array<string | number> = JSON.parse(stored);
        setFavorites(parsed);
      } catch {
        // ignore invalid JSON
      }
    }
  }, []);

  useEffect(() => {
    safeStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = async (productId: string) => {
    try {
      const result = await toggleFavoriteRequest(productId);
      if ((result as any)?.needsAuth) {
        toast.info('Login required to save favorites');
        setFavorites(prev =>
          prev.includes(productId)
            ? prev.filter(id => id !== productId)
            : [...prev, productId]
        );
        return;
      }

      setFavorites(prev =>
        prev.includes(productId)
          ? prev.filter(id => id !== productId)
          : [...prev, productId]
      );
    } catch (err) {
      logError('Toggle favorite failed', err);
    }
  };

  const isFavorite = (id: string | number) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites(): FavoritesContextType {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
}
