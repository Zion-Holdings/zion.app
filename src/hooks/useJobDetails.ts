import type { Job } from '@/types/jobs;
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client'
import  { logErrorToProduction }  from '@/utils/productionLogger;