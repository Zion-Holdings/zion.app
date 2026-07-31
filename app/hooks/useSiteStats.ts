'use client';

import { useEffect, useState } from 'react';

interface SiteStats {
  serviceCount: number;
  categoryCount: number;
  categories: string[];
  agentCount: number;
  waveCount: number;
  uptime: string;
  publishedCount: number;
  betaCount: number;
  plannedCount: number;
  activeAgents: string[];
  totalActions: number;
}

const defaultStats: SiteStats = {
  serviceCount: 0,
  categoryCount: 16,
  categories: [],
  agentCount: 9,
  waveCount: 60,
  uptime: '99.97%',
  publishedCount: 0,
  betaCount: 0,
  plannedCount: 0,
  activeAgents: [],
  totalActions: 0
};

export function useSiteStats() {
  const [stats, setStats] = useState<SiteStats>(defaultStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/site-stats.json')
      .then(r => r.ok ? r.json() : Promise.reject(r))
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return { stats, loading };
}

export default useSiteStats;