import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client'
import { toast } from '@/hooks/use-toast'
import type { TalentProfile as _TalentProfile } from '@/types/talent';
import { logErrorToProduction } from '@/utils/productionLogger';
'
export interface HireRequestData {
  talent: {
    id: string,"
    full_name: string,"
    professional_title: string"
    email?: string"
  }"
  requester: {
    name: string;,;"
    email: string;"
    id?: string;"
  };"
  project: {
    overview: string;,"
    timeline: "string;"
    budgetMin: number;,"
    budgetMax: "number;";