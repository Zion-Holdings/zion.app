import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, deleteDoc, serverTimestamp, collection, getDocs } from 'firebase/firestore';
import { db } from '@/integrations/firebase/client';
import { useAuth } from './useAuth';

export interface FirestoreFavorite {
  id: string;
  created?: any;
}

export function useFirestoreFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<FirestoreFavorite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) {
        setFavorites([]);
        setLoading(false);
        return;
      }
      const favCol = collection(db, 'users', (user as any).uid || (user as any).id, 'favorites');
      const snapshot = await getDocs(favCol);
      setFavorites(snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as any) })));
      setLoading(false);
    };
    fetchFavorites();
  }, [user]);

  const toggleFavorite = async (listingId: string) => {
    if (!user) return;
    const uid = (user as any).uid || (user as any).id;
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
