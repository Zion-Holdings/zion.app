import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'
import  type { PointsLedgerEntry }  from '@/types/points';
export function usePoints(): ';