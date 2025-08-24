import { useEffect, useState } from 'react';
import { useZion } from './provider';
import type { Job, WalletBalance } from '../types';

export function useJobs() {
  const zion = useZion();
  const [data, setData] = useState<Job[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    zion.marketplace
      .listJobs({ limit: 10 })
      .then((res) => mounted && setData(res))
      .catch((e) => mounted && setError(e as Error))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [zion]);
  return { data, loading, error };
}

export function useWalletBalances(address?: string) {
  const zion = useZion();
  const [data, setData] = useState<WalletBalance[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    zion.token
      .getBalances(address)
      .then((res) => mounted && setData(res))
      .catch((e) => mounted && setError(e as Error))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [zion, address]);
  return { data, loading, error };
}