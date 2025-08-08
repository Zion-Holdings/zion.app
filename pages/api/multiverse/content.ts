import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
import { readJson } from '../../../utils/fileDb';
import { Tenant } from '../../../utils/tenant';

const CONTENT_FILE = 'data/content.json';

const isSupabaseConfigured = () => {
  return (
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co' &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'placeholder-key'
  );
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tenantId = (req.query.tenantId as string) || '';
  const onlyTenant = req.query.scope === 'tenant';

  if (req.method !== 'GET') return res.status(405).end();

  if (isSupabaseConfigured()) {
    let query = supabase.from('content').select('*');
    if (onlyTenant && tenantId) query = query.eq('tenant_id', tenantId);
    const { data, error } = await query;
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ content: data ?? [] });
  }

  // file-based fallback for demo
  const all = (await readJson<any[]>(CONTENT_FILE)) ?? [];
  const filtered = onlyTenant && tenantId ? all.filter((c) => c.tenant_id === tenantId) : all;
  return res.status(200).json({ content: filtered });
}