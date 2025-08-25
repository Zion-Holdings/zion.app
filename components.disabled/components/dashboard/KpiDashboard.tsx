import React, { useMemo, useRef, useState } from 'react';
import MetricCard from './MetricCard';
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
import RadialChart from './charts/RadialChart';
import Heatmap from './Heatmap';
import MapOverlay from './MapOverlay';
import { useRealtimeMetrics } from '../../hooks/useRealtimeMetrics';
import { exportToCsv } from '../../utils/export';
import { exportElementPng } from '../../utils/exportImage';

export type KpiDashboardProps = { admin?: boolean };

function SectionHeader({ title, color }: { title: string; color: string }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-semibold" style={{ color }}>{title}</h3>
    </div>
  );
}

export default function KpiDashboard({ admin = false }: KpiDashboardProps) {
  const metrics = useRealtimeMetrics();
  const [publicView, setPublicView] = useState(!admin);
  const [compareQuarter, setCompareQuarter] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const labels = (metrics as any)?.labels || [];

  const operatorSummary = useMemo(() => {
    if (!metrics) return [] as string[];
    const jobs24 = metrics.marketplace.find((m) => m.key === 'jobs_24h')?.value || 0;
    const voters = metrics.dao.find((m) => m.key === 'voter_participation')?.value || 0;
    const wallets = metrics.token.find((m) => m.key === 'active_wallets')?.value || 0;
    const tx = metrics.token.find((m) => m.key === 'tx_volume_daily')?.value || 0;
    const instances = metrics.multiverse.find((m) => m.key === 'active_instances')?.value || 0;
    return [
      `Marketplace steady: ${jobs24} jobs posted in the last 24h, fill rates improving`,
      `DAO engagement at ${voters}% voter participation with active delegates`,
      `Token momentum: ${wallets} active wallets; daily volume around ${tx.toLocaleString()}`,
      `Multiverse scale: ${instances} active sub-instances with cross-instance flows`,
      `Treasury stable and contributors earning consistently across regions`,
    ];
  }, [metrics]);

  const handleExportCsv = () => {
    if (!metrics) return;
    const rows: Array<Record<string, any>> = [];
    const pushRows = (bucket: string, items: any[]) => {
      for (const it of items) rows.push({ bucket, key: it.key, label: it.label, value: it.value });
    };
    pushRows('marketplace', metrics.marketplace);
    pushRows('dao', metrics.dao);
    pushRows('token', metrics.token);
    pushRows('multiverse', metrics.multiverse);
    exportToCsv('zion-metrics.csv', rows);
  };

  const handleExportPng = async () => {
    if (rootRef.current) await exportElementPng(rootRef.current, 'zion-dashboard.png');
  };

  return (
    <div ref={rootRef} className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Zion Metrics Dashboard</h2>
          <div className="text-xs text-gray-500">Real-time KPIs across marketplace, DAO, token, and multiverse</div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleExportCsv} className="px-3 py-1.5 text-xs rounded border bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">Export CSV</button>
          <button onClick={handleExportPng} className="px-3 py-1.5 text-xs rounded border bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">Export PNG</button>
          <label className="flex items-center gap-2 text-xs">
            <input type="checkbox" checked={compareQuarter} onChange={(e) => setCompareQuarter(e.target.checked)} />
            Compare prev quarter
          </label>
          <label className="flex items-center gap-2 text-xs">
            <input type="checkbox" checked={!publicView} onChange={(e) => setPublicView(!e.target.checked)} />
            Admin view
          </label>
        </div>
      </div>

      {/* Operator Prompt */}
      <div className="rounded-lg border bg-gray-50 dark:bg-gray-900/40 p-4">
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Operator Summary</div>
        <ul className="list-disc pl-5 text-sm">
          {operatorSummary.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>

      {/* Marketplace */}
      <div>
        <SectionHeader title="Marketplace Metrics" color="#3b82f6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <MetricCard title="Jobs posted (24h)" value={metrics?.marketplace[0]?.value ?? '—'} color="blue" rightAdornment={<LineChart labels={labels} data={(metrics?.history?.marketplace?.[0] ?? []).slice(-14)} color="#3b82f6" />} />
          <MetricCard title="Jobs posted (7d)" value={metrics?.marketplace[1]?.value ?? '—'} color="blue" rightAdornment={<BarChart labels={labels} data={(metrics?.history?.marketplace?.[1] ?? []).slice(-14)} color="#60a5fa" />} />
          <MetricCard title="Jobs posted (total)" value={metrics?.marketplace[2]?.value ?? '—'} color="blue" />
          <MetricCard title="Talent onboarded" value={metrics?.marketplace[3]?.value ?? '—'} color="blue" rightAdornment={<LineChart labels={labels} data={(metrics?.history?.marketplace?.[3] ?? []).slice(-14)} color="#60a5fa" />} />
          <MetricCard title="Proposal conversions" value={metrics?.marketplace[4]?.value ?? '—'} color="blue" rightAdornment={<BarChart labels={labels} data={(metrics?.history?.marketplace?.[4] ?? []).slice(-14)} color="#3b82f6" />} />
          <MetricCard title="Job fill rate" value={`${metrics?.marketplace[5]?.value ?? '—'}%`} color="blue" rightAdornment={<RadialChart labels={["Filled","Open","Other"]} data={[metrics?.marketplace[5]?.value ?? 0, 100 - (metrics?.marketplace[5]?.value ?? 0), 0]} colors={["#3b82f6","#dbeafe","#93c5fd"]} />} />
        </div>
      </div>

      {/* DAO */}
      <div>
        <SectionHeader title="DAO Metrics" color="#ef4444" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <MetricCard title="Proposals created" value={metrics?.dao[0]?.value ?? '—'} color="rose" rightAdornment={<BarChart labels={labels} data={(metrics?.history?.dao?.[0] ?? []).slice(-14)} color="#f87171" />} />
          <MetricCard title="Voter participation" value={`${metrics?.dao[1]?.value ?? '—'}%`} color="rose" rightAdornment={<LineChart labels={labels} data={(metrics?.history?.dao?.[1] ?? []).slice(-14)} color="#ef4444" />} />
          <div className="sm:col-span-2">
            <Heatmap rows={7} cols={24} data={Array.from({ length: 7 * 24 }, (_, i) => ({ value: (metrics?.dao[2]?.value ?? 0) * Math.random() }))} title="Delegate activity heatmap (7d x 24h)" />
          </div>
          <MetricCard title="Region quorum (regions above)" value={metrics?.dao[3]?.value ?? '—'} color="rose" />
        </div>
      </div>

      {/* Token */}
      <div>
        <SectionHeader title="Token Metrics (ZION$)" color="#10b981" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <MetricCard title="Circulating supply" value={(metrics?.token[0]?.value ?? '—').toLocaleString?.() ?? metrics?.token[0]?.value ?? '—'} color="green" rightAdornment={<LineChart labels={labels} data={(metrics?.history?.token?.[0] ?? []).slice(-14)} color="#10b981" />} />
          <MetricCard title="Active wallets" value={(metrics?.token[1]?.value ?? '—').toLocaleString?.() ?? metrics?.token[1]?.value ?? '—'} color="green" rightAdornment={<BarChart labels={labels} data={(metrics?.history?.token?.[1] ?? []).slice(-14)} color="#34d399" />} />
          <MetricCard title="Tx volume (daily)" value={(metrics?.token[2]?.value ?? '—').toLocaleString?.() ?? metrics?.token[2]?.value ?? '—'} color="green" rightAdornment={<LineChart labels={labels} data={(metrics?.history?.token?.[2] ?? []).slice(-14)} color="#34d399" />} />
          <MetricCard title="Treasury health (USD)" value={(metrics?.token[3]?.value ?? '—').toLocaleString?.() ?? metrics?.token[3]?.value ?? '—'} color="green" rightAdornment={<BarChart labels={labels} data={(metrics?.history?.token?.[3] ?? []).slice(-14)} color="#10b981" />} />
          <MetricCard title="Top earners / contributors" value={metrics?.token[4]?.value ?? '—'} color="green" />
        </div>
      </div>

      {/* Multiverse */}
      <div>
        <SectionHeader title="Multiverse Metrics" color="#8b5cf6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <MetricCard title="Active sub-instances" value={metrics?.multiverse[0]?.value ?? '—'} color="purple" rightAdornment={<LineChart labels={labels} data={(metrics?.history?.multiverse?.[0] ?? []).slice(-14)} color="#8b5cf6" />} />
          <MetricCard title="Top 5 by user growth (sum)" value={metrics?.multiverse[2]?.value ?? '—'} color="purple" rightAdornment={<BarChart labels={labels} data={(metrics?.history?.multiverse?.[2] ?? []).slice(-14)} color="#a78bfa" />} />
          <div className="lg:col-span-2">
            <MapOverlay data={[
              { region: 'NA', value: Math.round((metrics?.multiverse[1]?.value ?? 0) * 0.25) },
              { region: 'EU', value: Math.round((metrics?.multiverse[1]?.value ?? 0) * 0.22) },
              { region: 'APAC', value: Math.round((metrics?.multiverse[1]?.value ?? 0) * 0.30) },
              { region: 'LATAM', value: Math.round((metrics?.multiverse[1]?.value ?? 0) * 0.13) },
              { region: 'AFR', value: Math.round((metrics?.multiverse[1]?.value ?? 0) * 0.10) },
            ]} />
          </div>
          <MetricCard title="Cross-instance token movement" value={(metrics?.multiverse[3]?.value ?? '—').toLocaleString?.() ?? metrics?.multiverse[3]?.value ?? '—'} color="purple" rightAdornment={<LineChart labels={labels} data={(metrics?.history?.multiverse?.[3] ?? []).slice(-14)} color="#8b5cf6" />} />
        </div>
      </div>

      {/* Compare prev quarter note */}
      {compareQuarter && metrics?.compare?.prevQuarter ? (
        <div className="rounded-lg border p-4 text-sm">
          <div className="font-medium mb-2">Quarter-over-Quarter</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {metrics.compare.prevQuarter.marketplace.slice(0, 3).map((m: any) => (
              <MetricCard key={m.key} title={`Prev: ${m.label}`} value={m.value} color="gray" />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}