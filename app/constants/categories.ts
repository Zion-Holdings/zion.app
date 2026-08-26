export interface CategoryMeta {
  key: string;
  label: string;
  emoji: string;
  color: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { key: 'ai',        label: 'AI Services',          emoji: '🧠', color: 'from-purple-500 to-indigo-500' },
  { key: 'it',        label: 'IT Services',            emoji: '🖥️', color: 'from-blue-500 to-cyan-500' },
  { key: 'cloud',     label: 'Cloud Services',          emoji: '☁️', color: 'from-sky-400 to-blue-600' },
  { key: 'security',  label: 'Security Services',       emoji: '🔐', color: 'from-red-500 to-orange-500' },
  { key: 'data',      label: 'Data Analytics',          emoji: '📊', color: 'from-green-500 to-emerald-500' },
  { key: 'automation',label: 'Automation',              emoji: '🤖', color: 'from-pink-500 to-rose-500' },
  { key: 'micro-saas',label: 'Micro-SaaS Products',     emoji: '🚀', color: 'from-amber-500 to-orange-500' },
  { key: 'devops',    label: 'DevOps and Platform',     emoji: '⚙️', color: 'from-cyan-500 to-blue-500' },
  { key: 'blockchain',label: 'Blockchain and Web3',     emoji: '⛓️', color: 'from-yellow-500 to-amber-600' },
  { key: 'iot',       label: 'IoT and Edge',            emoji: '📡', color: 'from-teal-500 to-green-500' },
  { key: 'email-intelligence', label: 'Email Intelligence', emoji: '📧', color: 'from-violet-500 to-purple-600' },
  { key: 'database',  label: 'Database Solutions',       emoji: '🐘', color: 'from-blue-600 to-indigo-600' },
  { key: 'collaboration', label: 'Collaboration Platforms', emoji: '📂', color: 'from-sky-500 to-cyan-600' },
  { key: 'media-streaming', label: 'Media Streaming',     emoji: '🎬', color: 'from-rose-500 to-pink-600' },
  { key: 'infrastructure-as-code', label: 'Infrastructure as Code', emoji: '🏗️', color: 'from-amber-600 to-orange-600' },
  { key: 'low-code',  label: 'Low-Code Platforms',       emoji: '⚡', color: 'from-emerald-500 to-teal-600' },
  { key: 'monitoring', label: 'Monitoring & Alerting', emoji: '📊', color: 'from-blue-400 to-indigo-400' },
  { key: 'logging', label: 'Log Aggregation', emoji: '📝', color: 'from-gray-400 to-blue-400' },
  { key: 'security-scanning', label: 'Security Scanning', emoji: '🔍', color: 'from-red-400 to-amber-400' },
  { key: 'backup-recovery', label: 'Backup & Recovery', emoji: '💾', color: 'from-green-400 to-teal-400' },
  { key: 'identity-management', label: 'Identity & Access', emoji: '🔑', color: 'from-purple-400 to-fuchsia-400' },
];

export const CATEGORY_BY_KEY: Record<string, CategoryMeta> = Object.fromEntries(
  CATEGORIES.map((c) => [c.key, c])
) as Record<string, CategoryMeta>;
