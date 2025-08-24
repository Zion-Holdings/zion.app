import React, { useMemo, useState } from 'react';
import type { NextPage } from 'next';
import { TALENT_PROFILES, type TalentProfile } from '../data/talent';
import { logTeamBuilderEvent } from '../components/monetization/AnalyticsEvents';

export type TeamRoleRecommendation = {
  role: string;
  description: string;
  hourlyRangeUsd: { min: number; max: number };
  estimatedWeeklyHours: number;
  quantity: number;
  preferredLocations?: string[];
  requiredSkills?: string[];
};

export type TeamRecommendationResponse = {
  team: TeamRoleRecommendation[];
  assumptions: string[];
  weeklyBurnUsd: number;
  estimatedProjectTotalUsd: number;
};

const defaultTechAreas = ['Frontend', 'Backend', 'Fullstack', 'AI/ML', 'Data', 'DevOps', 'Security', 'Mobile', 'Design', 'PM'];

const currency = (n: number) => `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

function matchTalentForRole(role: TeamRoleRecommendation, filters: { verifiedOnly: boolean; region?: string }) {
  const skills = new Set((role.requiredSkills || []).map(s => s.toLowerCase()));
  const roleName = role.role.toLowerCase();
  return TALENT_PROFILES.filter((p) => {
    if (filters.region && !p.location.toLowerCase().includes(filters.region.toLowerCase())) return false;
    // verifiedOnly placeholder: no verification flag in dataset yet
    const hasOverlap = p.skills.some(s => skills.size === 0 || skills.has(s.toLowerCase()));
    const titleMatch = p.title.toLowerCase().includes(roleName) || roleName.includes(p.title.toLowerCase());
    return hasOverlap || titleMatch;
  });
}

const VisualBudgetBar = ({ value, max }: { value: number; max: number }) => {
  const pct = Math.min(100, Math.round((value / Math.max(1, max)) * 100));
  const color = pct <= 60 ? 'bg-green-500' : pct <= 90 ? 'bg-yellow-500' : 'bg-red-500';
  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className={`h-3 ${color} rounded`} style={{ width: `${pct}%` }} />
    </div>
  );
};

const TeamBuilderPage: NextPage = () => {
  const [projectName, setProjectName] = useState('');
  const [goals, setGoals] = useState('');
  const [timeline, setTimeline] = useState('Q4 pilot, GA in Q1');
  const [budget, setBudget] = useState<number | ''>('');
  const [techAreas, setTechAreas] = useState<string[]>(['Fullstack', 'AI/ML', 'DevOps']);
  const [lockBudget, setLockBudget] = useState(false);
  const [lockTimeline, setLockTimeline] = useState(false);
  const [filters, setFilters] = useState<{ verifiedOnly: boolean; region?: string }>({ verifiedOnly: false });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<TeamRecommendationResponse | null>(null);

  const techAreasString = techAreas.join(', ');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRecommendation(null);
    try {
      const resp = await fetch('/api/generate-team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectName, goals, timeline, budget, techAreas, lockBudget, lockTimeline }),
      });
      if (!resp.ok) throw new Error(`Request failed: ${resp.status}`);
      const data: TeamRecommendationResponse = await resp.json();
      setRecommendation(data);
      logTeamBuilderEvent({ type: 'team_generated', weeklyBurnUsd: data.weeklyBurnUsd, budget: typeof budget === 'number' ? budget : Number(budget), roles: data.team.map(r => ({ role: r.role, quantity: r.quantity })) });
    } catch (err: any) {
      setError(err?.message || 'Failed to generate team');
    } finally {
      setLoading(false);
    }
  };

  const computeWeeksFromTimeline = (t?: string) => {
    if (!t) return 12;
    const w = t.match(/(\d+)\s*(week|weeks)/i);
    if (w) return Number(w[1]);
    const q = t.match(/Q(\d)/i);
    if (q) return 12;
    return 12;
  };

  const computeWeeklyBurn = (team: TeamRoleRecommendation[]) =>
    team.reduce((sum, r) => sum + (((r.hourlyRangeUsd.min + r.hourlyRangeUsd.max) / 2) * r.estimatedWeeklyHours * r.quantity), 0);

  const weeks = computeWeeksFromTimeline(timeline);
  const weeklyBurn = recommendation ? computeWeeklyBurn(recommendation.team) : 0;
  const totalEstimate = Math.round(weeklyBurn * weeks);

  React.useEffect(() => {
    if (budget !== '' && totalEstimate > Number(budget)) {
      // soft signal for admin inbox
      logTeamBuilderEvent({ type: 'high_budget_flagged', weeklyBurnUsd: weeklyBurn, totalEstimateUsd: totalEstimate, budget: Number(budget) });
    }
  }, [budget, totalEstimate, weeklyBurn]);

  const matchedByRole = useMemo(() => {
    if (!recommendation) return [] as { role: TeamRoleRecommendation; talent: TalentProfile[] }[];
    return recommendation.team.map((r) => ({ role: r, talent: matchTalentForRole(r, filters) }));
  }, [recommendation, filters]);

  const updateTechArea = (area: string) => {
    setTechAreas((prev) => prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]);
  };

  const inviteToTeam = (talent: TalentProfile, role: string) => {
    alert(`Invited ${talent.name} for role: ${role}`);
    logTeamBuilderEvent({ type: 'invite_sent', role, talentSlug: talent.slug });
  };

  // Inline role editing
  const changeQuantity = (index: number, delta: number) => {
    setRecommendation((prev) => {
      if (!prev) return prev;
      const before = prev.team[index];
      const team = prev.team.map((r, i) => i === index ? { ...r, quantity: Math.max(0, r.quantity + delta) } : r)
        .filter(r => r.quantity > 0);
      if (delta < 0 && before.quantity + delta <= 0) {
        logTeamBuilderEvent({ type: 'role_removed', role: before.role });
      }
      return { ...prev, team };
    });
  };

  const removeRole = (index: number) => {
    setRecommendation((prev) => {
      if (!prev) return prev;
      const removed = prev.team[index];
      const team = prev.team.filter((_, i) => i !== index);
      logTeamBuilderEvent({ type: 'role_removed', role: removed.role });
      return { ...prev, team };
    });
  };

  const [newRole, setNewRole] = useState<{ role: string; description: string; min: number | ''; max: number | ''; hours: number | ''; qty: number | '' }>({ role: '', description: '', min: '', max: '', hours: '', qty: '' });

  const addNewRole = () => {
    if (!recommendation) return;
    const min = Number(newRole.min), max = Number(newRole.max), hours = Number(newRole.hours), qty = Number(newRole.qty);
    if (!newRole.role || isNaN(min) || isNaN(max) || isNaN(hours) || isNaN(qty)) return;
    setRecommendation((prev) => prev ? ({
      ...prev,
      team: [
        ...prev.team,
        {
          role: newRole.role,
          description: newRole.description || 'Custom role',
          hourlyRangeUsd: { min, max },
          estimatedWeeklyHours: hours,
          quantity: qty,
        }
      ]
    }) : prev);
    logTeamBuilderEvent({ type: 'role_added', role: newRole.role });
    setNewRole({ role: '', description: '', min: '', max: '', hours: '', qty: '' });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Dynamic Team Builder</h1>
        <p className="opacity-80">Describe your project to receive an AI-recommended team with roles, availability, and budget estimates.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Project name</label>
            <input className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="e.g., Zion Marketplace v2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Goals / scope</label>
            <textarea className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2" rows={6} value={goals} onChange={(e) => setGoals(e.target.value)} placeholder="Describe what you need to build, users, constraints, integrations..." />
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Timeline</label>
              <input className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2" value={timeline} onChange={(e) => setTimeline(e.target.value)} placeholder="e.g., 12 weeks" />
            </div>
            <div>
              <label className="block text-sm font-medium">Budget (USD)</label>
              <input type="number" className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2" value={budget} onChange={(e) => setBudget(e.target.value === '' ? '' : Number(e.target.value))} placeholder="e.g., 120000" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Tech stack or areas</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {defaultTechAreas.map((area) => (
                <button
                  type="button"
                  key={area}
                  onClick={() => updateTechArea(area)}
                  className={`px-3 py-1 rounded-full text-sm border ${techAreas.includes(area) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white/70 dark:bg-black/30 border-gray-300 dark:border-gray-700'}`}
                >
                  {area}
                </button>
              ))}
            </div>
            <p className="text-xs opacity-70 mt-1">Selected: {techAreasString || 'None'}</p>
          </div>
          <div className="flex items-center gap-6">
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" checked={lockBudget} onChange={(e) => setLockBudget(e.target.checked)} />
              Lock budget
            </label>
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" checked={lockTimeline} onChange={(e) => setLockTimeline(e.target.checked)} />
              Lock timeline
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="text-sm">
              <span className="block">Talent pool filter</span>
              <select
                className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2"
                value={filters.region || ''}
                onChange={(e) => setFilters((f) => ({ ...f, region: e.target.value || undefined }))}
              >
                <option value="">Any Region</option>
                <option value="latam">Only LATAM</option>
                <option value="us">Only US</option>
                <option value="eu">Only EU</option>
              </select>
            </label>
            <label className="text-sm mt-6 inline-flex items-center gap-2">
              <input type="checkbox" checked={filters.verifiedOnly} onChange={(e) => setFilters((f) => ({ ...f, verifiedOnly: e.target.checked }))} />
              Only Verified
            </label>
          </div>
        </div>
        <div className="md:col-span-2">
          <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-60">
            {loading ? 'Generating…' : 'Generate Team'}
          </button>
          {error && <div className="text-red-600 mt-3 text-sm">{error}</div>}
        </div>
      </form>

      {recommendation && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4 items-start">
            <div className="md:col-span-2 space-y-2">
              <h2 className="text-xl font-semibold">Recommended team</h2>
              <ul className="pl-0">
                {recommendation.team.map((r, idx) => (
                  <li key={idx} className="border border-gray-200 dark:border-gray-800 rounded p-3 mb-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-medium">{r.quantity}× {r.role}</div>
                        <div className="opacity-70 text-sm">{r.description}</div>
                        <div className="text-sm opacity-80">
                          Rates: {currency(r.hourlyRangeUsd.min)}–{currency(r.hourlyRangeUsd.max)} / hr · {r.estimatedWeeklyHours} hrs/wk
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => changeQuantity(idx, -1)} className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700">-</button>
                        <button onClick={() => changeQuantity(idx, +1)} className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700">+</button>
                        <button onClick={() => removeRole(idx)} className="px-2 py-1 rounded bg-rose-600 text-white">Remove</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border border-gray-200 dark:border-gray-800 rounded p-4 space-y-3">
                <div className="font-medium">Add role</div>
                <div className="grid md:grid-cols-2 gap-3">
                  <label className="text-sm">
                    <span className="block">Role</span>
                    <input value={newRole.role} onChange={(e) => setNewRole(s => ({ ...s, role: e.target.value }))} className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2" placeholder="e.g., Data Engineer" />
                  </label>
                  <label className="text-sm">
                    <span className="block">Description</span>
                    <input value={newRole.description} onChange={(e) => setNewRole(s => ({ ...s, description: e.target.value }))} className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2" placeholder="Short role description" />
                  </label>
                  <label className="text-sm">
                    <span className="block">Min rate (USD/hr)</span>
                    <input type="number" value={newRole.min} onChange={(e) => setNewRole(s => ({ ...s, min: e.target.value === '' ? '' : Number(e.target.value) }))} className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2" />
                  </label>
                  <label className="text-sm">
                    <span className="block">Max rate (USD/hr)</span>
                    <input type="number" value={newRole.max} onChange={(e) => setNewRole(s => ({ ...s, max: e.target.value === '' ? '' : Number(e.target.value) }))} className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2" />
                  </label>
                  <label className="text-sm">
                    <span className="block">Hours per week</span>
                    <input type="number" value={newRole.hours} onChange={(e) => setNewRole(s => ({ ...s, hours: e.target.value === '' ? '' : Number(e.target.value) }))} className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2" />
                  </label>
                  <label className="text-sm">
                    <span className="block">Quantity</span>
                    <input type="number" value={newRole.qty} onChange={(e) => setNewRole(s => ({ ...s, qty: e.target.value === '' ? '' : Number(e.target.value) }))} className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/30 px-3 py-2" />
                  </label>
                </div>
                <button onClick={addNewRole} className="px-3 py-1.5 rounded bg-emerald-600 text-white text-sm">Add Role</button>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Budget overview</h3>
              <VisualBudgetBar value={weeklyBurn} max={Number(budget) || weeklyBurn} />
              <div className="text-sm">
                <div>Weekly burn: <span className="font-medium">{currency(weeklyBurn)}</span></div>
                <div>Total estimate: <span className="font-medium">{currency(totalEstimate)}</span></div>
                {budget !== '' && (
                  <div>Budget: <span className="font-medium">{currency(Number(budget))}</span></div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Matched talent</h3>
            {matchedByRole.map(({ role, talent }, i) => (
              <div key={i} className="rounded border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-medium mb-2">{role.quantity}× {role.role}</div>
                {talent.length === 0 ? (
                  <div className="text-sm opacity-70">No matches in current pool.</div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-3">
                    {talent.map((t) => (
                      <div key={t.slug} className="rounded border border-gray-200 dark:border-gray-800 p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{t.name}</div>
                            <div className="text-sm opacity-80">{t.title} • {t.location}</div>
                          </div>
                          <div className="text-sm font-medium">{currency(t.hourlyRateUsd)}/hr</div>
                        </div>
                        <div className="mt-2 text-sm opacity-80">{t.bio}</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {t.skills.slice(0, 6).map((s) => (
                            <span key={s} className="px-2 py-0.5 rounded-full text-xs border border-gray-300 dark:border-gray-700">{s}</span>
                          ))}
                        </div>
                        <div className="mt-3">
                          <button onClick={() => inviteToTeam(t, role.role)} className="px-3 py-1.5 rounded bg-emerald-600 text-white text-sm">Invite to Team</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="opacity-70 text-xs">
        Admin Insights coming soon: track most-requested roles and flag high-budget builds for concierge onboarding.
      </div>
    </div>
  );
};

export default TeamBuilderPage;