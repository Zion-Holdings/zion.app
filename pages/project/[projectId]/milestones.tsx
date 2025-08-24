import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import MilestoneForm from '../../../components/monetization/MilestoneForm';
import MilestoneCard from '../../../components/monetization/MilestoneCard';
import { Milestone } from '../../../utils/types/milestones';
import { createMilestone, fetchMilestones, updateMilestoneStatus } from '../../../utils/api/milestones-client';

// Minimal demo auth role detection via query/cookies; replace with real auth
function getRoleFromEnvOrQuery(): 'client' | 'talent' | 'admin' {
  if (typeof window === 'undefined') return 'client';
  const url = new URL(window.location.href);
  const r = url.searchParams.get('role');
  if (r === 'talent' || r === 'admin') return r;
  return 'client';
}

export default function ProjectMilestonesPage() {
  const router = useRouter();
  const { projectId } = router.query as { projectId: string };

  const [role, setRole] = useState<'client' | 'talent' | 'admin'>(() => getRoleFromEnvOrQuery());
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setRole(getRoleFromEnvOrQuery());
  }, []);

  useEffect(() => {
    if (!projectId) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMilestones(projectId);
        if (!cancelled) setMilestones(data.milestones || []);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Failed to load milestones');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [projectId]);

  const handleCreate = async (payload: { title: string; description?: string; dueDate: string; amountUsd: number }) => {
    if (!projectId) return;
    const res = await createMilestone(projectId, payload);
    setMilestones((prev) => [res.milestone, ...prev]);
  };

  const handleAction = async (
    action: 'in_progress' | 'submitted' | 'approved' | 'paid',
    milestoneId: string
  ) => {
    if (!projectId) return;
    const map: Record<string, string> = {
      in_progress: 'In Progress',
      submitted: 'Submitted',
      approved: 'Approved',
      paid: 'Paid',
    };
    const status = map[action];
    const res = await updateMilestoneStatus(projectId, milestoneId, { status });
    setMilestones((prev) => prev.map((m) => (m.id === milestoneId ? res.milestone : m)));
  };

  return (
    <div>
      <Head>
        <title>Project Milestones</title>
        <meta name="description" content="Track project deliverables and milestone payments" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Milestones</h1>
          <p className="text-sm text-gray-600">Project: {projectId}</p>
        </div>

        {role !== 'talent' && (
          <div className="mb-8 p-4 rounded bg-gray-50 border">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Add Milestone</h2>
              <span className="text-xs text-gray-500">Role: {role}</span>
            </div>
            <MilestoneForm onSubmit={handleCreate} />
          </div>
        )}

        {loading && <div>Loading milestones...</div>}
        {error && <div className="text-red-600">{error}</div>}

        {!loading && !error && (
          <div className="space-y-4">
            {milestones.length === 0 && (
              <div className="text-gray-600">No milestones yet. {role !== 'talent' ? 'Create the first one.' : ''}</div>
            )}
            {milestones.map((m) => (
              <MilestoneCard key={m.id} milestone={m} projectId={String(projectId)} role={role} onAction={handleAction} />
            ))}
          </div>
        )}

        <div className="mt-12 text-xs text-gray-500">
          Integration hooks ready: on Approved &rarr; trigger payout intent; on Paid &rarr; capture via Stripe/PayPal/Escrow.
        </div>
      </div>
    </div>
  );
}