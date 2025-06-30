
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import type { Wallet, TokenTransaction } from '@/types/tokens';
import {logErrorToProduction} from '@/utils/productionLogger';

export function useWallet() {

  const { user } = useAuth();
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchWallet() {
    if (!user?.id) {
      setWallet(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('wallets')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) {
        throw error;
      }

      setWallet(data);
    } catch (err: any) {
      logErrorToProduction('Error fetching wallet:', { data: err });
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function fetchTransactions() {
    if (!user?.id) {
      setTransactions([]);
      return;
    }
    try {
      const { data, error } = await supabase
        .from('token_transactions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTransactions((data || []) as TokenTransaction[]);
    } catch (err: any) {
      logErrorToProduction('Error fetching transactions:', { data: err });
    }
  }

  async function earnTokens(amount: number, reason?: string) {
    if (!user?.id) return;
    setWallet(prev => prev ? { ...prev, balance: prev.balance + amount } : prev);
    setTransactions(prev => {
      const newTransaction = {
        id: crypto.randomUUID(),
        user_id: user.id,
        amount,
        transaction_type: 'earn' as const,
        reason: reason || null,
        created_at: new Date().toISOString(),
      };
      return [newTransaction, ...prev];
    });
  }

  async function spendTokens(amount: number, reason?: string) {
    if (!user?.id) return;
    setWallet(prev =>
      prev ? { ...prev, balance: Math.max(0, prev.balance - amount) } : prev
    );
    setTransactions(prev => {
      const newTransaction = {
        id: crypto.randomUUID(),
        user_id: user.id,
        amount,
        transaction_type: 'burn' as const,
        reason: reason || null,
        created_at: new Date().toISOString(),
      };
      return [newTransaction, ...prev];
    });
  }

  useEffect(() => {
    fetchWallet();
    fetchTransactions();
  }, [user?.id]);

  return {
    wallet,
    transactions,
    loading,
    error,
    fetchWallet,
    fetchTransactions,
    earnTokens,
    spendTokens,
  };
}
