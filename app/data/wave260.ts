import { Service } from './serviceTypes';

// Wave 260: More Real AI + Micro-SaaS + IT Services
// Research by OWL Agent — 2026-06-19

export const wave260AiServices: Service[] = [
  {
    id: 'ai-voice-assistant',
    title: 'AI Voice Assistant & IVR Platform',
    description: 'Build intelligent voice assistants and IVR systems with natural language understanding. Supports custom voice cloning, multi-language, sentiment-aware responses, and seamless human handoff. Deploy on phone lines, websites, or mobile apps. Reduces call center costs by 60% while improving customer satisfaction.',
    category: 'ai',
    icon: '🎙️',
    href: '/services/ai-voice-assistant',
    industry: 'Customer Service, Healthcare, Finance',
    stage: 'published',
    pricing: { basic: '$299/mo (5K minutes)', pro: '$799/mo (25K minutes)', enterprise: '$1,999/mo (unlimited)' },
    contactInfo: { website: '/services/ai-voice-assistant', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Natural language voice understanding',
      'Custom voice cloning (5 min sample)',
      'Multi-language support (40+ languages)',
      'Sentiment-aware response adaptation',
      'Seamless human agent handoff',
      'CRM & helpdesk integration',
      'Real-time transcription & analytics',
      'Phone, web, and mobile deployment'
    ],
    benefits: [
      'Reduce call center costs by 60%',
      '24/7 availability with instant response',
      'Handle 10x more calls without hiring',
      'Consistent brand voice across all calls',
      'Improve CSAT with faster resolution'
    ]
  },
  {
    id: 'ai-fraud-detection',
    title: 'AI Fraud Detection & Prevention System',
    description: 'Real-time fraud detection for financial transactions, account access, and digital interactions. Uses ensemble ML models trained on billions of transactions to detect anomalies with 99.7% accuracy. Includes rule engine, case management, and regulatory reporting. Processes decisions in under 50ms.',
    category: 'ai',
    icon: '🔒',
    href: '/services/ai-fraud-detection',
    industry: 'Finance, E-commerce, Insurance',
    stage: 'published',
    pricing: { basic: '$499/mo (100K transactions)', pro: '$1,499/mo (1M transactions)', enterprise: '$4,999/mo (unlimited)' },
    contactInfo: { website: '/services/ai-fraud-detection', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Real-time transaction scoring (under 50ms)',
      'Ensemble ML models (99.7% accuracy)',
      'Custom rule engine with 200+ templates',
      'Device fingerprinting & behavioral biometrics',
      'Case management & investigation tools',
      'Regulatory reporting (PCI DSS, AML)',
      'False positive optimization dashboard',
      'API integration (REST, gRPC, webhooks)'
    ],
    benefits: [
      'Prevent $4.24M average breach cost',
      'Reduce false positives by 70%',
      'Automate 95% of fraud decisions',
      'Stay compliant with PCI DSS & AML',
      'Protect customer trust & brand reputation'
    ]
  },
  {
    id: 'ai-code-review',
    title: 'AI Code Review & Security Scanning',
    description: 'Automated code review powered by large language models trained on millions of code reviews. Detects bugs, security vulnerabilities, performance issues, and style violations. Integrates with GitHub, GitLab, and Bitbucket. Reduces review time by 80% and catches 3x more issues than manual review alone.',
    category: 'ai',
    icon: '🔍',
    href: '/services/ai-code-review',
    industry: 'Software Development',
    stage: 'published',
    pricing: { basic: '$79/mo (10 repos)', pro: '$199/mo (50 repos)', enterprise: '$499/mo (unlimited)' },
    contactInfo: { website: '/services/ai-code-review', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Automated PR review comments',
      'Security vulnerability detection (OWASP Top 10)',
      'Performance anti-pattern identification',
      'Code style & best practice enforcement',
      'Custom rule creation for team standards',
      'GitHub, GitLab, Bitbucket integration',
      'Slack & Teams notifications',
      'Review analytics & team insights'
    ],
    benefits: [
      'Reduce code review time by 80%',
      'Catch 3x more bugs before production',
      'Enforce consistent code standards',
      'Onboard junior developers faster',
      'Shift security left in the SDLC'
    ]
  }
];

export const wave260MicroSaasServices: Service[] = [
  {
    id: 'microsaas-status-page',
    title: 'Status Page & Incident Communication',
    description: 'Beautiful, customizable status pages for SaaS companies. Real-time uptime monitoring, incident management, subscriber notifications, and historical uptime reports. Supports custom domains, white-labeling, and API status endpoints. Trusted by 5,000+ companies for transparent communication.',
    category: 'micro-saas',
    icon: '📊',
    href: '/services/microsaas-status-page',
    industry: 'SaaS, DevOps',
    stage: 'published',
    pricing: { basic: '$19/mo (3 services)', pro: '$59/mo (15 services)', enterprise: '$149/mo (unlimited)' },
    contactInfo: { website: '/services/microsaas-status-page', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Real-time uptime monitoring (1-min intervals)',
      'Custom domain & white-label support',
      'Incident creation & status updates',
      'Email/SMS subscriber notifications',
      'Historical uptime reports (SLA proof)',
      'API status endpoints (JSON)',
      'Maintenance window scheduling',
      'Team on-call schedule management'
    ],
    benefits: [
      'Build trust with transparent uptime data',
      'Reduce support tickets by 40% during incidents',
      'Prove SLA compliance with historical data',
      'Custom brand experience for your customers',
      'Set up in under 5 minutes'
    ]
  },
  {
    id: 'microsaas-url-shortener',
    title: 'URL Shortener & Link Management Platform',
    description: 'Enterprise URL shortener with branded domains, QR codes, link analytics, and team management. Track clicks by location, device, and referrer. A/B test destination links. API-first design with webhooks for marketing automation integration.',
    category: 'micro-saas',
    icon: '🔗',
    href: '/services/microsaas-url-shortener',
    industry: 'Marketing, E-commerce',
    stage: 'published',
    pricing: { basic: '$15/mo (5K clicks)', pro: '$49/mo (50K clicks)', enterprise: '$149/mo (500K clicks)' },
    contactInfo: { website: '/services/microsaas-url-shortener', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Branded short domains (yourbrand.co)',
      'QR code generation for every link',
      'Click analytics (geo, device, referrer)',
      'A/B split testing for destinations',
      'Link expiration & password protection',
      'Team workspaces & role management',
      'API & webhooks for automation',
      'Bulk link import via CSV'
    ],
    benefits: [
      'Increase click-through rates by 34%',
      'Track campaign ROI accurately',
      'Professional branded links build trust',
      'Optimize with A/B testing data',
      'Integrate with existing marketing stack'
    ]
  }
];

export const wave260ItServices: Service[] = [
  {
    id: 'it-managed-security',
    title: 'Managed Security Operations Center (SOC)',
    description: '24/7 managed SOC service with real-time threat detection, incident response, and compliance monitoring. Our security analysts and AI-powered SIEM platform monitor your infrastructure around the clock. Includes monthly security reports, vulnerability assessments, and incident response playbooks.',
    category: 'it',
    icon: '🔐',
    href: '/services/it-managed-security',
    industry: 'Cross-Industry',
    stage: 'published',
    pricing: { basic: '$1,999/mo (up to 50 endpoints)', pro: '$4,999/mo (up to 250 endpoints)', enterprise: 'Custom quote' },
    contactInfo: { website: '/services/it-managed-security', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      '24/7 threat monitoring & detection',
      'AI-powered SIEM with behavioral analytics',
      'Incident response with 15-min SLA',
      'Vulnerability scanning & patching',
      'Compliance monitoring (SOC 2, HIPAA, PCI)',
      'Monthly security posture reports',
      'Endpoint detection & response (EDR)',
      'Security awareness training for staff'
    ],
    benefits: [
      'Enterprise-grade security at 1/10th the cost',
      'Detect threats in minutes, not months',
      'Meet compliance requirements effortlessly',
      'Focus on business, not security fires',
      'Sleep knowing experts are watching'
    ]
  },
  {
    id: 'it-network-design',
    title: 'Network Design & Optimization Service',
    description: 'Professional network architecture design, implementation, and optimization for offices, data centers, and cloud environments. Includes network assessment, topology design, hardware selection, configuration, and performance tuning. Achieve 99.99% network uptime with redundant, secure architecture.',
    category: 'it',
    icon: '🌐',
    href: '/services/it-network-design',
    industry: 'Cross-Industry',
    stage: 'published',
    pricing: { basic: '$2,499 (assessment + design)', pro: '$7,499 (full implementation)', enterprise: 'Custom quote' },
    contactInfo: { website: '/services/it-network-design', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Comprehensive network assessment',
      'Topology design with redundancy planning',
      'Hardware selection & vendor negotiation',
      'Firewall & security configuration',
      'WiFi site survey & optimization',
      'SD-WAN design & implementation',
      'Network performance benchmarking',
      'Documentation & knowledge transfer'
    ],
    benefits: [
      'Achieve 99.99% network uptime',
      'Reduce network-related downtime by 90%',
      'Optimize for current and future growth',
      'Secure network from external threats',
      'Lower TCO with right-sized infrastructure'
    ]
  }
];
