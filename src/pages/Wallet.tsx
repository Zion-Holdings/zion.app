import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getWallet } from '@/api/wallet';
import { Skeleton } from '@/components/ui/skeleton';

const Wallet = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['wallet'],
    queryFn: getWallet,
  });

  if (isLoading) {
    return (
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Wallet</h1>
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  const points = data?.points ?? 0;
  const history = data?.history ?? [];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wallet</h1>
      <section className="mb-4">
        <h2 className="text-lg font-semibold">Points</h2>
        <p>{points}</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold">Transaction History</h2>
        {history.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <ul className="space-y-2">
            {history.map((item, idx) => (
              <li
                key={item.id ?? idx}
                className="flex justify-between border-b pb-1"
              >
                <span>
                  {new Date(item.created_at).toLocaleDateString()} -{' '}
                  {item.reason || item.transaction_type}
                </span>
                <span>
                  {item.transaction_type === 'earn' ? '+' : '-'}
                  {item.amount}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Wallet;
