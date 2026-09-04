'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

type Severity = 'critical' | 'high' | 'medium' | 'low';
type Status = 'active' | 'investigating' | 'mitigating' | 'resolved';

interface Incident {
  id: string;
  title: string;
  severity: Severity;
  status: Status;
  owner: string;
  minutesAgo: number;
}

const SEVERITY_WEIGHTS: Record<Severity, number> = { critical: 40, high: 25, medium: 15, low: 5 };
const STATUS_SCORES: Record<Status, number> = { active: 0, investigating: 30, mitigating: 60, resolved: 100 };

export default function AutonomousIncidentCommanderPage() {
  const [incidents, setIncidents] = useState<Incident[]>([
    { id: 'INC-001', title: 'API latency spike on /services', severity: 'high', status: 'investigating', owner: 'Backend Team', minutesAgo: 12 },
    { id: 'INC-002', title: 'CDN cache miss rate elevated', severity: 'medium', status: 'mitigating', owner: 'DevOps', minutesAgo: 34 },
    { id: 'INC-003', title: 'SSL cert renewal pending', severity: 'low', status: 'active', owner: 'Security', minutesAgo: 120 },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newSeverity, setNewSeverity] = useState<Severity>('medium');

  const healthScore = useMemo(() => {
    if (incidents.length === 0) return 100;
    const totalWeight = incidents.reduce((sum, inc) => sum + SEVERITY_WEIGHTS[inc.severity], 0);
    const resolvedWeight = incidents.filter((i) => i.status === 'resolved').reduce((sum, inc) => sum + SEVERITY_WEIGHTS[inc.severity], 0);
    return Math.round((resolvedWeight / totalWeight) * 100);
  }, [incidents]);

  const addIncident = () => {
    if (!newTitle.trim()) return;
    setIncidents((prev) => [
      ...prev,
      {
        id: `INC-${String(prev.length + 1).padStart(3, '0')}`,
        title: newTitle.trim(),
        severity: newSeverity,
        status: 'active',
        owner: 'Unassigned',
        minutesAgo: 0,
      },
    ]);
    setNewTitle('');
  };

  const cycleStatus = (id: string) => {
    const order: Status[] = ['active', 'investigating', 'mitigating', 'resolved'];
    setIncidents((prev) =>
      prev.map((inc) => {
        if (inc.id !== id) return inc;
        const idx = order.indexOf(inc.status);
        return { ...inc, status: order[(idx + 1) % order.length] };
      })
    );
  };

  const severityColor = (s: Severity) =>
    s === 'critical' ? 'text-red-400 border-red-500/30 bg-red-500/10' :
    s === 'high' ? 'text-orange-400 border-orange-500/30 bg-orange-500/10' :
    s === 'medium' ? 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10' :
    'text-blue-400 border-blue-500/30 bg-blue-500/10';

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <Link href="/ai-lab" className="mb-4 inline-flex items-center text-sm text-purple-400 hover:text-purple-300">
          ← Back to AI Lab
        </Link>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-400">Reliability Intelligence</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Autonomous Incident Commander</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Run incident triage simulations with AI-suggested owner assignment, communication timelines, and rollback readiness.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {/* Add incident */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <h3 className="text-sm font-semibold text-slate-200">New Incident</h3>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Describe the incident..."
                  className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none"
                />
                <select
                  value={newSeverity}
                  onChange={(e) => setNewSeverity(e.target.value as Severity)}
                  className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
                >
                  <option value="critical">Critical</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <button
                  onClick={addIncident}
                  className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Incident list */}
            <div className="space-y-3">
              {incidents.map((inc) => (
                <div key={inc.id} className={`rounded-xl border p-4 ${severityColor(inc.severity)}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs opacity-60">{inc.id}</span>
                        <span className="rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase">{inc.severity}</span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-white">{inc.title}</p>
                      <p className="mt-1 text-xs opacity-60">Owner: {inc.owner} · {inc.minutesAgo}m ago</p>
                    </div>
                    <button
                      onClick={() => cycleStatus(inc.id)}
                      className="rounded-lg border border-slate-600 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-purple-400"
                    >
                      {inc.status}
                    </button>
                  </div>
                </div>
              ))}
              {incidents.length === 0 && (
                <p className="text-center text-sm text-slate-500">No active incidents. System healthy.</p>
              )}
            </div>
          </div>

          {/* Health score */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-slate-900/80 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">System Health</p>
              <p className="mt-3 text-5xl font-bold text-white">{healthScore}</p>
              <p className="mt-1 text-sm text-slate-400">/ 100</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className={`h-full rounded-full transition-all ${
                    healthScore >= 80 ? 'bg-emerald-500' : healthScore >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${healthScore}%` }}
                />
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-300">Summary</h3>
              <div className="mt-3 space-y-2 text-sm text-slate-300">
                <p>Active: {incidents.filter((i) => i.status === 'active').length}</p>
                <p>Investigating: {incidents.filter((i) => i.status === 'investigating').length}</p>
                <p>Mitigating: {incidents.filter((i) => i.status === 'mitigating').length}</p>
                <p>Resolved: {incidents.filter((i) => i.status === 'resolved').length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
