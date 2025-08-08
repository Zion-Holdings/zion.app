import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

const NationBuilderPage: NextPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [flagDataUrl, setFlagDataUrl] = useState<string | undefined>(undefined);
  const [constitution, setConstitution] = useState('');
  const [governanceStyle, setGovernanceStyle] = useState<'admin' | 'token_weighted' | 'delegate'>('admin');
  const [fundingModel, setFundingModel] = useState<'zion_treasury' | 'partner_subsidies' | 'member_dues'>('zion_treasury');
  const [currency, setCurrency] = useState<'ZION$' | 'WRAPPED_ZION$' | 'CUSTOM'>('ZION$');
  const [loading, setLoading] = useState(false);
  const [aiDraft, setAiDraft] = useState<string>('');
  const [aiSuggestion, setAiSuggestion] = useState<any>(null);
  const [error, setError] = useState<string>('');

  function handleFlagFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setFlagDataUrl(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function handleGenerateAIDraft() {
    setError('');
    setAiDraft('');
    try {
      const res = await fetch('/api/nations/ai-governance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, governanceStyle, fundingModel }),
      });
      const data = await res.json();
      setAiDraft(data.constitutionDraft || '');
      setAiSuggestion(data.structureSuggestion || null);
    } catch (e: any) {
      setError(e?.message || 'AI draft failed');
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/nations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, flagDataUrl, constitution, governanceStyle, fundingModel, currency }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to create nation');
      const slug = data?.nation?.slug;
      if (slug) router.push(`/nations/${slug}/dashboard`);
    } catch (e: any) {
      setError(e?.message || 'Creation failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Head>
        <title>Create a Nation - Zion OS</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-4">Create a Nation</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full border rounded p-2 bg-transparent" placeholder="Nation name" required />
        </div>

        <div>
          <label className="block text-sm font-medium">Flag upload</label>
          <input type="file" accept="image/*" onChange={handleFlagFileChange} className="mt-1" />
          {flagDataUrl && <img src={flagDataUrl} alt="Flag preview" className="mt-2 h-16 rounded" />}
        </div>

        <div>
          <label className="block text-sm font-medium">Constitution statement</label>
          <textarea value={constitution} onChange={(e) => setConstitution(e.target.value)} className="mt-1 w-full border rounded p-2 bg-transparent h-40" placeholder="Write your constitution..." required />
          <div className="flex gap-2 mt-2">
            <button type="button" onClick={handleGenerateAIDraft} className="px-3 py-2 rounded bg-indigo-600 text-white">AI: Draft Constitution</button>
            {aiDraft && (
              <button type="button" onClick={() => setConstitution(aiDraft)} className="px-3 py-2 rounded border">Use Draft</button>
            )}
          </div>
          {aiDraft && (
            <div className="mt-3 p-3 border rounded bg-gray-50 dark:bg-gray-900">
              <p className="text-xs uppercase text-gray-500">AI Draft</p>
              <pre className="whitespace-pre-wrap text-sm">{aiDraft}</pre>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Governance style</label>
            <select value={governanceStyle} onChange={(e) => setGovernanceStyle(e.target.value as any)} className="mt-1 w-full border rounded p-2 bg-transparent">
              <option value="admin">Admin</option>
              <option value="token_weighted">Token-weighted vote</option>
              <option value="delegate">Delegate model</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Funding model</label>
            <select value={fundingModel} onChange={(e) => setFundingModel(e.target.value as any)} className="mt-1 w-full border rounded p-2 bg-transparent">
              <option value="zion_treasury">ZION$ treasury</option>
              <option value="partner_subsidies">Partner subsidies</option>
              <option value="member_dues">Member dues</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Nation currency</label>
            <select value={currency} onChange={(e) => setCurrency(e.target.value as any)} className="mt-1 w-full border rounded p-2 bg-transparent">
              <option value="ZION$">ZION$</option>
              <option value="WRAPPED_ZION$">Wrapped ZION$</option>
              <option value="CUSTOM">Custom</option>
            </select>
          </div>
        </div>

        {aiSuggestion && (
          <div className="p-3 border rounded bg-gray-50 dark:bg-gray-900">
            <p className="text-xs uppercase text-gray-500">AI Governance Suggestion</p>
            <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(aiSuggestion, null, 2)}</pre>
          </div>
        )}

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <div className="flex gap-3">
          <button disabled={loading} type="submit" className="px-4 py-2 rounded bg-green-600 text-white disabled:opacity-50">{loading ? 'Creating...' : 'Create Nation'}</button>
          <button type="button" className="px-4 py-2 rounded border" onClick={() => setConstitution(prev => prev + '\n\nOperator Prompt: Define roles, quorum, and budget tiers.')}>Insert Operator Prompt</button>
        </div>
      </form>
    </div>
  );
};

export default NationBuilderPage;