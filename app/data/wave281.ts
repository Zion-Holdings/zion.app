import { Service } from './serviceTypes';

export const wave281DataCenterServices: Service[] =
[
  {
    id: 'data-center-dcim-deployment',
    title: 'Data Center DCIM Software Deployment & Integration',
    description: 'Deploy and integrate data center infrastructure management (DCIM) platforms for unified monitoring of power, cooling, space, and network assets. Real-time dashboards, capacity forecasting, and automated ticketing integration.',
    category: 'data-center-dcim',
    icon: '🖥️',
    href: '/services/data-center-dcim-deployment',
    industry: 'Data Center & Infrastructure',
    stage: 'published',
    popular: false,
    pricing: { basic: '$349/mo', pro: '$999/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'DCIM platform selection and deployment (Sunbird, Nlyte, Schneider, Raritan)',
      'Real-time power, thermal, and network asset monitoring',
      'Capacity planning dashboards and alerting',
      'Integration with BMS, PDUs, UPS, CRAC/CRAH units',
      'Automated workflow integration with ServiceNow/Jira',
      'IT asset discovery and CMDB synchronization'
    ],
    benefits: [
      'Gain single-pane-of-glass visibility across all facility systems',
      'Reduce capacity planning time by 70% with predictive analytics',
      'Automate change management and compliance reporting',
      'Eliminate spreadsheet-based capacity tracking and forecasting errors'
    ]
  },
  {
    id: 'data-center-physical-security',
    title: 'Data Center Physical Security & Access Control Systems',
    description: 'Design, install, and certify layered physical security for data halls and support rooms: biometric access, mantraps, CCTV/AI video analytics, perimeter detection, and SOC 2 / ISO 27001 compliance alignment.',
    category: 'data-center-physical-security',
    icon: '🔐',
    href: '/services/data-center-physical-security',
    industry: 'Security & Compliance',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Biometric badge readers and PIN + card dual-factor mantrap design',
      'AI video analytics for tailgating and anomalous behavior detection',
      'Perimeter intrusion detection (fiber, microwave, beam)',
      'Security operations center integration and SIEM correlation',
      'Visitor management system (VMS) with escort tracking',
      'Audit logging and compliance evidence automation'
    ],
    benefits: [
      'Prevent unauthorized access to critical infrastructure',
      'Meet Uptime Institute Tier/ISO 27001 physical security requirements',
      'Reduce security incidents with real-time AI anomaly detection',
      'Streamline audit evidence collection for certification cycles'
    ]
  },
  {
    id: 'data-center-cross-connect',
    title: 'Data Center Cross-Connect & Interconnection Services',
    description: 'Provision and manage intra-facility cross-connects, inter-carrier peering, and hybrid cloud connectivity (AWS Direct Connect, Azure ExpressRoute, Google Cloud Interconnect). Layer 2 and Layer 3 circuit design.',
    category: 'data-center-interconnect',
    icon: '🔗',
    href: '/services/data-center-cross-connect',
    industry: 'Network Infrastructure',
    stage: 'published',
    popular: false,
    pricing: { basic: '$199/mo', pro: '$599/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Patch panel and fiber tray cross-connect provisioning',
      'Cloud on-ramp integration (AWS/Azure/GCP/OCI)',
      'Layer 2 EVPN and Layer 3 BGP peering design',
      'Metro Ethernet and DWavelength transport planning',
      'Bandwidth monitoring and SLA reporting',
      'Automated circuit provisioning via APIs'
    ],
    benefits: [
      'Reduce latency between tenants and cloud providers',
      'Eliminate complex VPN routing with direct cloud interconnect',
      'Speed up deployment from weeks to hours with automation',
      'Support multi-cloud architectures with consistent connectivity'
    ]
  },
  {
    id: 'data-center-colocation-leasing',
    title: 'Data Center Colocation & Wholesale Space Leasing',
    description: 'Flexible colocation options from single cabinets to wholesale suites and build-to-spec shells. Power configurations from 5 kW to 2 MW+, redundant utility feeds, and carrier-neutral interconnection included.',
    category: 'data-center-colocation',
    icon: '🏗️',
    href: '/services/data-center-colocation-leasing',
    industry: 'Data Center & Infrastructure',
    stage: 'published',
    popular: false,
    pricing: { basic: '$499/mo', pro: '$1,999/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Cabinet, cage, suite, and wholesale hall configurations',
      'Redundant 2N power feeds and UPS-backed circuits',
      'Carrier-neutral meet-me room with 50+ providers',
      'Remote hands and smart hands service levels',
      '24/7 NOC and on-site security',
      'Tier III/IV certified facilities with 99.982% uptime SLA'
    ],
    benefits: [
      'Scale from 1 cabinet to 10,000 sq ft without moving',
      'Avoid 18+ month build timelines with ready capacity',
      'Reduce colocation costs with consolidated billing',
      'Access to rich interconnection ecosystem for hybrid cloud'
    ]
  },
  {
    id: 'data-center-noc-managed-services',
    title: 'Data Center NOC Staffing & Managed Operations',
    description: '24/7 NOC staffing, remote hands, smart hands, and managed infrastructure services. Augment or fully outsource data center operations with certified technicians and DC-aware monitoring toolchains.',
    category: 'data-center-noc',
    icon: '👷',
    href: '/services/data-center-noc-managed-services',
    industry: 'Managed Services',
    stage: 'published',
    popular: false,
    pricing: { basic: '$399/mo', pro: '$1,199/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      '24/7 Tier 1–3 NOC staffing with shift coverage',
      'Remote hands for hardware swaps, cabling, and patching',
      'Smart hands for complex installs and break-fix',
      'DC-aware monitoring integrations (Datadog, SolarWinds, PRTG)',
      'On-call escalation and vendor management',
      'ITIL-aligned incident and change management'
    ],
    benefits: [
      'Eliminate overnight coverage gaps and burnout',
      'Reduce mean-time-to-repair with guaranteed SLAs',
      'Access specialized data center skills on demand',
      'Cut operational headcount costs by 30–50%'
    ]
  },
  {
    id: 'data-center-ai-cooling-optimization',
    title: 'AI-Driven Data Center Cooling Optimization',
    description: 'Machine learning models that optimize CRAC/CRAH setpoints, air distribution, and liquid cooling controls in real time. Reduce cooling energy by 20–40% while maintaining strict ASHRAE thermal envelopes.',
    category: 'data-center-ai-cooling',
    icon: '🤖',
    href: '/services/data-center-ai-cooling-optimization',
    industry: 'Data Center & Infrastructure',
    stage: 'published',
    popular: false,
    pricing: { basic: '$349/mo', pro: '$999/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Digital twin thermal modeling of the facility',
      'Real-time sensor ingestion (temperature, humidity, airflow)',
      'ML-based setpoint optimization with MPC control',
      'Anomaly detection for cooling equipment failures',
      'Integration with BMS/DCIM and existing PLC controls',
      'Energy savings reporting and PUE improvement tracking'
    ],
    benefits: [
      'Reduce cooling energy consumption by 20–40%',
      'Maintain ASHRAE recommended thermal envelopes',
      'Predict cooling failures before they cause outages',
      'Document carbon reduction for ESG and sustainability reporting'
    ]
  },
  {
    id: 'data-center-edge-micro-data-center',
    title: 'Edge Micro Data Center as a Service',
    description: 'Deploy and manage containerized micro data centers (5 kW to 200 kW) at factory, retail, telecom, or remote field sites. Pre-integrated power, cooling, security, and connectivity with centralized cloud orchestration.',
    category: 'data-center-edge',
    icon: '📡',
    href: '/services/data-center-edge-micro-data-center',
    industry: 'Edge Computing',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'ISO container and rack-scale micro DC designs',
      'Ruggedized enclosures for industrial and outdoor environments',
      'Edge orchestration with Kubernetes and zero-touch provisioning',
      'Satellite or wireless backhaul integration',
      'Remote monitoring and automated health checks',
      'Terraform/Ansible-driven deployment automation'
    ],
    benefits: [
      'Bring compute to the data source with <1 ms latency',
      'Deploy in days instead of months for time-sensitive projects',
      'Reduce WAN bandwidth costs by 70–90%',
      'Support IoT, AI inference, and 5G MEC workloads'
    ]
  },
  {
    id: 'data-center-sustainability-carbon-reporting',
    title: 'Data Center Sustainability & Carbon Reporting',
    description: 'Implement Scope 1/2/3 emissions tracking, PUE benchmarking, renewable PPAs, and carbon accounting aligned with GHG Protocol and CSRD. Grid-aware workload scheduling for maximum renewable utilization.',
    category: 'data-center-sustainability',
    icon: '🌱',
    href: '/services/data-center-sustainability-carbon-reporting',
    industry: 'Sustainability & ESG',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'PUE, WUE, and carbon-intensity telemetry collection',
      'Scope 1/2/3 GHG Protocol emissions calculation',
      'Renewable energy matching and PPA advisory',
      'CSRD and EU ETS compliance reporting automation',
      'Grid-aware workload shifting to low-carbon hours',
      'Third-party audit evidence generation'
    ],
    benefits: [
      'Reduce Scope 2 emissions by 30–60% with renewables',
      'Meet CSRD disclosure requirements on time',
      'Demonstrate ESG leadership to customers and investors',
      'Optimize energy spend with time-of-use and carbon-aware scheduling'
    ]
  },
  {
    id: 'data-center-cabling-rack-integration',
    title: 'Data Center Structured Cabling & Rack Integration',
    description: 'Design and install TIA-942 compliant structured cabling: copper Cat6A/Cat8, single-mode/multi-mode fiber, MPO/MTP breakout panels, cable management, and rack/cabinet installation with proper labeling and documentation.',
    category: 'data-center-cabling',
    icon: '🔌',
    href: '/services/data-center-cabling-rack-integration',
    industry: 'Network Infrastructure',
    stage: 'published',
    popular: false,
    pricing: { basic: '$249/mo', pro: '$749/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'TIA-942 and ISO/IEC 11801 compliant infrastructure design',
      'Copper Cat6A/Cat8 and fiber (OS2/OM4/OM5) installation',
      'MPO/MTP trunk cabling and high-density patch panels',
      'Vertical and horizontal cable management systems',
      'Intelligent PDUs and power strip installation',
      'Digital floor plan and asset tagging documentation'
    ],
    benefits: [
      'Support 400G/800G/1.6T Ethernet migration paths',
      'Reduce cable congestion and improve airflow management',
      'Minimize unplanned downtime from cabling faults',
      'Accelerate moves/adds/changes with clear labeling'
    ]
  },
  {
    id: 'data-center-ot-cybersecurity',
    title: 'Data Center OT Cybersecurity & ICS Protection',
    description: 'Secure operational technology systems (BMS, UPS, generator controllers, HVAC BAS, fire panels) against ransomware and targeted attacks. Network segmentation, vulnerability assessment, and incident response playbooks for DC infrastructure.',
    category: 'data-center-ot-security',
    icon: '🛡️',
    href: '/services/data-center-ot-cybersecurity',
    industry: 'Cybersecurity',
    stage: 'published',
    popular: false,
    pricing: { basic: '$349/mo', pro: '$999/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'OT asset discovery and network mapping (Modbus, BACnet, SNMP)',
      'Zero-trust segmentation between IT and OT networks',
      'ICS vulnerability assessment and patch management',
      'Threat detection and anomaly monitoring for facility systems',
      'Incident response planning and tabletop exercises',
      'NIST SP 800-82 and IEC 62443 compliance alignment'
    ],
    benefits: [
      'Prevent OT-driven outages from ransomware and malware',
      'Achieve regulatory alignment for critical infrastructure',
      'Detect anomalous behavior in power and cooling systems',
      'Reduce risk of cascading failures between IT and OT'
    ]
  },
  {
    id: 'data-center-5g-private-network',
    title: 'Data Center 5G Private Network Integration',
    description: 'Deploy private 5G networks inside data centers for low-latency connectivity between staff, IoT sensors, autonomous vehicles, and warehouse robots. Integration with existing DC fabric and edge compute platforms.',
    category: 'data-center-5g',
    icon: '📶',
    href: '/services/data-center-5g-private-network',
    industry: 'Telecommunications',
    stage: 'published',
    popular: false,
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Private 5G small cell and core planning',
      'Indoor distributed antenna system (DAS) design',
      'Network slicing for operational traffic classes',
      'Edge MEC integration for real-time processing',
      'SIM-based access control for devices and personnel',
      'Spectrum licensing advisory and CBRS support'
    ],
    benefits: [
      'Enable sub-10 ms latency for in-facility device communication',
      'Support massive IoT sensor deployments without WiFi congestion',
      'Improve security with carrier-grade encryption and SIM control',
      'Power robotics, AGVs, and computer vision inspection at scale'
    ]
  },
  {
    id: 'data-center-environmental-monitoring',
    title: 'Data Center Environmental Monitoring & Alarming',
    description: 'Deploy sensor networks for temperature, humidity, airflow, water detection, and particulate monitoring across hot/cold aisles. Real-time alarming, integration with DCIM/BMS, and predictive analytics for early failure detection.',
    category: 'data-center-environmental',
    icon: '🌡️',
    href: '/services/data-center-environmental-monitoring',
    industry: 'Data Center & Infrastructure',
    stage: 'published',
    popular: false,
    pricing: { basic: '$199/mo', pro: '$599/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Wireless and wired temperature/humidity sensor arrays',
      'Water leak detection and under-floor fluid monitoring',
      'Air velocity and differential pressure sensors',
      'Real-time alarming via SMS/voice/email/webhook',
      'Integration with DCIM, BMS, and NOC dashboards',
      'Predictive analytics for thermal anomaly forecasting'
    ],
    benefits: [
      'Detect hot spots and thermal runaway before outages occur',
      'Reduce mean-time-to-detect for environmental faults by 80%',
      'Prevent costly water damage with early leak alerts',
      'Improve PUE by identifying overcooled aisles'
    ]
  },
  {
    id: 'data-center-remote-hands',
    title: 'Data Center Remote Hands & Smart Hands Support',
    description: 'On-demand engineering support for hardware installation, rack-and-stack, cable patching, equipment swaps, and break-fix. 15-minute response SLA with technician dispatch to any facility location.',
    category: 'data-center-remote-hands',
    icon: '🛠️',
    href: '/services/data-center-remote-hands',
    industry: 'Managed Services',
    stage: 'published',
    popular: false,
    pricing: { basic: '$149/mo', pro: '$449/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Rack-and-stack with torque screwdriving and labeling',
      'Server, network, and storage hardware replacement',
      'Fiber and copper cable patching with OTDR validation',
      'Temporary cross-connects and breakout cables',
      'OS reload and Bare Metal provisioning assistance',
      'Dedicated client portal with ticket tracking and photo updates'
    ],
    benefits: [
      'Speed up deployments with on-demand engineer access',
      'Avoid costly travel for remote site fixes',
      'Guarantee SLA compliance with documented procedures',
      'Reduce accidental downtime with certified technician work'
    ]
  }
];
