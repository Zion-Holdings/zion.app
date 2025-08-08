import React, { useState } from 'react';

export default function UNBridge() {
  const [form, setForm] = useState({
    title: 'Zion DAO x Digital Labor Initiative',
    targetInstitution: 'UN Development Programme',
    type: 'Workforce Dev',
    regionalScope: 'Global South',
    budgetOrResolution: 'USD 3M over 24 months',
    supportingMultiverses: 'Digital Labor, AI Ethics',
    promptAssist: 'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',
    language: 'en',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [translated, setTranslated] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  async function generate() {
    setLoading(true);
    try {
      const res = await fetch('/api/proposals/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          supportingMultiverses: form.supportingMultiverses.split(',').map((s) => s.trim()).filter(Boolean),
        }),
      });
      const data = await res.json();
      setResult(data);
    } finally { setLoading(false); }
  }

  async function translate(targetLanguage: string) {
    if (!result?.markdown) return;
    setLoading(true);
    try {
      const res = await fetch('/api/proposals/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown: result.markdown, targetLanguage }),
      });
      const data = await res.json();
      setTranslated(data.translated);
    } finally { setLoading(false); }
  }

  async function exportArtifacts() {
    if (!result?.meta?.id) return;
    setLoading(true);
    try {
      await fetch('/api/proposals/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: result.meta.id }),
      });
      // Refresh meta
      const list = await fetch('/api/proposals/list');
      const { proposals } = await list.json();
      const updated = proposals.find((p: any) => p.id === result.meta.id);
      setResult((r: any) => ({ ...r, meta: updated }));
    } finally { setLoading(false); }
  }

  async function submit(channels: string[]) {
    if (!result?.meta?.id) return;
    setLoading(true);
    try {
      const res = await fetch('/api/proposals/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: result.meta.id, channels }),
      });
      const data = await res.json();
      setResult((r: any) => ({ ...r, meta: data.meta }));
    } finally { setLoading(false); }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Global Outreach: UN Bridge</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block">
            <span className="text-sm">Title</span>
            <input name="title" value={form.title} onChange={onChange} className="w-full border rounded p-2" />
          </label>
          <label className="block">
            <span className="text-sm">Target institution</span>
            <input name="targetInstitution" value={form.targetInstitution} onChange={onChange} className="w-full border rounded p-2" />
          </label>
          <label className="block">
            <span className="text-sm">Type</span>
            <select name="type" value={form.type} onChange={onChange} className="w-full border rounded p-2">
              <option>Workforce Dev</option>
              <option>AI Ethics</option>
              <option>Digital ID</option>
              <option>Education</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm">Regional scope</span>
            <input name="regionalScope" value={form.regionalScope} onChange={onChange} className="w-full border rounded p-2" />
          </label>
          <label className="block">
            <span className="text-sm">Budget / Resolution goals</span>
            <input name="budgetOrResolution" value={form.budgetOrResolution} onChange={onChange} className="w-full border rounded p-2" />
          </label>
          <label className="block">
            <span className="text-sm">Supporting multiverse(s) (comma separated)</span>
            <input name="supportingMultiverses" value={form.supportingMultiverses} onChange={onChange} className="w-full border rounded p-2" />
          </label>
          <label className="block">
            <span className="text-sm">GPT Prompt Assist</span>
            <textarea name="promptAssist" rows={5} value={form.promptAssist} onChange={onChange} className="w-full border rounded p-2" />
          </label>
          <div className="flex gap-3">
            <button onClick={generate} disabled={loading} className="px-4 py-2 bg-black text-white rounded">{loading ? 'Working…' : 'Generate Proposal'}</button>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm opacity-70">Output</div>
          <div className="border rounded p-3 h-96 overflow-auto whitespace-pre-wrap bg-gray-50">
            {result?.markdown || 'No draft yet'}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => translate('fr')} disabled={loading || !result} className="px-3 py-2 border rounded">Translate FR</button>
            <button onClick={() => translate('es')} disabled={loading || !result} className="px-3 py-2 border rounded">Translate ES</button>
            <button onClick={() => translate('ar')} disabled={loading || !result} className="px-3 py-2 border rounded">Translate AR</button>
          </div>
          {translated && (
            <div className="border rounded p-3 h-60 overflow-auto whitespace-pre-wrap bg-gray-50">
              {translated}
            </div>
          )}
          <div className="flex items-center gap-2">
            <button onClick={exportArtifacts} disabled={loading || !result} className="px-3 py-2 border rounded">Export PDF + Sign + IPFS</button>
            <button onClick={() => submit(['email'])} disabled={loading || !result} className="px-3 py-2 border rounded">Submit (Email)</button>
          </div>
          {result?.meta && (
            <div className="text-sm space-y-1">
              <div><span className="font-medium">Status:</span> {result.meta.status}</div>
              {result.meta.artifacts?.markdownPath && (
                <div><a className="text-blue-600 underline" href={result.meta.artifacts.markdownPath} target="_blank" rel="noreferrer">Markdown</a></div>
              )}
              {result.meta.artifacts?.pdfPath && (
                <div><a className="text-blue-600 underline" href={result.meta.artifacts.pdfPath} target="_blank" rel="noreferrer">PDF</a></div>
              )}
              {result.meta.artifacts?.ipfsCid && (
                <div>IPFS CID: {result.meta.artifacts.ipfsCid}</div>
              )}
              {result.meta.artifacts?.signature && (
                <div>Signature: {result.meta.artifacts.signature.slice(0, 30)}…</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}