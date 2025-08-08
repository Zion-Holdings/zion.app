import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), { ssr: false });

async function resolveDisplayName(addr: string): Promise<string | null> {
  try {
    const r = await fetch(`/api/did/get?address=${encodeURIComponent(addr)}`);
    const { data } = await r.json();
    const did = data?.payload || {};
    return did.lens || did.ens || null;
  } catch { return null; }
}

export default function Web3LoginButton() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ address: string; chain: 'evm' | 'sol' } | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true');
  }, []);

  useEffect(() => {
    (async () => {
      if (user && displayWeb3) setDisplayName(await resolveDisplayName(user.address));
      else setDisplayName(null);
    })();
  }, [user, displayWeb3]);

  const onLoggedIn = (u: { address: string; chain: 'evm' | 'sol' }) => {
    window.localStorage.setItem('zion-web3-user', JSON.stringify(u));
    setUser(u);
  };

  const disconnect = async () => {
    window.localStorage.removeItem('zion-web3-user');
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch {}
    setUser(null);
  };

  if (user) {
    const base = displayName || `${user.address.slice(0, 6)}…${user.address.slice(-4)}`;
    return (
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline text-[10px] rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-1.5 py-0.5">Web3 Verified</span>
        <button className="rounded-md border px-2 py-1 text-xs" onClick={() => setOpen(true)}>{base}</button>
        <button className="text-xs text-red-600" onClick={disconnect}>Logout</button>
        {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
      </div>
    );
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs">Connect Wallet</button>
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} onLoggedIn={onLoggedIn} />}
    </>
  );
}