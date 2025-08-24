import { AdminType, ListParams } from './types';

export async function listItems(type: AdminType, params: ListParams & { format?: 'csv' } = {}) {
  const query = new URLSearchParams();
  if (params.search) query.set('search', params.search);
  if (params.sort) query.set('sort', params.sort);
  if (params.order) query.set('order', params.order);
  if (params.page !== undefined) query.set('page', String(params.page));
  if (params.pageSize !== undefined) query.set('pageSize', String(params.pageSize));
  if (params.format) query.set('format', params.format);
  if (params.filters) {
    Object.entries(params.filters).forEach(([k, v]) => {
      if (v !== undefined) query.set(`f_${k}`, String(v));
    });
  }
  const res = await fetch(`/api/admin/${type}?${query.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch items');
  if (params.format === 'csv') return res.text();
  return res.json();
}

export async function updateItem(type: AdminType, id: string, updates: Record<string, any>) {
  const res = await fetch(`/api/admin/${type}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, updates }),
  });
  if (!res.ok) throw new Error('Failed to update');
  return res.json();
}

export async function deleteItem(type: AdminType, id: string) {
  const res = await fetch(`/api/admin/${type}?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete');
  return res.json();
}