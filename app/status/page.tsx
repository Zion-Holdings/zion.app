'use client';

import PageWrapper from '@/components/PageWrapper';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';

export const metadata: Metadata = {
  title: 'Platform Status — Uptime & Service Status | Zion Tech Group',
  description: 'Real-time status of Zion Tech Group services. Check if all systems are operational.',
  alternates: { canonical: '/status/' },
};

export default function StatusPage() {
  const [up, setUp] = useState<boolean | null>(null);
  useEffect(() => {
    fetch('https://ziontechgroup.com')
      .then((r) => setUp(r.ok))
      .catch(() => setUp(false));
  }, []);
  return (
    <PageWrapper>
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-4">Site Status</h1>
        <p className="text-slate-300 mb-6">
          {up === null ? 'Checking...' : up ? 'All systems operational.' : 'Service interruption detected.'}
        </p>
        <p className="text-slate-400 text-sm">
          For immediate assistance contact <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13046440950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a>.
        </p>
      </div>
    </PageWrapper>
  );
}
