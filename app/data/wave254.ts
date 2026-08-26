import { Service } from './serviceTypes';

// Wave 254 — Micro-SaaS, IT Services, and AI Solutions
// Research by @tablet_kleber_bot — 2026-06-19

export const wave254MicroSaasServices: Service[] = [
  {
    id: 'expense-tracker-pro',
    title: 'Expense Tracker Pro',
    description: 'Expense Tracker Pro is an AI-powered expense management platform that automates receipt scanning, categorization, and budget tracking for small and medium businesses. With seamless QuickBooks and Xero integration, it eliminates manual expense entry and gives finance teams real-time visibility into company spending.',
    category: 'micro-saas',
    icon: '💰',
    href: '/services/expense-tracker-pro',
    industry: 'Finance & Accounting',
    stage: 'published',
    popular: true,
    pricing: { basic: '$12/mo (up to 5 users, 50 receipts/month)', pro: '$29/mo (up to 25 users, 500 receipts/month)', enterprise: 'Custom (unlimited users, custom integrations, dedicated support)' },
    contactInfo: { website: '/services/expense-tracker-pro', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI receipt scanning: extract data from photos of receipts with 99% accuracy',
      'Smart categorization: automatically categorize expenses using machine learning',
      'Budget alerts: real-time notifications when spending approaches budget limits',
      'QuickBooks & Xero sync: two-way integration with leading accounting platforms',
      'Multi-currency support: track expenses in 40+ currencies with live exchange rates',
      'Approval workflows: configurable multi-level approval chains for expense reports',
      'Mileage tracking: GPS-based automatic mileage logging for travel reimbursements',
      'Tax-ready reports: generate tax-compliant expense reports for year-end filing'
    ],
    benefits: [
      'Reduce expense processing costs by 75% with AI-powered receipt scanning',
      'Improve finance team efficiency by eliminating manual data entry',
      'Scale with enterprise-grade infrastructure supporting unlimited users and integrations'
    ]
  },
  {
    id: 'employee-timesheet-manager',
    title: 'Employee Timesheet Manager',
    description: 'Employee Timesheet Manager is a cloud-based time tracking solution with GPS-enabled clock-in, automated payroll export, and a full-featured mobile app. It simplifies workforce time management for distributed teams and ensures accurate, compliant time records across all departments.',
    category: 'micro-saas',
    icon: '⏱️',
    href: '/services/employee-timesheet-manager',
    industry: 'Human Resources',
    stage: 'published',
    pricing: { basic: '$8/mo (up to 10 employees, basic tracking)', pro: '$15/mo (up to 100 employees, payroll export)', enterprise: 'Custom (unlimited employees, custom workflows, API access)' },
    contactInfo: { website: '/services/employee-timesheet-manager', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'GPS clock-in: geofenced clock-in/out to verify employee location',
      'Payroll export: one-click export to ADP, Gusto, Paychex, and QuickBooks Payroll',
      'Mobile app: full-featured iOS and Android apps for on-the-go time tracking',
      'Overtime alerts: automatic notifications when employees approach overtime thresholds',
      'PTO tracking: integrated paid time off accrual and balance management',
      'Project time allocation: assign hours to specific projects, clients, or cost centers',
      'Break compliance: enforce mandatory break rules based on state and federal regulations',
      'Timesheet approvals: manager review and approval workflow with audit trail'
    ],
    benefits: [
      'Reduce payroll processing costs by 60% with automated timesheet calculations',
      'Improve workforce efficiency with real-time visibility into employee hours',
      'Scale with enterprise-grade infrastructure supporting unlimited employees and locations'
    ]
  },
  {
    id: 'proposal-builder',
    title: 'Proposal Builder',
    description: 'Proposal Builder is a sales enablement platform that lets teams create professional, branded proposals in minutes using drag-and-drop templates, integrated e-signatures, and real-time analytics. It accelerates deal cycles and gives sales leaders insight into proposal engagement and win rates.',
    category: 'micro-saas',
    icon: '📝',
    href: '/services/proposal-builder',
    industry: 'Sales & Business',
    stage: 'published',
    pricing: { basic: '$19/mo (up to 3 users, 10 proposals/month)', pro: '$49/mo (up to 15 users, unlimited proposals)', enterprise: 'Custom (unlimited users, custom branding, CRM integration, SLA)' },
    contactInfo: { website: '/services/proposal-builder', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Drag-and-drop templates: 200+ professionally designed proposal templates',
      'E-signature integration: built-in DocuSign and HelloSign for instant signing',
      'Real-time analytics: track when proposals are opened, viewed, and shared',
      'Content library: centralized repository of approved content blocks and pricing',
      'CRM sync: bidirectional sync with Salesforce, HubSpot, and Pipedrive',
      'Collaboration tools: team commenting, version control, and approval workflows',
      'Dynamic pricing tables: auto-calculate totals with discounts and tax',
      'Branded portals: client-facing proposal portals with your company branding'
    ],
    benefits: [
      'Reduce proposal creation time by 80% with drag-and-drop templates',
      'Improve win rates by 35% with real-time engagement analytics',
      'Scale with enterprise-grade infrastructure supporting unlimited proposals and users'
    ]
  },
  {
    id: 'review-management-platform',
    title: 'Review Management Platform',
    description: 'Review Management Platform is an AI-powered reputation management tool that monitors Google, Yelp, and 50+ review sites, analyzes sentiment with natural language processing, and automates response workflows. It helps businesses protect and grow their online reputation at scale.',
    category: 'micro-saas',
    icon: '⭐',
    href: '/services/review-management-platform',
    industry: 'Marketing & Reputation',
    stage: 'published',
    pricing: { basic: '$29/mo (up to 3 locations, 100 reviews/month)', pro: '$79/mo (up to 25 locations, unlimited reviews)', enterprise: 'Custom (unlimited locations, white-label, API access, dedicated support)' },
    contactInfo: { website: '/services/review-management-platform', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Google & Yelp monitoring: track reviews across 50+ platforms in real time',
      'AI sentiment analysis: NLP-powered analysis of review tone, topics, and urgency',
      'Auto-responses: AI-generated personalized response drafts for manager approval',
      'Review aggregation: unified dashboard showing all reviews across all locations',
      'Competitor monitoring: track competitor reviews and benchmark your ratings',
      'Review generation: automated post-purchase review request campaigns via SMS and email',
      'Alert system: instant notifications for negative reviews requiring immediate attention',
      'Analytics dashboard: track rating trends, response times, and sentiment over time'
    ],
    benefits: [
      'Reduce negative review impact by 70% with instant alerts and AI-powered responses',
      'Improve online reputation efficiency by managing all reviews from one platform',
      'Scale with enterprise-grade infrastructure supporting unlimited locations and reviews'
    ]
  },
  {
    id: 'form-automation-hub',
    title: 'Form Automation Hub',
    description: 'Form Automation Hub is a powerful form builder and workflow automation platform featuring conditional logic, 50+ integrations, and multi-step workflows. It replaces paper forms, spreadsheets, and manual processes with intelligent digital forms that route data automatically.',
    category: 'micro-saas',
    icon: '📋',
    href: '/services/form-automation-hub',
    industry: 'Operations & Data',
    stage: 'published',
    pricing: { basic: '$15/mo (up to 5 users, 1,000 submissions/month)', pro: '$39/mo (up to 25 users, 10,000 submissions/month)', enterprise: 'Custom (unlimited users, custom integrations, dedicated infrastructure)' },
    contactInfo: { website: '/services/form-automation-hub', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Conditional logic: show/hide fields based on user responses for smart forms',
      '50+ integrations: connect to Slack, Google Sheets, Salesforce, Zapier, and more',
      'Multi-step workflows: route form submissions through approval chains automatically',
      'File uploads: support for documents, images, and signatures within forms',
      'Calculated fields: auto-compute totals, scores, and conditional outputs',
      'Mobile-responsive forms: forms that work perfectly on any device or screen size',
      'Data validation: real-time validation with custom error messages and rules',
      'Analytics & reporting: track completion rates, drop-off points, and submission trends'
    ],
    benefits: [
      'Reduce form processing costs by 65% with automated workflows and integrations',
      'Improve data collection efficiency by replacing paper forms with smart digital forms',
      'Scale with enterprise-grade infrastructure supporting unlimited submissions and users'
    ]
  }
];

export const wave254ItServices: Service[] = [
  {
    id: 'managed-print-services',
    title: 'Managed Print Services',
    description: 'Managed Print Services is a comprehensive print infrastructure management solution that monitors printer fleets, automates supply replenishment, and tracks printing costs across the organization. It reduces print-related expenses by up to 30% while ensuring zero downtime for critical printing operations.',
    category: 'it-services',
    icon: '🖨️',
    href: '/services/managed-print-services',
    industry: 'IT Infrastructure',
    stage: 'published',
    pricing: { basic: '$5/device/mo (up to 20 devices, basic monitoring)', pro: '$12/device/mo (up to 200 devices, supply automation)', enterprise: 'Custom (unlimited devices, dedicated technician, SLA)' },
    contactInfo: { website: '/services/managed-print-services', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Fleet monitoring: real-time status monitoring of all networked printers and MFPs',
      'Supply automation: automatic toner and supply ordering when levels drop below threshold',
      'Cost tracking: detailed per-device, per-department, and per-user print cost analysis',
      'Secure printing: pull printing with badge or PIN authentication for confidential documents',
      'Remote diagnostics: proactive issue detection and remote troubleshooting',
      'Usage reporting: comprehensive reports on print volumes, trends, and optimization opportunities',
      'Environmental tracking: monitor paper consumption and carbon footprint reduction',
      'SLA management: guaranteed uptime with defined response and resolution times'
    ],
    benefits: [
      'Reduce print costs by 30% through fleet optimization and supply automation',
      'Improve IT efficiency by eliminating manual printer management tasks',
      'Scale with enterprise-grade infrastructure supporting unlimited devices and locations'
    ]
  },
  {
    id: 'voip-phone-system',
    title: 'VoIP Phone System',
    description: 'VoIP Phone System is a cloud-based business phone platform featuring auto-attendant, intelligent call routing, and deep CRM integration. It replaces legacy PBX systems with a modern, scalable communication solution that supports remote and hybrid workforces.',
    category: 'it-services',
    icon: '📞',
    href: '/services/voip-phone-system',
    industry: 'Communications',
    stage: 'published',
    pricing: { basic: '$18/user/mo (up to 10 users, basic calling)', pro: '$35/user/mo (up to 100 users, advanced features)', enterprise: 'Custom (unlimited users, custom IVR, dedicated trunk, SLA)' },
    contactInfo: { website: '/services/voip-phone-system', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Auto-attendant: customizable IVR menus with professional greetings and routing',
      'Intelligent call routing: skills-based, round-robin, and time-based routing rules',
      'CRM integration: screen pops with customer data in Salesforce, HubSpot, and Zoho',
      'Call recording: automatic or on-demand call recording with searchable transcripts',
      'Video conferencing: built-in HD video meetings for up to 200 participants',
      'Mobile & desktop apps: softphone apps for iOS, Android, Windows, and Mac',
      'Call analytics: real-time dashboards showing call volume, wait times, and agent performance',
      'Voicemail-to-email: automatic voicemail transcription and delivery to inbox'
    ],
    benefits: [
      'Reduce phone system costs by 50% compared to traditional PBX infrastructure',
      'Improve customer communication efficiency with intelligent call routing and CRM integration',
      'Scale with enterprise-grade infrastructure supporting unlimited users and global offices'
    ]
  },
  {
    id: 'it-asset-management',
    title: 'IT Asset Management',
    description: 'IT Asset Management is a comprehensive platform for tracking hardware and software assets across their entire lifecycle — from procurement to disposal. It ensures compliance with software licenses, optimizes asset utilization, and provides complete visibility into IT inventory.',
    category: 'it-services',
    icon: '🗂️',
    href: '/services/it-asset-management',
    industry: 'IT Operations',
    stage: 'published',
    pricing: { basic: '$3/asset/mo (up to 100 assets, basic tracking)', pro: '$2/asset/mo (up to 1,000 assets, compliance reporting)', enterprise: 'Custom (unlimited assets, custom workflows, API access, dedicated support)' },
    contactInfo: { website: '/services/it-asset-management', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Hardware tracking: barcode and QR code scanning for physical asset inventory',
      'Software license management: track license compliance, renewals, and usage',
      'Lifecycle management: manage assets from procurement through retirement and disposal',
      'Compliance reporting: automated reports for software audits and regulatory compliance',
      'Depreciation tracking: calculate asset depreciation for financial reporting',
      'Maintenance scheduling: proactive maintenance alerts and service history tracking',
      'Discovery tools: automatic network discovery of connected devices and software',
      'Integration with ITSM: connect with ServiceNow, Jira, and other IT service management tools'
    ],
    benefits: [
      'Reduce software compliance costs by 40% with automated license tracking',
      'Improve IT asset efficiency with complete lifecycle visibility and utilization data',
      'Scale with enterprise-grade infrastructure supporting unlimited assets and locations'
    ]
  }
];

export const wave254AiServices: Service[] = [
  {
    id: 'ai-customer-support-chatbot',
    title: 'AI Customer Support Chatbot',
    description: 'AI Customer Support Chatbot is an intelligent conversational AI platform that resolves up to 80% of customer inquiries automatically. Powered by advanced natural language understanding, it integrates with your knowledge base and seamlessly hands off complex issues to human agents when needed.',
    category: 'ai-services',
    icon: '🤖',
    href: '/services/ai-customer-support-chatbot',
    industry: 'Customer Support',
    stage: 'published',
    popular: true,
    pricing: { basic: '$49/mo (up to 500 conversations/month, basic NLU)', pro: '$149/mo (up to 10,000 conversations/month, advanced AI)', enterprise: 'Custom (unlimited conversations, custom models, dedicated infrastructure, SLA)' },
    contactInfo: { website: '/services/ai-customer-support-chatbot', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      '80% auto-resolution: handle the majority of customer inquiries without human intervention',
      'Knowledge base integration: automatically pull answers from your existing documentation',
      'Human handoff: seamless transfer to live agents with full conversation context',
      'Multilingual support: understand and respond in 50+ languages out of the box',
      'Sentiment analysis: detect customer frustration and prioritize urgent conversations',
      'Omnichannel deployment: deploy on website, mobile app, WhatsApp, and social media',
      'Continuous learning: AI improves from every interaction and agent correction',
      'Analytics dashboard: track resolution rates, CSAT scores, and conversation trends'
    ],
    benefits: [
      'Reduce customer support costs by 60% with 80% automated inquiry resolution',
      'Improve customer satisfaction with instant, 24/7 AI-powered support',
      'Scale with enterprise-grade infrastructure supporting unlimited conversations and channels'
    ]
  },
  {
    id: 'ai-resume-screener',
    title: 'AI Resume Screener',
    description: 'AI Resume Screener is an intelligent recruitment tool that ranks and filters resumes based on job requirements, detects potential bias in hiring decisions, and integrates with leading applicant tracking systems. It reduces time-to-hire by 50% while promoting fair and objective candidate evaluation.',
    category: 'ai-services',
    icon: '📄',
    href: '/services/ai-resume-screener',
    industry: 'Human Resources',
    stage: 'published',
    pricing: { basic: '$39/mo (up to 100 resumes/month, basic matching)', pro: '$99/mo (up to 1,000 resumes/month, bias detection)', enterprise: 'Custom (unlimited resumes, custom models, ATS integration, SLA)' },
    contactInfo: { website: '/services/ai-resume-screener', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Resume ranking: AI scores and ranks candidates based on job requirement match',
      'Bias detection: identify and flag potentially biased language in job descriptions and screening',
      'ATS integration: seamless integration with Greenhouse, Lever, Workday, and iCIMS',
      'Skills extraction: automatically extract and categorize skills, experience, and education',
      'Custom scoring: configure weighted scoring criteria for different roles and teams',
      'Diversity analytics: track diversity metrics across your hiring pipeline',
      'Interview scheduling: automated interview scheduling for top-ranked candidates',
      'Compliance reporting: EEOC and OFCCP-compliant screening audit trails'
    ],
    benefits: [
      'Reduce time-to-hire by 50% with AI-powered resume screening and ranking',
      'Improve hiring quality with bias detection and objective candidate evaluation',
      'Scale with enterprise-grade infrastructure supporting unlimited resumes and ATS integrations'
    ]
  },
  {
    id: 'ai-meeting-assistant',
    title: 'AI Meeting Assistant',
    description: 'AI Meeting Assistant is an intelligent meeting productivity tool that provides real-time transcription, AI-generated summaries, and automatic action item extraction. It integrates with Zoom, Teams, and Google Meet to ensure no important detail is ever lost.',
    category: 'ai-services',
    icon: '🎙️',
    href: '/services/ai-meeting-assistant',
    industry: 'Productivity',
    stage: 'published',
    pricing: { basic: '$25/mo (up to 10 hours/month transcription)', pro: '$69/mo (up to 100 hours/month, AI summaries)', enterprise: 'Custom (unlimited hours, custom models, API access, dedicated support)' },
    contactInfo: { website: '/services/ai-meeting-assistant', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Real-time transcription: live captions with speaker identification and timestamps',
      'AI summaries: automatic generation of meeting summaries with key discussion points',
      'Action item extraction: identify and assign action items with owners and due dates',
      'Meeting search: search across all past meetings by keyword, speaker, or topic',
      'Platform integration: works with Zoom, Microsoft Teams, Google Meet, and Webex',
      'Multi-language support: transcribe and summarize in 30+ languages',
      'Meeting analytics: track meeting frequency, duration, and participation metrics',
      'Secure storage: encrypted storage with role-based access controls and compliance'
    ],
    benefits: [
      'Reduce meeting follow-up time by 70% with AI-generated summaries and action items',
      'Improve team productivity with searchable meeting records and automatic transcription',
      'Scale with enterprise-grade infrastructure supporting unlimited meetings and users'
    ]
  }
];
