import { Service } from './serviceTypes';

export const wave280ItServices: Service[] = [
  {
    id: 'it-endpoint-management-ai',
    title: 'AI-Powered Endpoint Management & Unified Endpoint Security',
    description: 'Consolidate device management, security, and support across Windows, macOS, Linux, iOS, and Android. AI automates patching, compliance checks, threat detection, and remote support — reducing endpoint risk and helpdesk workload.',
    category: 'endpoint-management',
    icon: '💻',
    href: '/services/endpoint-management-ai',
    industry: 'IT Operations & Security',
    stage: 'published',
    popular: true,
    pricing: { basic: '$149/mo', pro: '$499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Cross-platform endpoint inventory and policy enforcement',
      'AI-driven patch prioritization and automated deployment',
      'Zero-trust endpoint compliance checking',
      'Remote troubleshooting with AI-assisted diagnostics',
      'Behavioral threat detection on laptops, mobiles, and servers',
      'Unified helpdesk ticketing with bot-assisted resolution'
    ],
    benefits: [
      'Reduce endpoint-related breaches by 60%',
      'Cut helpdesk ticket volume by 40% with self-healing automation',
      'Maintain compliance across BYOD and corporate-device fleets',
      'Decrease patch exposure windows from weeks to hours'
    ]
  },
  {
    id: 'it-backup-disaster-recovery-ai',
    title: 'Intelligent Backup & Disaster Recovery with AI Orchestration',
    description: 'Protect data and applications across cloud, on-prem, and SaaS with AI-driven backup scheduling, immutability, cross-region replication, and automated failover. Reduce RPO/RTO with predictive recovery readiness.',
    category: 'backup-dr',
    icon: '🔄',
    href: '/services/backup-disaster-recovery-ai',
    industry: 'IT Infrastructure & Business Continuity',
    stage: 'published',
    popular: false,
    pricing: { basic: '$199/mo', pro: '$599/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI backup scheduling based on change frequency and criticality',
      'Immutable air-gapped backups with ransomware protection',
      'Cross-cloud and cross-region replication orchestration',
      'Automated failover testing and recovery runbooks',
      'SaaS backup (Microsoft 365, Google Workspace, Salesforce)',
      'Predictive RPO/RTO modeling and trend reporting'
    ],
    benefits: [
      'Achieve near-zero RPO/RTO for critical workloads',
      'Recover from ransomware in under 2 hours instead of days',
      'Eliminate backup sprawl with unified data protection',
      'Pass audits with immutable backup evidence and recovery tests'
    ]
  },
  {
    id: 'it-hybrid-multicloud-management',
    title: 'Hybrid & Multi-Cloud Management Platform',
    description: 'Unify operations across AWS, Azure, GCP, and on-premises infrastructure. Centralized visibility, policy enforcement, cost governance, and workload migration orchestration without vendor lock-in.',
    category: 'multicloud',
    icon: '☁️',
    href: '/services/hybrid-multicloud-management',
    industry: 'Cloud & IT Operations',
    stage: 'published',
    popular: true,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Unified control plane for AWS, Azure, GCP, and on-prem',
      'Cloud-agnostic policy engine and governance guardrails',
      'Workload placement optimizer based on cost and performance',
      'Automated cross-cloud migration and disaster recovery',
      'Multi-cloud network and security policy synchronization',
      'FinOps dashboards with shared cost and anomaly attribution'
    ],
    benefits: [
      'Reduce cloud operational overhead by 50%',
      'Avoid vendor lock-in with portable workload definitions',
      'Optimize spend by placing workloads on the best-value cloud',
      'Accelerate migrations with automated lift-and-shift tooling'
    ]
  },
  {
    id: 'it-identity-access-management-ai',
    title: 'AI-Driven Identity & Access Management (IAM)',
    description: 'Secure identity lifecycle management with AI anomaly detection, just-in-time access, adaptive MFA, and least-privilege enforcement. Protect against credential stuffing, lateral movement, and insider risk.',
    category: 'iam',
    icon: '🔐',
    href: '/services/identity-access-management-ai',
    industry: 'Security & IT',
    stage: 'published',
    popular: false,
    pricing: { basic: '$199/mo', pro: '$699/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI-powered anomaly detection for login and access patterns',
      'Just-in-time privileged access with auto-expiry',
      'Adaptive MFA based on risk score and context',
      'Automated user lifecycle (joiner/mover/leaver)',
      'SSO federation across cloud, on-prem, and SaaS apps',
      'Insider threat detection and segregation-of-duties enforcement'
    ],
    benefits: [
      'Reduce account takeovers by 70% with risk-based authentication',
      'Eliminate standing excess privileges with Just-In-Time access',
      'Automate identity lifecycle to reduce manual provisioning errors',
      'Detect compromised credentials before they cause breaches'
    ]
  },
  {
    id: 'it-network-automation-sdwan',
    title: 'Network Automation & SD-WAN with Intent-Based Networking',
    description: 'Transform legacy networks with intent-based automation, self-healing WAN, centralized policy, and real-time path optimization. Reduce network outages, provisioning time, and MPLS costs.',
    category: 'networking',
    icon: '🌐',
    href: '/services/network-automation-sdwan',
    industry: 'IT Networking & Telecom',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Intent-based networking with natural-language policy translation',
      'Self-healing WAN with dynamic path optimization',
      'Automated site provisioning and branch deployment',
      'Centralized configuration and drift prevention',
      'Real-time application performance routing',
      'Integrated security (ZTNA, firewall, DNS protection)'
    ],
    benefits: [
      'Reduce branch provisioning from days to minutes',
      'Cut MPLS/connectivity costs by 30-40%',
      'Improve application performance by 2x with dynamic path selection',
      'Decrease network-related outages by 80%'
    ]
  },
  {
    id: 'it-virtualization-container-optimization',
    title: 'Virtualization & Container Optimization Platform',
    description: 'Maximize utilization and reduce sprawl across VMware, Hyper-V, KVM, and Kubernetes. AI rightsizes VMs and containers, detects zombie resources, and automates housekeeping.',
    category: 'virtualization',
    icon: '📦',
    href: '/services/virtualization-container-optimization',
    industry: 'IT Infrastructure & Cloud',
    stage: 'published',
    popular: false,
    pricing: { basic: '$249/mo', pro: '$749/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI-powered VM and container right-sizing recommendations',
      'Zombie resource detection and automated cleanup',
      'Hybrid VMware/Kubernetes management console',
      'Storage performance optimization and tiering',
      'License and entitlement optimization',
      'Capacity forecasting and budget planning'
    ],
    benefits: [
      'Reclaim 15-25% of infrastructure capacity without new purchases',
      'Reduce license costs by identifying unused entitlements',
      'Simplify hybrid virtualization with unified management',
      'Improve workload performance with rightsized resource allocations'
    ]
  },
  {
    id: 'it-workspace-modernization-digital-workplace',
    title: 'Digital Workplace & Workspace Modernization',
    description: 'Modernize employee experience with secure cloud desktops (DaaS), unified communications, device provisioning, and AI-powered self-service support. Enable hybrid and remote work without complexity.',
    category: 'digital-workplace',
    icon: '🖥️',
    href: '/services/digital-workplace-modernization',
    industry: 'Enterprise IT & Workplace',
    stage: 'published',
    popular: false,
    pricing: { basic: '$199/mo', pro: '$599/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'DaaS and VDI deployment with GPU acceleration',
      'Unified communications and collaboration suite integration',
      'Zero-touch device provisioning (Zero Touch Provisioning)',
      'AI self-service IT chatbot and knowledge base',
      'Cross-platform productivity analytics',
      'Secure remote access with ZTNA and conditional access'
    ],
    benefits: [
      'Reduce IT support tickets by 35% with AI self-service',
      'Provision new hire workstations in under 10 minutes',
      'Enable secure hybrid work without VPN bottlenecks',
      'Improve employee satisfaction with modern, consistent tooling'
    ]
  },
  {
    id: 'it-software-asset-management-itam',
    title: 'AI-Enhanced Software Asset Management (ITAM)',
    description: 'Gain full visibility into software licenses, usage, and compliance across devices, SaaS, and cloud. AI detects over-provisioning, under-utilization, and audit risk automatically.',
    category: 'itam',
    icon: '📜',
    href: '/services/software-asset-management-itam',
    industry: 'IT Finance & Compliance',
    stage: 'published',
    popular: false,
    pricing: { basic: '$149/mo', pro: '$449/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Automated software inventory across devices and SaaS',
      'License compliance analysis and audit-ready reporting',
      'AI-driven usage analytics and reclamation recommendations',
      'SaaS shadow IT discovery and risk assessment',
      'Vendor negotiation support with utilization evidence',
      'Renewal calendar and budget forecasting'
    ],
    benefits: [
      'Reduce software license costs by 20-30%',
      'Pass software audits with documented compliance evidence',
      'Eliminate shadow IT risks with automated discovery',
      'Improve budgeting with accurate renewal forecasting'
    ]
  },
  {
    id: 'it-data-center-green-ops',
    title: 'Data Center GreenOps & Energy Optimization',
    description: 'Reduce data center carbon footprint and PUE with AI-powered environmental monitoring, cooling optimization, renewable energy matching, and hardware lifecycle management. Meet ESG targets profitably.',
    category: 'greenops',
    icon: '🌱',
    href: '/services/data-center-green-ops',
    industry: 'Data Center & Sustainability',
    stage: 'published',
    popular: false,
    pricing: { basic: '$349/mo', pro: '$999/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI-controlled cooling optimization (liquid, air, immersion)',
      'Real-time PUE and energy efficiency monitoring',
      'Carbon-aware workload scheduling and renewable PPAs',
      'Hardware lifecycle automation and ITAD remarketing',
      'ESG reporting and sustainability scorecards',
      'Power capacity forecasting and heat-map visualization'
    ],
    benefits: [
      'Reduce data center energy costs by 25-40%',
      'Improve PUE toward industry-leading values',
      'Meet ESG and carbon-neutral commitments without sacrificing performance',
      'Extend hardware life and reduce e-waste'
    ]
  },
  {
    id: 'it-application-performance-monitoring-ai',
    title: 'AI Application Performance Monitoring & Optimization',
    description: 'Monitor, diagnose, and optimize application performance across full-stack and microservices. AI correlates anomalies, predicts degradation, and recommends fixes before users notice.',
    category: 'apm',
    icon: '📏',
    href: '/services/application-performance-monitoring',
    industry: 'IT Operations & DevOps',
    stage: 'published',
    popular: false,
    pricing: { basic: '$199/mo', pro: '$599/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Full-stack tracing (frontend, backend, database, infrastructure)',
      'AI anomaly detection and automatic root-cause correlation',
      'SLO/SLA tracking with error budget burn-rate alerts',
      'Production profiling and hotspot identification',
      'Release impact analysis and regression detection',
      'Cross-team dashboards and incident escalation automation'
    ],
    benefits: [
      'Detect performance regressions before customers report them',
      'Reduce mean time to resolution (MTTR) by 60%',
      'Optimize release confidence with automated impact analysis',
      'Improve user experience through proactive performance tuning'
    ]
  },
  {
    id: 'it-cybersecurity-awareness-training-ai',
    title: 'AI-Powered Cybersecurity Awareness Training',
    description: 'Train employees with adaptive, personalized phishing simulations and security education. AI adjusts difficulty, tracks improvement, and reduces human-factor risk across the organization.',
    category: 'security-training',
    icon: '🎓',
    href: '/services/cybersecurity-awareness-training',
    industry: 'Security & HR',
    stage: 'published',
    popular: false,
    pricing: { basic: '$99/mo', pro: '$299/mo', enterprise: '$999/mo' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Adaptive phishing simulation campaigns',
      'Personalized training modules based on click behavior',
      'AI-generated lures reflecting current threat trends',
      'Gamified progress tracking and leaderboards',
      'Compliance reporting for SOC 2, ISO 27001, HIPAA',
      'Dedicated admin dashboard and org-wide risk scoring'
    ],
    benefits: [
      'Reduce phishing click rates by 70% within 90 days',
      'Build a human firewall that complements technical controls',
      'Meet compliance training requirements with documented modules',
      'Identify repeat-risk employees and deliver targeted remediation'
    ]
  }
];
