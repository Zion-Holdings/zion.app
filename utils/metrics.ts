import os from 'os';

export type ApiSample = { path: string; ms: number; ts: number };
export type PageLoadSample = { route: string; ms: number; ts: number };
export type DbSample = { name: string; ms: number; ts: number };
export type Alert = { type: 'cpu' | 'memory' | 'network'; level: 'warning' | 'critical'; message: string; value?: number; ts: number };

const MAX_SAMPLES = 500;

const apiSamples: ApiSample[] = [];
const pageLoadSamples: PageLoadSample[] = [];
const dbSamples: DbSample[] = [];
const alerts: Alert[] = [];

function pushBounded<T>(arr: T[], item: T) {
  arr.push(item);
  if (arr.length > MAX_SAMPLES) arr.shift();
}

export function recordApiResponse(path: string, ms: number) {
  pushBounded(apiSamples, { path, ms, ts: Date.now() });
}

export function recordPageLoad(route: string, ms: number) {
  pushBounded(pageLoadSamples, { route, ms, ts: Date.now() });
}

export function recordDbQuery(name: string, ms: number) {
  pushBounded(dbSamples, { name, ms, ts: Date.now() });
}

export function addAlert(alert: Alert) {
  pushBounded(alerts, alert);
}

function percentile(values: number[], p: number) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const idx = Math.ceil((p / 100) * sorted.length) - 1;
  return sorted[Math.max(0, Math.min(sorted.length - 1, idx))];
}

function summarize(values: number[]) {
  const count = values.length;
  const avg = count ? values.reduce((a, b) => a + b, 0) / count : 0;
  const p95 = percentile(values, 95);
  const p99 = percentile(values, 99);
  return { count, avg, p95, p99 };
}

export function getMetricsSummary() {
  const apiByPath: Record<string, number[]> = {};
  for (const s of apiSamples) {
    apiByPath[s.path] = apiByPath[s.path] || [];
    apiByPath[s.path].push(s.ms);
  }
  const apiSummary: Record<string, ReturnType<typeof summarize>> = {};
  Object.keys(apiByPath).forEach((k) => (apiSummary[k] = summarize(apiByPath[k])));

  const pageByRoute: Record<string, number[]> = {};
  for (const s of pageLoadSamples) {
    pageByRoute[s.route] = pageByRoute[s.route] || [];
    pageByRoute[s.route].push(s.ms);
  }
  const pageSummary: Record<string, ReturnType<typeof summarize>> = {};
  Object.keys(pageByRoute).forEach((k) => (pageSummary[k] = summarize(pageByRoute[k])));

  const dbByName: Record<string, number[]> = {};
  for (const s of dbSamples) {
    dbByName[s.name] = dbByName[s.name] || [];
    dbByName[s.name].push(s.ms);
  }
  const dbSummary: Record<string, ReturnType<typeof summarize>> = {};
  Object.keys(dbByName).forEach((k) => (dbSummary[k] = summarize(dbByName[k])));

  const uptimeSeconds = process.uptime();
  const memoryUsage = process.memoryUsage();
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMemPct = (1 - freeMem / totalMem) * 100;
  const loadAvg = os.loadavg();
  const cpuCores = os.cpus()?.length || 1;

  return {
    ts: Date.now(),
    uptimeSeconds,
    system: {
      usedMemPct,
      load1: loadAvg[0],
      load5: loadAvg[1],
      load15: loadAvg[2],
      cpuCores,
      rssBytes: memoryUsage.rss
    },
    api: apiSummary,
    pageLoad: pageSummary,
    db: dbSummary,
    alerts: [...alerts].slice(-50)
  };
}

export function getPrometheus(): string {
  const summary = getMetricsSummary();
  const lines: string[] = [];

  lines.push('# HELP zion_uptime_seconds Process uptime in seconds');
  lines.push('# TYPE zion_uptime_seconds gauge');
  lines.push(`zion_uptime_seconds ${summary.uptimeSeconds.toFixed(0)}`);

  lines.push('# HELP zion_system_used_memory_percent Used memory percent');
  lines.push('# TYPE zion_system_used_memory_percent gauge');
  lines.push(`zion_system_used_memory_percent ${summary.system.usedMemPct.toFixed(2)}`);

  lines.push('# HELP zion_system_load_avg Load average');
  lines.push('# TYPE zion_system_load_avg gauge');
  lines.push(`zion_system_load_avg{period="1"} ${summary.system.load1.toFixed(2)}`);
  lines.push(`zion_system_load_avg{period="5"} ${summary.system.load5.toFixed(2)}`);
  lines.push(`zion_system_load_avg{period="15"} ${summary.system.load15.toFixed(2)}`);

  Object.entries(summary.api).forEach(([path, s]) => {
    lines.push('# HELP zion_api_response_ms API response time ms');
    lines.push('# TYPE zion_api_response_ms summary');
    lines.push(`zion_api_response_ms_count{path="${path}"} ${s.count}`);
    lines.push(`zion_api_response_ms_avg{path="${path}"} ${s.avg.toFixed(2)}`);
    lines.push(`zion_api_response_ms_p95{path="${path}"} ${s.p95.toFixed(2)}`);
    lines.push(`zion_api_response_ms_p99{path="${path}"} ${s.p99.toFixed(2)}`);
  });

  Object.entries(summary.pageLoad).forEach(([route, s]) => {
    lines.push('# HELP zion_page_load_ms Page load time ms');
    lines.push('# TYPE zion_page_load_ms summary');
    lines.push(`zion_page_load_ms_count{route="${route}"} ${s.count}`);
    lines.push(`zion_page_load_ms_avg{route="${route}"} ${s.avg.toFixed(2)}`);
    lines.push(`zion_page_load_ms_p95{route="${route}"} ${s.p95.toFixed(2)}`);
    lines.push(`zion_page_load_ms_p99{route="${route}"} ${s.p99.toFixed(2)}`);
  });

  Object.entries(summary.db).forEach(([name, s]) => {
    lines.push('# HELP zion_db_query_ms DB query time ms');
    lines.push('# TYPE zion_db_query_ms summary');
    lines.push(`zion_db_query_ms_count{name="${name}"} ${s.count}`);
    lines.push(`zion_db_query_ms_avg{name="${name}"} ${s.avg.toFixed(2)}`);
    lines.push(`zion_db_query_ms_p95{name="${name}"} ${s.p95.toFixed(2)}`);
    lines.push(`zion_db_query_ms_p99{name="${name}"} ${s.p99.toFixed(2)}`);
  });

  return lines.join('\n') + '\n';
}

export function getAlerts() {
  return [...alerts];
}