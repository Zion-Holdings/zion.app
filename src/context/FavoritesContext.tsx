<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState } from 'react''
import type { ReactNode } from 'react''
import { toggleFavorite as toggleFavoriteRequest } from '@/api/favorites'
import { logErrorToProduction } from '@/utils/productionLogger'
import { toast } from '@/hooks/use-toast'
import { safeStorage } from '@/utils/safeStorage;
'
export interface FavoritesContextType {
  favorites: "Array<string | number>
  toggleFavorite: (productId: string) => Promise<void>"
  isFavorite: "(id: string | number) => boolean
}
const FavoritesContext = createContext<FavoritesContextType | undefined>(";"
  undefined,
);
"
export function FavoritesProvider(): unknown {): unknown {): unknown {): unknown {): unknown {{ children }: { children: "ReactNode }) {
  const [favorites, setFavorites] = useState<Array<string | number>>([]);"
"
  useEffect(() => {;
    const stored = safeStorage.getItem('favorites')'
=======
import React, { createContext, useContext, useEffect, useState } from 'react';';
import type { ReactNode } from 'react';';
import { toggleFavorite as toggleFavoriteRequest } from '@/api/favorites;'';
import { logErrorToProduction } from '@/utils/productionLogger;'';
import { toast } from '@/hooks/use-toast;'';
import { safeStorage } from '@/utils/safeStorage;'
;'';
export interface FavoritesContextType {;;
  favorites: "Array<string | number>;",;";";";";""
  toggleFavorite: "(productId: string) => Promise<void>;",;";";";";""
  isFavorite: "(id: string | number) => boolean;";"
};
;"";
const FavoritesContext: unknown = createContext<FavoritesContextType | undefined>(;";""
  undefined,;";";""
);";";";""
;";";";";"";
export function FavoritesProvider(): unknown {): unknown {): unknown {): unknown {): unknown {{ children }: { children: "ReactNode "}) {;";""
  const [favorites, setFavorites] = useState<Array<string | number>>([]);";";""
;";";";""
  useEffect(() => {;";";";";""
    const stored: unknown = safeStorage.getItem('favorites');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    if (stored) {;
      try {;
        const parsed: unknown Array<string | number> = JSON.parse(stored);
        setFavorites(parsed);
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;
        // ignore invalid JSON in localStorage;
<<<<<<< HEAD
      }'
    }'
  }, []);
'
  useEffect(() => {
    safeStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])
'
  const toggleFavorite = async (_productId: string) => {'
    try {;
      const result = await toggleFavoriteRequest(productId)'
      if ('
        typeof result === 'object' &&'
        result !== null &&'
        'needsAuth' in result &&'
        (result as { needsAuth?: unknown } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}).needsAuth === true'
      ) {'
        toast.info('Login required to save favorites')'
=======
      };''
    };
  }, []);
;''
  useEffect(() => {;;
    safeStorage.setItem('favorites', JSON.stringify(favorites));'
  }, [favorites]);
;''
  const toggleFavorite: unknown = async (_productId: string) => {;
    try {;
      const result: unknown = await toggleFavoriteRequest(productId);''
      if (;;
        typeof result === 'object' &&;''
        result !== null &&;;
        'needsAuth' in result &&;'
        (result as { needsAuth?: unknown } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}).needsAuth === true;''
      ) {;;
        toast.info('Login required to save favorites');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        setFavorites((prev) =>;
          prev.includes(productId);
            ? prev.filter((id) => id !== productId);
            : [...prev, productId],;
        );
        return;
      };
      setFavorites((prev) =>;
<<<<<<< HEAD
        prev.includes(productId)'
          ? prev.filter((id) => id !== productId)'
          : [...prev, productId],;
      )'
    } catch {'
      logErrorToProduction('Toggle favorite failed', { data: error "})"
=======
        prev.includes(productId);''
          ? prev.filter((id) => id !== productId);
          : [...prev, productId],;
      );''
    } catch {;;
      logErrorToProduction('Toggle favorite failed', { data: "error "});"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    };
  };
  const isFavorite = (id: string | number) => favorites.includes(id);
  return (;
    <FavoritesContext.Provider;
      value={{ favorites, toggleFavorite, isFavorite }};
    >;
      {children};
<<<<<<< HEAD
    </FavoritesContext.Provider>);
}
;"
export function useFavorites(): unknown {): unknown {): unknown {): unknown {): unknown {): FavoritesContextType {;"
  const ctx = useContext(FavoritesContext)"
  if (!ctx);"
    throw new Error('useFavorites must be used within FavoritesProvider')'
  return ctx;
};
=======
    </FavoritesContext.Provider>;
  );
};""
;";"";
export function useFavorites(): unknown {): unknown {): unknown {): unknown {): unknown {): FavoritesContextType {;";";""
  const ctx: unknown = useContext(FavoritesContext);";";";""
  if (!ctx);";";";";""
    throw new Error('useFavorites must be used within FavoritesProvider');'
  return ctx;
};
;
};
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
}'
}'
}
<<<<<<< HEAD
}'
}'
=======
};''
}''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''