import Link from 'next/link';

export const metadata = {
  title: 'Disaster Recovery Playbook | Zion Tech Group',
  description: 'A concise disaster recovery playbook covering RTO, RPO, backups, and restore validation.',
};

export default function DisasterRecoveryPlaybook() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="mb-2 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Home</Link>
        <h1 className="text-3xl font-bold">Disaster Recovery Playbook</h1>
        <p className="mt-2 text-slate-400">A concise reference for RTO/RPO planning, backups, and restore validation.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-white font-semibold">RTO/RPO</h3>
            <p className="mt-2 text-sm text-slate-300">Define acceptable downtime and data-loss windows per service tier. Document dependencies, recovery order, and manual overrides.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-white font-semibold">Backups</h3>
            <p className="mt-2 text-sm text-slate-300">Use immutable backups with tested retention policies. Verify encryption, cross-region copies, and object-lock where available.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-white font-semibold">Restore validation</h3>
            <p className="mt-2 text-sm text-slate-300">Run periodic restore drills. Measure time-to-restore, validate data integrity, and update runbooks from real results.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-white font-semibold">Runbook</h3>
            <p className="mt-2 text-sm text-slate-300">Keep a single current recovery runbook with escalation contacts, system inventory, and blast-radius boundaries.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
