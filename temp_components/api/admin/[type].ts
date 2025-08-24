import type { NextApiRequest, NextApiResponse } from 'next';
import { ADMIN_TYPES, AdminType, ListParams } from '../../../utils/admin/types';
import { v4 as uuidv4 } from 'uuid';
import { supabase as client } from '../../../utils/supabase/client';
import { MOCK_DATA } from '../../../utils/admin/mockData';

function isSupabaseConfigured() {
  return !!process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co';
}

function parseListParams(req: NextApiRequest): ListParams & { format?: 'csv' } {
  const { search, sort, order, page, pageSize, format, ...rest } = req.query as Record<string, string>;
  const filters: Record<string, any> = {};
  Object.keys(rest).forEach((k) => {
    if (k.startsWith('f_')) filters[k.slice(2)] = rest[k];
  });
  return {
    search,
    sort,
    order: (order as any) || 'desc',
    page: page ? Number(page) : 0,
    pageSize: pageSize ? Number(pageSize) : 20,
    filters,
    format: (format as any) || undefined,
  };
}

function toCsv(rows: any[]): string {
  if (!rows.length) return '';
  const headers = Object.keys(rows[0]);
  const escape = (v: any) => {
    if (v === null || v === undefined) return '';
    const s = typeof v === 'string' ? v : JSON.stringify(v);
    return '"' + s.replace(/"/g, '""') + '"';
  };
  const lines = [headers.join(',')].concat(rows.map((r) => headers.map((h) => escape(r[h])).join(',')));
  return lines.join('\n');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = (req.query.type as AdminType) || '';
  if (!ADMIN_TYPES.includes(type)) return res.status(400).json({ error: 'Invalid type' });

  const useSupabase = isSupabaseConfigured();

  if (req.method === 'GET') {
    const params = parseListParams(req);
    if (useSupabase) {
      const table = type;
      let query = client.from(table).select('*', { count: 'exact' });
      if (params.search) {
        // heuristic: search name/title/email
        query = query.or('name.ilike.%' + params.search + '%,title.ilike.%' + params.search + '%,email.ilike.%' + params.search + '%');
      }
      if (params.filters) {
        for (const [k, v] of Object.entries(params.filters)) {
          if (v !== undefined) query = query.eq(k, v);
        }
      }
      if (params.sort) query = query.order(params.sort, { ascending: params.order === 'asc' });
      const from = params.page * params.pageSize;
      const to = from + params.pageSize - 1;
      const { data, error, count } = await query.range(from, to);
      if (error) return res.status(500).json({ error: error.message });
      if (params.format === 'csv') {
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename="${type}.csv"`);
        return res.status(200).send(toCsv(data || []));
      }
      return res.status(200).json({ items: data || [], total: count || 0 });
    } else {
      // fallback
      const all = (MOCK_DATA[type] || []).slice();
      let filtered = all;
      if (params.search) {
        const s = params.search.toLowerCase();
        filtered = filtered.filter((r) => JSON.stringify(r).toLowerCase().includes(s));
      }
      if (params.filters) {
        for (const [k, v] of Object.entries(params.filters)) {
          filtered = filtered.filter((r: any) => String((r as any)[k]) === String(v));
        }
      }
      if (params.sort) {
        filtered.sort((a: any, b: any) => {
          const av = (a as any)[params.sort!];
          const bv = (b as any)[params.sort!];
          return (av > bv ? 1 : av < bv ? -1 : 0) * (params.order === 'asc' ? 1 : -1);
        });
      }
      const total = filtered.length;
      const start = params.page * params.pageSize;
      const end = start + params.pageSize;
      const pageItems = filtered.slice(start, end);
      if (params.format === 'csv') {
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename="${type}.csv"`);
        return res.status(200).send(toCsv(pageItems));
      }
      return res.status(200).json({ items: pageItems, total });
    }
  }

  if (req.method === 'PATCH') {
    const { id, updates } = req.body as { id: string; updates: Record<string, any> };
    if (!id) return res.status(400).json({ error: 'Missing id' });
    if (useSupabase) {
      const { data, error } = await client.from(type).update({ ...updates, updated_at: new Date().toISOString() }).eq('id', id).select('*').single();
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json({ item: data });
    } else {
      const list = MOCK_DATA[type] || [];
      const idx = list.findIndex((r: any) => r.id === id);
      if (idx === -1) return res.status(404).json({ error: 'Not found' });
      const updated = { ...list[idx], ...updates, updated_at: new Date().toISOString() };
      list[idx] = updated as any;
      return res.status(200).json({ item: updated });
    }
  }

  if (req.method === 'DELETE') {
    const id = (req.query.id as string) || '';
    if (!id) return res.status(400).json({ error: 'Missing id' });
    if (useSupabase) {
      const { error } = await client.from(type).delete().eq('id', id);
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json({ ok: true });
    } else {
      const list = MOCK_DATA[type] || [];
      const idx = list.findIndex((r: any) => r.id === id);
      if (idx === -1) return res.status(404).json({ error: 'Not found' });
      list.splice(idx, 1);
      return res.status(200).json({ ok: true });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}