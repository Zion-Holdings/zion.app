import React, { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/utils/supabase/client';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Types that loosely match an analytics_events table shape
type AnalyticsEvent = {
  created_at: string;
  user_id?: string | null;
  kind?: string | null; // e.g., 'page_view', 'click', 'conversion', 'listing_created'
  action?: string | null; // alternative to kind for 'view' vs 'click'
  referrer?: string | null;
  source?: string | null; // 'organic' | 'referral' | 'paid' | 'direct' | 'social' | etc
  page_type?: string | null; // e.g., 'ai_generated', 'listing'
  is_conversion?: boolean | null;
};

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function addDays(d: Date, days: number): Date {
  const copy = new Date(d);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function generateSampleData(days = 30): AnalyticsEvent[] {
  const now = new Date();
  const start = addDays(now, -days + 1);
  const sources = ['organic', 'referral', 'paid', 'direct'];
  const referrers = ['google.com', 'bing.com', 'newsletter.zion.app', 'partner.example.com'];
  const data: AnalyticsEvent[] = [];
  for (let i = 0; i < days; i++) {
    const day = addDays(start, i);
    const dayStr = day.toISOString();
    const usersToday = 30 + Math.round(Math.random() * 70);
    for (let u = 0; u < usersToday; u++) {
      const userId = `u_${i}_${u}`;
      // Page view (impression)
      data.push({
        created_at: dayStr,
        user_id: userId,
        kind: 'page_view',
        action: 'view',
        referrer: referrers[Math.floor(Math.random() * referrers.length)],
        source: sources[Math.floor(Math.random() * sources.length)],
        page_type: Math.random() < 0.4 ? 'ai_generated' : 'standard',
        is_conversion: false,
      });
      // Clicks on AI pages
      if (Math.random() < 0.25) {
        data.push({
          created_at: dayStr,
          user_id: userId,
          kind: 'click',
          action: 'click',
          referrer: 'google.com',
          source: 'organic',
          page_type: 'ai_generated',
          is_conversion: false,
        });
      }
      // Listings created
      if (Math.random() < 0.1) {
        data.push({
          created_at: dayStr,
          user_id: userId,
          kind: 'listing_created',
          action: 'create',
          source: sources[Math.floor(Math.random() * sources.length)],
          is_conversion: false,
        });
      }
      // Conversions
      if (Math.random() < 0.08) {
        data.push({
          created_at: dayStr,
          user_id: userId,
          kind: 'conversion',
          action: 'convert',
          source: sources[Math.floor(Math.random() * sources.length)],
          is_conversion: true,
        });
      }
    }
  }
  return data;
}

function domainFromReferrer(ref: string | null | undefined): string | null {
  if (!ref) return null;
  try {
    const url = ref.includes('://') ? new URL(ref) : new URL(`https://${ref}`);
    return url.hostname.replace(/^www\./, '');
  } catch {
    // Fallback to naive parse
    return ref.split('/')[0].replace(/^www\./, '');
  }
}

export default function AdminGrowthPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        // Try to fetch last 30 days of analytics events from Supabase if configured
        const since = new Date();
        since.setDate(since.getDate() - 29);
        const { data, error } = await supabase
          .from('analytics_events')
          .select('*')
          .gte('created_at', since.toISOString())
          .limit(10000);

        if (error || !Array.isArray(data)) {
          // Fallback to sample data
          setEvents(generateSampleData(30));
        } else {
          setEvents(data as unknown as AnalyticsEvent[]);
        }
      } catch (e) {
        setEvents(generateSampleData(30));
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const { dailySeries, topReferrers, aiCtr, trafficBreakdown } = useMemo(() => {
    // Aggregate metrics
    const byDateUsers = new Map<string, Set<string>>();
    const byDateListings = new Map<string, number>();
    const byDateConversions = new Map<string, number>();

    const referrerCounts = new Map<string, number>();

    let aiImpressions = 0;
    let aiClicks = 0;

    const trafficCounts: Record<string, number> = { organic: 0, referral: 0, paid: 0, direct: 0, social: 0, other: 0 };

    for (const ev of events) {
      const day = formatDate(new Date(ev.created_at));
      const userId = ev.user_id || `anon_${day}`;

      // Users per day (unique)
      if (!byDateUsers.has(day)) byDateUsers.set(day, new Set());
      byDateUsers.get(day)!.add(userId);

      // Listings per day
      const isListing = ev.kind === 'listing_created' || ev.action === 'create' || ev.page_type === 'listing';
      if (isListing) byDateListings.set(day, (byDateListings.get(day) || 0) + 1);

      // Conversions per day
      const isConv = !!ev.is_conversion || ev.kind === 'conversion' || ev.action === 'convert';
      if (isConv) byDateConversions.set(day, (byDateConversions.get(day) || 0) + 1);

      // Top SEO referrers
      const refDomain = domainFromReferrer(ev.referrer);
      if (refDomain && /(google|bing|yahoo|duckduckgo|baidu|yandex)/i.test(refDomain)) {
        referrerCounts.set(refDomain, (referrerCounts.get(refDomain) || 0) + 1);
      }

      // AI-generated CTR
      const isAi = ev.page_type === 'ai_generated';
      if (isAi && (ev.kind === 'page_view' || ev.action === 'view')) aiImpressions += 1;
      if (isAi && (ev.kind === 'click' || ev.action === 'click')) aiClicks += 1;

      // Traffic source breakdown
      const src = (ev.source || '').toLowerCase();
      if (src === 'organic' || src === 'referral' || src === 'paid' || src === 'direct' || src === 'social') {
        trafficCounts[src] += 1;
      } else if (refDomain) {
        // Heuristic: search engine domains -> organic; else referral
        if (/(google|bing|yahoo|duckduckgo|baidu|yandex)/i.test(refDomain)) trafficCounts['organic'] += 1;
        else trafficCounts['referral'] += 1;
      } else {
        trafficCounts['other'] += 1;
      }
    }

    // Build daily series for the last 30 days to keep chart aligned even with sparse data
    const days = 30;
    const end = new Date();
    const start = addDays(end, -days + 1);
    const series: Array<{ date: string; users: number; listings: number; conversions: number }> = [];
    for (let i = 0; i < days; i++) {
      const d = addDays(start, i);
      const key = formatDate(d);
      series.push({
        date: key,
        users: (byDateUsers.get(key)?.size || 0),
        listings: byDateListings.get(key) || 0,
        conversions: byDateConversions.get(key) || 0,
      });
    }

    const sortedReferrers = Array.from(referrerCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10);

    const ctr = {
      impressions: aiImpressions,
      clicks: aiClicks,
      ctrPercent: aiImpressions > 0 ? Math.round((aiClicks / aiImpressions) * 1000) / 10 : 0,
    };

    const breakdown = [
      { name: 'Organic', value: trafficCounts.organic },
      { name: 'Referral', value: trafficCounts.referral },
      { name: 'Paid', value: trafficCounts.paid },
      { name: 'Direct', value: trafficCounts.direct },
      { name: 'Social', value: trafficCounts.social },
      { name: 'Other', value: trafficCounts.other },
    ];

    return {
      dailySeries: series,
      topReferrers: sortedReferrers,
      aiCtr: ctr,
      trafficBreakdown: breakdown,
    };
  }, [events]);

  const pieColors = ['#22c55e', '#06b6d4', '#f59e0b', '#64748b', '#ec4899', '#94a3b8'];

  return (
    <div className="mx-auto max-w-6xl p-6 space-y-8">
      <h1 className="text-2xl font-bold">Growth Analytics</h1>
      <p className="text-xs text-gray-500">Data source: Supabase if configured, else sample. Highlights organic vs referral vs paid traffic. CTR measured on AI-generated pages.</p>

      {error && <div className="text-sm text-red-600">{error}</div>}

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded border p-4 bg-white">
          <h2 className="font-semibold mb-2">Daily Users, Listings, Conversions</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailySeries} margin={{ top: 10, right: 20, bottom: 0, left: -10 }}>
                <XAxis dataKey="date" tick={{ fontSize: 10 }} minTickGap={16} />
                <YAxis tick={{ fontSize: 10 }} />
                <ReTooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#2563eb" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="listings" stroke="#16a34a" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="conversions" stroke="#f59e0b" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded border p-4 bg-white">
          <h2 className="font-semibold mb-2">Traffic Breakdown</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={trafficBreakdown} dataKey="value" nameKey="name" outerRadius={100} label>
                  {trafficBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <ReTooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded border p-4 bg-white">
          <h2 className="font-semibold mb-2">Top SEO Referrers</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-1 pr-4">Referrer</th>
                  <th className="py-1">Visits</th>
                </tr>
              </thead>
              <tbody>
                {topReferrers.map(([ref, count]) => (
                  <tr key={ref} className="border-t">
                    <td className="py-1 pr-4">{ref}</td>
                    <td className="py-1">{count}</td>
                  </tr>
                ))}
                {topReferrers.length === 0 && (
                  <tr>
                    <td className="py-2 text-gray-500" colSpan={2}>No SEO referrers found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded border p-4 bg-white">
          <h2 className="font-semibold mb-2">CTR on AI-Generated Pages</h2>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded bg-gray-50 p-3">
              <div className="text-xs text-gray-500">Impressions</div>
              <div className="text-xl font-semibold">{aiCtr.impressions}</div>
            </div>
            <div className="rounded bg-gray-50 p-3">
              <div className="text-xs text-gray-500">Clicks</div>
              <div className="text-xl font-semibold">{aiCtr.clicks}</div>
            </div>
            <div className="rounded bg-gray-50 p-3">
              <div className="text-xs text-gray-500">CTR</div>
              <div className="text-xl font-semibold">{aiCtr.ctrPercent}%</div>
            </div>
          </div>
          <div className="h-40 mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[{ name: 'AI Pages', CTR: aiCtr.ctrPercent }]}>
                <XAxis dataKey="name" />
                <YAxis />
                <ReTooltip />
                <Bar dataKey="CTR" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <div className="text-xs text-gray-500">Note: Metrics are aggregated daily. Sources highlighted as Organic vs Referral vs Paid (with Direct, Social, Other for completeness).</div>
    </div>
  );
}