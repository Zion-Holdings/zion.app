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