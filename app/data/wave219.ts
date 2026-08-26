import { Service } from './serviceTypes';

// Wave 219 — Autonomous Warehouse Robotics, AI Music Generation, Digital Identity Verification,
// Smart City IoT, AI-Powered Cybersecurity, Vertical Farming, and Wearable Health Tech
// Research by @OWL — 2026-06-19
// New categories: autonomous-warehouse-robotics, ai-music-generation, digital-identity-verification,
// smart-city-iot, ai-powered-cybersecurity, vertical-farming, wearable-health-tech

export const wave219AutonomousWarehouseRoboticsServices: Service[] = [
  {
    id: 'locus-robotics-autonomous-amr',
    title: 'Locus Robotics — Autonomous Mobile Robots for Warehouses',
    description: 'Locus Robotics provides autonomous mobile robots (AMRs) that work alongside human workers in warehouses and distribution centers, picking, transporting, and sorting goods with minimal infrastructure changes. Their robots use AI-powered navigation, computer vision, and multi-robot coordination to increase pick productivity by 2-3x. Deployed in 300+ warehouses globally for retailers including DHL, Boots, and Material Bank.',
    category: 'autonomous-warehouse-robotics',
    icon: '📦',
    href: '/services/locus-robotics-autonomous-amr',
    industry: 'Logistics & Warehousing',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (facility assessment)', pro: '$1,500/robot/month', enterprise: 'Custom fleet pricing ($500K+/year)' },
    contactInfo: { website: 'https://locusrobotics.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Autonomous navigation: no facility modifications required — deploys in hours',
      'Multi-robot coordination: 500+ robots working simultaneously without collisions',
      'Human-robot collaboration: workers focus on picking, robots handle transport',
      'Fleet management dashboard: real-time robot locations, productivity, and battery status',
      'Integration with Manhattan, Blue Yonder, SAP, and other WMS platforms',
      'Proven 2-3x productivity increase vs. manual cart-based picking'
    ],
    benefits: [
      'Solve warehouse labor shortage: deploy robots in days, not months',
      'Workers achieve 300+ picks/hour vs. 80-100 with manual carts',
      'Scalable: add robots during peak season, scale down during slow periods',
      'Zero infrastructure: no QR codes, magnetic tape, or facility modifications needed',
      'ROI achieved within 12 months through labor cost reduction and throughput gains'
    ]
  }
];

export const wave219AiMusicGenerationServices: Service[] = [
  {
    id: 'suno-ai-music-generation',
    title: 'Suno AI — Text-to-Music Generation Platform',
    description: 'Suno AI is a generative music platform that creates complete original songs — vocals, instruments, and production — from text prompts. Users describe a style, mood, or concept in natural language and Suno produces a broadcast-ready 2-4 minute track. With 10 million+ users, Suno is democratizing music production for content creators, game developers, advertisers, and independent artists who lack traditional music production resources.',
    category: 'ai-music-generation',
    icon: '🎵',
    href: '/services/suno-ai-music-generation',
    industry: 'Creative Technology & Entertainment',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (50 credits/day)', pro: '$10/month (2,500 credits)', enterprise: '$30/month (10,000 credits + commercial license)' },
    contactInfo: { website: 'https://suno.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Text-to-song: describe any genre, mood, or concept in natural language',
      'Full vocal generation: AI sings lyrics in multiple languages and styles',
      'Instrumental mode: generate music without vocals for background/corporate use',
      'Commercial license: pro/enterprise plans include full commercial usage rights',
      'Custom styles: upload reference tracks to match specific musical aesthetics',
      'API access: integrate Suno generation into apps, games, and content platforms'
    ],
    benefits: [
      'Content creators produce royalty-free music in seconds, not weeks',
      'Game developers generate dynamic soundtracks without hiring composers',
      'Small businesses create professional jingles and brand music at zero cost',
      'Independent artists prototype song ideas before studio recording',
      'Multilingual: generate music with vocals in 20+ languages'
    ]
  }
];

export const wave219DigitalIdentityVerificationServices: Service[] = [
  {
    id: 'onfido-ai-identity-verification',
    title: 'Onfido (Plural) — AI-Powered Identity Verification',
    description: 'Onfido uses AI to verify user identity through document analysis and facial biometrics, enabling banks, fintechs, and marketplaces to onboard customers remotely with bank-grade security. Their Real Identity Framework analyzes ID documents from 200+ countries, performs liveness detection, and cross-references against global watchlists — processing verifications in under 15 seconds with 99.9% accuracy.',
    category: 'digital-identity-verification',
    icon: '🪪',
    href: '/services/onfido-ai-identity-verification',
    industry: 'FinTech & Identity',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Pay-per-check ($1.50/verification)', pro: '$1,000/month + $1.00/check', enterprise: 'Custom ($10K+/month)' },
    contactInfo: { website: 'https://onfido.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Document verification: 200+ countries, 4,000+ document types supported',
      'Facial biometrics: liveness detection prevents spoofing with photos/videos',
      'Address verification: utility bill analysis and geolocation cross-referencing',
      'Watchlist screening: PEP, sanctions, and adverse media checks in real time',
      'Orchestration dashboard: monitor verification funnel, drop-off rates, false positives',
      'Compliance: KYC/AML compliant with GDPR, SOC 2, and ISO 27001 certification'
    ],
    benefits: [
      'Onboard customers in 15 seconds vs. days for manual verification',
      'Reduce fraud losses by 95% with AI-powered document forgery detection',
      'Increase conversion: 85% completion rate vs. 40% for manual processes',
      'Global coverage: verify identities from any country without local offices',
      'Regulator-approved: used by banks, neobanks, and fintechs in 50+ countries'
    ]
  }
];

export const wave219SmartCityIotServices: Service[] = [
  {
    id: 'felix-smart-city-iot-platform',
    title: 'Felix Smart — AI-Powered Smart City IoT Management',
    description: 'Felix Smart provides an AI platform for managing smart city infrastructure — street lighting, waste collection, parking, air quality, and traffic flow — through a unified IoT dashboard. Their platform connects 100,000+ city devices, uses predictive analytics to optimize operations, and reduces municipal energy costs by 30-60%. Deployed in cities across Europe, Asia, and North America.',
    category: 'smart-city-iot',
    icon: '🏙️',
    href: '/services/felix-smart-city-iot-platform',
    industry: 'Government & Municipal Technology',
    stage: 'published',
    popular: false,
    pricing: { basic: 'Pilot (single district)', pro: '$50K/year (city-wide lighting)', enterprise: 'Custom ($200K+/year full city deployment)' },
    contactInfo: { website: 'https://felixsmart.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Unified IoT dashboard: manage lighting, waste, parking, air quality, and traffic',
      'Predictive maintenance: AI detects equipment failures before they occur',
      'Smart lighting optimization: dim/brighten based on pedestrian and vehicle traffic',
      'Waste collection routing: optimize pickup schedules based on bin fill-level sensors',
      'Air quality monitoring: real-time pollution mapping with 50m resolution',
      'Open API: integrate with existing city ERP, CRM, and citizen service platforms'
    ],
    benefits: [
      'Reduce municipal energy costs by 30-60% through intelligent lighting',
      'Citizens enjoy cleaner streets: waste collected when bins are full, not on fixed schedule',
      'Traffic congestion reduced 15% through adaptive signal timing',
      'Carbon footprint reduction: measurable sustainability metrics for ESG reporting',
      'Scalable: start with one district, expand to full city without platform changes'
    ]
  }
];

export const wave219AiPoweredCybersecurityServices: Service[] = [
  {
    id: 'darktrace-ai-cyber-defense',
    title: 'Darktrace — Self-Learning AI Cybersecurity Defense',
    description: 'Darktrace uses self-learning AI to detect and respond to cyber threats in real time across cloud, email, endpoints, and industrial systems. Unlike rule-based security tools, Darktrace\'s AI learns the "pattern of life" for every user and device, identifying subtle anomalies that indicate ransomware, insider threats, or zero-day attacks — often detecting threats that other tools miss entirely.',
    category: 'ai-powered-cybersecurity',
    icon: '🛡️',
    href: '/services/darktrace-ai-cyber-defense',
    industry: 'Cybersecurity',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (30-day trial)', pro: '$50K/year (up to 500 assets)', enterprise: 'Custom ($200K+/year for 10,000+ assets)' },
    contactInfo: { website: 'https://darktrace.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Self-learning AI: no rules or signatures — learns your environment autonomously',
      'Real-time threat detection: identifies novel and zero-day attacks in seconds',
      'Autonomous response: Antigena automatically contains threats without human intervention',
      'Full coverage: cloud, email, endpoints, OT/ICS, and IoT from one platform',
      'Explainable AI: plain-language threat reports for security team and auditors',
      'MITRE ATT&CK mapping: all detections mapped to known adversary techniques'
    ],
    benefits: [
      'Detect threats that signature-based tools miss: novel malware, insider threats',
      'Mean time to detect reduced from 200 days to seconds',
      'Autonomous containment: stop ransomware spread in seconds, not hours',
      'Reduce SOC alert fatigue by 90% — only actionable, high-fidelity alerts',
      'Used by 6,500+ organizations including government agencies and critical infrastructure'
    ]
  }
];

export const wave219VerticalFarmingServices: Service[] = [
  {
    id: 'plenty-vertical-farming-platform',
    title: 'Plenty — AI-Powered Vertical Farming Platform',
    description: 'Plenty operates AI-controlled vertical farms that grow leafy greens and strawberries indoors using 99% less water and 95% less land than conventional agriculture. Their proprietary platform uses computer vision, machine learning, and environmental controls to optimize every aspect of plant growth — light spectrum, nutrients, temperature, and airflow — producing 350x more food per acre than outdoor farms.',
    category: 'vertical-farming',
    icon: '🌱',
    href: '/services/plenty-vertical-farming-platform',
    industry: 'AgriTech & Food Production',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Consumer (retail produce)', pro: 'Farm partnership program', enterprise: 'Turnkey farm solution ($50M+ per facility)' },
    contactInfo: { website: 'https://plenty.ag', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI-optimized growing: computer vision monitors plant health in real time',
      '350x more productive per acre than conventional farming',
      '99% less water consumption vs. field agriculture',
      'Zero pesticides: controlled environment eliminates pest pressure',
      'Farm-to-store in 24 hours: facilities located near major population centers',
      'Year-round production: immune to weather, seasons, and climate disruptions'
    ],
    benefits: [
      'Food security: grow locally even in arid, cold, or urban environments',
      'Water conservation: critical for drought-prone regions and growing populations',
      'Reduced supply chain: fresh produce within 24 hours of harvest',
      'Climate resilient: production independent of weather, floods, or wildfires',
      'Retail partnerships: Walmart, Whole Foods, and Albertsons stock Plenty produce'
    ]
  }
];

export const wave219WearableHealthTechServices: Service[] = [
  {
    id: 'oura-ring-health-tracker',
    title: 'Oura Ring — Clinical-Grade Health Tracking Wearable',
    description: 'Oura Ring is a finger-worn health tracker that provides clinical-grade sleep analysis, heart rate variability (HRV), blood oxygen, body temperature, and activity tracking. With FDA-cleared features and partnerships with the US Department of Defense, Mayo Clinic, and 100+ research institutions, Oura has 2.5 million+ rings sold and is used for early illness detection, fertility tracking, and athletic performance optimization.',
    category: 'wearable-health-tech',
    icon: '💍',
    href: '/services/oura-ring-health-tracker',
    industry: 'HealthTech & Wearables',
    stage: 'published',
    popular: true,
    pricing: { basic: '$299 (ring) + $6/month (membership)', pro: '$399 (Heritage)', enterprise: 'Corporate wellness ($150/employee/year)' },
    contactInfo: { website: 'https://ouraring.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Sleep tracking: clinical-grade sleep stages, REM, deep sleep, and sleep efficiency',
      'HRV monitoring: real-time autonomic nervous system balance tracking',
      'Temperature sensing: detects fever onset and menstrual cycle phases',
      'Activity tracking: steps, calories, training load, and recovery optimization',
      'Readiness score: daily 0-100 score combining sleep, activity, and recovery',
      'API integration: connect with Apple Health, Google Fit, Garmin, and EHR systems'
    ],
    benefits: [
      'Early illness detection: temperature trends identify COVID, flu before symptoms',
      'Sleep optimization: users improve sleep quality by 20% within 30 days',
      'Athletic performance: NBA, NFL, and Formula 1 teams use Oura for recovery',
      'Fertility tracking: detect ovulation with 92% accuracy via temperature trends',
      'Clinical validation: used in 100+ peer-reviewed research studies'
    ]
  }
];
