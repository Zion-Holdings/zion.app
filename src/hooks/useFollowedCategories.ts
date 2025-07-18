<<<<<<< HEAD
import { useEffect, useState } from 'react''
import { safeStorage } from '@/utils/safeStorage;
const STORAGE_KEY = 'followed_categories'
export function useFollowedCategories(): ;
=======
import { useEffect, useState } from 'react';';
import { safeStorage } from '@/utils/safeStorage;'
;;
const STORAGE_KEY: unknown = 'followed_categories;'
;
export function useFollowedCategories(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  const [followed, setFollowed] = useState<string[]>([]);
  useEffect(() => {;
    const raw = safeStorage.getItem(STORAGE_KEY);
    if (raw) {;
      try {;
        setFollowed(JSON.parse(raw));
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;
        // Ignore errors;
      };
    };
  }, []);
  const save = (_data: string[]) => {;
    setFollowed(data);
    safeStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };
  const follow = (_categoryId: string) => {;
    if (!followed.includes(categoryId)) {;
      save([...followed, categoryId]);
    };
  };
  const unfollow = (_categoryId: string) => {;
    if (followed.includes(categoryId)) {;
      save(followed.filter((id) => id !== categoryId));
    };
  };
<<<<<<< HEAD
  const isFollowed = (categoryId: string) => followed.includes(categoryId);
  return { followed, follow, unfollow, isFollowed }'
}'
export default useFollowedCategories;
}'
=======
;
  const isFollowed: unknown = (categoryId: string) => followed.includes(categoryId);
;
  return { followed, follow, unfollow, isFollowed };''
};
;
export default useFollowedCategories;
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''