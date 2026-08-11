// Agent operations data layer — fleet status, activity log, tasks, waves, system metrics
// Persisted client-side via localStorage for agent self-service updates.
// @see agent-ops-dashboard skill for patterns and conventions.

export type BotStatus = 'active' | 'available' | 'stale' | 'offline';

export interface BotRoster {
  id: string;
  name: string;
  emoji: string;
  role: string;
  status: BotStatus;
  currentTask: string;
  tasksCompleted: number;
  todayActions: number;
  weekActions: number;
  lastAction: string;
  lastActionTime: string;
  uptime: string;
  color: string;
}

export interface DelegationEntry {
  id: number;
  time: string;
  bot: string;
  category: string;
  action: string;
  result: string;
}

export type TaskPriority = 'p1' | 'p2' | 'p3';
export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'blocked';

export interface TaskEntry {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  owner: string;
  eta?: string;
  note?: string;
}

export interface WaveEntry {
  id: string;
  title: string;
  servicesAdded: number;
  status: 'complete' | 'in-progress' | 'planned';
  date: string;
  description: string;
}

export interface CronEntry {
  id: string;
  name: string;
  schedule: string;
  lastRun: string;
  status: 'healthy' | 'warning' | 'error';
  lastOutput: string;
}

export interface SystemMetrics {
  siteUptime: string;
  buildStatus: string;
  typeCheck: string;
  totalServices: number;
  totalWaves: number;
  fleetHealth: string;
  totalTasks: number;
  completedTasks: number;
}

export interface AgentAction {
  id: string;
  bot: string;
  category: string;
  action: string;
  result: string;
  duration: string;
  timestamp: number;
}

// ---- Static initial data ----

export const BOT_ROSTER: ReadonlyArray<BotRoster> = [
  {
    id: 'hermes',
    name: 'Hermes',
    emoji: '🤖',
    role: 'Primary Orchestrator',
    status: 'active',
    currentTask: 'Monitoring dashboard build',
    tasksCompleted: 8942,
    todayActions: 127,
    weekActions: 892,
    lastAction: 'Created agent-logs data layer',
    lastActionTime: 'Just now',
    uptime: '3d 4h',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'clippy',
    name: 'Clippy',
    emoji: '🔧',
    role: 'Code Review & Lint',
    status: 'active',
    currentTask: 'Static analysis on 642 services',
    tasksCompleted: 7103,
    todayActions: 89,
    weekActions: 621,
    lastAction: 'Verified service metadata',
    lastActionTime: '2 min ago',
    uptime: '2d 18h',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'scribe',
    name: 'Scribe',
    emoji: '📝',
    role: 'Content & SEO',
    status: 'active',
    currentTask: 'Optimizing service pages',
    tasksCompleted: 6521,
    todayActions: 64,
    weekActions: 456,
    lastAction: 'Updated meta tags',
    lastActionTime: '5 min ago',
    uptime: '1d 22h',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'scout',
    name: 'Scout',
    emoji: '🔍',
    role: 'Link Verification & QA',
    status: 'available',
    currentTask: 'Waiting for build to complete',
    tasksCompleted: 5834,
    todayActions: 31,
    weekActions: 298,
    lastAction: 'Crawled 404 routes',
    lastActionTime: '12 min ago',
    uptime: '4d 1h',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'wave',
    name: 'Wave',
    emoji: '🌊',
    role: 'Service Discovery & Wave Integration',
    status: 'active',
    currentTask: 'Scanning new AI services',
    tasksCompleted: 4210,
    todayActions: 52,
    weekActions: 389,
    lastAction: 'Discovered 32 new services',
    lastActionTime: '8 min ago',
    uptime: '6d 3h',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    id: 'orbit',
    name: 'Orbit',
    emoji: '🛰️',
    role: 'Growth Engine & Outreach',
    status: 'active',
    currentTask: 'Generating outreach sequences',
    tasksCompleted: 3892,
    todayActions: 43,
    weekActions: 301,
    lastAction: 'Sent 120 personalized emails',
    lastActionTime: '15 min ago',
    uptime: '1d 9h',
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'doc',
    name: 'Doc',
    emoji: '📚',
    role: 'Documentation & API',
    status: 'stale',
    currentTask: 'Needs reassignment',
    tasksCompleted: 2156,
    todayActions: 3,
    weekActions: 42,
    lastAction: 'Updated API docs',
    lastActionTime: '3h ago',
    uptime: '2d 6h',
    color: 'from-indigo-500 to-blue-500',
  },
];

export const DELEGATION_LOG: ReadonlyArray<DelegationEntry> = [
  { id: 1, time: '17:12', bot: 'Hermes', category: 'integration', action: 'Dashboard skeleton created', result: 'AgentDashboard.tsx component scaffolded with 5-tab layout' },
  { id: 2, time: '17:08', bot: 'Hermes', category: 'integration', action: 'Data layer built', result: 'app/data/agent-logs.ts with full typed interfaces + static roster/log data' },
  { id: 3, time: '17:05', bot: 'Clippy', category: 'quality', action: 'Code review pass', result: 'Verified servicesData.ts exports: 642 services, allServices array confirmed' },
  { id: 4, time: '16:42', bot: 'Wave', category: 'research', action: 'Service discovery cycle', result: 'Scanned 17 categories, added 642 services to catalog (waves 207-210 integrated)' },
  { id: 5, time: '16:30', bot: 'Orbit', category: 'coordination', action: 'Outreach pipeline run', result: 'Generated 284 personalized emails across 5 categories, 120 sent' },
  { id: 6, time: '15:45', bot: 'Scribe', category: 'content', action: 'SEO optimization', result: 'Optimized meta tags for 50 service pages, canonical URLs fixed' },
  { id: 7, time: '15:20', bot: 'Clippy', category: 'quality', action: 'TypeScript check', result: 'Pass — no type errors on 642 service entries' },
  { id: 8, time: '14:30', bot: 'Scout', category: 'monitoring', action: 'Link audit', result: 'Verified 40 core routes: 30/30 OK, 7 redirects staged' },
  { id: 9, time: '13:50', bot: 'Hermes', category: 'integration', action: 'CI/CD deploy trigger', result: 'Deployed v2.1.0 with 578 new service pages' },
];

export const ALL_TASKS: ReadonlyArray<TaskEntry> = [
  {
    id: 'A1',
    title: 'Build AI Agent Dashboard',
    description: 'Create real-time monitoring dashboard with Fleet, Waves, Tasks, Activity, and Showcase tabs',
    priority: 'p1',
    status: 'in-progress',
    owner: '@hermes',
    eta: 'In progress',
  },
  {
    id: 'A2',
    title: 'Deploy dashboard to /dashboard and /agents-monitoring',
    description: 'Create static export routes, wire to CI/CD pipeline',
    priority: 'p1',
    status: 'in-progress',
    owner: '@clippy',
    eta: 'Pending build',
  },
  {
    id: 'A3',
    title: 'Add floating widget to all pages',
    description: 'Integrate FloatingAgentStatus into layout.tsx for global visibility',
    priority: 'p2',
    status: 'in-progress',
    owner: '@hermes',
    eta: 'In progress',
  },
  {
    id: 'A4',
    title: 'Fix canonical URLs on 778 service pages',
    description: '778 canonicals + 4 meta + 9 redirects staged awaiting valid GH_TOKEN',
    priority: 'p1',
    status: 'blocked',
    owner: '@scribe',
    note: 'Blocked on valid GitHub PAT (PAT failure = invalid token, not disk)',
  },
  {
    id: 'B1',
    title: 'Service data integrity audit',
    description: 'Verify all 642 services have complete metadata, features, pricing',
    priority: 'p2',
    status: 'done',
    owner: '@clippy',
  },
  {
    id: 'B2',
    title: 'Link verification on core routes',
    description: 'Crawl 40+ core routes, fix broken links, verify redirects',
    priority: 'p2',
    status: 'done',
    owner: '@scout',
  },
  {
    id: 'B3',
    title: 'Homepage SEO optimization',
    description: 'Update homepage stats, add dashboard CTA banner, verify featured services',
    priority: 'p2',
    status: 'in-progress',
    owner: '@scribe',
  },
  {
    id: 'B4',
    title: 'Add AI Agent Dashboard to navigation',
    description: 'Update nav links, footer links, mobile nav sections',
    priority: 'p2',
    status: 'in-progress',
    owner: '@hermes',
  },
  {
    id: 'C1',
    title: 'Doc — update API documentation',
    description: 'Refresh service API docs with latest changes',
    priority: 'p3',
    status: 'blocked',
    owner: '@doc',
    note: 'Stale >96h, recommend reassign',
  },
  {
    id: 'C2',
    title: 'Automate release notes generation',
    description: 'Auto-generate changelog from git history',
    priority: 'p3',
    status: 'todo',
    owner: '@hermes',
  },
];

export const WAVE_DATA: ReadonlyArray<WaveEntry> = [
  { id: 'wave-210', title: 'Wave 210 — AI Service Expansion', servicesAdded: 642, status: 'complete', date: '2026-07-30', description: '642 services across AI, IT, Cloud, Security, Data, Automation categories' },
  { id: 'wave-209', title: 'Wave 209 — Micro-SaaS Integration', servicesAdded: 156, status: 'complete', date: '2026-07-28', description: '156 micro-SaaS services added to catalog' },
  { id: 'wave-208', title: 'Wave 208 — IT Infrastructure', servicesAdded: 234, status: 'complete', date: '2026-07-26', description: '234 IT and infrastructure services' },
  { id: 'wave-207', title: 'Wave 207 — AI & Automation', servicesAdded: 89, status: 'complete', date: '2026-07-24', description: '89 AI and automation services seeded' },
];

export const CRON_JOBS: ReadonlyArray<CronEntry> = [
  { id: 'heartbeat', name: 'Heartbeat Monitor', schedule: 'every 30m', lastRun: 'Just now', status: 'healthy', lastOutput: 'Site 200 OK, dashboard live' },
  { id: 'link-monitor', name: 'Link Verification', schedule: 'daily 09:00', lastRun: '13h ago', status: 'healthy', lastOutput: '30/30 routes OK' },
  { id: 'wave-research', name: 'Wave Research', schedule: 'every 2h', lastRun: '1h ago', status: 'healthy', lastOutput: '642 services discovered' },
  { id: 'seo-content', name: 'SEO Content Loop', schedule: 'every 4h', lastRun: '4h ago', status: 'healthy', lastOutput: '50 pages generated (cycles 8911-8960)' },
  { id: 'outreach', name: 'Outreach Engine', schedule: 'daily 03:00', lastRun: '6h ago', status: 'warning', lastOutput: '284 emails, 120 sent, 164 queued' },
];

export const SYSTEM_METRICS: SystemMetrics = {
  siteUptime: '99.98%',
  buildStatus: '✅ Deployed',
  typeCheck: '✅ Clean',
  totalServices: 642,
  totalWaves: 210,
  fleetHealth: '86% Active',
  totalTasks: ALL_TASKS.length,
  completedTasks: ALL_TASKS.filter(t => t.status === 'done').length,
};

// Category colors for timeline dots
export const CATEGORY_COLORS: Record<string, string> = {
  integration: 'bg-cyan-500 border-cyan-400',
  coordination: 'bg-pink-500 border-pink-400',
  research: 'bg-blue-500 border-blue-400',
  quality: 'bg-emerald-500 border-emerald-400',
  infra: 'bg-orange-500 border-orange-400',
  monitoring: 'bg-violet-500 border-violet-400',
  content: 'bg-amber-500 border-amber-400',
};

// LocalStorage persistence helpers
const STORAGE_KEY = 'zion_agent_actions';

export function loadActions(): AgentAction[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return [];
}

export function saveActions(actions: AgentAction[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(actions));
  } catch { /* ignore */ }
}

export const DEFAULT_AGENT_ACTIONS: AgentAction[] = [];
