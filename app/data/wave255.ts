import { Service } from './serviceTypes';

// Wave 255 — Micro-SaaS, IT Services, and AI Solutions
// Research by @tablet_kleber_bot — 2026-06-19

export const wave255MicroSaasServices: Service[] = [
  {
    id: 'waitlist-manager',
    title: 'Waitlist Manager',
    description: 'Waitlist Manager is a product launch platform that manages waitlists with position tracking, referral incentive programs, and automated onboarding sequences. It helps businesses build hype, convert interested prospects into paying customers, and optimize their launch funnel.',
    category: 'micro-saas',
    icon: '📋',
    href: '/services/waitlist-manager',
    industry: 'Product Launch',
    stage: 'published',
    pricing: { basic: '$15/mo (up to 1,000 waitlist signups)', pro: '$29/mo (up to 25,000 signups, referral program)', enterprise: 'Custom (unlimited signups, white-label, API access)' },
    contactInfo: { website: '/services/waitlist-manager', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Position tracking: real-time waitlist position with estimated access timing',
      'Referral incentives: reward users for referring friends with tiered perks',
      'Onboarding sequences: automated email and SMS campaigns to educate waitlisted users',
      'Custom branding: fully customizable waitlist page with your logo and colors',
      'Social sharing: one-click sharing to Twitter, LinkedIn, Facebook, and WhatsApp',
      'Analytics dashboard: track signups, referral rates, and conversion metrics',
      'Priority tiers: create VIP tiers with early access and exclusive benefits',
      'API access: integrate waitlist signup into your existing website or app'
    ],
    benefits: [
      'Reduce customer acquisition costs by 40% with viral referral incentives',
      'Improve launch conversion rates with automated onboarding sequences',
      'Scale with enterprise-grade infrastructure supporting millions of waitlist signups'
    ]
  },
  {
    id: 'link-in-bio-platform',
    title: 'Link-in-Bio Platform',
    description: 'Link-in-Bio Platform is a social media landing page tool that creates analytics-rich pages with e-commerce capabilities and lead capture forms. It transforms your social media bio link into a powerful marketing and sales channel.',
    category: 'micro-saas',
    icon: '🔗',
    href: '/services/link-in-bio-platform',
    industry: 'Social Media Marketing',
    stage: 'published',
    pricing: { basic: '$9/mo (up to 5 links, basic analytics)', pro: '$25/mo (unlimited links, e-commerce, lead capture)', enterprise: 'Custom (unlimited links, white-label, custom domains, API access)' },
    contactInfo: { website: '/services/link-in-bio-platform', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Analytics-rich pages: track clicks, geographic data, device type, and referral sources',
      'E-commerce integration: sell products, digital downloads, and services directly from your page',
      'Lead capture: embedded email and SMS signup forms with CRM integration',
      'Custom themes: 50+ professionally designed themes with full customization',
      'Social media integration: auto-embed Instagram feeds, TikTok videos, and YouTube content',
      'Scheduling links: integrate with Calendly, acuity, and Google Calendar for bookings',
      'Music linking: deep links to Spotify, Apple Music, SoundCloud, and YouTube Music',
      'SEO optimization: custom meta tags, Open Graph, and structured data for search visibility'
    ],
    benefits: [
      'Reduce social media conversion costs by 50% with analytics-optimized link pages',
      'Improve lead capture efficiency with embedded forms and CRM integrations',
      'Scale with enterprise-grade infrastructure supporting unlimited traffic and links'
    ]
  },
  {
    id: 'client-portal-builder',
    title: 'Client Portal Builder',
    description: 'Client Portal Builder is a white-label client management platform featuring secure file sharing, project tracking, integrated invoicing, and real-time messaging. It gives your business a professional client experience that strengthens relationships and streamlines communication.',
    category: 'micro-saas',
    icon: '🏢',
    href: '/services/client-portal-builder',
    industry: 'Client Management',
    stage: 'published',
    pricing: { basic: '$35/mo (up to 5 clients, basic portal)', pro: '$79/mo (up to 50 clients, full features)', enterprise: 'Custom (unlimited clients, white-label, custom domain, API access, SLA)' },
    contactInfo: { website: '/services/client-portal-builder', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'File sharing: secure drag-and-drop file sharing with version history and permissions',
      'Project tracking: Kanban boards, Gantt charts, and milestone tracking for client projects',
      'Integrated invoicing: create, send, and track invoices with online payment processing',
      'Real-time messaging: built-in chat with file attachments and conversation threading',
      'Client dashboard: branded client dashboard showing project status and upcoming tasks',
      'Time tracking: built-in time tracking linked to projects and invoices',
      'Custom branding: add your logo, colors, and domain for a fully white-labeled experience',
      'Access controls: granular permission settings for clients, team members, and stakeholders'
    ],
    benefits: [
      'Reduce client communication costs by 50% with a centralized portal for all interactions',
      'Improve client satisfaction with professional project tracking and transparent workflows',
      'Scale with enterprise-grade infrastructure supporting unlimited clients and projects'
    ]
  },
  {
    id: 'satisfaction-survey-tool',
    title: 'Satisfaction Survey Tool',
    description: 'Satisfaction Survey Tool is a customer feedback platform supporting NPS, CSAT, and CES survey types with real-time analytics and automated follow-up workflows. It helps businesses measure, understand, and improve customer satisfaction at every touchpoint.',
    category: 'micro-saas',
    icon: '📊',
    href: '/services/satisfaction-survey-tool',
    industry: 'Customer Success',
    stage: 'published',
    pricing: { basic: '$12/mo (up to 200 responses/month, basic surveys)', pro: '$35/mo (up to 5,000 responses/month, advanced analytics)', enterprise: 'Custom (unlimited responses, custom branding, API access, dedicated support)' },
    contactInfo: { website: '/services/satisfaction-survey-tool', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'NPS surveys: Net Promoter Score surveys with trend tracking and benchmarking',
      'CSAT surveys: Customer Satisfaction Score surveys for transactional and relationship feedback',
      'CES surveys: Customer Effort Score surveys to measure ease of interaction',
      'Real-time analytics: live dashboards with score trends, response rates, and segment analysis',
      'Automated follow-ups: trigger workflows based on survey responses and scores',
      'Multi-channel delivery: distribute surveys via email, SMS, web, and in-app',
      'Custom survey builder: drag-and-drop builder with 20+ question types and logic branching',
      'Integration hub: connect with Salesforce, HubSpot, Zendesk, and Slack for closed-loop feedback'
    ],
    benefits: [
      'Reduce customer churn by 30% with real-time satisfaction monitoring and automated follow-ups',
      'Improve customer success efficiency with centralized feedback collection and analytics',
      'Scale with enterprise-grade infrastructure supporting unlimited surveys and responses'
    ]
  }
];

export const wave255ItServices: Service[] = [
  {
    id: 'server-virtualization',
    title: 'Server Virtualization',
    description: 'Server Virtualization is an enterprise infrastructure solution that consolidates physical servers into virtual machines using VMware, Hyper-V, or KVM. It features live migration, high-availability clustering, and reduces hardware costs by up to 70% while improving disaster recovery capabilities.',
    category: 'it-services',
    icon: '🖥️',
    href: '/services/server-virtualization',
    industry: 'Infrastructure',
    stage: 'published',
    pricing: { basic: '$2,500 (up to 5 VMs, basic support)', pro: '$10,000 (up to 50 VMs, live migration, HA clustering)', enterprise: 'Custom (unlimited VMs, dedicated infrastructure, 24/7 support, SLA)' },
    contactInfo: { website: '/services/server-virtualization', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'VMware/Hyper-V/KVM: support for all major hypervisor platforms based on your needs',
      'Live migration: move running VMs between physical hosts with zero downtime',
      'HA clustering: automatic failover with high-availability clusters for mission-critical workloads',
      'Resource optimization: dynamic resource allocation based on real-time demand',
      'Snapshot & backup: automated VM snapshots with incremental backup to secondary storage',
      'Network virtualization: virtual switches, VLANs, and software-defined networking',
      'Disaster recovery: automated replication to secondary site with configurable RPO and RTO',
      'Capacity planning: AI-powered forecasting of resource needs based on growth trends'
    ],
    benefits: [
      'Reduce hardware costs by 70% by consolidating physical servers into virtual machines',
      'Improve infrastructure efficiency with dynamic resource allocation and live migration',
      'Scale with enterprise-grade infrastructure supporting unlimited VMs and HA clustering'
    ]
  },
  {
    id: 'email-migration-service',
    title: 'Email Migration Service',
    description: 'Email Migration Service is a professional migration service for transferring email, contacts, and calendars between Google Workspace, Microsoft 365, and Exchange. It ensures zero data loss with zero downtime, making email platform transitions seamless for businesses of any size.',
    category: 'it-services',
    icon: '📧',
    href: '/services/email-migration-service',
    industry: 'IT Migration',
    stage: 'published',
    pricing: { basic: '$15/user (one-time, up to 50 users, standard migration)', pro: '$10/user (one-time, 50-500 users, zero downtime)', enterprise: 'Custom (unlimited users, staged migration, dedicated project manager)' },
    contactInfo: { website: '/services/email-migration-service', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Google Workspace migration: migrate to or from Google Workspace with full data transfer',
      'Microsoft 365 migration: seamless migration to or from Microsoft 365 and Exchange Online',
      'Exchange migration: support for on-premises Exchange to cloud or hybrid deployments',
      'Zero downtime: staged migration approach ensuring continuous email access for all users',
      'Data integrity: full migration of emails, contacts, calendars, and attachments',
      'Phased rollout: migrate users in batches with rollback capability at each stage',
      'User training: post-migration training sessions and documentation for end users',
      'Post-migration support: 30-day support period to resolve any sync or configuration issues'
    ],
    benefits: [
      'Reduce email migration costs by 50% with automated工具和 zero-downtime processes',
      'Improve IT efficiency with end-to-end migration management and post-migration support',
      'Scale with enterprise-grade infrastructure supporting unlimited users and mailboxes'
    ]
  },
  {
    id: 'network-penetration-testing',
    title: 'Network Penetration Testing',
    description: 'Network Penetration Testing is a comprehensive security assessment service that identifies vulnerabilities in your network infrastructure, web applications, and human defenses. Conducted by certified ethical hackers, it provides actionable recommendations to strengthen your security posture.',
    category: 'it-services',
    icon: '🔒',
    href: '/services/network-penetration-testing',
    industry: 'Cybersecurity',
    stage: 'published',
    pricing: { basic: '$3,000 (external network testing, up to 256 IPs)', pro: '$8,000 (external + internal + web app testing)', enterprise: 'Custom (full scope, social engineering, red team, quarterly retesting)' },
    contactInfo: { website: '/services/network-penetration-testing', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'External network testing: identify vulnerabilities visible from the internet',
      'Internal network testing: assess lateral movement risks within your internal network',
      'Web application testing: OWASP Top 10 assessment of web-facing applications',
      'Social engineering: phishing simulations and physical security assessments',
      'Vulnerability analysis: deep-dive analysis of discovered vulnerabilities with risk scoring',
      'Remediation roadmap: prioritized remediation plan with step-by-step guidance',
      'Compliance mapping: map findings to PCI DSS, HIPAA, SOC 2, and ISO 27001 requirements',
      'Executive & technical reports: dual-format reports for leadership and IT teams'
    ],
    benefits: [
      'Reduce security breach risk by 80% by identifying and remediating vulnerabilities before attackers do',
      'Improve compliance efficiency with automated mapping to PCI DSS, HIPAA, and SOC 2 frameworks',
      'Scale with enterprise-grade infrastructure supporting networks of any size and complexity'
    ]
  }
];

export const wave255AiServices: Service[] = [
  {
    id: 'ai-content-moderation',
    title: 'AI Content Moderation',
    description: 'AI Content Moderation is a real-time content safety platform that automatically detects and filters inappropriate content across text, images, and video. Using advanced machine learning models, it identifies hate speech, NSFW content, violence, and harmful material at scale.',
    category: 'ai-services',
    icon: '🛡️',
    href: '/services/ai-content-moderation',
    industry: 'Content Safety',
    stage: 'published',
    pricing: { basic: '$0.001/request (up to 100,000 requests/month)', pro: '$0.0005/request (up to 10M requests/month, custom models)', enterprise: 'Custom (unlimited requests, dedicated infrastructure, custom training)' },
    contactInfo: { website: '/services/ai-content-moderation', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Text moderation: detect hate speech, profanity, threats, and harassment in 40+ languages',
      'Image moderation: identify NSFW, violent, and inappropriate images with 99.5% accuracy',
      'Video moderation: real-time video analysis for harmful content across frames',
      'Hate speech detection: ML models trained on diverse datasets to identify hate speech patterns',
      'NSFW detection: adult content detection with configurable sensitivity thresholds',
      'Custom policy engine: define and enforce organization-specific content policies',
      'Human-in-the-loop: route borderline content to human reviewers for final decisions',
      'API & SDK: REST API and SDKs for Python, JavaScript, Java, and Go for easy integration'
    ],
    benefits: [
      'Reduce content moderation costs by 90% with AI-powered automated filtering',
      'Improve user safety with real-time detection of harmful content across all media types',
      'Scale with enterprise-grade infrastructure supporting billions of content checks per month'
    ]
  },
  {
    id: 'ai-pricing-optimizer',
    title: 'AI Pricing Optimizer',
    description: 'AI Pricing Optimizer is an intelligent pricing platform that monitors competitor prices, forecasts demand, and implements dynamic pricing strategies in real time. It maximizes revenue and margins by automatically adjusting prices based on market conditions, inventory levels, and customer behavior.',
    category: 'ai-services',
    icon: '💹',
    href: '/services/ai-pricing-optimizer',
    industry: 'E-Commerce',
    stage: 'published',
    pricing: { basic: '$99/mo (up to 100 products, basic monitoring)', pro: '$299/mo (up to 5,000 products, dynamic pricing)', enterprise: 'Custom (unlimited products, custom ML models, API access, dedicated support)' },
    contactInfo: { website: '/services/ai-pricing-optimizer', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Competitor monitoring: real-time tracking of competitor prices across 100+ marketplaces',
      'Demand forecasting: AI predicts demand changes based on seasonality, trends, and events',
      'Dynamic pricing: automatic price adjustments based on competitor, demand, and inventory signals',
      'Price elasticity modeling: understand how price changes affect conversion for each product',
      'A/B price testing: run controlled experiments to find optimal price points',
      'Margin protection: minimum margin rules prevent unprofitable pricing',
      'Market basket analysis: optimize pricing across product bundles and complementary items',
      'Integration with e-commerce: connect with Shopify, WooCommerce, Magento, and custom platforms'
    ],
    benefits: [
      'Reduce pricing-related revenue loss by 25% with AI-optimized dynamic pricing',
      'Improve pricing efficiency with automated competitor monitoring and demand forecasting',
      'Scale with enterprise-grade infrastructure supporting unlimited products and marketplaces'
    ]
  },
  {
    id: 'ai-fraud-detection',
    title: 'AI Fraud Detection',
    description: 'AI Fraud Detection is a real-time fraud prevention platform that monitors transactions, prevents account takeovers, and verifies identities using advanced machine learning. It analyzes behavioral patterns, device signals, and network data to stop fraud before it happens while minimizing false positives.',
    category: 'ai-services',
    icon: '🔍',
    href: '/services/ai-fraud-detection',
    industry: 'Financial Services',
    stage: 'published',
    pricing: { basic: '$0.05/transaction (up to 10,000 transactions/month)', pro: '$0.03/transaction (up to 1M transactions/month, advanced models)', enterprise: 'Custom (unlimited transactions, custom models, dedicated infrastructure, SLA)' },
    contactInfo: { website: '/services/ai-fraud-detection', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Transaction monitoring: real-time analysis of every transaction for fraud indicators',
      'Account takeover prevention: detect suspicious login patterns and credential stuffing attempts',
      'Identity verification: AI-powered document verification and biometric matching',
      'Behavioral biometrics: analyze typing patterns, mouse movements, and touchscreen behavior',
      'Device fingerprinting: identify and track devices to detect suspicious access patterns',
      'Network analysis: detect fraud rings and coordinated attacks through relationship mapping',
      'Rules engine: customizable rules and thresholds alongside ML-based detection',
      'Case management: investigator dashboard with queue management and evidence collection'
    ],
    benefits: [
      'Reduce fraud losses by 85% with real-time AI-powered transaction monitoring',
      'Improve customer experience by reducing false positives by 60% with behavioral biometrics',
      'Scale with enterprise-grade infrastructure supporting millions of transactions per day'
    ]
  }
];
