export interface NavigationLink {
  name: string;
  href: string;
  badge?: string;
}

export const PRIMARY_NAV_LINKS: NavigationLink[] = [
  { name: 'Home', href: '/' },
  { name: 'AI Lab', href: '/ai-lab', badge: 'New' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Tools', href: '/tools' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'AI Agents', href: '/agents-monitoring', badge: 'Live' },
  { name: 'Contact', href: '/contact' },
];

export const AI_LAB_LINKS: NavigationLink[] = [
  { name: 'AI Lab Home', href: '/ai-lab' },
  { name: 'Solutions Configurator', href: '/ai/solutions-configurator' },
  { name: 'URL Audit Assistant', href: '/ai/url-audit-assistant' },
  { name: 'AI Readiness Assessment', href: '/ai-readiness-assessment-services' },
  { name: 'Demo Sandbox', href: '/ai/demo' },
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
  { name: 'AI Document Processing', href: '/services/document-processing' },
  { name: 'AI Predictive Analytics', href: '/services/ai-predictive-analytics' },
  { name: 'AI Fraud Detection', href: '/services/ai-fraud-detection' },
  { name: 'AI Customer Churn Prediction', href: '/services/ai-customer-churn-prediction', badge: 'New' },
  { name: 'AI Meeting Notes & Action Items', href: '/services/ai-meeting-summarizer-pro' },
  { name: 'AI Voice Agent', href: '/services/ai-voice-agent-platform' },
  { name: 'AI Legal Contract Analyzer', href: '/services/ai-legal-contract-nlp-analyzer' },
  { name: 'AI Smart Contract Auditor', href: '/services/ai-smart-contract-auditor' },
  { name: '──────────', href: '#' },
  { name: '🛠️ Browse All 14,211+ Services →', href: '/services' },
];

export const TOOL_LINKS: NavigationLink[] = [
  { name: 'Service Comparison', href: '/tools/service-comparison' },
  { name: 'ROI Calculator', href: '/tools/roi-calculator' },
  { name: 'AI Service Router', href: '/tools/ai-service-router' },
  { name: 'Health Check', href: '/tools/health-check' },
  { name: 'SSL Checker', href: '/tools/ssl-checker' },
  { name: 'Port Scanner', href: '/tools/port-scanner' },
  { name: 'JSON Formatter', href: '/tools/json-formatter' },
  { name: 'CSS Gradient Generator', href: '/tools/ai-service-router' },
];