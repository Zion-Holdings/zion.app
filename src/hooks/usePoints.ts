import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import type { PointsLedgerEntry } from '@/types/points';

export function usePoints() {
  const { user } = useAuth();
  const [ledger, setLedger] = useState<PointsLedgerEntry[]>([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  async function fetchLedger() {
    if (!user?.id) {
      setLedger([]);
      setBalance(0);
      setLoading(false);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from('points_ledger')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (!error && data) {
      const entries = data as PointsLedgerEntry[];
      setLedger(entries);
      const total = entries.reduce((sum, e) => sum + e.delta, 0);
      setBalance(total);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchLedger();
    const interval = setInterval(fetchLedger, 30000);
    return () => clearInterval(interval);
  }, [user?.id]);

  return { ledger, balance, loading, fetchLedger };
}
