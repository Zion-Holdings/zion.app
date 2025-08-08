import React, { useState } from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';

const governanceOptions = [
  { value: 'admin', label: 'Admin' },
  { value: 'token-weighted', label: 'Token-weighted vote' },
  { value: 'delegate', label: 'Delegate model' },
];

const fundingOptions = [
  { value: 'zion-treasury', label: 'ZION$ treasury' },
  { value: 'partner-subsidies', label: 'Partner subsidies' },
  { value: 'member-dues', label: 'Member dues' },
];

export default function NationBuilderPage() {
  const [name, setName] = useState('');
  const [flagDataUrl, setFlagDataUrl] = useState<string | undefined>();
  const [constitution, setConstitution] = useState('');
  const [governanceStyle, setGovernanceStyle] = useState('admin');
  const [fundingModel, setFundingModel] = useState('zion-treasury');
  const [currency, setCurrency] = useState('ZION$');
  const [operatorPrompt, setOperatorPrompt] = useState('');
  const [aiDraft, setAiDraft] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>('');
  const [successSlug, setSuccessSlug] = useState<string>('');

  function onFlagChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setFlagDataUrl(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function generateDraft() {
    setError('');
    setAiDraft('');
    try {
      const res = await fetch('/api/ai/constitution-draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, governanceStyle, fundingModel, operatorPrompt }),
      });
      const data = await res.json();
      if (data?.constitutionDraft) setAiDraft(data.constitutionDraft);
    } catch (e: any) {
      setError('Failed to generate draft');
    }
  }

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccessSlug('');
    try {
      const res = await fetch('/api/nations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, flagDataUrl, constitution, governanceStyle, fundingModel, currency }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed');
      setSuccessSlug(data?.nation?.slug);
    } catch (err: any) {
      setError(err.message || 'Error creating nation');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <EnhancedLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Create a Digital Nation</h1>
        <form onSubmit={submitForm} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input className="mt-1 w-full border rounded px-3 py-2" value={name} onChange={e => setName(e.target.value)} required />
          </div>

          <div>
            <label className="block text-sm font-medium">Flag upload</label>
            <input type="file" accept="image/*" onChange={onFlagChange} />
            {flagDataUrl && <img src={flagDataUrl} alt="Flag preview" className="mt-2 h-16 object-contain" />}
          </div>

          <div>
            <label className="block text-sm font-medium">Constitution statement</label>
            <textarea className="mt-1 w-full border rounded px-3 py-2 h-40" value={constitution} onChange={e => setConstitution(e.target.value)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Governance style</label>
              <select className="mt-1 w-full border rounded px-3 py-2" value={governanceStyle} onChange={e => setGovernanceStyle(e.target.value)}>
                {governanceOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Funding model</label>
              <select className="mt-1 w-full border rounded px-3 py-2" value={fundingModel} onChange={e => setFundingModel(e.target.value)}>
                {fundingOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Nation currency</label>
            <select className="mt-1 w-full border rounded px-3 py-2" value={currency} onChange={e => setCurrency(e.target.value)}>
              <option value="ZION$">ZION$</option>
              <option value="WZION$">Wrapped ZION$</option>
            </select>
          </div>

          <div className="p-4 rounded border">
            <div className="flex items-end gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium">Operator prompt (optional)</label>
                <textarea className="mt-1 w-full border rounded px-3 py-2 h-24" value={operatorPrompt} onChange={e => setOperatorPrompt(e.target.value)} placeholder="Describe your vision and constraints..." />
              </div>
              <button type="button" onClick={generateDraft} className="px-3 py-2 rounded bg-indigo-600 text-white text-sm whitespace-nowrap">AI Draft</button>
            </div>
            {aiDraft && (
              <div className="mt-3">
                <label className="block text-sm font-medium">AI Constitution Draft</label>
                <textarea className="mt-1 w-full border rounded px-3 py-2 h-48" value={aiDraft} onChange={e => setAiDraft(e.target.value)} />
                <button type="button" className="mt-2 text-sm underline" onClick={() => setConstitution(aiDraft)}>Use draft</button>
              </div>
            )}
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {successSlug && (
            <p className="text-green-700 text-sm">Created! <a className="underline" href={`/nations/${successSlug}`}>View nation</a> or <a className="underline" href={`/nations/${successSlug}/dashboard`}>open dashboard</a>.</p>
          )}

          <button disabled={submitting} className="px-4 py-2 rounded bg-green-600 text-white disabled:opacity-50">{submitting ? 'Creating…' : 'Create Nation'}</button>
        </form>
      </div>
    </EnhancedLayout>
  );
}