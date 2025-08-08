import React, { useEffect, useMemo, useState } from 'react';
import { AdminType, ADMIN_TYPES } from '../../utils/admin/types';
import { deleteItem, listItems, updateItem } from '../../utils/admin/client';

const TYPE_COLUMNS: Record<AdminType, { key: string; label: string; editable?: boolean }[]> = {
  users: [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', editable: true },
    { key: 'status', label: 'Status', editable: true },
  ],
  cvs: [
    { key: 'title', label: 'Title' },
    { key: 'skills', label: 'Skills' },
    { key: 'status', label: 'Status', editable: true },
  ],
  projects: [
    { key: 'title', label: 'Title' },
    { key: 'client', label: 'Client' },
    { key: 'budget_usd', label: 'Budget' },
    { key: 'status', label: 'Status', editable: true },
  ],
  services: [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
    { key: 'price_usd', label: 'Price' },
    { key: 'status', label: 'Status', editable: true },
  ],
  job_posts: [
    { key: 'title', label: 'Title' },
    { key: 'company', label: 'Company' },
    { key: 'location', label: 'Location' },
    { key: 'employment_type', label: 'Type' },
    { key: 'status', label: 'Status', editable: true },
  ],
  equipment: [
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category' },
    { key: 'daily_rate_usd', label: 'Daily Rate' },
    { key: 'status', label: 'Status', editable: true },
  ],
};

function formatCell(value: any) {
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  return value ?? '';
}

export default function AdminTable() {
  const [type, setType] = useState<AdminType>('users');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('created_at');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [roleFilter, setRoleFilter] = useState<string>('');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rows, setRows] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const columns = TYPE_COLUMNS[type];

  async function load() {
    setLoading(true);
    try {
      const filters: Record<string, any> = {};
      if (statusFilter) filters.status = statusFilter;
      if (roleFilter && type === 'users') filters.role = roleFilter;
      if (verifiedOnly) filters.verified = true;
      const data = await listItems(type, { search, sort, order, page, pageSize, filters });
      setRows(data.items);
      setTotal(data.total);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [type, search, sort, order, page, pageSize, statusFilter, roleFilter, verifiedOnly]);

  async function onToggleVerified(r: any) {
    await updateItem(type, r.id, { verified: !r.verified });
    load();
  }

  async function onUpdateField(r: any, key: string, value: string) {
    await updateItem(type, r.id, { [key]: value });
    load();
  }

  async function onDelete(r: any) {
    if (!confirm('Delete this record?')) return;
    await deleteItem(type, r.id);
    load();
  }

  async function onExportCsv() {
    const csv = await listItems(type, { search, sort, order, page, pageSize, filters: { ...(statusFilter && { status: statusFilter }), ...(roleFilter && { role: roleFilter }), ...(verifiedOnly && { verified: true }) }, format: 'csv' });
    const blob = new Blob([csv as string], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${type}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <select value={type} onChange={(e) => { setType(e.target.value as AdminType); setPage(0); }} className="rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">
          {ADMIN_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <input placeholder="Search" value={search} onChange={(e) => { setSearch(e.target.value); setPage(0); }} className="w-56 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm" />
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">
          <option value="created_at">Created</option>
          {columns.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
          <option value="verified">Verified</option>
          <option value="status">Status</option>
        </select>
        <select value={order} onChange={(e) => setOrder(e.target.value as any)} className="rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </select>
        <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(0); }} className="rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">
          <option value="">All Status</option>
          <option>draft</option>
          <option>active</option>
          <option>archived</option>
          <option>suspended</option>
          <option>closed</option>
        </select>
        {type === 'users' && (
          <select value={roleFilter} onChange={(e) => { setRoleFilter(e.target.value); setPage(0); }} className="rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">
            <option value="">All Roles</option>
            <option>user</option>
            <option>talent</option>
            <option>client</option>
            <option>admin</option>
            <option>moderator</option>
          </select>
        )}
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" checked={verifiedOnly} onChange={(e) => { setVerifiedOnly(e.target.checked); setPage(0); }} /> Verified only
        </label>
        <button onClick={onExportCsv} className="ml-auto rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm">Download CSV</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-gray-500">
              <th className="p-2">Verified</th>
              {columns.map((c) => <th key={c.key} className="p-2">{c.label}</th>)}
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td className="p-2" colSpan={columns.length + 2}>Loading…</td></tr>
            ) : rows.length === 0 ? (
              <tr><td className="p-2" colSpan={columns.length + 2}>No results</td></tr>
            ) : (
              rows.map((r) => (
                <tr key={r.id} className="border-t border-gray-100 dark:border-gray-900">
                  <td className="p-2">
                    <label className="inline-flex items-center gap-2">
                      <input type="checkbox" checked={!!r.verified} onChange={() => onToggleVerified(r)} />
                      <span className="text-xs">{r.verified ? 'Verified' : 'Unverified'}</span>
                    </label>
                  </td>
                  {columns.map((c) => (
                    <td key={c.key} className="p-2">
                      {c.editable ? (
                        <select value={r[c.key] || ''} onChange={(e) => onUpdateField(r, c.key, e.target.value)} className="rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-2 py-1 text-xs">
                          {c.key === 'role' ? (
                            <>
                              <option>user</option>
                              <option>talent</option>
                              <option>client</option>
                              <option>admin</option>
                              <option>moderator</option>
                            </>
                          ) : c.key === 'status' ? (
                            <>
                              <option>draft</option>
                              <option>active</option>
                              <option>archived</option>
                              <option>suspended</option>
                              <option>closed</option>
                            </>
                          ) : (
                            <option>{String(r[c.key] || '')}</option>
                          )}
                        </select>
                      ) : (
                        <span>{formatCell(r[c.key])}</span>
                      )}
                    </td>
                  ))}
                  <td className="p-2">
                    <button onClick={() => onDelete(r)} className="rounded bg-red-600 text-white px-2 py-1 text-xs">Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span>Rows per page</span>
        <select value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setPage(0); }} className="rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-2 py-1 text-sm">
          {[10, 20, 50].map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
        <div className="ml-auto flex items-center gap-2">
          <button disabled={page <= 0} onClick={() => setPage((p) => Math.max(0, p - 1))} className="rounded border border-gray-300 dark:border-gray-700 px-2 py-1 disabled:opacity-50">Prev</button>
          <span>Page {page + 1} / {totalPages}</span>
          <button disabled={page + 1 >= totalPages} onClick={() => setPage((p) => p + 1)} className="rounded border border-gray-300 dark:border-gray-700 px-2 py-1 disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}