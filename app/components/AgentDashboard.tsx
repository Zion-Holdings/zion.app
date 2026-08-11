'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import AnimatedCounter from '@/components/AnimatedCounter';
import {
  BOT_ROSTER,
  DELEGATION_LOG,
  ALL_TASKS,
  WAVE_DATA,
  CRON_JOBS,
  SYSTEM_METRICS,
  CATEGORY_COLORS,
  loadActions,
  saveActions,
  type BotStatus,
  type BotRoster,
  type DelegationEntry,
  type TaskEntry,
  type WaveEntry,
  type CronEntry,
  type AgentAction,
} from '@/data/agent-logs';

// Re-derive types locally to avoid circular import issues
type LocalViewMode = 'operations' | 'client';

interface AgentDashboardProps {
  defaultView?: LocalViewMode;
}

// Pulse dot component
function PulseDot({ active }: { active: boolean }) {
  return (
    <span className="relative flex h-2.5 w-2.5">
      {active && (
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      )}
      <span
        className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
          active ? 'bg-emerald-500' : 'bg-slate-500'
        }`}
      />
    </span>
  );
}

// Status badge
function StatusBadge({ status }: { status: BotStatus }) {
  const config: Record<BotStatus, { label: string; className: string }> = {
    active: { label: 'Active', className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    available: { label: 'Available', className: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    stale: { label: 'Stale', className: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    offline: { label: 'Offline', className: 'bg-slate-500/20 text-slate-400 border-slate-500/30' },
  };
  const c = config[status] || config.offline;
  return (
    <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${c.className}`}>
      {c.label}
    </span>
  );
}

// Category badge for activity timeline
function CategoryBadge({ category }: { category: string }) {
  const colorKey = category.toLowerCase();
  const colors = CATEGORY_COLORS[colorKey] || 'bg-slate-500 border-slate-400';
  return (
    <span
      className={`text-[8px] font-mono uppercase font-medium px-1.5 py-0.5 rounded border ${colors} text-slate-900 dark:text-slate-900`}
    >
      {category}
    </span>
  );
}

// Tab navigation
type Tab = 'fleet' | 'waves' | 'tasks' | 'activity' | 'showcase';

function TabNav({
  activeTab,
  setTab,
  viewMode,
  setViewMode,
}: {
  activeTab: Tab;
  setTab: (t: Tab) => void;
  viewMode: LocalViewMode;
  setViewMode: (m: LocalViewMode) => void;
}) {
  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'fleet', label: 'Fleet', icon: '🤖' },
    { id: 'waves', label: 'Waves', icon: '🌊' },
    { id: 'tasks', label: 'Tasks', icon: '📋' },
    { id: 'activity', label: 'Activity', icon: '📝' },
    { id: 'showcase', label: 'Showcase', icon: '🎨' },
  ];

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1.5 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTab(tab.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className="mr-1.5">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {viewMode === 'operations' && (
        <div className="flex gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1">
          <button
            onClick={() => setViewMode('client')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
          >
            👤 Client View
          </button>
        </div>
      )}
      {viewMode === 'client' && (
        <div className="flex gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1">
          <button
            onClick={() => setViewMode('operations')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
          >
            ⚙️ Ops View
          </button>
        </div>
      )}
    </div>
  );
}

// Fleet Status Panel
function FleetTab() {
  const activeBots = BOT_ROSTER.filter((b) => b.status === 'active');
  const availableBots = BOT_ROSTER.filter((b) => b.status === 'available');
  const staleBots = BOT_ROSTER.filter((b) => b.status === 'stale' || b.status === 'offline');

  return (
    <div className="space-y-6">
      {/* Summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">{BOT_ROSTER.length}</div>
          <div className="text-[10px] text-slate-500 uppercase">Total Bots</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">{activeBots.length}</div>
          <div className="text-[10px] text-slate-500 uppercase">Active</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">{availableBots.length}</div>
          <div className="text-[10px] text-slate-500 uppercase">Available</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-amber-400">{staleBots.length}</div>
          <div className="text-[10px] text-slate-500 uppercase">Needs Attention</div>
        </div>
      </div>

      {/* Bot roster */}
      <div className="grid gap-3">
        {BOT_ROSTER.map((bot) => (
          <div
            key={bot.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-purple-500/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${bot.color} flex items-center justify-center text-xl shrink-0`}
                >
                  {bot.emoji}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-white">{bot.name}</h3>
                    <PulseDot active={bot.status === 'active'} />
                  </div>
                  <p className="text-xs text-slate-500">{bot.role}</p>
                  <p className="text-sm text-slate-300 mt-1">{bot.currentTask}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <StatusBadge status={bot.status} />
                    <span className="text-[10px] text-slate-500">Last: {bot.lastActionTime}</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-xs text-slate-500 space-y-0.5">
                <div>Completed: <span className="text-slate-300">{bot.tasksCompleted}</span></div>
                <div>Today: <span className="text-slate-300">{bot.todayActions}</span></div>
                <div>Uptime: <span className="text-slate-300">{bot.uptime}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Waves Tab
function WavesTab() {
  return (
    <div className="space-y-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
        <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
          <span>🌊</span> Wave Integration Pipeline
        </h3>
        <p className="text-sm text-slate-400">
          {SYSTEM_METRICS.totalWaves} waves completed · {SYSTEM_METRICS.totalServices} services cataloged
        </p>
      </div>

      <div className="space-y-3">
        {WAVE_DATA.map((wave) => (
          <div
            key={wave.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-medium text-white">{wave.title}</h4>
                <p className="text-sm text-slate-400 mt-0.5">{wave.description}</p>
                <p className="text-[10px] text-slate-500 mt-1">📅 {wave.date}</p>
              </div>
              <div className="text-right">
                <span className={`text-xs font-medium px-2 py-1 rounded border ${
                  wave.status === 'complete'
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : wave.status === 'in-progress'
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                    : 'bg-slate-500/20 text-slate-400 border-slate-500/30'
                }`}>
                  {wave.status.toUpperCase()}
                </span>
                <div className="text-xs text-slate-500 mt-1">
                  +{wave.servicesAdded} services
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Tasks Tab
function TasksTab() {
  const tabs = ['All', 'P1 In Progress', 'P2 Backlog', 'Blocked', 'Completed'];

  const p1 = ALL_TASKS.filter((t) => t.priority === 'p1' && t.status !== 'done');
  const p2 = ALL_TASKS.filter((t) => t.priority === 'p2' && t.status !== 'done');
  const blocked = ALL_TASKS.filter((t) => t.status === 'blocked' || t.status === 'todo');
  const completed = ALL_TASKS.filter((t) => t.status === 'done');

  return (
    <div className="space-y-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
        <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
          <span>📋</span> Task Board
        </h3>
        <p className="text-sm text-slate-400">
          {SYSTEM_METRICS.completedTasks}/{SYSTEM_METRICS.totalTasks} tasks completed · {p1.length} P1 in progress · {blocked.length} blocked/todo
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* P1 In Progress */}
        <div className="bg-slate-900 border border-amber-500/30 rounded-xl p-4">
          <h4 className="font-medium text-amber-400 mb-3 flex items-center gap-2">
            🔥 P1 (In Progress)
          </h4>
          <div className="space-y-3">
            {p1.map((t) => (
              <TaskCard key={t.id} task={t} />
            ))}
            {p1.length === 0 && (
              <p className="text-xs text-slate-500">No P1 tasks in progress</p>
            )}
          </div>
        </div>

        {/* P2 Backlog */}
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
          <h4 className="font-medium text-slate-400 mb-3">P2 (Backlog)</h4>
          <div className="space-y-3">
            {p2.map((t) => (
              <TaskCard key={t.id} task={t} />
            ))}
            {p2.length === 0 && (
              <p className="text-xs text-slate-500">No P2 tasks in backlog</p>
            )}
          </div>
        </div>

        {/* Blocked */}
        <div className="bg-slate-900 border border-red-500/30 rounded-xl p-4">
          <h4 className="font-medium text-red-400 mb-3">Blocked / Todo</h4>
          <div className="space-y-3">
            {blocked.map((t) => (
              <TaskCard key={t.id} task={t} />
            ))}
            {blocked.length === 0 && (
              <p className="text-xs text-slate-500">Nothing blocked</p>
            )}
          </div>
        </div>
      </div>

      {/* Completed */}
      {completed.length > 0 && (
        <div className="bg-slate-900 border border-emerald-500/30 rounded-xl p-4">
          <h4 className="font-medium text-emerald-400 mb-3">✓ Completed ({completed.length})</h4>
          <div className="space-y-2">
            {completed.map((t) => (
              <div key={t.id} className="text-sm text-slate-400 line-through">
                {t.title} — <span className="text-slate-500">{t.owner}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function TaskCard({ task }: { task: TaskEntry }) {
  const priorityColor = {
    p1: 'border-amber-500/30 bg-amber-500/5',
    p2: 'border-slate-700 bg-slate-800/30',
    p3: 'border-slate-700 bg-slate-800/30',
  };
  const statusText = {
    'in-progress': 'text-amber-400',
    'todo': 'text-slate-400',
    'done': 'text-emerald-400',
    'blocked': 'text-red-400',
  };

  return (
    <div className={`border rounded-lg p-3 ${priorityColor[task.priority]}`}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h5 className="font-medium text-white text-sm">{task.title}</h5>
          <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{task.description}</p>
          <div className="flex items-center gap-2 mt-1.5">
            <span className={`text-[10px] font-medium ${statusText[task.status]}`}>
              {task.status.toUpperCase()}
            </span>
            <span className="text-[10px] text-slate-500">Owner: {task.owner}</span>
            {task.eta && <span className="text-[10px] text-slate-500">ETA: {task.eta}</span>}
          </div>
          {task.note && (
            <div className="text-[9px] text-amber-400/70 mt-1">⚠ {task.note}</div>
          )}
        </div>
        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
          task.priority === 'p1' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-700 text-slate-400'
        }`}>
          {task.priority.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

// Activity Tab
function ActivityTab() {
  const [actions, setActions] = useState<AgentAction[]>([]);
  const [logFilter, setLogFilter] = useState<string>('all');
  const [showForm, setShowForm] = useState(false);
  const [formBot, setFormBot] = useState('');
  const [formCategory, setFormCategory] = useState('');
  const [formAction, setFormAction] = useState('');
  const [formResult, setFormResult] = useState('');
  const [formDuration, setFormDuration] = useState('');

  useEffect(() => {
    setActions(loadActions());
  }, []);

  const allLogs = useMemo(() => {
    const typedDelegation: DelegationEntry[] = DELEGATION_LOG;
    const typedActions: AgentAction[] = actions.map((a) => ({
      id: a.id,
      time: new Date(a.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      bot: a.bot,
      category: a.category,
      action: a.action,
      result: a.result,
    }));
    // Merge: typed actions first (newest), then historical delegation log
    return [...typedActions, ...typedDelegation];
  }, [actions]);

  const filtered =
    logFilter === 'all'
      ? allLogs
      : allLogs.filter((e) => e.bot === logFilter || e.category === logFilter);

  const botSet = new Set(allLogs.map((e) => e.bot));
  const catSet = new Set(allLogs.map((e) => e.category));

  const handleLogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formBot || !formAction) return;
    const newAction: AgentAction = {
      id: `action-${Date.now()}`,
      bot: formBot,
      category: formCategory || 'integration',
      action: formAction,
      result: formResult || 'Completed successfully',
      duration: formDuration || '0s',
      timestamp: Date.now(),
    };
    const updated = [newAction, ...actions];
    setActions(updated);
    saveActions(updated);
    // Reset form
    setFormBot('');
    setFormCategory('');
    setFormAction('');
    setFormResult('');
    setFormDuration('');
    setShowForm(false);
  };

  return (
    <div className="space-y-4">
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <select
          value={logFilter}
          onChange={(e) => setLogFilter(e.target.value)}
          className="text-xs bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-slate-200 focus:outline-none focus:border-purple-500"
        >
          <option value="all">All Activity</option>
          {[...botSet].map((b) => (
            <option key={`bot-${b}`} value={b}>Bot: {b}</option>
          ))}
          {[...catSet].map((c) => (
            <option key={`cat-${c}`} value={c}>Category: {c}</option>
          ))}
        </select>

        <button
          onClick={() => setShowForm(!showForm)}
          className="text-xs px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:text-white hover:border-purple-500 transition"
        >
          {showForm ? '✕ Cancel' : '+ Log New Action'}
        </button>
      </div>

      {/* Log New Action form */}
      {showForm && (
        <form
          onSubmit={handleLogSubmit}
          className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3"
        >
          <h4 className="font-medium text-white text-sm">Log a New Agent Action</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <select
              value={formBot}
              onChange={(e) => setFormBot(e.target.value)}
              className="text-xs bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-purple-500"
              required
            >
              <option value="">Select Bot</option>
              {BOT_ROSTER.map((b) => (
                <option key={b.id} value={b.name}>{b.emoji} {b.name}</option>
              ))}
            </select>
            <select
              value={formCategory}
              onChange={(e) => setFormCategory(e.target.value)}
              className="text-xs bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-purple-500"
            >
              <option value="">Select Category</option>
              <option value="integration">Integration</option>
              <option value="coordination">Coordination</option>
              <option value="research">Research</option>
              <option value="quality">Quality</option>
              <option value="infra">Infra</option>
              <option value="monitoring">Monitoring</option>
              <option value="content">Content</option>
            </select>
            <input
              type="text"
              value={formAction}
              onChange={(e) => setFormAction(e.target.value)}
              placeholder="What did you do?"
              className="text-xs bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-purple-500"
              required
            />
            <input
              type="text"
              value={formResult}
              onChange={(e) => setFormResult(e.target.value)}
              placeholder="Result (e.g., Completed successfully)"
              className="text-xs bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              value={formDuration}
              onChange={(e) => setFormDuration(e.target.value)}
              placeholder="Duration (e.g., 2m 30s)"
              className="text-xs bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 w-32 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              className="text-xs px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition"
            >
              Save Action
            </button>
          </div>
        </form>
      )}

      {/* Activity Timeline */}
      <ActivityTimeline entries={filtered} />
    </div>
  );
}

function ActivityTimeline({ entries }: { entries: Array<Record<string, string>> }) {
  if (entries.length === 0) {
    return (
      <p className="text-sm text-slate-500 text-center py-8">No activity matching this filter.</p>
    );
  }

  return (
    <div className="space-y-1">
      {entries.slice(0, 30).map((entry, i) => {
        const colorKey = (entry.category || '').toLowerCase();
        const dotClass = CATEGORY_COLORS[colorKey] || 'bg-slate-500 border-slate-400';
        return (
          <div key={i} className="relative flex gap-3 pl-1">
            <div className="relative z-10 mt-1.5">
              <div className={`w-2.5 h-2.5 rounded-full border-2 ${dotClass}`} />
            </div>
            <div className="flex-1 min-w-0 pb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono text-slate-500">{entry.time}</span>
                <span className="text-xs text-purple-300 font-medium">{entry.bot}</span>
                <CategoryBadge category={entry.category || 'unknown'} />
              </div>
              <div className="text-sm text-slate-200 font-medium mt-0.5">{entry.action}</div>
              <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">{entry.result}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Showcase (Client-facing preview)
function ShowcaseTab() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
        <span className="text-3xl mb-2 block">🎉</span>
        <h3 className="text-xl font-bold text-white mb-2">This Website is Built by AI Agents</h3>
        <p className="text-slate-400 max-w-lg mx-auto">
          Our AI agent fleet works in real time to catalog services, optimize SEO, generate content,
          and maintain site quality. {SYSTEM_METRICS.totalServices} services across {SYSTEM_METRICS.totalWaves} waves.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-900/10 border border-purple-500/20 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-purple-400 mb-1">
            {BOT_ROSTER.filter((b) => b.status === 'active').length}
          </div>
          <div className="text-xs text-slate-500 uppercase">Agents Live</div>
        </div>
        <div className="bg-gradient-to-br from-pink-500/10 to-pink-900/10 border border-pink-500/20 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-pink-400 mb-1">
            <AnimatedCounter target={SYSTEM_METRICS.totalServices} suffix="" />
          </div>
          <div className="text-xs text-slate-500 uppercase">Services</div>
        </div>
        <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-900/10 border border-cyan-500/20 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-1">
            {SYSTEM_METRICS.totalWaves}
          </div>
          <div className="text-xs text-slate-500 uppercase">Waves</div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h4 className="font-medium text-white mb-3">Public Links</h4>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/agents-monitoring"
            className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition flex items-center gap-2"
          >
            👤 Client Monitoring View
          </Link>
          <Link
            href="/dashboard"
            className="text-sm px-4 py-2 border border-slate-700 rounded-lg text-slate-300 hover:border-purple-500 hover:text-white transition"
          >
            ⚙️ Full Ops Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

// System metrics mini-panel
function SystemMetricsBar() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-6">
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex flex-wrap gap-6">
          <div>
            <span className="text-slate-500">Site Uptime:</span>
            <span className="text-emerald-400 font-medium">{SYSTEM_METRICS.siteUptime}</span>
          </div>
          <div>
            <span className="text-slate-500">Build:</span>
            <span className="text-emerald-400 font-medium">{SYSTEM_METRICS.buildStatus}</span>
          </div>
          <div>
            <span className="text-slate-500">Type Check:</span>
            <span className="text-emerald-400 font-medium">{SYSTEM_METRICS.typeCheck}</span>
          </div>
          <div>
            <span className="text-slate-500">Fleet Health:</span>
            <span className="text-emerald-400 font-medium">{SYSTEM_METRICS.fleetHealth}</span>
          </div>
          <div>
            <span className="text-slate-500">Services:</span>
            <span className="text-purple-400 font-medium">{SYSTEM_METRICS.totalServices}</span>
          </div>
          <div>
            <span className="text-slate-500">Waves:</span>
            <span className="text-cyan-400 font-medium">{SYSTEM_METRICS.totalWaves}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="/dashboard" className="text-xs text-slate-400 hover:text-purple-400 transition">Ops</Link>
          <Link href="/agents-monitoring" className="text-xs text-slate-400 hover:text-purple-400 transition">Client</Link>
        </div>
      </div>
    </div>
  );
}

// Cron jobs panel (Ops only)
function CronJobsPanel() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-6">
      <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
        <span>⏰</span> Scheduled Jobs
      </h3>
      <div className="space-y-2.5">
        {CRON_JOBS.map((job) => (
          <div key={job.id} className="flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-300">{job.name}</span>
              <span className="text-slate-500"> · {job.schedule}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[9px] px-1.5 py-0.5 rounded border ${
                job.status === 'healthy'
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                  : job.status === 'warning'
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                  : 'bg-red-500/20 text-red-400 border-red-500/30'
              }`}>
                {job.status}
              </span>
              <span className="text-slate-500">Last: {job.lastRun}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main dashboard
export default function AgentDashboard({ defaultView = 'operations' }: AgentDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('fleet');
  const [viewMode, setViewMode] = useState<LocalViewMode>(defaultView);

  // Live clock
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'America/Sao_Paulo',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'fleet':
        return <FleetTab />;
      case 'waves':
        return <WavesTab />;
      case 'tasks':
        return <TasksTab />;
      case 'activity':
        return <ActivityTab />;
      case 'showcase':
        return <ShowcaseTab />;
    }
  };

  const isClientView = viewMode === 'client';

  return (
    <div className={`space-y-6 ${isClientView ? 'pb-16' : ''}`}>
      {/* Header with live clock */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          {isClientView ? '🤖 AI Agent Monitoring' : '⚙️ Agent Operations Dashboard'}
        </h1>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span>{time}</span>
        </div>
      </div>

      {/* System metrics bar */}
      {!isClientView && <SystemMetricsBar />}

      {/* Ops-only: Cron jobs panel */}
      {!isClientView && <CronJobsPanel />}

      {/* Tab navigation */}
      <TabNav
        activeTab={activeTab}
        setTab={setActiveTab}
        viewMode={viewMode}
        setViewMode={(m) => setViewMode(m)}
      />

      {/* Recording indicator (Ops only) */}
      {!isClientView && (
        <div className="bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white">Recording Active</span>
              <span className="text-[10px] text-slate-400 ml-2">
                All agent actions logged · {DELEGATION_LOG.length} events recorded · Auto-refresh: 1s
              </span>
            </div>
          </div>
          <span className="text-[10px] text-emerald-400">● Live</span>
        </div>
      )}

      {/* Tab content */}
      <div
        className={`bg-slate-950 border border-slate-800 rounded-2xl p-6 overflow-hidden ${
          isClientView ? 'bg-slate-900/50' : ''
        }`}
      >
        {renderTabContent()}
      </div>
    </div>
  );
}
