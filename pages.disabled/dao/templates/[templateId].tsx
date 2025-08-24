import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

function TextArea(props: any) {
  return <textarea {...props} className={`w-full border rounded px-3 py-2 min-h-[120px] ${props.className || ''}`} />;
}

export default function ZgpDraftPage() {
  const router = useRouter();
  const { templateId } = router.query as { templateId: string };

  const [template, setTemplate] = useState<any>(null);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [motivation, setMotivation] = useState('');
  const [specificationImpact, setSpecificationImpact] = useState('');
  const [codeModuleAffected, setCodeModuleAffected] = useState('');
  const [votingOptions, setVotingOptions] = useState<string[]>(['For', 'Against', 'Abstain']);
  const [fundingAmount, setFundingAmount] = useState<number | ''>('');
  const [fundingCurrency, setFundingCurrency] = useState('ZION');
  const [brief, setBrief] = useState('');
  const [review, setReview] = useState<string>('');
  const [saving, setSaving] = useState(false);
  const [proposal, setProposal] = useState<any>(null);
  const fundingNeeded = useMemo(() => {
    if (fundingAmount === '' || Number.isNaN(Number(fundingAmount))) return null;
    return { amount: Number(fundingAmount), currency: fundingCurrency };
  }, [fundingAmount, fundingCurrency]);

  useEffect(() => {
    if (!templateId) return;
    fetch('/api/zgp/templates').then(r => r.json()).then((data) => {
      const t = (data.templates || []).find((x: any) => x.id === templateId);
      setTemplate(t);
      if (t) {
        setTitle(`${t.code} · ${t.title}`);
        setSummary(t.defaults.summary || '');
        setMotivation(t.defaults.motivation || '');
        setSpecificationImpact(t.defaults.specificationImpact || '');
        setCodeModuleAffected(t.defaults.codeModuleAffected || '');
        setVotingOptions(t.defaults.votingOptions || ['For', 'Against', 'Abstain']);
      }
    });
  }, [templateId]);

  async function handleAutofill() {
    if (!template) return;
    const r = await fetch('/api/zgp/autofill', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ templateId: template.id, brief })
    });
    const data = await r.json();
    const s = data.suggestion || {};
    if (s.summary) setSummary(s.summary);
    if (s.motivation) setMotivation(s.motivation);
    if (s.specificationImpact) setSpecificationImpact(s.specificationImpact);
    if (s.codeModuleAffected) setCodeModuleAffected(s.codeModuleAffected);
    if (Array.isArray(s.votingOptions)) setVotingOptions(s.votingOptions);
  }

  async function handleReview() {
    const text = [title, summary, motivation, specificationImpact].join('\n\n');
    const r = await fetch('/api/zgp/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    const data = await r.json();
    setReview(data.review || '');
  }

  async function handleSubmit(status: 'draft' | 'submitted') {
    if (!template) return;
    setSaving(true);
    try {
      const r = await fetch('/api/zgp/proposals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateId: template.id,
          title,
          summary,
          motivation,
          specificationImpact,
          codeModuleAffected,
          votingOptions,
          fundingNeeded,
        })
      });
      const data = await r.json();
      if (data.proposal) {
        if (status === 'submitted') {
          // Immediately update status to submitted as a new version
          await fetch(`/api/zgp/proposals/${data.proposal.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'submitted' })
          });
        }
        setProposal(data.proposal);
      }
    } finally {
      setSaving(false);
    }
  }

  const exportHref = proposal ? `/api/zgp/export?id=${proposal.id}` : '';

  return (
    <div className="min-h-screen px-6 py-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Draft Proposal</h1>
          {template && (
            <p className="text-gray-600 text-sm">Template: {template.code} — {template.title} ({template.category})</p>
          )}
        </div>
        <button onClick={() => router.push('/dao/templates')} className="text-blue-600 underline">Back to Library</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Proposal title" className="w-full border rounded px-3 py-2" />

          <div>
            <div className="flex items-center justify-between">
              <label className="font-medium">Summary</label>
            </div>
            <TextArea value={summary} onChange={(e: any) => setSummary(e.target.value)} />
          </div>

          <div>
            <label className="font-medium">Motivation</label>
            <TextArea value={motivation} onChange={(e: any) => setMotivation(e.target.value)} />
          </div>

          <div>
            <label className="font-medium">Specification / Impact</label>
            <TextArea value={specificationImpact} onChange={(e: any) => setSpecificationImpact(e.target.value)} />
          </div>

          <div>
            <label className="font-medium">Code / Module to be Affected</label>
            <input value={codeModuleAffected} onChange={(e) => setCodeModuleAffected(e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="font-medium">Voting Options</label>
            <input
              value={votingOptions.join(', ')}
              onChange={(e) => setVotingOptions(e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="font-medium">Funding Needed (optional)</label>
            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Amount"
                value={fundingAmount}
                onChange={(e) => setFundingAmount(e.target.value === '' ? '' : Number(e.target.value))}
                className="w-1/2 border rounded px-3 py-2"
              />
              <input
                placeholder="Currency"
                value={fundingCurrency}
                onChange={(e) => setFundingCurrency(e.target.value)}
                className="w-1/2 border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button onClick={() => handleSubmit('draft')} disabled={saving} className="px-4 py-2 rounded bg-gray-900 text-white disabled:opacity-50">
              Save Draft
            </button>
            <button onClick={() => handleSubmit('submitted')} disabled={saving} className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50">
              Submit to DAO
            </button>
            {proposal && (
              <a href={exportHref} className="px-4 py-2 rounded border" target="_blank" rel="noreferrer">Export PDF</a>
            )}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="border rounded p-3">
            <div className="font-medium mb-2">AI Tools</div>
            <textarea value={brief} onChange={(e) => setBrief(e.target.value)} placeholder="Brief for autofill (what are you trying to do?)" className="w-full border rounded px-3 py-2 min-h-[80px]" />
            <div className="flex gap-2 mt-2">
              <button onClick={handleAutofill} className="px-3 py-2 rounded border">Auto-fill</button>
              <button onClick={handleReview} className="px-3 py-2 rounded border">AI Review</button>
            </div>
            {review && (
              <div className="mt-3 text-sm text-gray-700 whitespace-pre-wrap">{review}</div>
            )}
          </div>

          {proposal && (
            <div className="border rounded p-3">
              <div className="font-medium">Submission Preview</div>
              <div className="text-xs text-gray-500">{proposal.proposalNumber}</div>
              <div className="text-sm mt-2">Latest Version: v{proposal.latestVersion}</div>
              <button onClick={() => router.push(`/dao/templates`)} className="text-blue-600 underline mt-2">Draft another</button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}