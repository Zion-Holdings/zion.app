import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'
import type { Review, ReviewReport as _ReviewReport } from '@/types/reviews'
import { toast } from '@/hooks/use-toast'
import  { logErrorToProduction }  from '@/utils/productionLogger;