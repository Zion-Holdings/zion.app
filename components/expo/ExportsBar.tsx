import { useEffect, useState } from 'react';
import WalletConnectButton from './WalletConnectButton';

export default function ExportsBar() {
  const [connected, setConnected] = useState<string | null>(null);
  const [status, setStatus] = useState('');

  async function emailSummary() {
    setStatus('Sending summary…');
    const res = await fetch('/api/events/expo/email-summary', { method: 'POST' });
    const data = await res.json();
    setStatus(res.ok ? 'Summary queued for email' : `Email failed: ${data.error || 'unknown'}`);
  }

  async function claimNft() {
    if (!connected) { setStatus('Connect wallet first'); return; }
    const msg = `Zion Expo Ticket • ${connected}`;
    const sig = await (window as any).ethereum.request({ method: 'personal_sign', params: [msg, connected] });
    const res = await fetch('/api/events/expo/claim', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address: connected, signature: sig })
    });
    const data = await res.json();
    setStatus(res.ok ? 'NFT ticket claim recorded' : `Claim failed: ${data.error || 'unknown'}`);
  }

  const [vip, setVip] = useState(false);
  useEffect(() => {
    (async () => {
      if (connected) {
        const res = await fetch(`/api/events/expo/vip?address=${connected}`);
        const data = await res.json();
        setVip(Boolean(data?.allowed));
      } else {
        setVip(false);
      }
    })();
  }, [connected]);

  return (
    <div className="sticky bottom-4 z-30">
      <div className="container mx-auto">
        <div className="rounded-xl border bg-white/80 dark:bg-black/60 backdrop-blur p-4 flex flex-col md:flex-row items-center gap-3">
          <div className="flex items-center gap-2">
            <button onClick={emailSummary} className="px-3 py-1.5 rounded border">Email Summary</button>
            <button onClick={claimNft} className="px-3 py-1.5 rounded border">Claim NFT Ticket</button>
          </div>
          <div className="md:ml-auto flex items-center gap-3">
            <WalletConnectButton onConnected={addr => setConnected(addr)} />
            {vip ? (
              <a className="px-3 py-1.5 rounded bg-black text-white dark:bg-white dark:text-black" href="/vip/stream" onClick={(e)=>e.preventDefault()}>VIP Stream (Gated)</a>
            ) : (
              <span className="text-xs opacity-70">Connect an allowlisted wallet for VIP stream</span>
            )}
          </div>
        </div>
        {status && <div className="mt-2 text-sm opacity-80">{status}</div>}
      </div>
    </div>
  );
}