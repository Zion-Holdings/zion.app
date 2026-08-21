export const CATEGORIES = [
  { key: 'automation', label: 'Automation', emoji: '⚙️' },
  { key: 'cloud', label: 'Cloud', emoji: '☁️' },
  { key: 'security', label: 'Security', emoji: '🔐' },
  { key: 'data', label: 'Data', emoji: '📊' },
  { key: 'ai', label: 'AI', emoji: '🧠' },
  { key: 'micro-saas', label: 'Micro-SaaS', emoji: '🚀' },
  { key: 'iot', label: 'IoT', emoji: '📡' },
  { key: 'database', label: 'Database', emoji: '💾' },
  { key: 'devops', label: 'DevOps', emoji: '🛠️' },
  { key: 'observability', label: 'Observability', emoji: '📈' },
  { key: 'agents', label: 'AI Agents', emoji: '⚡' },
];

export const PRIMARY_NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services/' },
  { name: 'AI Services', href: '/ai-services/' },
  { name: 'Hermes Agents', href: '/hermes-agents/' },
  { name: 'Products', href: '/products/' },
  { name: 'Solutions', href: '/solutions/' },
  { name: 'Dashboard', href: '/dashboard/' },
  { name: 'Use Cases', href: '/use-cases/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'FAQ', href: '/faq/' },
  { name: 'Testimonials', href: '/testimonials/' },
  { name: 'About', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
];

export const SOLUTION_LINKS = [
  { name: 'Hermes AI Agents', href: '/solutions/hermes-ai-agents/' },
  { name: 'AI & Automation', href: '/solutions/ai-automation/' },
  { name: 'Cloud & DevOps', href: '/solutions/cloud-devops/' },
  { name: 'Security & Compliance', href: '/solutions/security-compliance/' },
  { name: 'Data & Analytics', href: '/solutions/data-analytics/' },
  { name: 'Managed IT', href: '/solutions/managed-it/' },
  { name: 'Micro-SaaS', href: '/solutions/micro-saas/' },
];

export const AI_LAB_LINKS = [
  { name: 'Hermes Agent Platform', href: '/services/hermes-agent/' },
  { name: 'Agent Monitoring', href: '/agents-monitoring/' },
  { name: 'Hermes Monitor', href: '/hermes-monitor/' },
  { name: 'AI Labs', href: '/ai/' },
  { name: 'Agent Comparison', href: '/docs/agent-framework-comparison/' },
  { name: 'Skills Guide', href: '/docs/hermes-agent-skills/' },
];

export const RESOURCE_LINKS = [
  { name: 'Agent Monitoring', href: '/agents-monitoring/' },
  { name: 'Hermes Agent Platform', href: '/services/hermes-agent/' },
  { name: 'Hermes Skills Guide', href: '/docs/hermes-agent-skills/' },
  { name: 'MCP Integration', href: '/docs/hermes-agent-mcp-integration/' },
  { name: 'Installation Guide', href: '/docs/hermes-agent-installation/' },
  { name: 'Agent Comparison', href: '/docs/agent-framework-comparison/' },
  { name: 'System Status', href: '/status/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'Contact', href: '/contact/' },
  { name: 'FAQ', href: '/faq/' },
  { name: 'About', href: '/about/' },
  { name: 'Providers', href: '/providers/' },
  { name: 'Integrators', href: '/integrators/' },
  { name: 'IT Vendors', href: '/it-vendors/' },
  { name: 'Enterprise Clients', href: '/business-customers/' },
  { name: 'Government', href: '/governments/' },
];

export const FEATURED_AI_SERVICE_LINKS = [
  { name: 'AI Strategy', href: '/services?category=ai' },
  { name: 'Hermes Agent', href: '/services/hermes-agent/' },
  { name: 'Automation', href: '/services?category=automation' },
  { name: 'Security', href: '/services?category=security' },
  { name: 'Data', href: '/services?category=data' },
  { name: 'Cloud', href: '/services?category=cloud' },
  { name: 'IoT', href: '/services?category=iot' },
];

export type NavigationLink = {
  name: string;
  href: string;
};
