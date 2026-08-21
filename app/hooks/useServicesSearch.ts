// app/hooks/useServicesSearch.ts
// Client hook that fetches a lean service search index on demand
// instead of importing the 516 KB trimmed JSON into the client bundle.
import { useState, useEffect } from 'react';

export interface SearchIndexEntry {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  icon?: string;
  href: string;
  url: string;
  image: string;
  popular?: boolean;
  features: string[];
  benefits: string[];
  pricing: Record<string, unknown>;
  tags?: string[];
}

interface UseServicesSearchResult {
  services: SearchIndexEntry[];
  totalCount: number;
  loading: boolean;
  error: string | null;
}

export function useServicesSearch(): UseServicesSearchResult {
  const [services, setServices] = useState<SearchIndexEntry[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/services')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setServices(data.services || []);
        setTotalCount(data.totalCount || 0);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message);
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return { services, totalCount, loading, error };
}
