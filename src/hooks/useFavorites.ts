import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { safeFetch } from '@/integrations/supabase/client';
import { getWishlist, saveWishlist } from '@/lib/db';
import {logErrorToProduction} from "@/utils/productionLogger";

export interface Favorite {
  item_type: string;
  item_id: string;
  created_at?: string;
}

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    if (!user) {
      setFavorites([]);
      setLoading(false);
      return;
    }
    try {
      const res = await safeFetch(`/api/favorites?userId=${user.id}`);
      const data = await res.json();
      setFavorites(data || []);
      await saveWishlist(data || []);
    } catch (err) {
      logErrorToProduction('Failed to fetch favorites', { data: err });
      const local = await getWishlist();
      setFavorites(local as Favorite[]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const toggleFavorite = async (item_type: string, item_id: string) => {
    if (!user) return;
    const exists = favorites.some(
      f => f.item_type === item_type && f.item_id === item_id
    );
    try {
      if (exists) {
        await fetch('/api/favorites', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: user.id, item_type, item_id })
        });
        setFavorites(prev =>
          prev.filter(f => !(f.item_type === item_type && f.item_id === item_id))
        );
      } else {
        await fetch('/api/favorites', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: user.id, item_type, item_id })
        });
        setFavorites(prev => [...prev, { item_type, item_id }]);
      }
      await saveWishlist(
        exists
          ? favorites.filter(f => !(f.item_type === item_type && f.item_id === item_id))
          : [...favorites, { item_type, item_id }]
      );
    } catch (err) {
      logErrorToProduction('Failed to toggle favorite', { data: err });
    }
  };

  const isFavorite = (item_type: string, item_id: string) =>
    favorites.some(f => f.item_type === item_type && f.item_id === item_id);

  return { favorites, count: favorites.length, loading, isFavorite, toggleFavorite, refetch: fetchFavorites };
}
