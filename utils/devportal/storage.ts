import fs from 'fs';
import path from 'path';
import { ApiKeyRecord, ApiLogRecord, WebhookListener, Job, QuoteRequest } from './types';

const DATA_DIR = path.join(process.cwd(), 'data', 'devportal');

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readJsonFile<T>(fileName: string, fallback: T): T {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, fileName);
  try {
    if (!fs.existsSync(filePath)) return fallback;
    const raw = fs.readFileSync(filePath, 'utf8');
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJsonFile<T>(fileName: string, data: T): void {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, fileName);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

export function getApiKeys(): ApiKeyRecord[] {
  return readJsonFile<ApiKeyRecord[]>('keys.json', []);
}

export function saveApiKeys(keys: ApiKeyRecord[]): void {
  writeJsonFile('keys.json', keys);
}

export function getApiLogs(): ApiLogRecord[] {
  return readJsonFile<ApiLogRecord[]>('logs.json', []);
}

export function saveApiLogs(logs: ApiLogRecord[]): void {
  writeJsonFile('logs.json', logs);
}

export function getWebhookListeners(): WebhookListener[] {
  return readJsonFile<WebhookListener[]>('webhooks.json', []);
}

export function saveWebhookListeners(listeners: WebhookListener[]): void {
  writeJsonFile('webhooks.json', listeners);
}

export function getJobs(): Job[] {
  return readJsonFile<Job[]>('jobs.json', []);
}

export function saveJobs(jobs: Job[]): void {
  writeJsonFile('jobs.json', jobs);
}

export function getQuotes(): QuoteRequest[] {
  return readJsonFile<QuoteRequest[]>('quotes.json', []);
}

export function saveQuotes(quotes: QuoteRequest[]): void {
  writeJsonFile('quotes.json', quotes);
}