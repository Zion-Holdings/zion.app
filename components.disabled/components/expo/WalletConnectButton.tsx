import { useEffect, useState } from 'react';

declare global {
  interface Window { ethereum?: any }
}

export default function WalletConnectButton({ onConnected }: { onConnected?: (address: string) => void }) {
  const [address, setAddress] = useState<string | null>(null);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    setAvailable(typeof window !== 'undefined' && !!window.ethereum);
  }, []);

  async function connect() {
    if (!window.ethereum) return;
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const addr = accounts?.[0];
    setAddress(addr);
    onConnected?.(addr);
  }

  if (!available) return <div className="text-sm opacity-70">No wallet detected</div>;

  return address ? (
    <div className="text-sm">Connected: <span className="font-mono">{address.slice(0,6)}…{address.slice(-4)}</span></div>
  ) : (
    <button onClick={connect} className="px-3 py-1.5 rounded border">Connect Wallet</button>
  );
}