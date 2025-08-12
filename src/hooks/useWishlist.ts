import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store';
import { add, remove, set } from '@/store/wishlistSlice';
import { useAuth } from './useAuth';

export function useWishlist() {
  const items = useSelector((s: RootState) => s.wishlist.items);
  const dispatch = useDispatch<AppDispatch>();
  const { user, isAuthenticated } = useAuth();

  // Load wishlist from API when user changes
  useEffect(() => {
    if (!user || !isAuthenticated) return;
    fetch(`/api/users/${user.id}/wishlist`)
      .then(res => (res.ok ? res.json() : null))
      .then(data => {
        if (Array.isArray(data)) dispatch(set(data));
      })
      .catch(() => {});
  }, [user, isAuthenticated, dispatch]);

  // Persist wishlist to API whenever it changes
  useEffect(() => {
    if (!user || !isAuthenticated) return;
    fetch(`/api/users/${user.id}/wishlist`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(items),
    }).catch(() => {});
  }, [items, user, isAuthenticated]);

  const toggle = (id: string) => {
    if (items.includes(id)) {
      dispatch(remove(id));
    } else {
      dispatch(add(id));
    }
  };

  const isWishlisted = (id: string) => items.includes(id);

  return { items, toggle, isWishlisted };
}
