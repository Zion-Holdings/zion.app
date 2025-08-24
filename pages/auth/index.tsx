import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Web3LoginModal = dynamic(() => import('../../components/auth/Web3LoginModal'), { ssr: false });

export default function AuthIndexPage() {
  const [open, setOpen] = useState(true);
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-xl font-semibold mb-2">Sign in</h1>
      <p className="text-sm text-gray-500 mb-4">Use your wallet to sign in. QR code supported via WalletConnect.</p>
      <button onClick={() => setOpen(true)} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2">Connect Wallet</button>
      {open && <Web3LoginModal isOpen={open} onClose={() => setOpen(false)} />}
    </div>
  );
}