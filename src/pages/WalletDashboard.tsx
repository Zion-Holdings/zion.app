import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getWallet } from '@/api/wallet';
import Spinner from '@/components/ui/spinner';
import type { TokenTransaction } from '@/types/tokens';
import { useNavigate } from 'react-router-dom';
interface WalletResponse {
  points: number;
  history: TokenTransaction[];
}

const WalletDashboard = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery<WalletResponse, Error>({
    queryKey: ['wallet'],
    queryFn: getWallet as () => Promise<WalletResponse>,
    retry: false,
  });

  // Navigate to login on unauthorized error
  useEffect(() => {
    if (isError && (error as any)?.response?.status === 401) {
      navigate('/login');
    }
  }, [isError, error, navigate]);

  if (isError) {
    // For other errors, let the component render with fallback values
    // to avoid breaking the UI entirely.
  }

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <Spinner className="h-8 w-8 text-primary" />
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

export default WalletDashboard;
