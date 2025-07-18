import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth'
import { supabase } from '@/integrations/supabase/client'
import type { Wallet, TokenTransaction } from '@/types/tokens'
import  { logErrorToProduction }  from '@/utils/productionLogger;
export function useWallet(): ;