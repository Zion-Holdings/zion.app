import React, { useEffect, useMemo, useState } from 'react';
import SimpleLineChart from '../../components/charts/SimpleLineChart';
import SimpleBarChart from '../../components/charts/SimpleBarChart';
import SimpleDoughnutChart from '../../components/charts/SimpleDoughnutChart';
import { KpiBadge } from '../../components/ui/InteractiveStats';
import { exportCsv, exportSvgAsPng } from '../../utils/exporters';
import useRole from '../../hooks/useRole';

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const { role, loading } = useRole();

  useEffect(() => {
    fetch('/api/analytics/admin').then(r => r.json()).then(setData).catch(() => setData(null));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (role !== 'admin') return <div>Unauthorized</div>;

  const totals = data?.totals || {};
  const geo = data?.geo || [];
  const topCategories = data?.topCategories || [];

  const lineSeries = useMemo(() => [{ label: 'Jobs Filled', points: Array.from({ length: 12 }, (_, i) => ({ x: i + 1, y: Math.round(Math.random() * 10) })) }], []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin Analytics</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiBadge label="Total Users" value={totals.totalUsers ?? 0} />
        <KpiBadge label="Talents" value={totals.totalTalents ?? 0} tone="info" />
        <KpiBadge label="Clients" value={totals.totalClients ?? 0} tone="info" />
        <KpiBadge label="Active Projects" value={totals.activeProjects ?? 0} tone="success" />
        <KpiBadge label="Jobs Posted" value={totals.jobsPosted ?? 0} />
        <KpiBadge label="Jobs Filled" value={totals.jobsFilled ?? 0} tone="success" />
        <KpiBadge label="Quotes Sent" value={totals.quotesSent ?? 0} />
        <KpiBadge label="Quotes Accepted" value={totals.quotesAccepted ?? 0} tone="success" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
          <h2 className="font-semibold mb-2">Jobs Filled Over Time</h2>
          <SimpleLineChart
            series={lineSeries}
            onExportCsv={(rows) => exportCsv('admin-jobs-filled.csv', rows as any)}
            onExportPng={(svg) => exportSvgAsPng('admin-jobs-filled.png', svg)}
            yLabel="Filled"
            xLabel="Month"
          />
        </div>
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
          <h2 className="font-semibold mb-2">Top Performing Categories</h2>
          <SimpleBarChart data={topCategories} onExportCsv={(rows) => exportCsv('admin-top-categories.csv', rows)} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
          <h2 className="font-semibold mb-2">Referral Conversions</h2>
          <SimpleDoughnutChart
            data={[{ label: 'Converted', value: data?.referralConversions || 0 }, { label: 'Others', value: Math.max((totals.totalUsers || 0) - (data?.referralConversions || 0), 0) }]}
            onExportCsv={(rows) => exportCsv('admin-referrals.csv', rows)}
            onExportPng={(svg) => exportSvgAsPng('admin-referrals.png', svg)}
          />
        </div>
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
          <h2 className="font-semibold mb-2">Geo Heat Grid (Users)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {geo.map((g: any) => (
              <div key={g.label} className="rounded p-2 bg-gray-100 dark:bg-gray-800 flex justify-between text-xs">
                <span>{g.label}</span>
                <span>{g.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}