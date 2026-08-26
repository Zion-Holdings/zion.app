export interface NavigationLink {
  name: string;
  href: string;
  badge?: string;
}

export const PRIMARY_NAV_LINKS: NavigationLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industry-solutions', badge: 'New' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'AI Agents', href: '/agents-monitoring', badge: 'Live' },
  { name: 'Contact', href: '/contact' },
];

export const SOLUTION_LINKS: NavigationLink[] = [
  { name: '🧠 AI Services', href: '/services/?category=ai' },
  { name: '🖥️ IT Services', href: '/services/?category=it' },
  { name: '☁️ Cloud & DevOps', href: '/services/?category=cloud' },
  { name: '🔐 Cybersecurity', href: '/services/?category=security' },
  { name: '📊 Data & Analytics', href: '/services/?category=data' },
  { name: '🚀 Micro-SaaS', href: '/services/?category=micro-saas' },
  { name: '🤖 Automation', href: '/services/?category=automation' },
  { name: '⛓️ Blockchain & Web3', href: '/services/?category=blockchain' },
  { name: '📡 IoT & Edge', href: '/services/?category=iot' },
  { name: '📧 Email Intelligence', href: '/services/?category=email-intelligence' },
  { name: '──────────', href: '#' },
  { name: '🛠️ All Services →', href: '/services' },
];

export const RESOURCE_LINKS: NavigationLink[] = [
  { name: '🤖 Agent Monitoring', href: '/agents-monitoring', badge: 'Live' },
  { name: '🎯 Leads Control', href: '/leads', badge: 'New' },
  { name: '📊 System Status', href: '/status' },
  { name: '📖 Blog', href: '/blog' },
  { name: '📚 Academy', href: '/academy' },
  { name: '❓ FAQ', href: '/faq' },
  { name: 'ℹ️ About Us', href: '/about' },
  { name: '🤝 Partners', href: '/partners' },
];

export const FEATURED_AI_SERVICE_LINKS: NavigationLink[] = [
  { name: 'AI Document Processing', href: '/services/ai-document-processing' },
  { name: 'AI Predictive Analytics', href: '/services/ai-predictive-analytics' },
  { name: 'AI Fraud Detection', href: '/services/ai-fraud-detection' },
  { name: 'AI Chatbot Builder', href: '/services/ai-chatbot-builder' },
  { name: 'AI Email Analyzer', href: '/services/ai-powered-email-analyzer' },
  { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization-platform' },
  { name: 'AI Smart Inventory', href: '/ai-smart-inventory' },
  { name: 'AI Supply Chain', href: '/ai-supply-chain' },
  { name: 'AI Route Optimizer', href: '/ai-route-optimizer' },
  { name: '──────────', href: '#' },
  { name: '🛠️ Browse All 580+ Services →', href: '/services' },
];
