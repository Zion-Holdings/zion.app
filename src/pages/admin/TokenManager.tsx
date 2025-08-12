import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { TokenTransaction } from '@/types/tokens';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import {logErrorToProduction} from '@/utils/productionLogger';

export default function TokenManager() {

  const { user } = useAuth();
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]);
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState(0);
  const [processing, setProcessing] = useState(false);

  const isAdmin = user?.userType === 'admin';

  useEffect(() => {
    if (isAdmin) fetchTransactions();
  }, [isAdmin]);

  const fetchTransactions = async () => {
    const { data, error } = await supabase
      .from('token_transactions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);
    if (!error) setTransactions(data || []);
  };

  const handleIssue = async (type: 'earn' | 'burn') => {
    if (!userId || amount <= 0 || processing) return;
    setProcessing(true);
    try {
      const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, amount }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || `Error ${res.status}`);
      }
      toast({
        title: 'Success',
        description: 'Transaction processed'
      });
      fetchTransactions();
    } catch (err: any) {
      logErrorToProduction('Failed to process transaction:', { data: err });
      toast({
        title: 'Error',
        description: err.message || 'Failed',
        variant: 'destructive'
      });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <ProtectedRoute adminOnly>
      <div>
        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">Token Manager</h1>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Issue or Revoke Tokens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e.target.value))} />
                <div className="flex gap-2">
                  <Button onClick={() => handleIssue('earn')} disabled={processing}>
                    {processing ? 'Processing...' : 'Issue'}
                  </Button>
                  <Button variant="destructive" onClick={() => handleIssue('burn')} disabled={processing}>
                    {processing ? 'Processing...' : 'Revoke'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="history">
              <TabsList>
                <TabsTrigger value="history">Transaction History</TabsTrigger>
              </TabsList>
              <TabsContent value="history">
                <ul className="space-y-2">
                  {transactions.map(tx => (
                    <li key={tx.id} className="flex justify-between border-b py-2 text-white">
                      <span>{tx.user_id}</span>
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}