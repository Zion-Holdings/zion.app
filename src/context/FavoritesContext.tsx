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