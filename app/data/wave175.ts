import { Service } from './serviceTypes';

export const wave175SecurityServices: Service[] = [];
export const wave175CloudServices: Service[] = [];
export const wave175DataServices: Service[] = [];
export const wave175AutomationServices: Service[] = [];

export const wave175MicroSaasServices: Service[] = [
  {
    id: 'w175-landing-page-gen',
    title: 'LandingPage Gen — AI Landing Pages',
    description: 'Generate high-converting landing pages from a brief: copy, layout, images, and CTA variants. Publish to your domain or export as clean HTML.',
    features: ['AI copy generation and variants', 'Conversion-oriented layout templates', 'Image sourcing and generation', 'A/B variants and CTA optimization', 'Custom domain publishing', 'HTML/CSS export'],
    benefits: ['Launch landing pages in minutes', 'Conversion-focused by default', 'A/B variants improve results', 'No designer required'],
    pricing: {basic:'$19/mo', pro:'$59/mo', enterprise:'$149/mo'},
    contactInfo: {website:'/services/w175-landing-page-gen', email:'kleber@ziontechgroup.com', phone:'+1 302 464 0950'},
    icon: '🚀', href: '/services/w175-landing-page-gen', popular: true, category: 'micro-saas', industry: 'Marketing',
  },
  {
    id: 'w175-security-plus',
    title: 'SecurityPlus Lite — Basic SIEM',
    description: 'Lightweight SIEM and log monitoring for small teams: threat rules, alerting, and incident tracking.',
    features: ['Log collection and parsing', 'Threat rules and signatures', 'Alerting via email/Slack', 'Incident tracking and notes', 'Compliance-ready audit log'],
    benefits: ['Detect threats without big security budgets', 'Alerts reduce response time', 'Incident tracking preserves evidence'],
    pricing: {basic:'$49/mo', pro:'$149/mo', enterprise:'$499/mo'},
    contactInfo: {website:'/services/w175-security-plus', email:'kleber@ziontechgroup.com', phone:'+1 302 464 0950'},
    icon: '🧰', href: '/services/w175-security-plus', popular: false, category: 'it', industry: 'Security',
  },
];

export const wave175ItServices: Service[] = [
  {
    id: 'w175-it-infrastructure',
    title: 'Managed IT Infrastructure',
    description: '24/7 managed infrastructure: network, servers, storage, and backup. Proactive monitoring, patching, and capacity planning under one SLA.',
    features: ['Network and server management', 'Proactive monitoring and alerting', 'Patch and update management', 'Backup and disaster recovery planning', 'Capacity planning and scaling', 'SLA-backed support'],
    benefits: ['Reduce downtime with proactive ops', 'Focus internal teams on product work', 'Predictable IT spend', 'SLA protection for critical systems'],
    pricing: {basic:'$499/mo', pro:'$1,499/mo', enterprise:'Custom'},
    contactInfo: {website:'/services/w175-it-infrastructure', email:'kleber@ziontechgroup.com', phone:'+1 302 464 0950'},
    icon: '🖥️', href: '/services/w175-it-infrastructure', popular: true, category: 'it', industry: 'Managed Services',
  },
  {
    id: 'w175-it-cloud-migration',
    title: 'Cloud Migration Services',
    description: 'End-to-end cloud migration with assessment, migration, validation, and training. Migrates workloads to AWS, Azure, or GCP with minimal downtime.',
    features: ['Application and data migration', 'Infrastructure-as-code generation', 'Cutover planning and rollback', 'Performance and security validation', 'Cost estimation and optimization', 'Team training and runbooks'],
    benefits: ['Migrate with confidence', 'Reduce migration risk with phased rollout', 'Optimize costs after migration', 'Teams trained and ready'],
    pricing: {basic:'$2,499/mo', pro:'$7,499/mo', enterprise:'Custom'},
    contactInfo: {website:'/services/w175-it-cloud-migration', email:'kleber@ziontechgroup.com', phone:'+1 302 464 0950'},
    icon: '☁️', href: '/services/w175-it-cloud-migration', popular: true, category: 'it', industry: 'Cloud',
  },
  {
    id: 'w175-it-cybersecurity',
    title: 'Cybersecurity Operations',
    description: 'Managed security operations: threat detection, incident response, vulnerability management, and compliance audits.',
    features: ['Threat detection and hunting', 'Incident response and recovery', 'Vulnerability management and patching', 'Penetration testing', 'Compliance audits and reporting', 'Security awareness training'],
    benefits: ['Reduce breach risk', 'Incident response when seconds count', 'Audit-ready compliance posture', 'Vulnerability management reduces attack surface'],
    pricing: {basic:'$999/mo', pro:'$3,499/mo', enterprise:'Custom'},
    contactInfo: {website:'/services/w175-it-cybersecurity', email:'kleber@ziontechgroup.com', phone:'+1 302 464 0950'},
    icon: '🔒', href: '/services/w175-it-cybersecurity', popular: true, category: 'it', industry: 'Security',
  },
];

export const wave175AiServices: Service[] = [
  {
    id: 'w175-ai-revenue-forecaster',
    title: 'AI Revenue Forecaster',
    description: 'Forecast revenue with AI-driven pipeline analysis, seasonality detection, and risk-adjusted close probabilities. Connects to CRM and finance systems.',
    features: ['Pipeline-aware revenue forecasting', 'Seasonality and trend decomposition', 'Risk-adjusted close probability', 'CRM + ERP data synchronization', 'Drill-down by segment, product, region', 'What-if scenario modeling'],
    benefits: ['Forecast accuracy improves by 30-50%', 'See risk before it hits the quarter', 'Model scenarios in minutes', 'Align sales and finance on one view'],
    pricing: {basic:'$199/mo', pro:'$699/mo', enterprise:'Custom'},
    contactInfo: {website:'/services/w175-ai-revenue-forecaster', email:'kleber@ziontechgroup.com', phone:'+1 302 464 0950'},
    icon: '📈', href: '/services/w175-ai-revenue-forecaster', popular: true, category: 'ai', industry: 'Financial Services',
  },
  {
    id: 'w175-ai-workflow-automator',
    title: 'AI Workflow Automator',
    description: 'AI-defined automation across apps and data. Detects repetitive tasks, builds automation flows, and keeps them healthy with change-aware self-repair.',
    features: ['Process discovery and mapping', 'AI-generated automation steps', 'Cross-app orchestration', 'Change-aware self-repair', 'Human approval gates', 'Executions logs and analytics'],
    benefits: ['Automate repetitive work without scripting', 'Flows self-repair on app changes', 'Approvals keep control with humans', 'Show ROI with execution logs'],
    pricing: {basic:'$49/mo', pro:'$149/mo', enterprise:'$499/mo'},
    contactInfo: {website:'/services/w175-ai-workflow-automator', email:'kleber@ziontechgroup.com', phone:'+1 302 464 0950'},
    icon: '⚙️', href: '/services/w175-ai-workflow-automator', popular: true, category: 'ai', industry: 'Automation',
  },
];
