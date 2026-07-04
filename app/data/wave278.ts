import { Service } from './serviceTypes';

export const wave278DataCenterServices: Service[] = [
  {
    id: 'data-center-ai-infrastructure',
    title: 'AI-Ready Data Center Infrastructure & Colocation',
    description: 'Design, deploy, and optimize data centers for AI and GPU-heavy workloads. High-density power, advanced cooling, and scalable rack solutions tailored for LLM training, inference, and HPC clusters.',
    category: 'data-center-ai-infrastructure',
    icon: '🤖',
    href: '/services/data-center-ai-infrastructure',
    industry: 'Data Center & Infrastructure',
    stage: 'published',
    popular: true,
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'High-density colocation (40–100+ kW per rack)',
      'GPU cluster deployment and power distribution',
      'Direct-to-chip and immersion cooling design',
      'AI workload profiling and right-sizing',
      'Interconnect planning for 400G/800G/1.6T networking',
      'Hyperscale and edge facility load balancing'
    ],
    benefits: [
      'Run AI training clusters without thermal throttling',
      'Reduce power and cooling costs by up to 30%',
      'Future-proof facilities for next-gen accelerators',
      'Achieve 99.999% uptime for mission-critical AI workloads'
    ]
  },
  {
    id: 'data-center-hybrid-cloud-migration',
    title: 'Hybrid Cloud & Data Center Repatriation Services',
    description: 'Seamlessly bridge on-premises data centers with public and private clouds. Migrate, repatriate, and orchestrate workloads across hybrid environments while controlling costs and maintaining compliance.',
    category: 'data-center-hybrid-cloud',
    icon: '☁️',
    href: '/services/data-center-hybrid-cloud-migration',
    industry: 'Cloud Infrastructure',
    stage: 'published',
    popular: true,
    pricing: { basic: '$399/mo', pro: '$1,199/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Workload assessment and placement strategy',
      'Cloud repatriation for analytics, ML, and databases',
      'Multi-cloud orchestration (AWS, Azure, GCP, on-prem)',
      'Cost governance and FinOps for hybrid environments',
      'Bandwidth optimization and egress cost control',
      'Disaster recovery and business continuity planning'
    ],
    benefits: [
      'Lower TCO by 25% through intelligent workload placement',
      'Avoid noisy-neighbor latency with dedicated infrastructure',
      'Simplified compliance across multiple environments',
      'Predictable performance for databases and ERP systems'
    ]
  },
  {
    id: 'data-center-edge-computing',
    title: 'Edge Data Center Design & 5G Integration',
    description: 'Deploy localized edge data centers for IoT, 5G, autonomous systems, and real-time analytics. Low-latency micro-data centers with ruggedized form factors and direct cloud interconnect.',
    category: 'data-center-edge-computing',
    icon: '📡',
    href: '/services/data-center-edge-computing',
    industry: 'Edge & Telecommunications',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Micro-data center siting and design',
      'Ruggedized enclosure options (remote, outdoor, industrial)',
      '5G MEC (Multi-access Edge Computing) integration',
      'Real-time analytics and stream processing at the edge',
      'Cloud interconnect (Direct Connect, ExpressRoute, Cloud Interconnect)',
      'Remote monitoring and zero-touch provisioning'
    ],
    benefits: [
      'Sub-10ms latency for real-time decision making',
      'Offload core data center traffic by up to 60%',
      'Scalable edge infrastructure for millions of IoT devices',
      'Compliant data sovereignty for regulated regions'
    ]
  },
  {
    id: 'data-center-sustainability',
    title: 'Sustainable Data Center Strategy & Green Energy',
    description: 'Transition data centers to net-zero operations with renewable energy sourcing, carbon tracking, and efficiency metrics. Build ESG-compliant infrastructure with PPAs, battery storage, and grid-interactive demand response.',
    category: 'data-center-sustainability',
    icon: '🌱',
    href: '/services/data-center-sustainability',
    industry: 'Sustainability & Energy',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$799/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Carbon footprint auditing and benchmarking',
      'Renewable PPA negotiation and procurement',
      'On-site solar, wind, and battery storage design',
      'Grid-interactive demand response participation',
      'PUE optimization and efficiency retrofits',
      'ESG reporting aligned with TCFD and CSRD frameworks'
    ],
    benefits: [
      'Achieve net-zero facility certifications faster',
      'Reduce energy costs by 20% with renewables and storage',
      'Meet RFP sustainability requirements in top-tier deals',
      'Enhance brand reputation with verifiable green metrics'
    ]
  },
  {
    id: 'data-center-digital-twin',
    title: 'Data Center Digital Twin & Simulation',
    description: 'Create physics-accurate digital twins of power, cooling, and IT infrastructure. Simulate changes before implementation, optimize capacity planning, and reduce risk with AI-driven scenario modeling.',
    category: 'data-center-digital-twin',
    icon: '🖥️',
    href: '/services/data-center-digital-twin',
    industry: 'Simulation & Engineering',
    stage: 'published',
    popular: false,
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      '3D facility modeling with real-time telemetry sync',
      'Power distribution and cooling loop simulation',
      'AI-driven capacity planning and what-if analysis',
      'Change validation before physical implementation',
      'Integration with DCIM, BMS, and IT asset tools',
      'Predictive maintenance via failure scenario modeling'
    ],
    benefits: [
      'Avoid costly design mistakes before deployment',
      'Plan 50+ kW rack density retrofits with confidence',
      'Reduce commissioning time by 40%',
      'Extend facility lifespan through informed upgrades'
    ]
  },
  {
    id: 'data-center-aiops-monitoring',
    title: 'AI-Driven Data Center Operations (DC AIOps)',
    description: 'Automate data center operations with AI/ML-powered monitoring, predictive maintenance, and self-healing infrastructure. Reduce MTTR, optimize power usage effectiveness, and eliminate alert fatigue.',
    category: 'data-center-aiops',
    icon: '🧠',
    href: '/services/data-center-aiops-monitoring',
    industry: 'IT Operations & AIOps',
    stage: 'published',
    popular: false,
    pricing: { basic: '$399/mo', pro: '$1,199/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Predictive failure detection with 90%+ accuracy',
      'Automated root-cause analysis and remediation',
      'Power and thermal optimization using ML',
      'Self-healing workflows for network, power, and cooling',
      'Unified observability across DCIM, BMS, and IT systems',
      'Smart alerting that reduces noise by 80%'
    ],
    benefits: [
      'Reduce downtime and MTTR by up to 60%',
      'Cut energy costs through intelligent power optimization',
      'Free up ops teams from repetitive manual monitoring',
      'Deliver 99.999% availability for critical workloads'
    ] 
  },
  {
    id: 'data-center-cabling-management',
      title: 'Data Center Cabling & Infrastructure Management',
      description: 'Structured cabling, copper/fiber remediation, and patch panel management for reliable colocation and cloud connectivity. Supports TIA-606 labeling standards, move/add/change, and Panduit/Corning/Dynacom deployments.',
      category: 'data-center-cabling-management',
      icon: '🔌',
      href: '/services/data-center-cabling-management',
      industry: 'Data Center & Infrastructure',
      stage: 'published',
      popular: false,
      pricing: { basic: '$249/mo', pro: '$749/mo', enterprise: 'Custom' },
      contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
      features: [
        'Structured cabling design and audit',
        'Copper and fiber optic deployment',
        'Patch panel consolidation and labeling',
        'MAC (move/add/change) services',
        'TIA-606 compliance and documentation',
        'Preventive maintenance and remediation'
      ],
      benefits: [
        'Reduce unplanned downtime from cable faults',
        'Improve port traceability and audit readiness',
        'Lower rack maintenance overhead',
        'Support accurate capacity planning'
      ]
    },
    {
      id: 'data-center-rack-integration',
      title: 'Rack & Cabinet Integration Services',
      description: 'End-to-end rack builds: mounting, labeling, PDUs, cable management, and network gear installation for new deployments and refreshes.',
      category: 'data-center-rack-integration',
      icon: '🗄️',
      href: '/services/data-center-rack-integration',
      industry: 'Data Center & Infrastructure',
      stage: 'published',
      popular: false,
      pricing: { basic: '$349/mo', pro: '$999/mo', enterprise: 'Custom' },
      contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
      features: [
        'Server and switch rack installation',
        'PDU and power distribution setup',
        'Cable routing and management',
        'Pre-, during, and post-installation labeling',
        'Label audits and asset validation',
        'Handoff documentation and QA'
      ],
      benefits: [
        'Faster time-to-production for new deployments',
        'Consistent build quality across locations',
        'Easier troubleshooting with clear labeling',
        'Reduced rework from missed cable or power planning'
      ]
    },
    {
      id: 'data-center-access-control',
      title: 'Data Center Access Control & Compliance',
      description: 'Physical security hardening for data centers: man traps, badge readers, biometric access, visitor management, and SOC/PCI-ready audit trails.',
      category: 'data-center-access-control',
      icon: '🛡️',
      href: '/services/data-center-access-control',
      industry: 'Data Center & Infrastructure',
      stage: 'published',
      popular: false,
      pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
      contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
      features: [
        'Biometric and multi-factor access',
        'Man trap and mantrap design',
        'Service entrance access hardening',
        'Visitor escort workflow',
        'Audit logging aligned with SOC/PCI requirements',
        'CCTV and door controller integration'
      ],
      benefits: [
        'Prevent unauthorized physical access',
        'Meet compliance and audit requirements',
        'Enable traceable personnel movement',
        'Reduce risk with layered physical controls'
      ]
    }
  ];
