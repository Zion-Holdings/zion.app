import fs from 'fs';
import path from 'path';
import type { BoardMetric, BoardName, JobMetrics } from './types/jobs';

const METRICS_FILE = path.join(process.cwd(), 'automation_logs', 'job-metrics.json');

function ensureDir(filePath: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function readMetrics(): Record<string, JobMetrics> {
  try {
    const raw = fs.readFileSync(METRICS_FILE, 'utf8');
    return JSON.parse(raw || '{}');
  } catch {
    return {};
  }
}

function writeMetrics(data: Record<string, JobMetrics>) {
  ensureDir(METRICS_FILE);
  fs.writeFileSync(METRICS_FILE, JSON.stringify(data, null, 2), 'utf8');
}

export function buildUtmUrl(baseUrl: string, params: { source: string; campaign?: string; medium?: string; jobId?: string }) {
  const url = new URL(baseUrl);
  url.searchParams.set('utm_source', params.source);
  if (params.campaign) url.searchParams.set('utm_campaign', params.campaign);
  if (params.medium) url.searchParams.set('utm_medium', params.medium);
  if (params.jobId) url.searchParams.set('job_id', params.jobId);
  return url.toString();
}

export function getJobMetrics(jobId: string): JobMetrics {
  const store = readMetrics();
  if (!store[jobId]) {
    store[jobId] = {
      jobId,
      metrics: [],
      lastUpdated: new Date().toISOString(),
    };
    writeMetrics(store);
  }
  return store[jobId];
}

export function incrementMetric(jobId: string, board: BoardName, field: 'clicks' | 'applications', by: number = 1) {
  const store = readMetrics();
  if (!store[jobId]) {
    store[jobId] = {
      jobId,
      metrics: [],
      lastUpdated: new Date().toISOString(),
    };
  }
  const metrics = store[jobId].metrics;
  let entry: BoardMetric | undefined = metrics.find((m) => m.board === board);
  if (!entry) {
    entry = { board, clicks: 0, applications: 0 };
    metrics.push(entry);
  }
  entry[field] += by;
  store[jobId].lastUpdated = new Date().toISOString();
  writeMetrics(store);
  return store[jobId];
}