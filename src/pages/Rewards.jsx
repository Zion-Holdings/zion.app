import React, { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function Rewards() {
  const { user } = useAuth();
  const [ledger, setLedger] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!user?.id) {
        setLedger([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`/api/user/points?userId=${user.id}`);
        if (res.ok) {
          const data = await res.json();
          setLedger(data.ledger || []);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [user?.id]);

  const balance = ledger.reduce((sum, e) => sum + (e.delta || 0), 0);

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Rewards</h1>
      <p className="mb-4">Balance: {balance} pts</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {ledger.map(entry => (
            <li key={entry.id} className="border rounded-md p-2">
              <div className="flex justify-between">
                <span>{entry.reason || 'N/A'}</span>
                <span>{entry.delta > 0 ? '+' : ''}{entry.delta} pts</span>
              </div>
              <div className="text-xs text-muted-foreground">
                {new Date(entry.created_at).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
