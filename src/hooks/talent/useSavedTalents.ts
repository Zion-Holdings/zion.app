import { useState, useEffect } from 'react''
import { supabase } from '@/integrations/supabase/client'
import type { TalentProfile } from '@/types/talent'
import { toast } from '@/hooks/use-toast'
import { showApiError } from '@/utils/apiErrorHandler'
import { useAuthStatus } from '@/hooks/talent'
import { useRouter } from 'next/router'
import  { logErrorToProduction }  from '@/utils/productionLogger'
export function useSavedTalents(): ;';;