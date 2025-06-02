import { useEffect, useState, useCallback } from 'react'; // Added useCallback
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import type { Wallet, TokenTransaction } from '@/types/tokens';

export function useWallet() {
  const { user } = useAuth();
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWallet = useCallback(async () => { // Wrapped in useCallback
    if (!user?.id) {
      setWallet(null);
      // setLoading(false); // Loading state handled by calling function or initial useEffect
      return;
    }

    // setLoading(true); // setLoading will be handled by the useEffect calling this
    try {
      const { data, error: supabaseError } = await supabase
        .from('wallets')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (supabaseError && supabaseError.code !== 'PGRST116') { // PGRST116: single row not found, not an error for new users
        throw supabaseError;
      }
      setWallet(data); // data will be null if not found, which is fine
      // setError(null); // setError will be handled by the useEffect calling this
    } catch (err: any) {
      console.error('Error fetching wallet:', err);
      setError(err.message);
      setWallet(null); // Ensure wallet is null on error
    } 
    // finally { setLoading(false); } // setLoading will be handled by the useEffect calling this
  }, [user?.id]); // Dependency for fetchWallet

  const fetchTransactions = useCallback(async () => { // Wrapped in useCallback
    if (!user?.id) {
      setTransactions([]);
      return;
    }
    try {
      const { data, error: supabaseError } = await supabase
        .from('token_transactions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (supabaseError) throw supabaseError;
      setTransactions((data || []) as TokenTransaction[]);
    } catch (err: any) {
      console.error('Error fetching transactions:', err);
      // setError(err.message); // Decide if this should set a general error
      setTransactions([]); // Ensure transactions are empty on error
    }
  }, [user?.id]); // Dependency for fetchTransactions

  async function earnTokens(amount: number, reason?: string) {
    if (!user?.id) return;
    // This is an optimistic update, actual logic might involve backend call
    setWallet(prev => prev ? { ...prev, balance: prev.balance + amount } : { balance: amount, user_id: user.id, id: crypto.randomUUID(), updated_at: new Date().toISOString() });
    setTransactions(prev => [
      {
        id: crypto.randomUUID(),
        user_id: user.id,
        amount,
        transaction_type: 'earn',
        reason: reason || null,
        created_at: new Date().toISOString(),
      },
      ...prev,
    ]);
    // TODO: Call actual API to record token earning
  }

  async function spendTokens(amount: number, reason?: string) {
    if (!user?.id) return;
    // This is an optimistic update
    setWallet(prev =>
      prev ? { ...prev, balance: Math.max(0, prev.balance - amount) } : null // Or handle case where wallet might not exist yet
    );
    setTransactions(prev => [
      {
        id: crypto.randomUUID(),
        user_id: user.id,
        amount: -amount, // Typically represent spending as negative delta or use a specific column
        transaction_type: 'burn', // or 'spend'
        reason: reason || null,
        created_at: new Date().toISOString(),
      },
      ...prev,
    ]);
    // TODO: Call actual API to record token spending
  }

  useEffect(() => {
    async function loadData() {
      if (user?.id) {
        setLoading(true);
        setError(null);
        await Promise.all([fetchWallet(), fetchTransactions()]);
        setLoading(false);
      } else {
        setWallet(null);
        setTransactions([]);
        setLoading(false);
        setError(null);
      }
    }
    loadData();
  }, [user?.id, fetchWallet, fetchTransactions]); // Added fetchWallet and fetchTransactions

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
