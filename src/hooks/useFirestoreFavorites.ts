import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, deleteDoc, serverTimestamp, collection, getDocs } from 'firebase/firestore';
import { db } from '@/integrations/firebase/client';
import { useAuth } from './useAuth';

export interface FirestoreFavorite {
  id: string;
  created?: unknown;
}

export function useFirestoreFavorites() {
  const { _user } = useAuth();
  const [favorites, setFavorites] = useState<FirestoreFavorite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) {
        setFavorites([]);
        setLoading(false);
        return;
      }
      const uid = typeof user === 'object' && user !== null && 'uid' in user
        ? (user as { uid?: string }).uid
        : (typeof user === 'object' && user !== null && 'id' in user
          ? (user as { id?: string }).id
          : undefined);
      if (!uid) throw new Error('User ID is required for Firestore path');
      const favCol = collection(db, 'users', uid, 'favorites');
      const snapshot = await getDocs(favCol);
      setFavorites(snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Record<string, unknown>) })));
      setLoading(false);
    };
    fetchFavorites();
  }, [user]);

  const toggleFavorite = async (_listingId: string) => {
    if (!user) return;
    const uid = typeof user === 'object' && user !== null && 'uid' in user
      ? (user as { uid?: string }).uid
      : (typeof user === 'object' && user !== null && 'id' in user
        ? (user as { id?: string }).id
        : undefined);
    if (!uid) throw new Error('User ID is required for Firestore path');
    const favRef = doc(db, 'users', uid, 'favorites', listingId);
    const exists = (await getDoc(favRef)).exists();
    if (exists) {
      await deleteDoc(favRef);
      setFavorites(prev => prev.filter(f => f.id !== listingId));
    } else {
      await setDoc(favRef, { created: serverTimestamp() });
      setFavorites(prev => [...prev, { id: listingId }]);
    }
  };

  return { favorites, loading, toggleFavorite };
}
