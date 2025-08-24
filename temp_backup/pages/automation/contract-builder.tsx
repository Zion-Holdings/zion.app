import React, { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';

type PaymentType = 'hourly' | 'fixed';

export default function ContractBuilderPage() {
  const router = useRouter();
  const [talentName, setTalentName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [scopeSummary, setScopeSummary] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [paymentType, setPaymentType] = useState<PaymentType>('hourly');
  const [currency, setCurrency] = useState('USD');
  const [hourlyRate, setHourlyRate] = useState<number>(100);
  const [weeklyHourCap, setWeeklyHourCap] = useState<number | ''>('');
  const [fixedAmount, setFixedAmount] = useState<number>(5000);
  const [milestoneSummary, setMilestoneSummary] = useState('');
  const [paymentSchedule, setPaymentSchedule] = useState('Net 15 on invoice');
  const [nda, setNda] = useState(true);
  const [ipTransfer, setIpTransfer] = useState(true);
  const [governingLaw, setGoverningLaw] = useState('Delaware, USA');
  const [revisionRounds, setRevisionRounds] = useState<number>(2);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contract, setContract] = useState<string>('');

  useEffect(() => {
    if (!router.isReady) return;
    const { talent, project } = router.query as { talent?: string; project?: string };
    if (talent && !talentName) setTalentName(decodeURIComponent(talent));
    if (project && !projectName) setProjectName(decodeURIComponent(project));
  }, [router.isReady, router.query, talentName, projectName]);

  const canSubmit = useMemo(() => {
    return (
      talentName.trim().length > 0 &&
      projectName.trim().length > 0 &&
      scopeSummary.trim().length > 0 &&
      !!startDate &&
      !!endDate &&
      (paymentType === 'hourly' ? hourlyRate > 0 : fixedAmount > 0)
    );
  }, [talentName, projectName, scopeSummary, startDate, endDate, paymentType, hourlyRate, fixedAmount]);

  async function submitForm(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    setError(null);
    setContract('');

    try {
      const body = {
        talentName,
        projectName,
        scopeSummary,
        startDate: startDate?.toISOString().slice(0, 10),
        endDate: endDate?.toISOString().slice(0, 10),
        payment:
          paymentType === 'hourly'
            ? {
                type: 'hourly',
                currency,
                hourlyRate,
                weeklyHourCap: typeof weeklyHourCap === 'number' ? weeklyHourCap : undefined,
                paymentSchedule,
              }
            : {
                type: 'fixed',
                currency,
                totalAmount: fixedAmount,
                milestoneSummary: milestoneSummary || undefined,
                paymentSchedule,
              },
        clauses: {
          nda,
          ipTransfer,
        },
        governingLaw,
        revisionRounds,
      };

      const res = await fetch('/api/ai-contract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Request failed: ${res.status}`);
      }

      const data = (await res.json()) as { contract: string };
      setContract(data.contract);
    } catch (e: any) {
      setError(e?.message || 'Failed to generate contract');
    } finally {
      setLoading(false);
    }
  }

  function copyToClipboard() {
    if (!contract) return;
    void navigator.clipboard.writeText(contract);
  }

  function downloadAsTxt() {
    if (!contract) return;
    const blob = new Blob([contract], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contract-${projectName.replace(/\s+/g, '-').toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contract Builder</h1>

      <form onSubmit={submitForm} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 dark:bg-neutral-900 p-6 rounded-lg border border-gray-200 dark:border-neutral-800">
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-1">Talent name</label>
          <input className="w-full input input-bordered" value={talentName} onChange={(e) => setTalentName(e.target.value)} placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Project name</label>
          <input className="w-full input input-bordered" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="Website Redesign" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Payment currency</label>
          <input className="w-full input input-bordered" value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder="USD" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Scope summary</label>
          <textarea className="w-full textarea textarea-bordered" rows={4} value={scopeSummary} onChange={(e) => setScopeSummary(e.target.value)} placeholder="High-level deliverables, responsibilities, and success criteria..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Start date</label>
          <DatePicker className="w-full input input-bordered" selected={startDate} onChange={(d) => setStartDate(d)} dateFormat="MMMM d, yyyy" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End date</label>
          <DatePicker className="w-full input input-bordered" selected={endDate} onChange={(d) => setEndDate(d)} dateFormat="MMMM d, yyyy" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Payment terms</label>
          <div className="flex items-center gap-4 mb-4">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="pay" checked={paymentType === 'hourly'} onChange={() => setPaymentType('hourly')} /> Hourly
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="pay" checked={paymentType === 'fixed'} onChange={() => setPaymentType('fixed')} /> Fixed
            </label>
          </div>

          {paymentType === 'hourly' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Hourly rate</label>
                <input type="number" className="w-full input input-bordered" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Weekly hour cap (optional)</label>
                <input type="number" className="w-full input input-bordered" value={weeklyHourCap} onChange={(e) => setWeeklyHourCap(e.target.value === '' ? '' : Number(e.target.value))} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Payment schedule</label>
                <input className="w-full input input-bordered" value={paymentSchedule} onChange={(e) => setPaymentSchedule(e.target.value)} placeholder="e.g., weekly, Net 15" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Total amount</label>
                <input type="number" className="w-full input input-bordered" value={fixedAmount} onChange={(e) => setFixedAmount(Number(e.target.value))} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Milestone summary (optional)</label>
                <input className="w-full input input-bordered" value={milestoneSummary} onChange={(e) => setMilestoneSummary(e.target.value)} placeholder="Phase 1 design, Phase 2 implementation..." />
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-medium mb-1">Payment schedule</label>
                <input className="w-full input input-bordered" value={paymentSchedule} onChange={(e) => setPaymentSchedule(e.target.value)} placeholder="e.g., 50% upfront, 50% on delivery" />
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Optional clauses</label>
          <div className="space-y-2">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={nda} onChange={(e) => setNda(e.target.checked)} /> NDA (Confidentiality)
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={ipTransfer} onChange={(e) => setIpTransfer(e.target.checked)} /> IP Transfer / Assignment
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Governing law</label>
          <input className="w-full input input-bordered" value={governingLaw} onChange={(e) => setGoverningLaw(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Included revision rounds</label>
          <input type="number" className="w-full input input-bordered" value={revisionRounds} onChange={(e) => setRevisionRounds(Number(e.target.value))} />
        </div>

        <div className="md:col-span-2 flex items-center gap-3">
          <button type="submit" className="btn btn-primary" disabled={!canSubmit || loading}>
            {loading ? 'Generating…' : 'Generate contract'}
          </button>
          {error && <span className="text-red-600 text-sm">{error}</span>}
        </div>
      </form>

      {contract && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-semibold">Generated Contract</h2>
            <div className="flex gap-2">
              <button className="btn btn-secondary" onClick={copyToClipboard}>Copy</button>
              <button className="btn" onClick={downloadAsTxt}>Download .txt</button>
            </div>
          </div>
          <article className="prose dark:prose-invert max-w-none whitespace-pre-wrap bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-neutral-800">
            {contract}
          </article>
        </div>
      )}
    </div>
  );
}