import type { NextApiRequest, NextApiResponse } from 'next';
import { Tenant } from '../../../utils/tenant';
import { supabase } from '../../../utils/supabase/client';
import { readJson, writeJson } from '../../../utils/fileDb';

const DATA_PATH = 'data/tenants.json';

const isSupabaseConfigured = () => {
  return (
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co' &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'placeholder-key'
  );
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase.from('tenants').select('*').order('createdAt', { ascending: false });
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json({ tenants: data ?? [] });
    }
    const tenants = await readJson<Tenant[]>(DATA_PATH);
    return res.status(200).json({ tenants: tenants ?? [] });
  }

  if (req.method === 'POST') {
    const body = req.body as Partial<Tenant> & { categories?: string[] };
    const now = new Date().toISOString();
    const newTenant: Tenant = {
      id: body.id ?? cryptoRandomId(),
      name: body.name ?? 'New Vertical',
      subdomain: (body.subdomain ?? '').toLowerCase(),
      logoUrl: body.logoUrl ?? '',
      accentColorHex: body.accentColorHex ?? '#3b82f6',
      brandColorHex: body.brandColorHex ?? '#111827',
      whiteLabel: !!body.whiteLabel,
      categories: body.categories ?? [],
      defaultAiTerms: (body.defaultAiTerms as any) ?? 'NONE',
      createdAt: now,
    };

    if (!newTenant.subdomain) return res.status(400).json({ error: 'subdomain is required' });

    if (isSupabaseConfigured()) {
      const { error } = await supabase.from('tenants').insert(newTenant as any);
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json({ ok: true, tenant: newTenant });
    }

    const tenants = (await readJson<Tenant[]>(DATA_PATH)) ?? [];
    if (tenants.some((t) => t.subdomain === newTenant.subdomain)) {
      return res.status(409).json({ error: 'subdomain already exists' });
    }
    tenants.unshift(newTenant);
    await writeJson(DATA_PATH, tenants);
    return res.status(200).json({ ok: true, tenant: newTenant });
  }

  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');
}

function cryptoRandomId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return (crypto as any).randomUUID();
  const { randomUUID } = require('crypto');
  return randomUUID();
}