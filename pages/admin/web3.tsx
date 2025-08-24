import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function AdminWeb3Page() {
  const [users, setUsers] = useState<{ id: string; enabled: boolean; chain?: string }[]>([]);

  useEffect(() => {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-users') : null;
    setUsers(raw ? JSON.parse(raw) : []);
  }, []);

  const save = (list: any) => {
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-users', JSON.stringify(list));
    setUsers(list);
  };

  const metrics = {
    total: users.length,
    evm: users.filter(u => u.chain === 'evm').length,
    sol: users.filter(u => u.chain === 'sol').length,
    enabled: users.filter(u => u.enabled).length,
    disabled: users.filter(u => !u.enabled).length,
  };

  return (
    <>
      <Head><title>Admin — Web3</title></Head>
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-xl font-semibold">Web3 Admin</h1>
        <div className="rounded-md border p-4">
          <div className="font-medium mb-2">Usage Metrics</div>
          <div className="text-sm text-gray-600">Total: {metrics.total} · EVM: {metrics.evm} · Solana: {metrics.sol} · Enabled: {metrics.enabled} · Disabled: {metrics.disabled}</div>
        </div>
        <div className="rounded-md border p-4">
          <div className="font-medium mb-2">Users</div>
          {users.length === 0 && <div className="text-sm text-gray-500">No data yet</div>}
          <ul className="space-y-2">
            {users.map((u, i) => (
              <li key={i} className="flex items-center justify-between">
                <div className="text-sm">{u.id}</div>
                <label className="inline-flex items-center gap-2 text-sm">
                  <span>Web3</span>
                  <input type="checkbox" checked={u.enabled} onChange={(e) => {
                    const next = users.slice(); next[i] = { ...u, enabled: e.target.checked }; save(next);
                  }} />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}