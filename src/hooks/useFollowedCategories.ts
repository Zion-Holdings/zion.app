import { useEffect, useState } from 'react';
import { safeStorage } from '@/utils/safeStorage';

const STORAGE_KEY = 'followed_categories';

export function useFollowedCategories() {
  const [followed, setFollowed] = useState<string[]>([]);

  useEffect(() => {
    const raw = safeStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setFollowed(JSON.parse(raw));
      } catch (_err) {
        // Invalid JSON in localStorage, reset to empty array
        setFollowed([]);
      }
    }
  }, []);

  const save = (data: string[]) => {
    setFollowed(data);
    safeStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const follow = (categoryId: string) => {
    if (!followed.includes(categoryId)) {
      save([...followed, categoryId]);
    }
  };

  const unfollow = (categoryId: string) => {
    if (followed.includes(categoryId)) {
      save(followed.filter((id) => id !== categoryId));
    }
  };

  const isFollowed = (categoryId: string) => followed.includes(categoryId);

  return { followed, follow, unfollow, isFollowed };
}

export default useFollowedCategories;
