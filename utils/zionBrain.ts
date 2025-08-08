export type ZionChain = 'resumeBuilder' | 'daoExplainer' | 'tokenomicsSimulator' | 'governanceSummarizer' | 'nationAssistant';

export interface RouterResult {
  intent: ZionChain;
  confidence: number;
  notes?: string;
}

export interface ReflexMetrics {
  signupsLastHour?: number;
  disputeFlagsLastHour?: number;
  zionVelocity?: number; // tokens/min
  baselineSignups?: number;
  baselineDisputeFlags?: number;
  baselineVelocity?: number;
}

export interface ReflexTrigger {
  action: 'launchRewardPopup' | 'escalateSupport' | 'notifyAdmin';
  reason: string;
  severity: 'low' | 'medium' | 'high';
}

export interface LogEntry {
  id: string;
  timestamp: string;
  module: 'router' | 'reflex' | 'optimizer' | 'admin';
  type: ZionChain | 'metrics' | 'optimize' | 'deploy' | 'suspend' | 'audit' | 'stuck';
  status: 'ok' | 'laggy' | 'error' | 'stuck';
  latencyMs?: number;
  payload?: Record<string, unknown>;
}

import fs from 'fs';
import path from 'path';
import { randomUUID } from 'uuid';

const dataDir = path.resolve(process.cwd(), 'data', 'zion-brain');
const logsPath = path.join(dataDir, 'logs.json');
const statePath = path.join(dataDir, 'state.json');

function ensureDataFiles(): void {
  try {
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    if (!fs.existsSync(logsPath)) fs.writeFileSync(logsPath, JSON.stringify({ entries: [] }, null, 2));
    if (!fs.existsSync(statePath)) fs.writeFileSync(statePath, JSON.stringify({ metrics: {} }, null, 2));
  } catch {
    // In serverless environments, filesystem may be read-only; ignore errors gracefully
  }
}

export function detectIntent(text: string): RouterResult {
  const lower = (text || '').toLowerCase();
  const rules: Array<{ chain: ZionChain; keywords: string[] }> = [
    { chain: 'resumeBuilder', keywords: ['resume', 'cv', 'curriculum', 'job'] },
    { chain: 'daoExplainer', keywords: ['dao', 'governance token', 'proposal', 'treasury'] },
    { chain: 'tokenomicsSimulator', keywords: ['tokenomics', 'supply', 'emission', 'vesting', 'circulating'] },
    { chain: 'governanceSummarizer', keywords: ['governance', 'vote', 'snapshot', 'summary', 'forum'] },
    { chain: 'nationAssistant', keywords: ['nation', 'citizen', 'constitution', 'charter', 'policy'] },
  ];

  for (const rule of rules) {
    if (rule.keywords.some((k) => lower.includes(k))) {
      return { intent: rule.chain, confidence: 0.9, notes: 'Keyword match' };
    }
  }
  // Fallback simple heuristic
  return { intent: 'nationAssistant', confidence: 0.5, notes: 'Default fallback' };
}

export async function routeToChain(intent: ZionChain, payload: Record<string, unknown>): Promise<{ routed: boolean; message: string }> {
  // Placeholder for real chain invocations
  return { routed: true, message: `Routed to ${intent}` };
}

export function evaluateReflexes(metrics: ReflexMetrics): ReflexTrigger[] {
  const baselineSignups = metrics.baselineSignups ?? 20;
  const baselineDisputes = metrics.baselineDisputeFlags ?? 2;
  const baselineVelocity = metrics.baselineVelocity ?? 100; // tokens/min

  const triggers: ReflexTrigger[] = [];

  if ((metrics.signupsLastHour ?? 0) > baselineSignups * 1.8) {
    triggers.push({ action: 'launchRewardPopup', reason: 'Surge in signups detected', severity: 'medium' });
  }
  if ((metrics.disputeFlagsLastHour ?? 0) > baselineDisputes * 2) {
    triggers.push({ action: 'escalateSupport', reason: 'Spike in dispute flags', severity: 'high' });
  }
  if ((metrics.zionVelocity ?? baselineVelocity) < baselineVelocity * 0.6) {
    triggers.push({ action: 'notifyAdmin', reason: 'Drop in ZION$ velocity', severity: 'high' });
  }

  return triggers;
}

export async function optimizePrompt(original: string, userIntent?: string): Promise<{ optimized: string; suggestions: string[] }> {
  const apiKey = process.env.OPENAI_API_KEY;
  const targetInstruction = 'Review this prompt and rewrite it to be 30% faster and more specific to user intent.';

  // Heuristic fast path if no API key
  if (!apiKey) {
    const tightened = heuristicTighten(original, userIntent);
    return {
      optimized: tightened,
      suggestions: [
        'Removed vague qualifiers and redundant phrases',
        'Added explicit constraints and output format',
        userIntent ? `Anchored to intent: ${userIntent}` : 'Added a brief intent anchor',
      ],
    };
  }

  try {
    const { OpenAI } = await import('openai');
    const openai = new OpenAI({ apiKey });
    const system = 'You optimize prompts for speed and specificity. Prefer precise constraints, avoid open-ended wording. Reduce token count while improving clarity. Return only the rewritten prompt.';
    const user = `${targetInstruction}\n\nUser intent: ${userIntent || 'unknown'}\n\nPrompt to optimize:\n${original}`;

    const resp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      temperature: 0.2,
      max_tokens: 400,
    });
    const optimized = resp.choices?.[0]?.message?.content?.trim() || heuristicTighten(original, userIntent);
    return { optimized, suggestions: ['Used OpenAI optimization for speed and specificity'] };
  } catch {
    const tightened = heuristicTighten(original, userIntent);
    return { optimized: tightened, suggestions: ['OpenAI not available at runtime; applied heuristic tightening'] };
  }
}

function heuristicTighten(text: string, userIntent?: string): string {
  const trimmed = (text || '').replace(/\s+/g, ' ').trim();
  const withoutFillers = trimmed
    .replace(/please\s+/gi, '')
    .replace(/could you\s+/gi, '')
    .replace(/basically\s+/gi, '')
    .replace(/kind of\s+/gi, '')
    .replace(/sort of\s+/gi, '')
    .replace(/very\s+/gi, '')
    .replace(/really\s+/gi, '');
  const withConstraints = `${withoutFillers}\n\nConstraints: respond in under 6 bullets; include only actionable steps; max 120 words; avoid repetition.${userIntent ? ` Intent: ${userIntent}.` : ''}`;
  return withConstraints;
}

export function readLogs(): { entries: LogEntry[] } {
  ensureDataFiles();
  try {
    const raw = fs.readFileSync(logsPath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return { entries: [] };
  }
}

export function appendLog(entry: Omit<LogEntry, 'id' | 'timestamp'>): void {
  ensureDataFiles();
  try {
    const current = readLogs();
    const enriched: LogEntry = {
      id: randomUUID(),
      timestamp: new Date().toISOString(),
      ...entry,
    };
    current.entries.push(enriched);
    fs.writeFileSync(logsPath, JSON.stringify(current, null, 2));
  } catch {
    // ignore
  }
}

export function readState<T = unknown>(): T {
  ensureDataFiles();
  try {
    const raw = fs.readFileSync(statePath, 'utf8');
    return JSON.parse(raw) as T;
  } catch {
    return {} as unknown as T;
  }
}

export function writeState<T = unknown>(state: T): void {
  ensureDataFiles();
  try {
    fs.writeFileSync(statePath, JSON.stringify(state, null, 2));
  } catch {
    // ignore
  }
}