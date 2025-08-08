import React, { useEffect, useMemo, useState } from 'react';
import SimpleFunnel from '../../../components/charts/SimpleFunnel';
import SimpleLineChart from '../../../components/charts/SimpleLineChart';
import { KpiBadge } from '../../../components/ui/InteractiveStats';
import { exportCsv, exportSvgAsPng } from '../../../utils/exporters';
import useRole from '../../../hooks/useRole';

export default function ClientAnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const { role, loading } = useRole();

  useEffect(() => {
    fetch('/api/analytics/client').then(r => r.json()).then(setData).catch(() => setData(null));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (role !== 'client' && role !== 'admin') return <div>Unauthorized</div>;

  const lineSeries = useMemo(() => [{ label: 'Quotes Received', points: Array.from({ length: 12 }, (_, i) => ({ x: i + 1, y: Math.round(Math.random() * 8) })) }], []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Client Analytics</h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <KpiBadge label="Jobs Posted" value={data?.jobsPosted ?? 0} />
        <KpiBadge label="Quotes Received" value={data?.quotesReceived ?? 0} />
        <KpiBadge label="Avg. time to hire" value={`${(data?.timeToHireDays ?? 0).toFixed(1)} days`} tone="info" />
        <KpiBadge label="Talent Viewed" value={data?.talentViewed ?? 0} />
        <KpiBadge label="Shortlisted" value={data?.shortlisted ?? 0} />
      </div>

      <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
        <h2 className="font-semibold mb-2">Conversion Funnel</h2>
        <SimpleFunnel stages={data?.funnel || []} onExportCsv={(rows) => exportCsv('client-funnel.csv', rows)} />
      </div>

      <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
        <h2 className="font-semibold mb-2">Quotes Over Time</h2>
        <SimpleLineChart
          series={lineSeries}
          onExportCsv={(rows) => exportCsv('client-quotes.csv', rows as any)}
          onExportPng={(svg) => exportSvgAsPng('client-quotes.png', svg)}
          yLabel="Quotes"
          xLabel="Month"
        />
      </div>
    </div>
  );
}