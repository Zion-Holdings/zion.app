import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NewVertical() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', subdomain: '', logoUrl: '', accentColorHex: '#3b82f6', brandColorHex: '#111827', whiteLabel: false, categories: '', defaultAiTerms: 'NONE' });
  const [saving, setSaving] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch('/api/multiverse/tenants', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
      ...form,
      categories: form.categories.split(',').map((s) => s.trim()).filter(Boolean),
    }) });
    setSaving(false);
    if (res.ok) router.push('/admin/multiverse');
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create Vertical</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Industry Name</label>
          <input className="mt-1 w-full border rounded-md px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Zion Health" />
        </div>
        <div>
          <label className="block text-sm font-medium">Subdomain</label>
          <input className="mt-1 w-full border rounded-md px-3 py-2" value={form.subdomain} onChange={(e) => setForm({ ...form, subdomain: e.target.value.toLowerCase() })} placeholder="health" />
        </div>
        <div>
          <label className="block text-sm font-medium">Logo URL</label>
          <input className="mt-1 w-full border rounded-md px-3 py-2" value={form.logoUrl} onChange={(e) => setForm({ ...form, logoUrl: e.target.value })} placeholder="https://..." />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Accent Color</label>
            <input type="color" className="mt-1 w-full h-10" value={form.accentColorHex} onChange={(e) => setForm({ ...form, accentColorHex: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium">Brand Color</label>
            <input type="color" className="mt-1 w-full h-10" value={form.brandColorHex} onChange={(e) => setForm({ ...form, brandColorHex: e.target.value })} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Talent Categories (comma-separated)</label>
          <input className="mt-1 w-full border rounded-md px-3 py-2" value={form.categories} onChange={(e) => setForm({ ...form, categories: e.target.value })} placeholder="Nurses, Doctors, Billing" />
        </div>
        <div>
          <label className="block text-sm font-medium">Default AI Terms</label>
          <select className="mt-1 w-full border rounded-md px-3 py-2" value={form.defaultAiTerms} onChange={(e) => setForm({ ...form, defaultAiTerms: e.target.value })}>
            <option value="NONE">None</option>
            <option value="HIPAA">HIPAA</option>
            <option value="GDPR">GDPR</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input id="wl" type="checkbox" checked={form.whiteLabel} onChange={(e) => setForm({ ...form, whiteLabel: e.target.checked })} />
          <label htmlFor="wl">White-label</label>
        </div>
        <button type="submit" disabled={saving} className="px-4 py-2 rounded-md text-white" style={{ backgroundColor: 'var(--accent, #3b82f6)' }}>{saving ? 'Creating...' : 'Create Vertical'}</button>
      </form>
    </div>
  );
}