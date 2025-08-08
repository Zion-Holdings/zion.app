import DashboardLayout from '../components/layout/Layout';
import EnhancedCard from '../components/ui/EnhancedCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookie = req.headers.cookie || '';
  const role = cookie.split(';').map(s => s.trim()).find(s => s.startsWith('zion_role='))?.split('=')[1];
  if (!role || (role !== 'investor' && role !== 'superadmin')) {
    return { redirect: { destination: '/unauthorized', permanent: false } };
  }
  return { props: {} };
};

export default function InvestorsPortalPage() {
  const [kpis, setKpis] = useState<{ activeUsers: number; gmvMonthly: number; mrr: number; burn: number; runwayMonths: number } | null>(null);

  useEffect(() => {
    fetch('/api/kpis').then(r => r.json()).then(setKpis).catch(() => setKpis(null));
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section id="deck" className="space-y-3">
          <h1 className="text-2xl font-semibold">Investor Portal</h1>
          <p className="text-gray-600 dark:text-gray-400">View our pitch materials, KPIs, and download financials.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <EnhancedCard title="Pitch Deck">
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                <span>Embed deck (PDF/Slides) here</span>
              </div>
            </EnhancedCard>
            <EnhancedCard title="Book Investor Call">
              <div className="space-y-3">
                <p>Interested in investing? Book a call with our team.</p>
                <a href="#" className="inline-block px-4 py-2 rounded bg-gray-900 text-white">Book Investor Call</a>
              </div>
            </EnhancedCard>
          </div>
        </section>

        <section id="kpis" className="space-y-3">
          <h2 className="text-xl font-semibold">KPIs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <EnhancedCard title="Active Users">
              <div className="text-3xl font-bold">{kpis ? kpis.activeUsers.toLocaleString() : '—'}</div>
              <div className="text-sm text-gray-500">+4.2% WoW</div>
            </EnhancedCard>
            <EnhancedCard title="GMV (Monthly)">
              <div className="text-3xl font-bold">{kpis ? `$${(kpis.gmvMonthly/1_000_000).toFixed(1)}M` : '—'}</div>
              <div className="text-sm text-gray-500">+8.9% MoM</div>
            </EnhancedCard>
            <EnhancedCard title="MRR">
              <div className="text-3xl font-bold">{kpis ? `$${kpis.mrr.toLocaleString()}` : '—'}</div>
              <div className="text-sm text-gray-500">+6.3% MoM</div>
            </EnhancedCard>
            <EnhancedCard title="Burn / Runway">
              <div className="text-sm">Burn: <span className="font-semibold">{kpis ? `$${kpis.burn.toLocaleString()}/mo` : '—'}</span></div>
              <div className="text-sm">Runway: <span className="font-semibold">{kpis ? `${kpis.runwayMonths} months` : '—'}</span></div>
            </EnhancedCard>
          </div>
        </section>

        <section id="downloads" className="space-y-3">
          <h2 className="text-xl font-semibold">Downloadables</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <EnhancedCard title="Financials (CSV)">
              <Link href="/api/investors/financials.csv"><a className="text-blue-600">Download CSV</a></Link>
            </EnhancedCard>
            <EnhancedCard title="Financials (PDF)">
              <Link href="/api/investors/financials.pdf"><a className="text-blue-600">Download PDF</a></Link>
            </EnhancedCard>
            <EnhancedCard title="One-Pagers">
              <Link href="/api/investors/one-pager.pdf"><a className="text-blue-600">Download One-Pager</a></Link>
            </EnhancedCard>
            <EnhancedCard title="Data Room">
              <a href="#" className="text-blue-600">Open Data Room</a>
            </EnhancedCard>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}