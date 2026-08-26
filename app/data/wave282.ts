import { Service } from './serviceTypes';

export const wave282DataCenterServices: Service[] = [
  {
    id: 'data-center-structured-cabling',
    title: 'Data Center Structured Cabling & Fiber Infrastructure',
    description: 'Design, certify, and deploy high-density structured cabling systems for data centers: copper Cat6a/Cat7 and single-mode/multi-mode fiber. TIA-942/EIA/TIA-568 compliant with full test reports and traceability.',
    category: 'data-center-cabling',
    icon: '🔌',
    href: '/services/data-center-structured-cabling',
    industry: 'Data Center & Infrastructure',
    stage: 'published',
    popular: false,
    pricing: { basic: '$249/mo', pro: '$749/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'TIA-942 and EIA/TIA-568 compliant topology design',
      'MPO/MTP and LC fiber trunk deployment',
      'Copper Cat6a/Cat7 and Category 8 plant installation',
      'OTDR, IL/RL testing and certification reports',
      'Patch panel labeling and asset traceability',
      '10G/40G/100G/400G migration-ready pathways'
    ],
    benefits: [
      'Reduce signal degradation and link failures',
      'Accelerate move-add-change cycles with accurate documentation',
      'Support future upgrades to 400G/800G without re-cabling',
      'Achieve compliance with audit-ready test reports'
    ]
  },
  {
    id: 'data-center-itad-procurement',
    title: 'Data Center ITAD & Procurement Lifecycle Services',
    description: 'End-to-end IT asset disposition (ITAD) and procurement: secure chain-of-custody, NIST 800-88 sanitization, remarketing, and vendor-neutral hardware procurement for data center refresh cycles.',
    category: 'data-center-itad',
    icon: '♻️',
    href: '/services/data-center-itad-procurement',
    industry: 'Data Center & Infrastructure',
    stage: 'published',
    popular: false,
    pricing: { basic: '$199/mo', pro: '$699/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Secure chain-of-custody and barcode/RFID asset tracking',
      'NIST 800-88 and DoD 5220.22-M data sanitization',
      'E-waste recycling with R2/ISO 14001 compliance',
      'Asset remarketing and value recovery programs',
      'Vendor-neutral hardware procurement for refresh cycles',
      'Audit-ready disposition documentation'
    ],
    benefits: [
      'Recover 20–60% of hardware residual value',
      'Eliminate data leakage risk with certified sanitization',
      'Streamline CapEx for hardware refresh programs',
      'Meet environmental and regulatory compliance requirements'
    ]
  },
  {
    id: 'data-center-operator-training',
    title: 'Data Center Operations Training & Certification Programs',
    description: 'Uptime Institute, DCi, and custom curricula for data center technicians, facilities staff, and managers: maintenance, safety, power, cooling, and emergency response. Hands-on labs and online instructor-led sessions.',
    category: 'data-center-training',
    icon: '🎓',
    href: '/services/data-center-operator-training',
    industry: 'Training & Workforce Development',
    stage: 'published',
    popular: false,
    pricing: { basic: '$149/mo', pro: '$499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Uptime Institute Tier certification prep',
      'Electrical safety (NFPA 70E) and lockout/tagout',
      'Thermal and airflow management labs',
      'Emergency response and incident command drills',
      'Online and on-site instructor-led cohorts',
      'Custom curriculum for proprietary infrastructure'
    ],
    benefits: [
      'Reduce human-error incidents with certified operators',
      'Improve retention with clear career ladders for DC staff',
      'Standardize procedures across multiple facilities',
      'Meet insurance and audit requirements for trained personnel'
    ]
  },
  {
    id: 'data-center-modular-expansion',
    title: 'Modular Data Center Expansion & Prefabricated Data Halls',
    description: 'Accelerate data center expansion with prefabricated data halls, modular power and cooling pods, and rapid-deployment shell-and-core designs. Reduce build timelines from 18 months to under 6 months.',
    category: 'data-center-modular',
    icon: '🏗️',
    href: '/services/data-center-modular-expansion',
    industry: 'Data Center & Infrastructure',
    stage: 'published',
    popular: false,
    pricing: { basic: '$399/mo', pro: '$1,199/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Prefabricated data hall modules (containerized or booth-style)',
      'Modular power and cooling skids (UPS, PDUs, CRAH/CRAC)',
      'Shell-and-core design for phased buildout',
      'Rapid deployment with factory acceptance testing (FAT)',
      'Seismic and environmental compliance engineering',
      'Integration with existing facility BMS and security systems'
    ],
    benefits: [
      'Cut construction timelines by 60–70%',
      'Reduce cost and schedule risk with off-site fabrication',
      'Scale capacity in sync with revenue growth',
      'Minimize disruption to live operations during expansion'
    ]
  },
  {
    id: 'data-center-healthcare-compliance',
    title: 'Data Center Healthcare Compliance (HIPAA & HITRUST)',
    description: 'Specialized compliance assessments, policy frameworks, and audit readiness for healthcare data centers handling PHI. HITRUST CSF, HIPAA Security Rule, and FedRAMP mapping with automated evidence collection.',
    category: 'data-center-healthcare-compliance',
    icon: '🏥',
    href: '/services/data-center-healthcare-compliance',
    industry: 'Healthcare & Compliance',
    stage: 'published',
    popular: false,
    pricing: { basic: '$399/mo', pro: '$1,199/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'HIPAA Security Rule gap assessments for data centers',
      'HITRUST CSF certification program management',
      'Business associate agreement (BAA) development and review',
      'Audit automation and evidence collection tooling',
      'Incident response plan tailored for PHI breach scenarios',
      'Continuous monitoring and quarterly compliance reporting'
    ],
    benefits: [
      'Achieve HIPAA and HITRUST certification faster',
      'Reduce compliance overhead with automated evidence workflows',
      'Protect patient data with controls designed for healthcare',
      'Demonstrate security posture to auditors and regulators'
    ]
  },
  {
    id: 'data-center-telecom-carrier-coordination',
    title: 'Data Center Telecommunications & Carrier Coordination',
    description: 'Streamline carrier onboarding, telco coordination, and meet-me room management for data centers. Carrier-neutral provisioning, circuit ordering, and SLA monitoring across multiple service providers.',
    category: 'data-center-telecom',
    icon: '📞',
    href: '/services/data-center-telecom-carrier-coordination',
    industry: 'Telecommunications',
    stage: 'published',
    popular: false,
    pricing: { basic: '$199/mo', pro: '$699/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Carrier-neutral meet-me room coordination',
      'Cross-connect and port provisioning management',
      'Circuit ordering and installation tracking',
      'Multi-carrier SLA monitoring and reporting',
      'Telecom inventory and cable management database',
      'Change management for carrier moves, adds, and changes'
    ],
    benefits: [
      'Reduce circuit provisioning time from weeks to days',
      'Avoid single-carrier lock-in with neutral coordination',
      'Improve SLA tracking and exception resolution',
      'Maintain accurate telecom inventory for capacity planning'
    ]
  },
  {
    id: 'data-center-cyber-physical-convergence',
    title: 'Data Center Cyber-Physical Security Convergence',
    description: 'Unify IT security with physical data center controls: integrate SIEM, access control, CCTV/AI video, and environmental sensors into a single SOC 2 and ISO 27001 aligned security architecture.',
    category: 'data-center-cyber-physical',
    icon: '🔐',
    href: '/services/data-center-cyber-physical-convergence',
    industry: 'Security & Compliance',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'SIEM integration with physical access control systems',
      'Correlated alerting for cyber and physical threat events',
      'AI video analytics for tailgating and anomalous behavior',
      'Environmental sensor monitoring (water, smoke, HVAC)',
      'Unified audit logging for SOC 2 and ISO 27001',
      'Incident response runbook bridging ITSM and physical security'
    ],
    benefits: [
      'Detect blended cyber-physical attack scenarios',
      'Streamline audit evidence across IT and facilities teams',
      'Reduce mean-time-to-detect with correlated intelligence',
      'Achieve Zero Trust from the cage to the cloud'
    ]
  },
  {
    id: 'data-center-energy-advisory',
    title: 'Data Center Energy Procurement & PPA Advisory',
    description: 'Navigate utility procurement, renewable PPAs, and grid-interactive demand response for data center operators. Energy benchmarking, tariff optimization, and sustainability-linked financing.',
    category: 'data-center-energy',
    icon: '⚡',
    href: '/services/data-center-energy-advisory',
    industry: 'Energy & Sustainability',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$999/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Utility tariff analysis and demand charge optimization',
      'Renewable PPA negotiation and offtake structuring',
      'Grid-interactive demand response enrollment and management',
      'Energy use intensity (EUI) benchmarking against peers',
      'Battery storage and co-location with on-site generation',
      'Carbon credit and REC accounting for ESG disclosures'
    ],
    benefits: [
      'Reduce energy spend by 10–25% through smarter procurement',
      'Lock in long-term renewable costs with PPAs',
      'Earn revenue streams through demand response participation',
      'Meet investor and customer carbon commitments with confidence'
    ]
  },
  {
    id: 'data-center-site-selection',
    title: 'Data Center Site Selection & Real Estate Advisory',
    description: 'Evaluate and acquire data center sites with the right power, fiber, tax, and risk profiles. Fiber route analysis, utility redundancy maps, and tax incentive programs across target markets.',
    category: 'data-center-real-estate',
    icon: '📍',
    href: '/services/data-center-site-selection',
    industry: 'Real Estate & Infrastructure',
    stage: 'published',
    popular: false,
    pricing: { basic: '$399/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Power availability and latency mapping',
      'Carrier-neutral fiber route surveys and diversity analysis',
      'Tax incentive and enterprise zone qualification support',
      'Utility rate case tracking and redundancy evaluation',
      'Environmental and seismic risk assessments',
      'Zoning, permitting, and entitlement support'
    ],
    benefits: [
      'Reduce site selection risk from months to weeks',
      'Avoid costly build surprises with early utility and right-of-way analysis',
      'Maximize tax incentives for greenfield and brownfield projects',
      'Choose locations that ensure long-term operational resilience'
    ]
  },
  {
    id: 'data-center-environmental-monitoring',
    title: 'Data Center Environmental Monitoring & Cleanroom Services',
    description: 'Deploy granular environmental monitoring (particulates, humidity, water, smoke) and cleanroom-certified maintenance programs for mission-critical data halls. ASHRAE and ISO 14644 aligned.',
    category: 'data-center-environmental',
    icon: '🛡️',
    href: '/services/data-center-environmental-monitoring',
    industry: 'Facility Management',
    stage: 'published',
    popular: false,
    pricing: { basic: '$199/mo', pro: '$699/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Zero-leak detection and water intrusion monitoring',
      'Particulate and volatile organic compound (VOC) sensing',
      'ASHRAE thermal envelope compliance dashboards',
      'Cleanroom-grade maintenance and particle counting',
      'Smoke detection aspiration (VESDA) integration',
      'Automated alerting and incident escalation workflows'
    ],
    benefits: [
      'Prevent water and particle damage to IT equipment',
      'Maintain ASHRAE and ISO 14644 standards',
      'Reduce mean-time-to-repair for environmental incidents',
      'Automate compliance reporting for facility audits'
    ]
  }
];
