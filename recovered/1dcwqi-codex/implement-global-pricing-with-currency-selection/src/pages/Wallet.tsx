
import { useWallet } from '@/hooks/useWallet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BadgeDollarSign } from 'lucide-react';

export default function WalletPage() {
  const { wallet, transactions, loading } = useWallet();

  return (
    <div className="container max-w-4xl py-10">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <BadgeDollarSign className="h-6 w-6" /> Wallet
      </h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" /> Balance
          </CardTitle>
          <CardDescription>Your current ZION$ balance</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          ) : (
            <p className="text-2xl font-bold">{wallet?.balance ?? 0} ZION$</p>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue="earnings">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="spending">Spending</TabsTrigger>
        </TabsList>
        <TabsContent value="earnings">
          {transactions.filter(t => t.transaction_type === 'earn').length === 0 ? (
            <p className="text-muted-foreground">No earnings yet</p>
          ) : (
            <ul className="space-y-2">
              {transactions.filter(t => t.transaction_type === 'earn').map(t => (
                <li key={t.id} className="flex justify-between border-b py-2">
                  <span>{t.reason || 'Reward'}</span>
                  <span className="font-medium">+{t.amount} ZION$</span>
                </li>
              ))}
            </ul>
          )}
        </TabsContent>
        <TabsContent value="spending">
          {transactions.filter(t => t.transaction_type === 'burn').length === 0 ? (
            <p className="text-muted-foreground">No spending yet</p>
          ) : (
            <ul className="space-y-2">
              {transactions.filter(t => t.transaction_type === 'burn').map(t => (
                <li key={t.id} className="flex justify-between border-b py-2">
                  <span>{t.reason || 'Purchase'}</span>
                  <span className="font-medium">-{t.amount} ZION$</span>
                </li>
              ))}
            </ul>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">On-chain Export (Beta)</h2>
        <p className="text-sm text-muted-foreground mb-4">Export your ZION$ to an external crypto wallet.</p>
        <button className="px-4 py-2 bg-zion-purple text-white rounded-md">Connect Wallet</button>
      </div>
    </div>
  );
}
