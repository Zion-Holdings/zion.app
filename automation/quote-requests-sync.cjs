#!/usr/bin/env node
/*
  Sync recent quote requests from Supabase into repo logs for analytics/versioning.
  - Requires: NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (or anon with RLS permissions)
  - Output: data/quote-requests/log.json
*/

const fs = require('fs');
const path = require('path');

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key || url.includes('placeholder')) {
    console.log('[quote-sync] Supabase not configured; skipping');
    return;
  }

  let supabaseLib;
  try { supabaseLib = require('@supabase/supabase-js'); } catch (e) {
    console.error('[quote-sync] supabase-js missing');
    process.exit(0);
  }

  const client = supabaseLib.createClient(url, key);
  const { data, error } = await client
    .from('quote_requests')
    .select('id, service, email, budget_range, timeline_start, timeline_end, ai_summary, ai_tags, created_at')
    .order('created_at', { ascending: false })
    .limit(100);
  if (error) {
    console.error('[quote-sync] error:', error.message);
    process.exit(1);
  }

  const outDir = path.join(__dirname, '..', 'data', 'quote-requests');
  const outPath = path.join(outDir, 'log.json');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify({ syncedAt: new Date().toISOString(), items: data || [] }, null, 2), 'utf8');
  console.log('[quote-sync] wrote', outPath);
}

main().catch((e) => { console.error(e); process.exit(1); });