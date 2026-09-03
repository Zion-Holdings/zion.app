/**
 * Zion Composio connection discovery.
 * Lists every connected account via REST v3.1 and returns the newest ACTIVE
 * account per toolkit. Orchestrators must use this instead of stale GitHub secrets.
 */
const API = 'https://backend.composio.dev/api/v3.1';

export async function composioFetch(path, { method = 'GET', body } = {}) {
  const apiKey = process.env.COMPOSIO_API_KEY;
  if (!apiKey) throw new Error('COMPOSIO_API_KEY is required');
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text.slice(0, 2000) };
  }
  return { ok: res.ok, status: res.status, data };
}

export async function listAllConnectedAccounts() {
  const items = [];
  let cursor;
  for (let page = 0; page < 20; page++) {
    const qs = new URLSearchParams({ limit: '100' });
    if (cursor) qs.set('cursor', cursor);
    const { ok, data, status } = await composioFetch(`/connected_accounts?${qs}`);
    if (!ok) throw new Error(`connected_accounts ${status}: ${JSON.stringify(data).slice(0, 300)}`);
    items.push(...(data.items || []));
    cursor = data.next_cursor;
    if (!cursor) break;
  }
  return items;
}

export function newestByToolkit(accounts, { userId, activeOnly = false } = {}) {
  const map = {};
  for (const account of accounts) {
    if (userId && account.user_id !== userId) continue;
    const status = account.status;
    if (activeOnly && status !== 'ACTIVE') continue;
    const toolkit = account.toolkit?.slug || account.toolkit || 'unknown';
    const prev = map[toolkit];
    if (!prev || (account.created_at || '') > (prev.created_at || '')) {
      map[toolkit] = {
        toolkit,
        id: account.id,
        user_id: account.user_id,
        status,
        created_at: account.created_at,
      };
    }
  }
  return map;
}

export function newestActiveByToolkit(accounts) {
  return newestByToolkit(accounts, { activeOnly: true });
}

export function inventorySummary(accounts) {
  const byToolkit = {};
  for (const account of accounts) {
    const toolkit = account.toolkit?.slug || account.toolkit || 'unknown';
    if (!byToolkit[toolkit]) byToolkit[toolkit] = { active: 0, expired: 0, failed: 0, other: 0, total: 0 };
    byToolkit[toolkit].total += 1;
    const status = String(account.status || '').toLowerCase();
    if (status === 'active') byToolkit[toolkit].active += 1;
    else if (status === 'expired') byToolkit[toolkit].expired += 1;
    else if (status === 'failed') byToolkit[toolkit].failed += 1;
    else byToolkit[toolkit].other += 1;
  }
  const active = Object.entries(byToolkit).filter(([, v]) => v.active > 0).map(([k]) => k).sort();
  const expiredOnly = Object.entries(byToolkit).filter(([, v]) => v.active === 0).map(([k]) => k).sort();
  return {
    totalAccounts: accounts.length,
    activeToolkits: active,
    expiredOrFailedToolkits: expiredOnly,
    byToolkit,
  };
}

export async function executeTool(toolkit, toolSlug, args = {}, activeMap) {
  const account = activeMap[toolkit];
  if (!account) return { skipped: true, reason: `no ACTIVE ${toolkit} connection` };
  const { ok, status, data } = await composioFetch(`/tools/execute/${toolSlug}`, {
    method: 'POST',
    body: {
      connected_account_id: account.id,
      user_id: account.user_id,
      arguments: args,
      version: 'latest',
    },
  });
  const successful = ok && data?.successful !== false;
  return {
    ok: successful,
    http: status,
    toolkit,
    tool: toolSlug,
    error: successful ? null : (data?.error || data?.message || data),
    data: successful ? (data?.data ?? data) : null,
  };
}

export async function discoverZionConnections() {
  const accounts = await listAllConnectedAccounts();
  return {
    accounts,
    active: newestActiveByToolkit(accounts),
    inventory: inventorySummary(accounts),
  };
}
