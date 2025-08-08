import React, { useEffect, useMemo, useState } from 'react';
import { TalentProfile } from '../../data/talent';

export type HireRequestModalProps = {
  open: boolean;
  onClose: () => void;
  selectedTalent: TalentProfile | null;
};

export default function HireRequestModal({ open, onClose, selectedTalent }: HireRequestModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectOverview, setProjectOverview] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isAuthed = useMemo(() => {
    if (typeof window === 'undefined') return false;
    try {
      const raw = localStorage.getItem('authUser');
      return !!raw;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    try {
      if (isAuthed) {
        const raw = localStorage.getItem('authUser');
        if (raw) {
          const user = JSON.parse(raw);
          setName(user.name ?? '');
          setEmail(user.email ?? '');
        }
      }
    } catch {}
  }, [open, isAuthed]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedTalent) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/hire-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          talentSlug: selectedTalent.slug,
          projectOverview,
          timeline,
          budgetRange,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full sm:max-w-lg bg-white dark:bg-gray-900 rounded-t-2xl sm:rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Request to Hire</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{selectedTalent ? `Talent: ${selectedTalent.name}` : ''}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="mt-6">
            <div className="rounded-lg bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4">
              Request submitted. Our team will reach out shortly.
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={onClose} className="enhanced-button enhanced-button-primary">Close</button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2" />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Project Overview</label>
              <textarea value={projectOverview} onChange={(e) => setProjectOverview(e.target.value)} rows={4} required className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Timeline</label>
                <input type="date" value={timeline} onChange={(e) => setTimeline(e.target.value)} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Budget Range</label>
                <input value={budgetRange} onChange={(e) => setBudgetRange(e.target.value)} placeholder="$10k - $25k" className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2" />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button type="button" onClick={onClose} className="enhanced-button enhanced-button-secondary">Cancel</button>
              <button type="submit" disabled={submitting} className="enhanced-button enhanced-button-primary">
                {submitting ? 'Submitting…' : 'Submit Request'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}