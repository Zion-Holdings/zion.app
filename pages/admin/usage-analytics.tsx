import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { GetServerSideProps } from 'next';
import { requireAdminRole } from '../../utils/auth';
import DatePicker from 'react-datepicker';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await requireAdminRole(ctx);
  // @ts-ignore
  if ('redirect' in result) return result;
  return result;
};

type Datum = { label: string; value: number };

function PieChart({ data, size = 160 }: { data: Datum[]; size?: number }) {
  const total = Math.max(1, data.reduce((s, d) => s + d.value, 0));
  let acc = 0;
  const radius = size / 2;
  const center = radius;
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4'];

  const slices = data.map((d, i) => {
    const start = (acc / total) * 2 * Math.PI;
    acc += d.value;
    const end = (acc / total) * 2 * Math.PI;
    const x1 = center + radius * Math.cos(start);
    const y1 = center + radius * Math.sin(start);
    const x2 = center + radius * Math.cos(end);
    const y2 = center + radius * Math.sin(end);
    const largeArc = end - start > Math.PI ? 1 : 0;
    const path = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    return <path key={d.label} d={path} fill={colors[i % colors.length]} />;
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>{slices}</svg>
  );
}

function LineChart({ data, width = 360, height = 140 }: { data: { date: string; value: number }[]; width?: number; height?: number }) {
  const max = Math.max(1, ...data.map((d) => d.value));
  const points = data.map((d, i) => {
    const x = (i / Math.max(1, data.length - 1)) * width;
    const y = height - (d.value / max) * height;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg width={width} height={height} className="border rounded bg-white/40 dark:bg-gray-900/40">
      <polyline fill="none" stroke="#3b82f6" strokeWidth="2" points={points} />
    </svg>
  );
}

function Funnel({ data }: { data: Datum[] }) {
  return (
    <div className="flex flex-col gap-2">
      {data.map((d, i) => (
        <div key={d.label} className="bg-purple-500 text-white text-sm px-3 py-2 rounded" style={{ width: `${100 - i * 12}%` }}>
          {d.label}: {d.value}
        </div>
      ))}
    </div>
  );
}

export default function UsageAnalytics() {
  const [start, setStart] = useState<Date>(new Date(Date.now() - 29 * 24 * 3600 * 1000));
  const [end, setEnd] = useState<Date>(new Date());
  const [userType, setUserType] = useState<string>('all');
  const [loading, setLoading] = useState(false);
  const [pagesMostUsed, setPagesMostUsed] = useState<Datum[]>([]);
  const [events, setEvents] = useState<Datum[]>([]);
  const [line, setLine] = useState<{ date: string; value: number }[]>([]);
  const [funnel, setFunnel] = useState<Datum[]>([]);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ start: start.toISOString(), end: end.toISOString(), userType });
      const res = await fetch(`/api/admin/analytics/summary?${params.toString()}`);
      const json = await res.json();
      setPagesMostUsed(json.pagesMostUsed || []);
      setEvents(json.events || []);
      setLine(json.line || []);
      setFunnel(json.funnel || []);
    } finally {
      setLoading(false);
    }
  }, [start, end, userType]);

  useEffect(() => { refresh(); }, []);

  return (
    <EnhancedLayout>
      <Head>
        <title>Usage Analytics - Admin</title>
      </Head>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Usage Analytics</h1>
          <button onClick={refresh} disabled={loading} className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50">Refresh</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border rounded p-4 bg-white/70 dark:bg-gray-900">
          <div>
            <div className="text-sm">Start</div>
            <DatePicker selected={start} onChange={(d) => d && setStart(d)} className="w-full border rounded px-2 py-1 bg-transparent" />
          </div>
          <div>
            <div className="text-sm">End</div>
            <DatePicker selected={end} onChange={(d) => d && setEnd(d)} className="w-full border rounded px-2 py-1 bg-transparent" />
          </div>
          <div>
            <div className="text-sm">User type</div>
            <select value={userType} onChange={(e) => setUserType(e.target.value)} className="w-full border rounded px-2 py-1 bg-transparent">
              <option value="all">All</option>
              <option value="freelancer">Freelancer</option>
              <option value="b2b">B2B</option>
              <option value="hiring_manager">Hiring Manager</option>
              <option value="guest">Guest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border rounded p-4 bg-white/70 dark:bg-gray-900">
            <div className="font-medium mb-2">Most Used Features</div>
            <div className="flex items-center gap-4">
              <PieChart data={pagesMostUsed.slice(0, 6)} />
              <ul className="text-sm">
                {pagesMostUsed.slice(0, 6).map((d) => (
                  <li key={d.label} className="flex justify-between gap-4 min-w-[180px]"><span>{d.label}</span><span className="text-gray-500">{d.value}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border rounded p-4 bg-white/70 dark:bg-gray-900 lg:col-span-2">
            <div className="font-medium mb-2">Events Over Time</div>
            <LineChart data={line} />
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {events.slice(0, 8).map((e) => (
                <div key={e.label} className="flex justify-between border rounded px-2 py-1">
                  <span>{e.label}</span>
                  <span className="text-gray-500">{e.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border rounded p-4 bg-white/70 dark:bg-gray-900">
          <div className="font-medium mb-2">Funnel</div>
          <Funnel data={funnel} />
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400">
          Optional providers supported (setup via env): Plausible, PostHog. Currently using local event log for aggregation.
        </div>
      </div>
    </EnhancedLayout>
  );
}