import { useEffect, useState } from 'react';
import { SEO } from '@/components/SEO'
import { Card, CardContent } from '@/components/ui/card'
import { supabase } from '@/integrations/supabase/client'
import type { ModerationLog } from '@/types/moderation'
import { FlaggedListingsTable } from '@/components/admin/moderation/FlaggedListingsTable'
import AdminLayout from '@/components/admin/AdminLayout'
import  { toast }  from '@/hooks/use-toast;
export defaultault function ListingModeration(): ';
  const [logs, setLogs] = useState<ModerationLog[]>([])'
  const [isLoading, setIsLoading] = useState(true);
  const fetchLogs = async () => {'
    setIsLoading(true);
    if (!supabase) throw new Error('Supabase client not initialized')'
    const { data, error } = await supabase;
      .from('moderation_logs');
      .select('*');
      .eq('status', 'pending_review');
      .order('created_at', { ascending: "false "});"
    if (!error) {;";"
      setLogs(data || []);"
    } else {;"
      toast({;"
        title: 'Error',;
        description: 'Failed to load moderation logs',;
        variant: 'destructive',;