import { useEffect, useState } from 'react';

export default function AcademyAdmin() {
  const [data, setData] = useState<any>(null);
  const [live, setLive] = useState<any>(null);

  useEffect(() => {
    fetch('/api/academy/analytics').then((r) => r.json()).then(setData).catch(() => setData({}));
    const tick = () => fetch('/api/metrics/live').then((r) => r.json()).then(setLive).catch(() => {});
    tick();
    const id = setInterval(tick, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Academy Analytics</h1>
      {!data && <div>Loading...</div>}
      {data && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-medium mb-2">Lesson Drop-offs</div>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {data.lessonDropoffs?.map((d: any) => (
                <li key={d.lessonId}>{d.lessonId}: {(d.rate * 100).toFixed(1)}%</li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-medium mb-2">Pass Rates</div>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {data.passRates?.map((d: any) => (
                <li key={d.course}>{d.course}: {(d.passRate * 100).toFixed(0)}%</li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-medium mb-2">Most Rewatched</div>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {data.mostRewatched?.map((d: any) => (
                <li key={d.lessonId}>{d.lessonId}: {d.count}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="font-medium">Live DevOps Metrics</div>
          <div className="text-xs text-gray-500">Uptime: {live ? `${Math.floor((live.uptimeSeconds||0)/60)}m` : '—'}</div>
        </div>
        {!live && <div className="text-sm text-gray-500">Loading live metrics…</div>}
        {live && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="rounded border border-gray-200 dark:border-gray-800 p-3">
              <div className="font-medium mb-1">System</div>
              <div>CPU Cores: {live.system?.cpuCores}</div>
              <div>Load(1m): {live.system?.load1?.toFixed?.(2)}</div>
              <div>Mem Used: {live.system?.usedMemPct?.toFixed?.(1)}%</div>
            </div>
            <div className="rounded border border-gray-200 dark:border-gray-800 p-3">
              <div className="font-medium mb-1">API Latency (avg/p95)</div>
              <ul>
                {Object.entries(live.api || {}).map(([k,v]: any) => (
                  <li key={k} className="flex justify-between"><span className="truncate mr-2" title={k}>{k}</span><span>{v.avg.toFixed(0)}ms / {v.p95.toFixed(0)}ms</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded border border-gray-200 dark:border-gray-800 p-3">
              <div className="font-medium mb-1">Page Load (avg/p95)</div>
              <ul>
                {Object.entries(live.pageLoad || {}).map(([k,v]: any) => (
                  <li key={k} className="flex justify-between"><span className="truncate mr-2" title={k}>{k}</span><span>{v.avg.toFixed(0)}ms / {v.p95.toFixed(0)}ms</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded border border-gray-200 dark:border-gray-800 p-3 md:col-span-3">
              <div className="font-medium mb-1">DB Query Speed</div>
              <ul>
                {Object.entries(live.db || {}).map(([k,v]: any) => (
                  <li key={k} className="flex justify-between"><span className="truncate mr-2" title={k}>{k}</span><span>{v.avg.toFixed(0)}ms avg ({v.p95.toFixed(0)}ms p95)</span></li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="mt-3 flex items-center gap-3 text-sm">
          <a className="text-blue-600 underline" href="/api/metrics/prometheus" target="_blank" rel="noreferrer">Prometheus text</a>
          <a className="text-blue-600 underline" href="https://vercel.com/docs/analytics" target="_blank" rel="noreferrer">Vercel Analytics</a>
          <a className="text-blue-600 underline" href="https://docs.datadoghq.com/real_user_monitoring" target="_blank" rel="noreferrer">Datadog RUM</a>
          <a className="text-blue-600 underline" href="https://grafana.com/docs/" target="_blank" rel="noreferrer">Grafana</a>
        </div>
      </div>

      {live?.alerts?.length ? (
        <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
          <div className="font-medium mb-2">Alerts</div>
          <ul className="text-sm">
            {live.alerts.map((a: any, i: number) => (
              <li key={i} className={a.level==='critical' ? 'text-red-600' : 'text-yellow-600'}>
                [{a.level.toUpperCase()}] {a.type}: {a.message}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}