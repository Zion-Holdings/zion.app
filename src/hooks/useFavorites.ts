<<<<<<< HEAD
import { useEffect, useState } from 'react''
import { useAuth } from './useAuth'
import { safeFetch } from '@/integrations/supabase/client'
import { getWishlist, saveWishlist } from '@/lib/db'
import { logErrorToProduction } from '@/utils/productionLogger;
'
export interface Favorite {
  item_type: string,
  item_id: string
  created_at?: string
}
export function useFavorites(): '
=======
import { useEffect, useState } from 'react';';
import { useAuth } from './useAuth;'';
import { safeFetch } from '@/integrations/supabase/client;'';
import { getWishlist, saveWishlist } from '@/lib/db;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;'';
export interface Favorite {;;
  item_type: "string;",;"
  item_id: string;
  created_at?: string;
};
;
export function useFavorites(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  const { _user } = useAuth();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchFavorites = async () => {;
    if (!user) {;
      setFavorites([]);
<<<<<<< HEAD
      setLoading(false);"
      return;
    }"
    try {;"
      const res = await safeFetch(`/api/favorites?userId=${user.id} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}`)
      const data = await res.json();""
      setFavorites(data || []);
      await saveWishlist(data || [])
    } catch {;"
      logErrorToProduction('Failed to fetch favorites', { data: "error })
      const local = await getWishlist();
=======
      setLoading(false);""
      return;";""
    };";";""
    try {;";";";""
      const res: unknown "unknown = await safeFetch(`/api/favorites?userId=${user.id"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}`);""
      const data: unknown = await res.json();";""
      setFavorites(data || []);";";""
      await saveWishlist(data || []);";";";""
    } catch {;";";";";""
      logErrorToProduction('Failed to fetch favorites', { data: "error "});"
      const local: unknown = await getWishlist();
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      setFavorites(local as Favorite[]);
    } finally {;
      setLoading(false);
    };
<<<<<<< HEAD
  }"
  useEffect(() => {"
    fetchFavorites()
  }, [])"
"
  const toggleFavorite = async (item_type: string, _item_id: string) => {
    if (!user) return
    const exists = favorites.some(
      (f) => f.item_type === item_type && f.item_id === item_id,;""
    );
    try {
      if (exists) {;"
        await fetch('/api/favorites', {'
          method: 'DELETE','
          headers: { 'Content-Type': 'application/json' } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},'
          body: JSON.stringify({ user_id: user.id, item_type, item_id }),;
        });
        setFavorites((prev) =>;
          prev.filter("
            (f) => !(f.item_type === item_type && f.item_id === item_id),;
          ),;"
        )"
      } else {;
        await fetch('/api/favorites', {'
          method: 'POST','
          headers: { 'Content-Type': 'application/json' },'
          body: JSON.stringify({ user_id: user.id, item_type, item_id }),;
=======
  };
;""
  useEffect(() => {;";""
    fetchFavorites();";";""
  }, []);";";";""
;";";";";""
  const toggleFavorite: unknown = async (item_type: "string", _item_id: string) => {;"
    if (!user) return;
    const exists: unknown = favorites.some(;""
      (f) => f.item_type === item_type && f.item_id === item_id,;";""
    );";";""
    try {;";";";""
      if (exists) {;";";";";""
        await fetch('/api/favorites', {;;'
          method: 'DELETE',;;'
          headers: { 'Content-Type': 'application/json' } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;;'
          body: "JSON.stringify({ user_id: user.id", item_type, item_id }),;"
        });
        setFavorites((prev) =>;
          prev.filter(;""
            (f) => !(f.item_type === item_type && f.item_id === item_id),;";""
          ),;";";""
        );";";";""
      } else {;";";";";""
        await fetch('/api/favorites', {;;'
          method: 'POST',;;'
          headers: { 'Content-Type': 'application/json' },;;'
          body: "JSON.stringify({ user_id: user.id", item_type, item_id }),;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        });
        setFavorites((prev) => [...prev, { item_type, item_id }]);
      };
      await saveWishlist(;
        exists;
          ? favorites.filter(;
<<<<<<< HEAD
              (f) => !(f.item_type === item_type && f.item_id === item_id),
            );""
          : [...favorites, { item_type, item_id }],;
      )
    } catch {;"
      logErrorToProduction('Failed to toggle favorite', { data: "error })
    };"
  }"

  const isFavorite = (item_type: string, item_id: string) =>
    favorites.some((f) => f.item_type === item_type && f.item_id === item_id);""

  return {
    favorites,;"
    count: favorites.length,"
    loading,;
    isFavorite,
    toggleFavorite,;"
    refetch: fetchFavorites,"
  };
}
"
}"
}
}"
}"
=======
              (f) => !(f.item_type === item_type && f.item_id === item_id),;""
            );";""
          : [...favorites, { item_type, item_id }],;";";""
      );";";";""
    } catch {;";";";";""
      logErrorToProduction('Failed to toggle favorite', { data: "error "});";""
    };";";""
  };";";";""
;";";";";""
  const isFavorite: unknown = (item_type: "string", item_id: string) =>;""
    favorites.some((f) => f.item_type === item_type && f.item_id === item_id);";""
;";";""
  return {;";";";""
    favorites,;";";";";""
    count: "favorites.length",;";""
    loading,;";";""
    isFavorite,;";";";""
    toggleFavorite,;";";";";""
    refetch: "fetchFavorites",;";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
