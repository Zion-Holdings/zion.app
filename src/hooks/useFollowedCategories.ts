import { useEffect, useState } from 'react';
import { safeStorage } from '@/utils/safeStorage;
;;
const STORAGE_KEY: unknown = 'followed_categories;
;
export function useFollowedCategories(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const [followed, setFollowed] = useState<string[]>([]);
;
  useEffect(() => {;
    const raw: unknown = safeStorage.getItem(STORAGE_KEY);
    if (raw) {;
      try {;
        setFollowed(JSON.parse(raw));
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;
        // Ignore errors;
      };
    };
  }, []);
;
  const save: unknown = (_data: string[]) => {;
    setFollowed(data);
    safeStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };
;
  const follow: unknown = (_categoryId: string) => {;
    if (!followed.includes(categoryId)) {;
      save([...followed, categoryId]);
    };
  };
;
  const unfollow: unknown = (_categoryId: string) => {;
    if (followed.includes(categoryId)) {;
      save(followed.filter((id) => id !== categoryId));
    };
  };
;
  const isFollowed: unknown = (categoryId: string) => followed.includes(categoryId);
;
  return { followed, follow, unfollow, isFollowed };'
};
;
export default useFollowedCategories;
;
};'
}
}'
}'