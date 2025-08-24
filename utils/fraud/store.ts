import fs from 'fs-extra';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import {
  AdminActionRecord,
  FraudEvent,
  ListFilters,
  MonthlyReport,
  MonitoredSource,
  PrivacySettings,
  StoredFraudRecord,
} from './types';

const dataDir = path.resolve(process.cwd(), 'data/fraud');
const eventsPath = path.join(dataDir, 'events.jsonl');
const actionsPath = path.join(dataDir, 'actions.jsonl');
const privacyPath = path.join(dataDir, 'privacy.json');

function ensureFiles() {
  fs.ensureDirSync(dataDir);
  if (!fs.existsSync(eventsPath)) fs.writeFileSync(eventsPath, '');
  if (!fs.existsSync(actionsPath)) fs.writeFileSync(actionsPath, '');
  if (!fs.existsSync(privacyPath)) fs.writeFileSync(privacyPath, JSON.stringify({}));
}

function isSupabaseConfigured() {
  return !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE);
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE!;
  return createClient(url, key, { auth: { persistSession: false } });
}

export class FraudStore {
  async saveEvent(record: Omit<StoredFraudRecord, 'id'> & { id?: string }): Promise<StoredFraudRecord> {
    const withId: StoredFraudRecord = { ...record, id: record.id ?? uuidv4() } as StoredFraudRecord;

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      await supabase.from('fraud_events').insert([withId as any]);
      return withId;
    }

    ensureFiles();
    const line = JSON.stringify(withId) + '\n';
    await fs.appendFile(eventsPath, line, 'utf8');
    return withId;
  }

  async updateEventStatus(fraudId: string, status: StoredFraudRecord['status']): Promise<void> {
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      await supabase.from('fraud_events').update({ status }).eq('id', fraudId);
      return;
    }

    ensureFiles();
    const events = await this._readAllEvents();
    const idx = events.findIndex((e) => e.id === fraudId);
    if (idx >= 0) {
      events[idx].status = status;
      await this._writeAllEvents(events);
    }
  }

  async recordAction(action: Omit<AdminActionRecord, 'id' | 'createdAt'> & { id?: string; createdAt?: string }): Promise<AdminActionRecord> {
    const withId: AdminActionRecord = {
      id: action.id ?? uuidv4(),
      fraudId: action.fraudId,
      action: action.action,
      adminId: action.adminId ?? null,
      reason: action.reason ?? null,
      createdAt: action.createdAt ?? new Date().toISOString(),
    };

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      await supabase.from('fraud_actions').insert([withId as any]);
      return withId;
    }

    ensureFiles();
    const line = JSON.stringify(withId) + '\n';
    await fs.appendFile(actionsPath, line, 'utf8');
    return withId;
  }

  async listFlagged(limit = 50, offset = 0, filters: ListFilters = {}): Promise<StoredFraudRecord[]> {
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      let query = supabase.from('fraud_events').select('*').order('createdAt', { ascending: false }).range(offset, offset + limit - 1);
      if (filters.source) query = query.eq('source', filters.source);
      if (filters.userId) query = query.eq('userId', filters.userId);
      if (filters.status) query = query.eq('status', filters.status);
      if (filters.label) query = query.contains('gpt', { label: filters.label } as any);
      const { data } = await query;
      return (data as any) as StoredFraudRecord[];
    }

    ensureFiles();
    const events = await this._readAllEvents();
    const filtered = events.filter((e) => {
      if (filters.source && e.source !== filters.source) return false;
      if (filters.userId && e.userId !== filters.userId) return false;
      if (filters.status && e.status !== filters.status) return false;
      if (filters.label && e.gpt?.label !== filters.label) return false;
      return true;
    });
    return filtered.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)).slice(offset, offset + limit);
  }

  async countEventsByIp(ip: string, source: MonitoredSource, withinMinutes: number): Promise<number> {
    const since = Date.now() - withinMinutes * 60_000;

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      const { data } = await supabase
        .from('fraud_events')
        .select('id, createdAt')
        .eq('ipAddress', ip)
        .eq('source', source)
        .gte('createdAt', new Date(since).toISOString());
      return (data?.length ?? 0);
    }

    ensureFiles();
    const events = await this._readAllEvents();
    return events.filter((e) => e.ipAddress === ip && e.source === source && Date.parse(e.createdAt) >= since).length;
  }

  async countFlaggedForUser(userId: string): Promise<number> {
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      const { data } = await supabase.from('fraud_events').select('id').eq('userId', userId);
      return data?.length ?? 0;
    }
    ensureFiles();
    const events = await this._readAllEvents();
    return events.filter((e) => e.userId === userId).length;
  }

  async getPrivacySettings(userId: string): Promise<PrivacySettings> {
    const now = new Date().toISOString();
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      const { data } = await supabase.from('privacy_settings').select('*').eq('userId', userId).limit(1);
      if (data && data[0]) return data[0] as any as PrivacySettings;
      return { userId, monitoringContentAnalysisOptOut: false, updatedAt: now };
    }

    ensureFiles();
    const json = JSON.parse(fs.readFileSync(privacyPath, 'utf8') || '{}');
    return (
      json[userId] || { userId, monitoringContentAnalysisOptOut: false, updatedAt: now }
    );
  }

  async setPrivacySettings(userId: string, monitoringContentAnalysisOptOut: boolean): Promise<PrivacySettings> {
    const updated: PrivacySettings = { userId, monitoringContentAnalysisOptOut, updatedAt: new Date().toISOString() };

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      await supabase.from('privacy_settings').upsert(updated as any, { onConflict: 'userId' });
      return updated;
    }

    ensureFiles();
    const json = JSON.parse(fs.readFileSync(privacyPath, 'utf8') || '{}');
    json[userId] = updated;
    fs.writeFileSync(privacyPath, JSON.stringify(json, null, 2));
    return updated;
  }

  async generateMonthlyReport(month: string): Promise<MonthlyReport> {
    // month format: YYYY-MM
    const [year, mon] = month.split('-').map((v) => parseInt(v, 10));
    const start = new Date(Date.UTC(year, mon - 1, 1, 0, 0, 0));
    const end = new Date(Date.UTC(year, mon, 1, 0, 0, 0));

    let events: StoredFraudRecord[] = [];

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      const { data } = await supabase
        .from('fraud_events')
        .select('*')
        .gte('createdAt', start.toISOString())
        .lt('createdAt', end.toISOString());
      events = (data as any) as StoredFraudRecord[];
    } else {
      ensureFiles();
      events = await this._readAllEvents();
      events = events.filter((e) => {
        const ts = Date.parse(e.createdAt);
        return ts >= start.getTime() && ts < end.getTime();
      });
    }

    const totals = {
      all: events.length,
      safe: events.filter((e) => e.gpt?.label === 'SAFE').length,
      suspicious: events.filter((e) => e.gpt?.label === 'SUSPICIOUS').length,
      dangerous: events.filter((e) => e.gpt?.label === 'DANGEROUS').length,
    };

    const bySource: MonthlyReport['bySource'] = {
      signup: 0,
      job_post: 0,
      message: 0,
      quote: 0,
      review: 0,
    };
    for (const e of events) bySource[e.source as MonitoredSource]++;

    const actions = await this._readAllActions();
    const falsePositives = actions.filter((a) => a.action === 'IGNORE').length;

    const reasonCounts: Record<string, number> = {};
    for (const e of events) {
      for (const r of e.heuristic.reasons) reasonCounts[r] = (reasonCounts[r] || 0) + 1;
      if (e.gpt?.reason) reasonCounts[e.gpt.reason] = (reasonCounts[e.gpt.reason] || 0) + 1;
    }
    const topReasons = Object.entries(reasonCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([reason, count]) => ({ reason, count }));

    return { month, totals, bySource, falsePositives, topReasons };
  }

  private async _readAllEvents(): Promise<StoredFraudRecord[]> {
    ensureFiles();
    const text = fs.readFileSync(eventsPath, 'utf8');
    return text
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line) as StoredFraudRecord;
        } catch {
          return null;
        }
      })
      .filter(Boolean) as StoredFraudRecord[];
  }

  private async _writeAllEvents(events: StoredFraudRecord[]): Promise<void> {
    ensureFiles();
    const content = events.map((e) => JSON.stringify(e)).join('\n') + '\n';
    await fs.writeFile(eventsPath, content, 'utf8');
  }

  private async _readAllActions(): Promise<AdminActionRecord[]> {
    ensureFiles();
    const text = fs.readFileSync(actionsPath, 'utf8');
    return text
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line) as AdminActionRecord;
        } catch {
          return null;
        }
      })
      .filter(Boolean) as AdminActionRecord[];
  }
}

export function getFraudStore(): FraudStore {
  return new FraudStore();
}

export function newEvent(partial: Partial<FraudEvent> & Pick<FraudEvent, 'source'>): FraudEvent {
  const id = uuidv4();
  return {
    id,
    userId: partial.userId ?? null,
    source: partial.source,
    content: partial.content ?? null,
    metadata: partial.metadata ?? null,
    ipAddress: partial.ipAddress ?? null,
    createdAt: partial.createdAt ?? new Date().toISOString(),
  };
}