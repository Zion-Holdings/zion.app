import React, { useEffect, useState } from 'react';
import SimpleBarChart from '../../../components/charts/SimpleBarChart';
import { KpiBadge } from '../../../components/ui/InteractiveStats';
import { exportCsv } from '../../../utils/exporters';
import useRole from '../../../hooks/useRole';

export default function TalentInsightsPage() {
  const [data, setData] = useState<any>(null);
  const { role, loading } = useRole();

  useEffect(() => {
    fetch('/api/analytics/talent').then(r => r.json()).then(setData).catch(() => setData(null));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (role !== 'talent' && role !== 'admin') return <div>Unauthorized</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Talent Insights</h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <KpiBadge label="Profile Views" value={data?.profileViews ?? 0} />
        <KpiBadge label="Quote Invites" value={data?.quoteInvites ?? 0} />
        <KpiBadge label="Applications Sent" value={data?.jobApplications ?? 0} />
        <KpiBadge label="Success Rate" value={`${(data?.successRate ?? 0).toFixed(1)}%`} tone="success" />
      </div>

      <div className="rounded-2xl border border-black/5 dark:border-white/10 p-4">
        <h2 className="font-semibold mb-2">Top Search Tags Matched</h2>
        <SimpleBarChart data={data?.topTags || []} onExportCsv={(rows) => exportCsv('talent-top-tags.csv', rows)} />
      </div>
    </div>
  );
}