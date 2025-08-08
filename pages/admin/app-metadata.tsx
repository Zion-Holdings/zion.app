import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import type { AppMetadata } from '../../utils/types/appMetadata';

const EMPTY: AppMetadata = {
  appTitle: '',
  shortDescription: '',
  longDescription: '',
  keywords: [],
  features: [],
  testimonials: [],
  screenshots: [],
  store: { appScheme: 'zion://', webFallbackUrl: '/mobile-app' },
  seo: { title: '', description: '', keywords: [] },
  changelog: [],
  updatedAtISO: new Date().toISOString(),
};

export default function AdminAppMetadataPage() {
  const [data, setData] = useState<AppMetadata>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/app-metadata').then(r => r.json()).then(setData).catch(() => {});
  }, []);

  const keywordsText = useMemo(() => data.keywords.join(', '), [data.keywords]);

  const save = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch('/api/app-metadata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': process.env.NEXT_PUBLIC_ADMIN_UPDATE_KEY || ''
        },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Failed');
      setMessage('Saved');
    } catch (e) {
      setMessage('Save failed');
    } finally {
      setLoading(false);
    }
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zion-app-metadata.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportCSV = () => {
    const rows: string[] = [];
    rows.push('Field,Value');
    rows.push(`App Title,"${data.appTitle.replace(/"/g, '""')}"`);
    rows.push(`Short Description,"${data.shortDescription.replace(/"/g, '""')}"`);
    rows.push(`Long Description,"${data.longDescription.replace(/"/g, '""')}"`);
    rows.push(`Keywords,"${data.keywords.join('; ')}"`);
    rows.push(`Features,"${data.features.join('; ')}"`);
    rows.push(`Testimonials,"${data.testimonials.map(t => `${t.author}${t.role ? ` (${t.role})` : ''}: ${t.quote}`).join(' | ')}"`);
    rows.push(`Screenshots,"${data.screenshots.join('; ')}"`);
    rows.push(`iOS App ID,${data.store.iosAppId || ''}`);
    rows.push(`Android Package,${data.store.androidPackageName || ''}`);
    rows.push(`iOS Store URL,${data.store.iosStoreUrl || ''}`);
    rows.push(`Android Store URL,${data.store.androidStoreUrl || ''}`);
    rows.push(`App Scheme,${data.store.appScheme || ''}`);
    rows.push(`SEO Title,"${data.seo.title.replace(/"/g, '""')}"`);
    rows.push(`SEO Description,"${data.seo.description.replace(/"/g, '""')}"`);
    rows.push(`SEO Keywords,"${data.seo.keywords.join('; ')}"`);
    rows.push(`Updated At,${data.updatedAtISO}`);
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zion-app-metadata.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Head><title>Admin: App Metadata</title></Head>
      <main className="mx-auto max-w-5xl px-6 py-8">
        <h1 className="text-2xl font-bold">App Metadata Manager</h1>

        {message && <div className="mt-4 p-3 bg-yellow-50 border rounded">{message}</div>}

        <section className="mt-6 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-medium">App Title</span>
            <input className="border rounded p-2" value={data.appTitle} onChange={e => setData({ ...data, appTitle: e.target.value })} />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium">Short Description</span>
            <input className="border rounded p-2" value={data.shortDescription} onChange={e => setData({ ...data, shortDescription: e.target.value })} />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium">Long Description</span>
            <textarea className="border rounded p-2 h-40" value={data.longDescription} onChange={e => setData({ ...data, longDescription: e.target.value })} />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium">Keywords (comma separated)</span>
            <input className="border rounded p-2" value={keywordsText} onChange={e => setData({ ...data, keywords: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium">Features (one per line)</span>
            <textarea className="border rounded p-2 h-32" value={data.features.join('\n')} onChange={e => setData({ ...data, features: e.target.value.split('\n').map(s => s.trim()).filter(Boolean) })} />
          </label>

          <div>
            <div className="text-sm font-medium">Testimonials</div>
            {(data.testimonials || []).map((t, idx) => (
              <div key={idx} className="mt-2 grid md:grid-cols-3 gap-2">
                <input className="border rounded p-2" placeholder="Author" value={t.author} onChange={e => {
                  const next = [...data.testimonials]; next[idx] = { ...t, author: e.target.value }; setData({ ...data, testimonials: next });
                }} />
                <input className="border rounded p-2" placeholder="Role" value={t.role || ''} onChange={e => {
                  const next = [...data.testimonials]; next[idx] = { ...t, role: e.target.value }; setData({ ...data, testimonials: next });
                }} />
                <input className="border rounded p-2" placeholder="Quote" value={t.quote} onChange={e => {
                  const next = [...data.testimonials]; next[idx] = { ...t, quote: e.target.value }; setData({ ...data, testimonials: next });
                }} />
              </div>
            ))}
            <button className="mt-2 px-3 py-1 border rounded" onClick={() => setData({ ...data, testimonials: [...(data.testimonials || []), { author: '', quote: '' }] })}>+ Add Testimonial</button>
          </div>

          <div>
            <div className="text-sm font-medium">Screenshots (URLs under /public/screenshots)</div>
            {(data.screenshots || []).map((s, idx) => (
              <div key={idx} className="mt-2 grid grid-cols-[1fr_auto] gap-2 items-center">
                <input className="border rounded p-2" value={s} onChange={e => {
                  const next = [...data.screenshots]; next[idx] = e.target.value; setData({ ...data, screenshots: next });
                }} />
                <button className="px-3 py-1 border rounded" onClick={() => {
                  const next = data.screenshots.filter((_, i) => i !== idx); setData({ ...data, screenshots: next });
                }}>Remove</button>
              </div>
            ))}
            <button className="mt-2 px-3 py-1 border rounded" onClick={() => setData({ ...data, screenshots: [...(data.screenshots || []), ''] })}>+ Add Screenshot</button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-medium">iOS App ID</span>
              <input className="border rounded p-2" value={data.store.iosAppId || ''} onChange={e => setData({ ...data, store: { ...data.store, iosAppId: e.target.value } })} />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">Android Package Name</span>
              <input className="border rounded p-2" value={data.store.androidPackageName || ''} onChange={e => setData({ ...data, store: { ...data.store, androidPackageName: e.target.value } })} />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">iOS Store URL</span>
              <input className="border rounded p-2" value={data.store.iosStoreUrl || ''} onChange={e => setData({ ...data, store: { ...data.store, iosStoreUrl: e.target.value } })} />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">Android Store URL</span>
              <input className="border rounded p-2" value={data.store.androidStoreUrl || ''} onChange={e => setData({ ...data, store: { ...data.store, androidStoreUrl: e.target.value } })} />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">App Scheme</span>
              <input className="border rounded p-2" value={data.store.appScheme || ''} onChange={e => setData({ ...data, store: { ...data.store, appScheme: e.target.value } })} />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">Web Fallback URL</span>
              <input className="border rounded p-2" value={data.store.webFallbackUrl || ''} onChange={e => setData({ ...data, store: { ...data.store, webFallbackUrl: e.target.value } })} />
            </label>
          </div>

          <div className="grid gap-2">
            <div className="text-sm font-medium">Changelog</div>
            {(data.changelog || []).map((c, idx) => (
              <div key={idx} className="grid md:grid-cols-3 gap-2 items-start mt-2">
                <input className="border rounded p-2" placeholder="Version" value={c.version} onChange={e => {
                  const next = [...data.changelog]; next[idx] = { ...c, version: e.target.value }; setData({ ...data, changelog: next });
                }} />
                <input className="border rounded p-2" placeholder="Date (ISO)" value={c.dateISO || ''} onChange={e => {
                  const next = [...data.changelog]; next[idx] = { ...c, dateISO: e.target.value }; setData({ ...data, changelog: next });
                }} />
                <textarea className="border rounded p-2 h-24" placeholder="Notes" value={c.notes} onChange={e => {
                  const next = [...data.changelog]; next[idx] = { ...c, notes: e.target.value }; setData({ ...data, changelog: next });
                }} />
                <button className="px-3 py-1 border rounded md:col-span-3" onClick={() => {
                  const next = data.changelog.filter((_, i) => i !== idx); setData({ ...data, changelog: next });
                }}>Remove Entry</button>
              </div>
            ))}
            <button className="mt-2 px-3 py-1 border rounded" onClick={() => setData({ ...data, changelog: [...(data.changelog || []), { version: '', notes: '' }] })}>+ Add Entry</button>
          </div>

          <div className="grid md:grid-cols-3 gap-3 mt-6">
            <button className="px-4 py-2 border rounded" onClick={save} disabled={loading}>{loading ? 'Saving…' : 'Save'}</button>
            <button className="px-4 py-2 border rounded" onClick={exportJSON}>Export JSON</button>
            <button className="px-4 py-2 border rounded" onClick={exportCSV}>Export CSV</button>
          </div>
        </section>
      </main>
    </>
  );
}