import { Service } from './serviceTypes';

// Wave 220 — AI Video Analytics, Synthetic Voice Cloning, AI Contract Lifecycle Management,
// Autonomous Vehicle Telemetry, and AI-Powered Accessibility Testing
// Research by @tablet_kleber_bot — 2026-06-06
// New categories: ai-video-analytics, synthetic-voice-cloning, ai-contract-lifecycle,
// autonomous-vehicle-telemetry, ai-accessibility-testing

export const wave220AiVideoAnalyticsServices: Service[] = [
  {
    id: 'hawk-eye-ai-video-analytics',
    title: 'Hawk-Eye — AI-Powered Video Analytics for Sports & Security',
    description: 'Hawk-Eye is a computer vision technology company that provides AI-powered video analysis for sports officiating, security, and entertainment. Their Smart Replay and Synchronized Multi-Angle Replay Technology (SMART) systems use 30+ high-speed cameras and deep learning to track ball trajectory, player movement, and event detection with millimeter accuracy. Used by FIFA, NFL, Premier League, and Wimbledon, Hawk-Eye processes over 100,000 decisions annually with 99.9% accuracy. Their security division provides real-time threat detection and crowd analytics for stadiums and public venues.',
    category: 'ai-video-analytics',
    icon: '📹',
    href: '/services/hawk-eye-ai-video-analytics',
    industry: 'Sports Technology & Security',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (demo)', pro: '$50K/year (single venue)', enterprise: 'Custom ($500K+/year multi-venue)' },
    contactInfo: { website: 'https://hawkeyeinnovations.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      '30+ high-speed camera array with sub-millimeter tracking accuracy',
      'Real-time ball and player trajectory prediction using deep learning',
      'Automated event detection: goals, fouls, line calls, and boundary decisions',
      'Security mode: crowd density analysis, anomaly detection, and threat identification',
      'Cloud-based replay center: instant multi-angle synchronized replays',
      'API integration: embed analytics into broadcast, betting, and coaching platforms'
    ],
    benefits: [
      'Eliminate officiating errors with 99.9% accurate automated decisions',
      'Reduce security response time by 80% with AI threat detection',
      'Enhance fan experience with instant replay and data-driven insights',
      'Generate new revenue through data licensing to broadcasters and betting operators',
      'Trusted by FIFA, NFL, Premier League, and 20+ major sports leagues worldwide'
    ]
  }
];

export const wave220SyntheticVoiceCloningServices: Service[] = [
  {
    id: 'elevenlabs-synthetic-voice-cloning',
    title: 'ElevenLabs — AI Synthetic Voice Cloning & Text-to-Speech',
    description: 'ElevenLabs is the leading AI voice technology platform that creates hyper-realistic synthetic voices from short audio samples. Their voice cloning technology captures vocal characteristics, accent, emotion, and speaking style to produce indistinguishable-from-human speech in 32 languages. With 1 million+ users and enterprise customers including The New York Times, Storytel, and Flo, ElevenLabs powers audiobook narration, podcast localization, video dubbing, and IVR replacement. Their Voice Library offers 10,000+ pre-built voices, while custom Voice Design creates unique brand voices from scratch.',
    category: 'synthetic-voice-cloning',
    icon: '🎙️',
    href: '/services/elevenlabs-synthetic-voice-cloning',
    industry: 'Media, Entertainment & Voice AI',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (10K chars/month)', pro: '$5/month (30K chars)', enterprise: '$330/month (2M chars + voice cloning)' },
    contactInfo: { website: 'https://elevenlabs.io', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Voice cloning from 1-minute audio sample with 95% similarity to original voice',
      '32 languages with native-sounding accents and natural prosody',
      'Emotion and tone control: adjust happiness, sadness, anger, whispering, shouting',
      'Voice Library: 10,000+ pre-built voices across ages, accents, and styles',
      'Voice Design: create unique synthetic voices without any reference audio',
      'API and SDK: real-time streaming TTS with <200ms latency for interactive applications'
    ],
    benefits: [
      'Produce audiobooks 10x faster without hiring voice actors',
      'Localize video content into 32 languages with consistent brand voice',
      'Replace expensive IVR systems with natural-sounding AI voice agents',
      'Content creators produce professional narration without recording equipment',
      'Used by 1 million+ users including major publishers and media companies'
    ]
  }
];

export const wave220AiContractLifecycleServices: Service[] = [
  {
    id: 'ironclad-ai-contract-lifecycle-management',
    title: 'Ironclad — AI-Powered Contract Lifecycle Management',
    description: 'Ironclad is an AI-powered contract lifecycle management (CLM) platform that automates the entire contract workflow from creation to execution to renewal. Their AI extracts key terms, flags risks, suggests alternative clauses, and tracks obligations across millions of contracts. Used by 2,500+ enterprises including L\'Oréal, Fitbit, and Cruise, Ironclad processes $1 trillion+ in contract value annually. Their AI Playbooks negotiate 80% of routine contracts without legal team involvement, reducing cycle time from weeks to hours.',
    category: 'ai-contract-lifecycle',
    icon: '📋',
    href: '/services/ironclad-ai-contract-lifecycle-management',
    industry: 'Legal Technology & Enterprise SaaS',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (trial)', pro: '$45K/year (standard CLM)', enterprise: 'Custom ($150K+/year with AI add-ons)' },
    contactInfo: { website: 'https://ironcladapp.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI contract analysis: auto-extract 50+ key terms, dates, and obligations',
      'AI Playbooks: negotiate routine contracts without legal team involvement',
      'Risk scoring: flag non-standard clauses and suggest approved alternatives',
      'Obligation tracking: automated reminders for renewals, payments, and deadlines',
      'Workflow automation: routing, approvals, e-signature, and repository in one platform',
      'Integration with Salesforce, DocuSign, SAP Ariba, and Microsoft 365'
    ],
    benefits: [
      'Reduce contract cycle time by 75% — from weeks to hours',
      'Legal team focuses on strategic work: 80% of routine contracts auto-negotiated',
      'Never miss a renewal or obligation with automated tracking and alerts',
      'Standardize contract language across all business units',
      'Process $1T+ in contract value with 2,500+ enterprise customers'
    ]
  }
];

export const wave220AutonomousVehicleTelemetryServices: Service[] = [
  {
    id: 'waymo-autonomous-vehicle-telemetry',
    title: 'Waymo — Autonomous Vehicle Telemetry & Fleet Intelligence',
    description: 'Waymo, an Alphabet subsidiary, operates the world\'s largest commercial autonomous ride-hailing service with 700+ vehicles completing 150,000+ paid rides per week across San Francisco, Phoenix, Los Angeles, and Austin. Their telemetry platform processes 20+ TB of sensor data per vehicle per day from LiDAR, cameras, and radar, using AI to make real-time driving decisions. Waymo\'s simulation platform runs 20 billion+ virtual miles annually to validate safety scenarios. With 10+ years of real-world driving data, Waymo\'s AI has driven 20+ million autonomous miles on public roads with 85% fewer injury-causing crashes than human drivers.',
    category: 'autonomous-vehicle-telemetry',
    icon: '🚗',
    href: '/services/waymo-autonomous-vehicle-telemetry',
    industry: 'Autonomous Vehicles & Transportation',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (ride-hailing per trip)', pro: 'Fleet partnership program', enterprise: 'Custom (OEM licensing)' },
    contactInfo: { website: 'https://waymo.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Multi-sensor fusion: LiDAR, 29 cameras, and 6 radar units per vehicle',
      'Real-time telemetry: 20+ TB of sensor data processed per vehicle daily',
      'AI driving policy: deep learning models trained on 20M+ real-world miles',
      'Simulation platform: 20+ billion virtual miles for safety validation annually',
      'Fleet management: real-time vehicle health, routing, and passenger matching',
      'Safety reporting: 85% fewer injury-causing crashes vs. human driver baseline'
    ],
    benefits: [
      'Eliminate human error: 94% of crashes involve human mistakes',
      '24/7 availability: autonomous fleets operate around the clock',
      'Reduce transportation costs by 50% vs. private car ownership',
      'Accessibility: provide mobility for elderly and disabled passengers',
      'Proven at scale: 150,000+ paid rides per week across 4 major US cities'
    ]
  }
];

export const wave220AiAccessibilityTestingServices: Service[] = [
  {
    id: 'axe-deque-ai-accessibility-testing',
    title: 'axe by Deque — AI-Powered Web Accessibility Testing',
    description: 'axe by Deque Systems is the leading AI-powered accessibility testing platform that automatically detects WCAG 2.2, Section 508, and EN 301 549 compliance issues in web and mobile applications. Their AI engine uses computer vision and machine learning to identify 80%+ of accessibility issues that manual testing misses, including color contrast, missing alt text, keyboard navigation, and screen reader compatibility. With 1 million+ developers using axe tools and enterprise customers including Microsoft, Google, and the US federal government, Deque has tested over 10 billion web pages for accessibility compliance.',
    category: 'ai-accessibility-testing',
    icon: '♿',
    href: '/services/axe-deque-ai-accessibility-testing',
    industry: 'Accessibility & Compliance Technology',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (axe DevTools Community)', pro: '$40/month (axe DevTools Pro)', enterprise: '$50K/year (axe Monitor + automated scanning)' },
    contactInfo: { website: 'https://deque.com/axe', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Automated WCAG 2.2, Section 508, and EN 301 549 compliance scanning',
      'AI-powered issue detection: 80%+ of accessibility issues found automatically',
      'Browser extension: test any webpage in seconds with axe DevTools',
      'CI/CD integration: GitHub Actions, Jenkins, Azure DevOps, and CircleCI plugins',
      'Intelligent guided testing: AI suggests manual tests for complex accessibility issues',
      'Enterprise monitoring: continuous scanning of entire web properties for accessibility regressions'
    ],
    benefits: [
      'Avoid costly accessibility lawsuits: 4,000+ ADA web lawsuits filed in 2023',
      'Reach 16% of the global population with disabilities — a $13T market',
      'Automated testing finds issues 10x faster than manual accessibility audits',
      'Meet legal requirements: WCAG 2.2 AA compliance for government and enterprise',
      'Used by 1 million+ developers including Microsoft, Google, and US federal agencies'
    ]
  }
];
