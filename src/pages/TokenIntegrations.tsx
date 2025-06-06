import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ConnectWalletButton from '@/components/ConnectWalletButton';
import { useWallet } from '@/context/WalletContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Chain {
  id: string;
  name: string;
  logo: string;
}

const CHAINS: Chain[] = [
  { id: 'ethereum', name: 'Ethereum', logo: '/logos/ethereum-logo.svg' },
  { id: 'polygon', name: 'Polygon', logo: '/logos/polygon-logo.svg' },
  { id: 'arbitrum', name: 'Arbitrum', logo: '/logos/arbitrum-logo.svg' },
  { id: 'optimism', name: 'Optimism', logo: '/logos/optimism-logo.svg' },
  { id: 'avalanche', name: 'Avalanche', logo: '/logos/avalanche-logo.svg' },
  { id: 'bnb', name: 'BNB', logo: '/logos/bnb-logo.svg' },
];

function suggestChain(region: string, stake: number): string {
  if (stake > 1000) return 'ethereum';
  if (region === 'asia') return 'bnb';
  if (region === 'europe') return 'polygon';
  return 'optimism';
}

export default function TokenIntegrations() {
  const { address, isConnected } = useWallet();
  const [fromChain, setFromChain] = useState<string>('ethereum');
  const [toChain, setToChain] = useState<string>('polygon');
  const [txHash, setTxHash] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [region, setRegion] = useState('');
  const [stake, setStake] = useState(0);
  const [suggested, setSuggested] = useState<string | null>(null);

  const handleBridge = () => {
    setStatus('Bridging...');
    setTxHash(null);
    // TODO: integrate actual LayerZero bridge logic
    // Record onchain tx logs and enforce rate limits
    // Use burn-and-mint model if tokens are wrapped
    setTimeout(() => {
      setTxHash('0xabc123');
      setStatus(`ZION$ arrived on ${toChain} in 12s`);
    }, 1200);
  };

  const handleSuggest = () => {
    const chain = suggestChain(region.toLowerCase(), stake);
    setSuggested(chain);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h1 className="text-3xl font-bold text-white">ZION$ Integrations</h1>
          <ConnectWalletButton />
          {isConnected && (
            <p className="text-white">Connected wallet: {address}</p>
          )}

          <Card>
            <CardHeader>
              <CardTitle>LayerZero Cross-Chain Bridge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Select value={fromChain} onValueChange={setFromChain}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="From" />
                  </SelectTrigger>
                  <SelectContent>
                    {CHAINS.map(c => (
                      <SelectItem key={c.id} value={c.id}>
                        <div className="flex items-center gap-2">
                          <img src={c.logo} alt={c.name} className="h-4" />
                          {c.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={toChain} onValueChange={setToChain}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="To" />
                  </SelectTrigger>
                  <SelectContent>
                    {CHAINS.map(c => (
                      <SelectItem key={c.id} value={c.id}>
                        <div className="flex items-center gap-2">
                          <img src={c.logo} alt={c.name} className="h-4" />
                          {c.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleBridge}>Bridge Now</Button>
              {txHash && <p className="text-white">Tx Hash: {txHash}</p>}
              {status && <p className="text-white">{status}</p>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>DePIN Rewards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-white">
              <p>Connect hardware networks like DIMO, Helium, and Hivemapper.</p>
              <p>Earn ZION$ for proof-of-compute, completed IoT jobs, and data streaming.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Operator AI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Region" value={region} onChange={e => setRegion(e.target.value)} />
              <Input type="number" placeholder="Stake" value={stake} onChange={e => setStake(parseInt(e.target.value))} />
              <Button onClick={handleSuggest}>Suggest Chain</Button>
              {suggested && (
                <p className="text-white">Suggested chain: {CHAINS.find(c => c.id === suggested)?.name}</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
