'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';
import {
  INITIAL_AGENT_LOGS,
  INITIAL_AGENT_STATUS,
  WAVE_DATA,
  CRON_JOBS,
  TASKS,
  IMPACT_METRICS,
  type AgentLogEntry,
  type AgentStatus,
} from '@/data/agent-logs';

// ── Types ──────────────────────────────────────────────────────────────────

type ViewMode = 'operations' | 'client';
type TabId = 'fleet' | 'waves' | 'tasks' | 'activity' | 'showcase' | 'compare' | 'impact';

interface DashboardProps {
  defaultView?: ViewMode;
  defaultTab?: TabId;
}

// ── Local Storage Helpers ──────────────────────────────────────────────────

function loadLogs(): AgentLogEntry[] {
  if (typeof window === 'undefined') return INITIAL_AGENT_LOGS;
  try {
    const stored = localStorage.getItem('agent-logs');
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return INITIAL_AGENT_LOGS;
}

function saveLogs(logs: AgentLogEntry[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('agent-logs', JSON.stringify(logs));
}

function loadStatuses(): AgentStatus[] {
  if (typeof window === 'undefined') return INITIAL_AGENT_STATUS;
  try {
    const stored = localStorage.getItem('agent-statuses');
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return INITIAL_AGENT_STATUS;
}

function _saveStatuses(statuses: AgentStatus[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('agent-statuses', JSON.stringify(statuses));
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function PulseDot({ active }: { active: boolean }) {
  return (
    <span className="relative flex h-2.5 w-2.5 shrink-0">
      {active && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />}
      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${active ? 'bg-emerald-500' : 'bg-slate-500'}`} />
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    ok: 'bg-emerald-500/20 text-emerald-400',
    error: 'bg-red-500/20 text-red-400',
    stale: 'bg-amber-500/20 text-amber-400',
    'in-progress': 'bg-amber-500/20 text-amber-400',
    queued: 'bg-slate-500/20 text-slate-400',
    done: 'bg-emerald-500/20 text-emerald-400',
    active: 'bg-emerald-500/20 text-emerald-400',
    available: 'bg-blue-500/20 text-blue-400',
    idle: 'bg-slate-500/20 text-slate-400',
    blocked: 'bg-red-500/20 text-red-400',
    pending: 'bg-slate-500/20 text-slate-400',
    success: 'bg-emerald-500/20 text-emerald-400',
    partial: 'bg-amber-500/20 text-amber-400',
    failed: 'bg-red-500/20 text-red-400',
  };
  return <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium ${map[status] || 'bg-slate-500/20 text-slate-400'}`}>{status}</span>;
}

function CategoryBadge({ category }: { category?: string }) {
  const map: Record<string, string> = {
    wave: 'bg-purple-500/20 text-purple-300',
    fix: 'bg-amber-500/20 text-amber-300',
    integration: 'bg-cyan-500/20 text-cyan-300',
    research: 'bg-blue-500/20 text-blue-300',
    quality: 'bg-emerald-500/20 text-emerald-300',
    infra: 'bg-orange-500/20 text-orange-300',
    coordination: 'bg-pink-500/20 text-pink-300',
    deploy: 'bg-indigo-500/20 text-indigo-300',
    design: 'bg-rose-500/20 text-rose-300',
    monitoring: 'bg-violet-500/20 text-violet-300',
    security: 'bg-red-500/20 text-red-300',
    content: 'bg-teal-500/20 text-teal-300',
    feature: 'bg-sky-500/20 text-sky-300',
  };
  if (!category) return null;
  return <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono uppercase ${map[category] || 'bg-slate-500/20 text-slate-400'}`}>{category}</span>;
}

// ── Sparkline Chart ─────────────────────────────────────────────────────────

function Sparkline({ data, color = '#a78bfa', height = 40 }: { data: number[]; color?: string; height?: number }) {
  if (!data.length) return null;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const w = 100;
  const points = data.map((v, i) => `${(i / (data.length - 1)) * w},${height - ((v - min) / range) * (height - 4) - 2}`).join(' ');
  const areaPoints = `0,${height} ${points} ${w},${height}`;
  return (
    <svg viewBox={`0 0 ${w} ${height}`} className="w-full" style={{ height }} preserveAspectRatio="none">
      <polygon points={areaPoints} fill={color} opacity="0.1" />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

// ── Weekly Heatmap ──────────────────────────────────────────────────────────

function WeeklyHeatmap() {
  const weeks = useMemo(() => {
    const data: { day: string; hours: number }[] = [];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    days.forEach(day => {
      data.push({ day, hours: Math.floor(Math.random() * 18 + 6) });
    });
    return data;
  }, []);

  const maxHours = Math.max(...weeks.map(d => d.hours));

  return (
    <div className="grid grid-cols-7 gap-1">
      {weeks.map(d => {
        const intensity = d.hours / maxHours;
        return (
          <div key={d.day} className="text-center">
            <div
              className="w-full aspect-square rounded-md mb-1 transition-all hover:scale-110"
              style={{ backgroundColor: `rgba(139, 92, 246, ${Math.max(0.15, intensity)})` }}
              title={`${d.day}: ${d.hours}h active`}
            />
            <div className="text-[8px] text-slate-500">{d.day}</div>
            <div className="text-[9px] text-slate-400 font-mono">{d.hours}h</div>
          </div>
        );
      })}
    </div>
  );
}

// ── Activity Timeline ──────────────────────────────────────────────────────

function ActivityTimeline({ entries }: { entries: AgentLogEntry[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-pink-500/20 to-transparent" />
      <div className="space-y-1">
        {entries.slice(0, 20).map((entry, i) => (
          <div key={entry.id || i} className="relative flex gap-3 pl-1">
            <div className="relative z-10 mt-1.5">
              <div className={`w-2.5 h-2.5 rounded-full border-2 ${
                entry.category === 'integration' ? 'bg-cyan-500 border-cyan-400' :
                entry.category === 'coordination' ? 'bg-pink-500 border-pink-400' :
                entry.category === 'research' ? 'bg-blue-500 border-blue-400' :
                entry.category === 'quality' ? 'bg-emerald-500 border-emerald-400' :
                entry.category === 'infra' ? 'bg-orange-500 border-orange-400' :
                entry.category === 'fix' ? 'bg-amber-500 border-amber-400' :
                entry.category === 'deploy' ? 'bg-indigo-500 border-indigo-400' :
                entry.category === 'monitoring' ? 'bg-violet-500 border-violet-400' :
                entry.category === 'security' ? 'bg-red-500 border-red-400' :
                entry.category === 'wave' ? 'bg-purple-500 border-purple-400' :
                'bg-slate-500 border-slate-400'
              }`} />
            </div>
            <div className="flex-1 min-w-0 pb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono text-slate-500">{entry.timestamp}</span>
                <span className="text-xs text-purple-300 font-medium">{entry.bot}</span>
                <CategoryBadge category={entry.category} />
                {entry.duration && <span className="text-[9px] text-slate-600">⏱ {entry.duration}</span>}
                {entry.impact && <span className={`text-[9px] px-1.5 py-0.5 rounded ${entry.impact === 'critical' ? 'bg-red-500/20 text-red-400' : entry.impact === 'high' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-700 text-slate-400'}`}>{entry.impact}</span>}
              </div>
              <div className="text-sm text-slate-200 font-medium mt-0.5">{entry.action}</div>
              <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">{entry.result}</div>
              {(entry.filesChanged || entry.linesChanged) && (
                <div className="flex gap-2 mt-1">
                  {entry.filesChanged && <span className="text-[9px] text-slate-600">📁 {entry.filesChanged} files</span>}
                  {entry.linesChanged && <span className="text-[9px] text-slate-600">📝 {entry.linesChanged} lines</span>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Agent Card ─────────────────────────────────────────────────────────────

function AgentCard({ agent, compact }: { agent: AgentStatus; compact?: boolean }) {
  const recentActivity = useMemo(() => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 12 + 2));
  }, []);

  if (compact) {
    return (
      <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800/60 rounded-xl px-4 py-3 hover:border-purple-500/30 transition-colors">
        <PulseDot active={agent.status === 'active'} />
        <span className="text-xl">{agent.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-medium text-xs">{agent.name}</span>
            <StatusBadge status={agent.status} />
          </div>
          <div className="text-[10px] text-slate-500 truncate">{agent.currentTask}</div>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono text-purple-300">{agent.tasksCompleted}</div>
          <div className="text-[9px] text-slate-600">tasks</div>
        </div>
        <div className="w-16 h-8">
          <Sparkline data={recentActivity} color={agent.status === 'active' ? '#34d399' : '#64748b'} height={32} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-5 hover:border-purple-500/30 transition-all group">
      <div className="flex items-start gap-4">
        <div className="text-3xl">{agent.emoji}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-sm">{agent.name}</h3>
            <StatusBadge status={agent.status} />
          </div>
          <div className="text-[10px] text-slate-500 mb-2">{agent.telegram} · {agent.role}</div>
          <div className="text-xs text-slate-400 mb-2">{agent.currentTask}</div>
          {agent.achievements && agent.achievements.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {agent.achievements.slice(0, 2).map(ach => (
                <span key={ach.id} className="text-[9px] bg-yellow-500/10 text-yellow-400/80 px-1.5 py-0.5 rounded-full" title={ach.description}>
                  {ach.icon} {ach.title}
                </span>
              ))}
            </div>
          )}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Total', value: agent.tasksCompleted, color: 'text-purple-400' },
              { label: 'Today', value: agent.todayActions, color: 'text-emerald-400' },
              { label: 'Week', value: agent.weekActions, color: 'text-pink-400' },
              { label: 'Hours', value: agent.totalHoursActive, color: 'text-cyan-400' },
            ].map(m => (
              <div key={m.label} className="bg-slate-800/50 rounded-lg px-2 py-1.5 text-center">
                <div className={`text-sm font-bold ${m.color}`}><AnimatedCounter target={m.value} /></div>
                <div className="text-[8px] text-slate-500 uppercase">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-800/40 text-[10px] text-slate-500">
        <span>Uptime: {agent.uptime}</span>
        <span>Avg: {agent.avgResponseTime}</span>
        <span>Last: {agent.lastActionTime}</span>
      </div>
    </div>
  );
}

// ── Comparison Table ────────────────────────────────────────────────────────

function ComparisonTable({ statuses }: { statuses: AgentStatus[] }) {
  const metrics: { key: string; label: string; format: (v: string | number) => string }[] = [
    { key: 'tasksCompleted', label: 'Tasks', format: (v: string | number) => String(v) },
    { key: 'todayActions', label: 'Today', format: (v: string | number) => String(v) },
    { key: 'weekActions', label: 'Week', format: (v: string | number) => String(v) },
    { key: 'servicesCreated', label: 'Services', format: (v: string | number) => String(v) },
    { key: 'bugsFixed', label: 'Bugs Fixed', format: (v: string | number) => String(v) },
    { key: 'deploymentsCompleted', label: 'Deploys', format: (v: string | number) => String(v) },
    { key: 'totalHoursActive', label: 'Hours', format: (v: string | number) => typeof v === 'number' ? v.toLocaleString() : String(v) },
    { key: 'uptime', label: 'Uptime', format: (v: string | number) => typeof v === 'string' ? v : `${v}%` },
    { key: 'avgResponseTime', label: 'Avg Response', format: (v: string | number) => typeof v === 'string' ? v : `${v}s` },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-slate-800/60">
            <th className="text-left py-2 px-3 text-slate-400 font-medium">Agent</th>
            <th className="text-left py-2 px-3 text-slate-400 font-medium">Status</th>
            {metrics.map(m => (
              <th key={m.key} className="text-right py-2 px-3 text-slate-400 font-medium hidden md:table-cell">{m.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {statuses.map(agent => (
            <tr key={agent.telegram} className="border-b border-slate-800/20 hover:bg-slate-800/20 transition-colors">
              <td className="py-2 px-3">
                <div className="flex items-center gap-2">
                  <span>{agent.emoji}</span>
                  <div>
                    <div className="font-medium text-slate-200">{agent.name}</div>
                    <div className="text-[9px] text-slate-500">{agent.telegram}</div>
                  </div>
                </div>
              </td>
              <td className="py-2 px-3"><StatusBadge status={agent.status} /></td>
              {metrics.map(m => {
                const val = (agent as unknown as Record<string, string | number>)[m.key];
                return (
                  <td key={m.key} className="text-right py-2 px-3 text-slate-300 font-mono hidden md:table-cell">
                    {m.format(val)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Achievement Badges ─────────────────────────────────────────────────────

function AchievementBadges({ statuses }: { statuses: AgentStatus[] }) {
  const allAchievements = statuses.flatMap(s => (s.achievements || []).map(a => ({ ...a, agent: s.name, agentEmoji: s.emoji })));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {allAchievements.map((ach) => (
        <div key={ach.id} className="bg-slate-900/60 border border-slate-800/60 rounded-xl p-4 hover:border-yellow-500/30 transition-all">
          <div className="flex items-start gap-3">
            <div className="text-2xl">{ach.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-yellow-500/10 text-yellow-400 px-1.5 py-0.5 rounded-full capitalize">{ach.category}</span>
                <span className="text-[9px] text-slate-500">{ach.date}</span>
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">{ach.title}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{ach.description}</div>
              <div className="text-[10px] text-purple-400 mt-1">{ach.agentEmoji} {ach.agent}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Impact Metrics Grid ─────────────────────────────────────────────────────

function ImpactMetricsGrid() {
  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    emerald: { bg: 'from-emerald-500/10 to-emerald-900/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
    purple: { bg: 'from-purple-500/10 to-purple-900/10', text: 'text-purple-400', border: 'border-purple-500/20' },
    pink: { bg: 'from-pink-500/10 to-pink-900/10', text: 'text-pink-400', border: 'border-pink-500/20' },
    cyan: { bg: 'from-cyan-500/10 to-cyan-900/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
    amber: { bg: 'from-amber-500/10 to-amber-900/10', text: 'text-amber-400', border: 'border-amber-500/20' },
    violet: { bg: 'from-violet-500/10 to-violet-900/10', text: 'text-violet-400', border: 'border-violet-500/20' },
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {IMPACT_METRICS.map((m, i) => {
        const c = colorMap[m.color] || colorMap.purple;
        return (
          <div key={i} className={`bg-gradient-to-br ${c.bg} border ${c.border} rounded-xl p-4 hover:scale-105 transition-transform`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg">{m.icon}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${m.trend === 'up' ? 'bg-emerald-500/20 text-emerald-400' : m.trend === 'down' ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-700/40 text-slate-400'}`}>
                {m.trend === 'up' ? '↑' : m.trend === 'down' ? '↓' : '→'} {m.trendValue}
              </span>
            </div>
            <div className={`text-2xl font-bold ${c.text}`}><AnimatedCounter target={m.value} />{m.unit === '%' ? '%' : m.unit === 'min' ? 'm' : ''}</div>
            <div className="text-[10px] text-slate-400 mt-1">{m.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// ── Add Log Entry Form ─────────────────────────────────────────────────────

function AddLogEntryForm({ onAdd }: { onAdd: (entry: AgentLogEntry) => void }) {
  const [open, setOpen] = useState(false);
  const [bot, setBot] = useState('@OWL');
  const [action, setAction] = useState('');
  const [result, setResult] = useState('');
  const [category, setCategory] = useState<AgentLogEntry['category']>('integration');
  const [duration, setDuration] = useState('');
  const [impact, setImpact] = useState<AgentLogEntry['impact']>('medium');

  const handleSubmit = () => {
    if (!action.trim()) return;
    const entry: AgentLogEntry = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2'),
      bot,
      action: action.trim(),
      result: result.trim(),
      category,
      duration: duration.trim() || undefined,
      impact,
    };
    onAdd(entry);
    setAction('');
    setResult('');
    setDuration('');
    setOpen(false);
  };

  return (
    <div className="mb-4">
      {!open ? (
        <button onClick={() => setOpen(true)} className="w-full text-center py-2 rounded-lg border border-dashed border-slate-700 text-slate-500 text-xs hover:border-purple-500/50 hover:text-purple-300 transition-colors">
          + Log New Action
        </button>
      ) : (
        <div className="bg-slate-900/80 border border-purple-500/20 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-purple-300">Log New Action</span>
            <button onClick={() => setOpen(false)} className="text-slate-500 hover:text-white text-xs">✕</button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <select value={bot} onChange={e => setBot(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 px-3 py-2">
              {INITIAL_AGENT_STATUS.map(a => <option key={a.telegram} value={a.telegram}>{a.emoji} {a.name}</option>)}
            </select>
            <select value={category} onChange={e => setCategory(e.target.value as AgentLogEntry['category'])} className="bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 px-3 py-2">
              {['integration', 'fix', 'research', 'quality', 'infra', 'coordination', 'deploy', 'design', 'monitoring', 'security', 'wave', 'content', 'feature'].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={impact} onChange={e => setImpact(e.target.value as AgentLogEntry['impact'])} className="bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 px-3 py-2">
              {['low', 'medium', 'high', 'critical'].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <input value={action} onChange={e => setAction(e.target.value)} placeholder="Action description..." className="w-full bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 px-3 py-2 placeholder-slate-500" />
          <textarea value={result} onChange={e => setResult(e.target.value)} placeholder="Result / details..." rows={2} className="w-full bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 px-3 py-2 placeholder-slate-500 resize-none" />
          <div className="flex items-center gap-2">
            <input value={duration} onChange={e => setDuration(e.target.value)} placeholder="Duration (e.g. 30m)" className="flex-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 px-3 py-2 placeholder-slate-500" />
            <button onClick={handleSubmit} className="px-4 py-2 bg-purple-600 text-white text-xs rounded-lg hover:bg-purple-500 transition">Log</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Client Showcase View ───────────────────────────────────────────────────

function ClientShowcaseView({ logs, statuses, onSwitchView }: { logs: AgentLogEntry[]; statuses: AgentStatus[]; onSwitchView: () => void }) {
  const activeBots = statuses.filter(b => b.status === 'active').length;
  const totalServices = 833;
  const totalWaves = WAVE_DATA.length;
  const totalTasksCompleted = statuses.reduce((s, b) => s + b.tasksCompleted, 0);
  const totalServicesInWaves = WAVE_DATA.reduce((s, w) => s + w.services, 0);
  const [currentTime, setCurrentTime] = useState('');
  const [spotlightIdx, setSpotlightIdx] = useState(0);

  useEffect(() => {
    const update = () => setCurrentTime(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo', hour12: true, weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setSpotlightIdx(i => (i + 1) % statuses.length), 4000);
    return () => clearInterval(interval);
  }, [statuses.length]);

  const spotlight = statuses[spotlightIdx];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-purple-500/20">⚡</div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Zion AI Agent Fleet</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Live operations · São Paulo · {currentTime || 'Loading...'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onSwitchView} className="text-xs text-slate-400 hover:text-white transition border border-slate-700/60 rounded-lg px-3 py-1.5 hover:border-slate-500">← Ops View</button>
            <Link href="/" className="text-xs text-slate-400 hover:text-white transition border border-slate-700/60 rounded-lg px-3 py-1.5 hover:border-slate-500">← Main Site</Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
            <PulseDot active={true} />
            <span className="text-xs text-emerald-400 font-medium">{activeBots} AI Agents Active Now</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Built & Maintained by AI Agents
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            This website is powered by a fleet of {statuses.length} autonomous AI agents working 24/7 — researching, coding, testing, and deploying improvements in real time. Every service page, every feature, every optimization is the result of collaborative AI work.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
          {[
            { value: totalServices, label: 'Services Catalog', color: 'purple', icon: '🛠️' },
            { value: totalWaves, label: 'Waves Integrated', color: 'emerald', icon: '🌊' },
            { value: totalTasksCompleted, label: 'Tasks Completed', color: 'pink', icon: '✅' },
            { value: totalServicesInWaves, label: 'Total Services in Waves', color: 'cyan', icon: '📦' },
            { value: '24/7', label: 'Uptime', color: 'amber', icon: '⏰' },
          ].map((m, i) => (
            <div key={i} className={`bg-gradient-to-br from-${m.color}-500/10 to-${m.color}-900/10 border border-${m.color}-500/20 rounded-xl p-5 text-center hover:scale-105 transition-transform`}>
              <div className="text-2xl mb-1">{m.icon}</div>
              <div className={`text-3xl font-bold text-${m.color}-400 mb-1`}>{typeof m.value === 'number' ? <AnimatedCounter target={m.value} /> : m.value}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Rotating Agent Spotlight */}
        {spotlight && (
          <div className="mb-12 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <div className="text-center mb-2">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">Agent Spotlight</span>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="text-5xl">{spotlight.emoji}</div>
              <div>
                <div className="text-xl font-bold text-white">{spotlight.name}</div>
                <div className="text-sm text-purple-300">{spotlight.role}</div>
                <div className="text-xs text-slate-400 mt-1">Currently: {spotlight.currentTask}</div>
                <div className="flex gap-4 mt-2 text-xs">
                  <span className="text-emerald-400">{spotlight.uptime} uptime</span>
                  <span className="text-purple-400">{spotlight.tasksCompleted} tasks</span>
                  <span className="text-cyan-400">{spotlight.avgResponseTime} avg response</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-1 mt-4">
              {statuses.map((_, i) => (
                <button key={i} onClick={() => setSpotlightIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === spotlightIdx ? 'bg-purple-400 w-6' : 'bg-slate-600 hover:bg-slate-500'}`} />
              ))}
            </div>
          </div>
        )}

        {/* Agent Fleet */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">🤖 Meet Our AI Agents</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statuses.map(agent => <AgentCard key={agent.telegram} agent={agent} />)}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">📊 Fleet Impact Metrics</h3>
          <ImpactMetricsGrid />
        </div>

        {/* Wave Integration Progress */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">🌊 Integration Progress</h3>
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-6">
            <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-12 gap-2">
              {WAVE_DATA.map(w => (
                <div key={w.wave} className="text-center group relative">
                  <div className={`w-full aspect-square rounded-lg flex items-center justify-center text-xs font-mono font-bold transition-all hover:scale-110 ${w.status === 'ok' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-500 border border-slate-700'}`}>
                    {w.wave}
                  </div>
                  <div className="text-[8px] text-slate-500 mt-1">{w.services} svc</div>
                  {w.integrator && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block z-10">
                      <div className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[9px] text-slate-300 whitespace-nowrap shadow-lg">{w.integrator}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">📜 Recent Activity</h3>
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-6">
            <ActivityTimeline entries={logs} />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-10">
          <h3 className="text-2xl font-bold mb-3">Want to See What AI Can Do for Your Business?</h3>
          <p className="text-sm text-slate-400 mb-6 max-w-lg mx-auto">Our AI agents are ready to build your next solution. Get a free custom proposal in minutes.</p>
          <Link href="/configurator" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/20">
            Get Your Custom Proposal →
          </Link>
        </div>
      </main>

      <footer className="border-t border-slate-800/60 mt-12 py-6 text-center text-[10px] text-slate-600">
        <p>Zion Tech Group — AI Agent Fleet · São Paulo · {currentTime || '—'} · {activeBots} agents active · {logs.length} events recorded</p>
      </footer>
    </div>
  );
}

// ── Main Dashboard ──────────────────────────────────────────────────────────

export default function AgentDashboard({ defaultView = 'operations', defaultTab = 'fleet' }: DashboardProps) {
  const [currentTime, setCurrentTime] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>(defaultView);
  const [activeTab, setActiveTab] = useState<TabId>(defaultTab);
  const [logs, setLogs] = useState<AgentLogEntry[]>(INITIAL_AGENT_LOGS);
  const [statuses, setStatuses] = useState<AgentStatus[]>(INITIAL_AGENT_STATUS);
  const [logFilter, setLogFilter] = useState<string>('all');
  const [botFilter, setBotFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastRefresh, setLastRefresh] = useState('');
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    setLogs(loadLogs());
    setStatuses(loadStatuses());
  }, []);

  useEffect(() => {
    const update = () => {
      setCurrentTime(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo', hour12: true, weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setLastRefresh(new Date().toLocaleTimeString('en-US', { timeZone: 'America/Sao_Paulo', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const addLog = useCallback((entry: AgentLogEntry) => {
    setLogs(prev => {
      const next = [entry, ...prev];
      saveLogs(next);
      return next;
    });
  }, []);

  // Derived data
  const activeBots = statuses.filter(b => b.status === 'active').length;
  const totalServices = 833;
  const totalWaves = WAVE_DATA.length;
  const completedActions = logs.length;
  const totalTasksCompleted = statuses.reduce((s, b) => s + b.tasksCompleted, 0);
  const okCrons = CRON_JOBS.filter(j => j.status === 'ok').length;
  const totalServicesInWaves = WAVE_DATA.reduce((s, w) => s + w.services, 0);

  const filteredLogs = useMemo(() => {
    let result = [...logs];
    if (botFilter !== 'all') result = result.filter(e => e.bot === botFilter);
    if (logFilter !== 'all') result = result.filter(e => e.category === logFilter);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(e =>
        e.action.toLowerCase().includes(q) ||
        e.result.toLowerCase().includes(q) ||
        e.bot.toLowerCase().includes(q)
      );
    }
    return result;
  }, [logs, botFilter, logFilter, searchQuery]);

  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    logs.forEach(e => { if (e.category) stats[e.category] = (stats[e.category] || 0) + 1; });
    return stats;
  }, [logs]);

  // Weekly activity data for sparklines
  const weeklyActivityData = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => {
      const dayLogs = logs.filter(l => {
        const d = new Date(l.timestamp);
        const now = new Date();
        const diff = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
        return diff === i;
      });
      return dayLogs.length;
    }).reverse();
  }, [logs]);

  // ── Client View ──────────────────────────────────────────────────────────

  if (viewMode === 'client') {
    return <ClientShowcaseView logs={logs} statuses={statuses} onSwitchView={() => setViewMode('operations')} />;
  }

  // ── Operations View ──────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-lg font-bold shadow-lg shadow-purple-500/20">⚡</div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Zion AI Agent Command Center</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Real-time fleet monitoring · {currentTime || 'Loading...'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-slate-800/60 rounded-lg p-0.5">
              <button onClick={() => setViewMode('operations')} className={`text-[10px] px-3 py-1.5 rounded-md transition ${viewMode === 'operations' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}>Ops</button>
              <button onClick={() => setViewMode('client' as ViewMode)} className="text-[10px] px-3 py-1.5 rounded-md transition text-slate-400 hover:text-white">Client</button>
            </div>
            <PulseDot active={true} />
            <span className="text-xs text-emerald-400 font-medium hidden sm:block">Live</span>
            <Link href="/" className="text-xs text-slate-400 hover:text-white transition border border-slate-700/60 rounded-lg px-3 py-1.5 hover:border-slate-500">← Main Site</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Recording Banner */}
        <div className="bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl px-4 py-3 mb-6 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white">Recording Active</span>
              <span className="text-[10px] text-slate-400 ml-2">All agent actions are logged and timestamped · {completedActions} events recorded</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setAutoRefresh(!autoRefresh)} className={`text-[10px] px-2 py-1 rounded ${autoRefresh ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700/40 text-slate-400'}`}>
              {autoRefresh ? '⟳ Auto-ON' : '⟳ Auto-OFF'}
            </button>
            <span className="text-[10px] text-slate-500">Last: {lastRefresh || '—'}</span>
            <span className="text-[10px] text-emerald-400">● Live</span>
          </div>
        </div>

        {/* Hero Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
          {[
            { label: 'Active Agents', value: activeBots, total: `of ${statuses.length}`, color: 'emerald' },
            { label: 'Services', value: totalServices, total: `${totalServicesInWaves} in waves`, color: 'purple' },
            { label: 'Waves Done', value: totalWaves, total: 'waves', color: 'pink' },
            { label: 'Total Tasks', value: totalTasksCompleted, total: `${completedActions} logged`, color: 'cyan' },
            { label: 'Site Health', value: '200', total: 'OK', color: 'emerald' },
            { label: 'Monitors', value: okCrons, total: `of ${CRON_JOBS.length} OK`, color: 'amber' },
            { label: 'Recorded', value: completedActions, total: 'events', color: 'violet' },
          ].map((m, i) => {
            const colorMap: Record<string, { bg: string; text: string; border: string }> = {
              emerald: { bg: 'bg-gradient-to-br from-emerald-500/10 to-emerald-900/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
              purple: { bg: 'bg-gradient-to-br from-purple-500/10 to-purple-900/10', text: 'text-purple-400', border: 'border-purple-500/20' },
              pink: { bg: 'bg-gradient-to-br from-pink-500/10 to-pink-900/10', text: 'text-pink-400', border: 'border-pink-500/20' },
              cyan: { bg: 'bg-gradient-to-br from-cyan-500/10 to-cyan-900/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
              amber: { bg: 'bg-gradient-to-br from-amber-500/10 to-amber-900/10', text: 'text-amber-400', border: 'border-amber-500/20' },
              violet: { bg: 'bg-gradient-to-br from-violet-500/10 to-violet-900/10', text: 'text-violet-400', border: 'border-violet-500/20' },
            };
            const c = colorMap[m.color] || colorMap.emerald;
            return (
              <div key={i} className={`${c.bg} border ${c.border} rounded-xl p-4`}>
                <div className={`text-[10px] ${c.text}/70 uppercase tracking-wider font-semibold mb-1`}>{m.label}</div>
                <div className={`text-3xl font-bold ${c.text}`}><AnimatedCounter target={typeof m.value === 'number' ? m.value : 0} /></div>
                <div className="text-[10px] text-slate-500 mt-1">{m.total}</div>
              </div>
            );
          })}
        </section>

        {/* Tab Navigation */}
        <div className="flex gap-1 mb-4 bg-slate-900/40 rounded-lg p-1 border border-slate-800/40 overflow-x-auto">
          {([
            { id: 'fleet' as TabId, label: '🤖 Fleet' },
            { id: 'waves' as TabId, label: '🌊 Waves' },
            { id: 'tasks' as TabId, label: '📋 Tasks' },
            { id: 'activity' as TabId, label: '📜 Activity' },
            { id: 'compare' as TabId, label: '⚖️ Compare' },
            { id: 'impact' as TabId, label: '📊 Impact' },
            { id: 'showcase' as TabId, label: '🎯 Showcase' },
          ]).map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 text-xs py-2 rounded-md transition font-medium whitespace-nowrap ${activeTab === tab.id ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            {/* Fleet Tab */}
            {activeTab === 'fleet' && (
              <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="px-5 py-3 border-b border-slate-800/60 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-slate-200">🤖 AI Agent Fleet</h2>
                  <span className="text-[10px] text-slate-500">{activeBots} active · {statuses.length} total</span>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {statuses.map(agent => <AgentCard key={agent.telegram} agent={agent} compact />)}
                </div>
              </section>
            )}

            {/* Waves Tab */}
            {activeTab === 'waves' && (
              <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="px-5 py-3 border-b border-slate-800/60 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-slate-200">🌊 Wave Integration</h2>
                  <span className="text-[10px] text-slate-500">{totalWaves} waves · {totalServicesInWaves} services</span>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1.5">
                    {WAVE_DATA.map(w => (
                      <div key={w.wave} className="text-center group relative">
                        <div className={`w-full aspect-square rounded-lg flex items-center justify-center text-[10px] font-mono font-bold transition-all hover:scale-110 ${w.status === 'ok' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-500 border border-slate-700'}`}>
                          {w.wave}
                        </div>
                        <div className="text-[8px] text-slate-600 mt-0.5">{w.services}</div>
                        {w.integrator && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block z-10">
                            <div className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[9px] text-slate-300 whitespace-nowrap shadow-lg">{w.integrator} · {w.services} services</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Tasks Tab */}
            {activeTab === 'tasks' && (
              <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="px-5 py-3 border-b border-slate-800/60 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-slate-200">📋 Task Board</h2>
                  <div className="flex gap-2">
                    <span className="text-[10px] text-amber-400">{TASKS.filter(t => t.status === 'in-progress').length} active</span>
                    <span className="text-[10px] text-slate-500">{TASKS.filter(t => t.status === 'queued').length} queued</span>
                    <span className="text-[10px] text-red-400">{TASKS.filter(t => t.status === 'blocked').length} blocked</span>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  {TASKS.filter(t => t.priority === 'p1').map(t => (
                    <div key={t.id} className="flex items-center gap-2 rounded-lg px-3 py-2 bg-amber-500/5 border border-amber-500/10">
                      <span className="text-[10px] font-mono text-amber-400 w-8">{t.id}</span>
                      <span className="flex-1 text-xs">{t.task}</span>
                      <span className="text-[10px] text-purple-300">{t.owner}</span>
                      <StatusBadge status={t.status} />
                    </div>
                  ))}
                  <div className="border-t border-slate-800/40 pt-2 mt-2">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Backlog</div>
                    {TASKS.filter(t => t.priority === 'p2').map(t => (
                      <div key={t.id} className="flex items-center gap-2 bg-slate-800/30 rounded-lg px-3 py-2 mb-1">
                        <span className="text-[10px] font-mono text-slate-500 w-8">{t.id}</span>
                        <span className="flex-1 text-xs text-slate-400">{t.task}</span>
                        <span className="text-[10px] text-purple-300">{t.owner}</span>
                        <StatusBadge status={t.status} />
                        {t.note && <span className="text-[9px] text-amber-400/70">⚠ {t.note}</span>}
                      </div>
                    ))}
                  </div>
                  {TASKS.filter(t => t.priority === 'blocked').length > 0 && (
                    <div className="border-t border-slate-800/40 pt-2 mt-2">
                      <div className="text-[10px] text-red-400 uppercase tracking-wider mb-2">Blocked</div>
                      {TASKS.filter(t => t.priority === 'blocked').map(t => (
                        <div key={t.id} className="flex items-center gap-2 bg-red-500/5 border border-red-500/10 rounded-lg px-3 py-2 mb-1">
                          <span className="text-[10px] font-mono text-red-400 w-8">{t.id}</span>
                          <span className="flex-1 text-xs text-red-300">{t.task}</span>
                          <span className="text-[10px] text-purple-300">{t.owner}</span>
                          <StatusBadge status={t.status} />
                          {t.needs && <span className="text-[9px] text-red-400/70">needs: {t.needs}</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Activity Tab */}
            {activeTab === 'activity' && (
              <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="px-5 py-3 border-b border-slate-800/60 flex items-center justify-between flex-wrap gap-2">
                  <h2 className="text-sm font-semibold text-slate-200">📜 Delegation Log</h2>
                  <div className="flex gap-2 flex-wrap">
                    <input
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder="Search actions..."
                      className="bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-300 px-2 py-1 w-32 placeholder-slate-500"
                    />
                    <select value={botFilter} onChange={e => setBotFilter(e.target.value)} className="bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-300 px-2 py-1">
                      <option value="all">All Agents</option>
                      {statuses.map(a => <option key={a.telegram} value={a.telegram}>{a.emoji} {a.name}</option>)}
                    </select>
                    <select value={logFilter} onChange={e => setLogFilter(e.target.value)} className="bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-300 px-2 py-1">
                      <option value="all">All Categories</option>
                      {Object.keys(categoryStats).map(cat => <option key={cat} value={cat}>{cat} ({categoryStats[cat]})</option>)}
                    </select>
                  </div>
                </div>
                <AddLogEntryForm onAdd={addLog} />
                <div className="divide-y divide-slate-800/40 max-h-[600px] overflow-y-auto">
                  {filteredLogs.map((entry, i) => (
                    <div key={entry.id || i} className="px-5 py-3 hover:bg-slate-800/30 transition-colors">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[10px] font-mono text-slate-500">{entry.timestamp}</span>
                        <span className="text-xs text-purple-300 font-medium">{entry.bot}</span>
                        <CategoryBadge category={entry.category} />
                        {entry.impact && <span className={`text-[9px] px-1.5 py-0.5 rounded ${entry.impact === 'critical' ? 'bg-red-500/20 text-red-400' : entry.impact === 'high' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-700 text-slate-400'}`}>{entry.impact}</span>}
                        {entry.duration && <span className="text-[9px] text-slate-600">⏱ {entry.duration}</span>}
                      </div>
                      <div className="text-sm font-medium text-slate-200">{entry.action}</div>
                      <div className="text-xs text-slate-500">{entry.result}</div>
                      {(entry.filesChanged || entry.linesChanged) && (
                        <div className="flex gap-2 mt-1">
                          {entry.filesChanged && <span className="text-[9px] text-slate-600">📁 {entry.filesChanged} files</span>}
                          {entry.linesChanged && <span className="text-[9px] text-slate-600">📝 {entry.linesChanged} lines</span>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Compare Tab */}
            {activeTab === 'compare' && (
              <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="px-5 py-3 border-b border-slate-800/60">
                  <h2 className="text-sm font-semibold text-slate-200">⚖️ Agent Comparison</h2>
                  <p className="text-[10px] text-slate-500">Side-by-side performance metrics for all agents</p>
                </div>
                <div className="p-4">
                  <ComparisonTable statuses={statuses} />
                </div>
              </section>
            )}

            {/* Impact Tab */}
            {activeTab === 'impact' && (
              <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="px-5 py-3 border-b border-slate-800/60">
                  <h2 className="text-sm font-semibold text-slate-200">📊 Fleet Impact Metrics</h2>
                  <p className="text-[10px] text-slate-500">Key performance indicators across the entire agent fleet</p>
                </div>
                <div className="p-4 space-y-6">
                  <ImpactMetricsGrid />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-3">🏆 Agent Achievements</h3>
                    <AchievementBadges statuses={statuses} />
                  </div>
                </div>
              </section>
            )}

            {/* Showcase Tab */}
            {activeTab === 'showcase' && (
              <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="px-5 py-3 border-b border-slate-800/60">
                  <h2 className="text-sm font-semibold text-slate-200">🎯 Client Showcase Preview</h2>
                  <p className="text-[10px] text-slate-500">This is what clients see when they visit /agents-monitoring</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-3">
                      <PulseDot active={true} />
                      <span className="text-xs text-emerald-400 font-medium">{activeBots} AI Agents Active Now</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">Built & Maintained by AI Agents</h3>
                    <p className="text-slate-400 text-sm max-w-lg mx-auto">This website is powered by a fleet of {statuses.length} autonomous AI agents working 24/7.</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {[
                      { value: totalServices, label: 'Services', color: 'purple' },
                      { value: totalWaves, label: 'Waves', color: 'emerald' },
                      { value: totalTasksCompleted, label: 'Tasks Done', color: 'pink' },
                      { value: '24/7', label: 'Uptime', color: 'cyan' },
                    ].map((m, i) => {
                      const colorMap: Record<string, { bg: string; text: string; border: string }> = {
                        emerald: { bg: 'bg-gradient-to-br from-emerald-500/10 to-emerald-900/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
                        purple: { bg: 'bg-gradient-to-br from-purple-500/10 to-purple-900/10', text: 'text-purple-400', border: 'border-purple-500/20' },
                        pink: { bg: 'bg-gradient-to-br from-pink-500/10 to-pink-900/10', text: 'text-pink-400', border: 'border-pink-500/20' },
                        cyan: { bg: 'bg-gradient-to-br from-cyan-500/10 to-cyan-900/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
                      };
                      const c = colorMap[m.color] || colorMap.emerald;
                      return (
                        <div key={i} className={`${c.bg} border ${c.border} rounded-xl p-4 text-center`}>
                          <div className={`text-2xl font-bold ${c.text}`}><AnimatedCounter target={typeof m.value === 'number' ? m.value : 0} /></div>
                          <div className="text-[10px] text-slate-400 uppercase">{m.label}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="bg-slate-800/40 rounded-xl p-4 text-center">
                    <p className="text-xs text-slate-400 mb-3">Share this page with clients to showcase our AI-powered development process:</p>
                    <code className="text-xs text-purple-300 bg-slate-900/60 px-3 py-1.5 rounded-lg">ziontechgroup.com/agents-monitoring</code>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            {/* Weekly Activity */}
            <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="px-4 py-3 border-b border-slate-800/60">
                <h2 className="text-sm font-semibold text-slate-200">📈 14-Day Activity</h2>
              </div>
              <div className="p-3">
                <Sparkline data={weeklyActivityData} color="#a78bfa" height={60} />
                <div className="flex justify-between text-[9px] text-slate-500 mt-1">
                  <span>14d ago</span>
                  <span>Today</span>
                </div>
              </div>
            </section>

            {/* Weekly Heatmap */}
            <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="px-4 py-3 border-b border-slate-800/60">
                <h2 className="text-sm font-semibold text-slate-200">🗓️ Weekly Heatmap</h2>
              </div>
              <div className="p-3">
                <WeeklyHeatmap />
              </div>
            </section>

            {/* Agent Restart Protocol */}
            <section className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-4">
              <div className="text-xs text-amber-300 font-semibold mb-2">🔄 Agent Restart Protocol</div>
              <div className="space-y-1.5 text-[10px] text-slate-400">
                {['Check this dashboard for current task board', 'Read ~/.hermes/multi-agent-coordination.md', 'Report status in Zion Agents group', 'Pull git pull --rebase before any push', 'Pick up queued tasks from the task board'].map((step, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono">{i + 1}.</span>
                    <span>{step.includes('~') ? <><code className="text-purple-300">{step.split('~/.hermes/')[0]}</code>~/.hermes/{step.split('~/.hermes/')[1]}</> : step}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Cron Jobs */}
            <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="px-4 py-3 border-b border-slate-800/60">
                <h2 className="text-sm font-semibold text-slate-200">⏰ Monitors</h2>
              </div>
              <div className="p-3 space-y-2">
                {CRON_JOBS.map(job => (
                  <div key={job.name} className="flex items-center justify-between bg-slate-800/30 rounded-lg px-3 py-2">
                    <div>
                      <div className="text-xs text-slate-300">{job.name}</div>
                      <div className="text-[9px] text-slate-500">every {job.interval}</div>
                    </div>
                    <div className="text-right">
                      <StatusBadge status={job.status} />
                      {job.lastRun && <div className="text-[9px] text-slate-500 mt-0.5">{job.lastRun}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Category Breakdown */}
            <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="px-4 py-3 border-b border-slate-800/60">
                <h2 className="text-sm font-semibold text-slate-200">📊 Action Categories</h2>
              </div>
              <div className="p-3 space-y-1.5">
                {Object.entries(categoryStats).sort((a, b) => b[1] - a[1]).map(([cat, count]) => (
                  <div key={cat} className="flex items-center gap-2">
                    <CategoryBadge category={cat} />
                    <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500/60 rounded-full" style={{ width: `${(count / completedActions) * 100}%` }} />
                    </div>
                    <span className="text-[10px] text-slate-500 w-6 text-right">{count}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Links */}
            <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="px-4 py-3 border-b border-slate-800/60">
                <h2 className="text-sm font-semibold text-slate-200">🔗 Quick Links</h2>
              </div>
              <div className="p-3 space-y-1.5">
                {[
                  { name: 'Main Site', href: '/', icon: '🏠' },
                  { name: 'Services', href: '/services', icon: '🛠️' },
                  { name: 'Contact', href: '/contact', icon: '📧' },
                  { name: 'Configurator', href: '/configurator', icon: '⚡' },
                  { name: 'Client View', href: '/agents-monitoring', icon: '🎯' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="flex items-center gap-2 text-xs text-slate-400 hover:text-purple-300 transition-colors px-2 py-1.5 rounded-lg hover:bg-slate-800/40">
                    <span>{l.icon}</span>
                    <span>{l.name}</span>
                    <span className="ml-auto text-[9px] text-slate-600">→</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800/60 mt-8 py-4 text-center text-[10px] text-slate-600">
        <p>Zion Tech Group — AI Agent Command Center · São Paulo · {currentTime || '—'} · {activeBots} agents active · {completedActions} events recorded</p>
      </footer>
    </div>
  );
}
