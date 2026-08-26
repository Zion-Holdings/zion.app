import { Service } from './serviceTypes';

// Wave 217 — Carbon Capture Technology, Brain-Computer Interfaces, Precision Fermentation,
// Autonomous Marine Vehicles, Smart Grid Energy, AI-Powered Drug Discovery, and 3D-Printed Electronics
// Research by @OWL — 2026-06-19
// New categories: carbon-capture-tech, brain-computer-interfaces, precision-fermentation,
// autonomous-marine-vehicles, smart-grid-energy, ai-drug-discovery, 3d-printed-electronics

export const wave217CarbonCaptureTechServices: Service[] = [
  {
    id: 'climworks-direct-air-capture',
    title: 'Climeworks — Direct Air Carbon Capture & Storage',
    description: 'Climeworks operates the world\'s largest direct air capture (DAC) plants, including the Mammoth facility in Iceland that captures 36,000 tons of CO₂ annually. Their modular Orca and Gen2 systems filter ambient air, extract CO₂ using amine-based sorbents, and permanently store it underground via the Carbfix mineralization process. Enterprises purchase verified carbon removal credits to meet net-zero commitments.',
    category: 'carbon-capture-tech',
    icon: '🌍',
    href: '/services/climworks-direct-air-capture',
    industry: 'Climate Tech & Sustainability',
    stage: 'published',
    popular: true,
    pricing: { basic: '$1,000/ton CO₂ removed', pro: '$700/ton (>1,000 tons/year)', enterprise: '$500/ton (enterprise multi-year agreements)' },
    contactInfo: { website: 'https://climeworks.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Direct air capture technology removes legacy CO₂ emissions permanently',
      'Carbfix mineralization: CO₂ turned into stone underground within 2 years',
      'Third-party verified carbon removal credits (Puro Standard certified)',
      'Modular design: each Orca unit captures 400 tons CO₂/year continuously',
      'Mammoth plant (2024): 36,000 tons/year capacity — world\'s largest DAC facility',
      'Enterprise API for automated carbon credit retirement and ESG reporting'
    ],
    benefits: [
      'Meet Science-Based Targets initiative (SBTi) net-zero requirements',
      'Permanently remove historical carbon emissions — not just offset',
      'ESG report with independently verified carbon removal certificates',
      'Early mover on carbon removal as demand is projected to exceed supply 100x by 2030',
      'Removal credits qualify under Article 6 of the Paris Agreement'
    ]
  },
  {
    id: 'heirloom-carbon-removal',
    title: 'Heirloom — Enhanced Rock Weathering Carbon Removal',
    description: 'Heirloom accelerates natural limestone weathering to capture CO₂ from the air and permanently store it in concrete and soil. Their enhanced weathering process spreads pulverized limestone on agricultural land, where it absorbs CO₂ within months instead of the natural centuries-long timeline. This dual-use approach also improves soil pH and crop yields for farming communities.',
    category: 'carbon-capture-tech',
    icon: '🏔️',
    href: '/services/heirloom-carbon-removal',
    industry: 'Climate Tech & Agriculture',
    stage: 'published',
    popular: false,
    pricing: { basic: '$300/ton CO₂ removed', pro: '$200/ton (>5,000 tons/year)', enterprise: '$150/ton (large-scale programs)' },
    contactInfo: { website: 'https://heirloomcarbon.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Limestone-based carbon capture — no chemicals, no energy-intensive processes',
      'Spreads on agricultural land, improving soil health and crop productivity',
      'CO₂ permanently mineralized in soil and ocean alkalinity enhancement',
      'Third-party verified via Watershed and Puro Standard certification',
      'Dual benefit: carbon removal + agricultural soil remediation',
      'Scalable to billions of tons using globally abundant limestone reserves'
    ],
    benefits: [
      'Lowest-cost permanent carbon removal pathway ($150/ton at scale)',
      'Farmers earn income from hosting limestone spreading operations',
      'Restores degraded agricultural soils while capturing CO₂',
      'Unlimited scalability — limestone is one of Earth\'s most abundant minerals',
      'Carbon removal verified by independent ISO-accredited auditors'
    ]
  }
];

export const wave217BrainComputerInterfaceServices: Service[] = [
  {
    id: 'neuralink-brain-computer-interface',
    title: 'Neuralink — Brain-Computer Interface Platform',
    description: 'Neuralink has developed the N1 brain-computer interface chip, implanted in its first human patients in 2024. The coin-sized device with 1,024 electrodes records and stimulates brain activity, enabling paralyzed patients to control computers and smartphones with thought alone. Neuralink\'s long-term vision includes treating neurological conditions, memory restoration, and human-AI symbiosis.',
    category: 'brain-computer-interfaces',
    icon: '🧠',
    href: '/services/neuralink-brain-computer-interface',
    industry: 'Neurotechnology & Healthcare',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Clinical trial participation', pro: 'Medical device program (hospital partnership)', enterprise: 'Research licensing (custom)' },
    contactInfo: { website: 'https://neuralink.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'N1 implant: 1,024 electrodes on 64 ultra-thin flexible threads',
      'Wireless charging and Bluetooth data transmission — no external wires',
      'Precision Robotics surgical robot for minimally invasive implantation',
      'First human patients control computers, play games, browse web via thought',
      'FDA Breakthrough Device designation for paralysis and neurological conditions',
      'Future applications: vision restoration, memory enhancement, depression treatment'
    ],
    benefits: [
      'Restore independence to paralyzed patients — control devices with thought',
      'Treat previously incurable neurological conditions (ALS, Parkinson\'s, epilepsy)',
      'Potential to restore vision in blind patients via cortical stimulation',
      'Human-AI symbiosis: direct brain-to-AI communication at bandwidth of thought',
      'Wireless, cosmetically invisible implant — no external hardware visible'
    ]
  },
  {
    id: 'synchron-stentrode-bci',
    title: 'Synchron Stentrode — Minimally Invasive Brain-Computer Interface',
    description: 'Synchron\'s Stentrode is a brain-computer interface delivered via blood vessels — no open brain surgery required. The stent-mounted electrode array is inserted through the jugular vein and positioned in the motor cortex, enabling paralyzed patients to text, email, and shop online using thought alone. Synchron received FDA IDE approval ahead of Neuralink and has implanted 10+ patients across the US and Australia.',
    category: 'brain-computer-interfaces',
    icon: '🔌',
    href: '/services/synchron-stentrode-bci',
    industry: 'Neurotechnology & Healthcare',
    stage: 'published',
    popular: false,
    pricing: { basic: 'Clinical trial participation', pro: 'Hospital implantation program', enterprise: 'Platform licensing for research institutions' },
    contactInfo: { website: 'https://synchron.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Endovascular delivery — no craniotomy, no open brain surgery',
      '16-electrode stent-mounted array positioned in superior sagittal sinus',
      'Patients control iOS/Android devices, smart home, and messaging apps',
      'FDA IDE approved and Medicare reimbursement pathway established',
      '10+ patients implanted with zero serious adverse device events',
      'AI-powered signal decoding adapts to individual patient neural patterns'
    ],
    benefits: [
      'Same-day procedure vs. multi-hour open brain surgery for competitors',
      'Lower infection risk: device delivered via natural blood vessels',
      'Medicare reimbursement pathway — accessible to broader patient population',
      'Patients regain digital independence: text, email, shop, control smart home',
      'Scalable platform: same device architecture for multiple neurological conditions'
    ]
  }
];

export const wave217PrecisionFermentationServices: Service[] = [
  {
    id: 'perfect-day-precision-fermentation',
    title: 'Perfect Day — Precision Fermentation Dairy Proteins',
    description: 'Perfect Day uses precision fermentation to produce real whey and casein proteins identical to those in cow\'s milk — without any animals. Their engineered microflora produce dairy proteins through fermentation, which are then used to make ice cream, cream cheese, and milk that is lactose-free, hormone-free, and environmentally sustainable. The protein is molecularly identical to animal dairy.',
    category: 'precision-fermentation',
    icon: '🧬',
    href: '/services/perfect-day-precision-fermentation',
    industry: 'Food Tech & Alternative Proteins',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Consumer products (B2C retail)', pro: 'B2B protein ingredient ($50/kg)', enterprise: 'Custom formulation partnerships' },
    contactInfo: { website: 'https://perfectday.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Real dairy proteins (whey, casein) produced without cows — molecularly identical',
      'GRAS (Generally Recognized as Safe) FDA status for food use',
      '97% less water, 97% less land, 65% less greenhouse gas vs dairy farming',
      'Lactose-free, antibiotic-free, hormone-free, cholesterol-free',
      'B2B ingredient supply to food manufacturers + B2C branded products',
      'Precision fermentation platform extensible to egg proteins, collagen, and more'
    ],
    benefits: [
      'Same taste and nutrition as dairy — no animal welfare concerns',
      'Supply chain resilience: production independent of weather, disease, or season',
      '97% reduction in water usage vs conventional dairy farming',
      'Addresses global protein demand without expanding animal agriculture',
      'Products already in 5,000+ US retail stores (Brave Robot ice cream, etc.)'
    ]
  }
];

export const wave217AutonomousMarineVehicleServices: Service[] = [
  {
    id: 'saildrone-autonomous-ocean-vehicles',
    title: 'Saildrone — Autonomous Ocean Data Collection Vehicles',
    description: 'Saildrone builds wind and solar-powered autonomous surface vehicles (ASVs) that patrol the world\'s oceans for months at a time, collecting meteorological, oceanographic, and fisheries data. Their fleet of 100+ vehicles has sailed over 1 million nautical miles, providing real-time data to NOAA, NASA, and the US Navy. Applications include hurricane intensification monitoring, illegal fishing detection, and climate change research.',
    category: 'autonomous-marine-vehicles',
    icon: '⛵',
    href: '/services/saildrone-autonomous-ocean-vehicles',
    industry: 'Ocean Tech & Environmental Monitoring',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Data subscription ($10K/year)', pro: 'Mission charter ($50K/mission)', enterprise: 'Fleet deployment (custom $500K+)' },
    contactInfo: { website: 'https://saildrone.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Wind and solar powered — zero emissions, 12+ month mission endurance',
      '100+ vehicle fleet operating across all major ocean basins',
      'Real-time satellite data transmission: weather, sea state, sub-surface profiles',
      'Hurricane Wing variant flies into Category 4+ storms for intensification data',
      'NOAA, NASA, and US Navy operational partnerships',
      'AI-powered fisheries monitoring and illegal fishing detection'
    ],
    benefits: [
      'Hurricane track forecast accuracy improved by 30% with Saildrone data',
      'Detect illegal fishing in protected marine areas in real time',
      'Climate change research: ocean CO₂ uptake, acidification, and heat content',
      'Replace $50M research vessels with $500K autonomous fleets',
      'Persistent ocean presence: 24/7/365 data collection in remote regions'
    ]
  }
];

export const wave217SmartGridEnergyServices: Service[] = [
  {
    id: 'autogrid-ai-smart-grid-optimization',
    title: 'AutoGrid — AI-Powered Smart Grid Energy Optimization',
    description: 'AutoGrid uses AI to optimize distributed energy resources (DERs) across the electrical grid, managing millions of EVs, batteries, solar panels, and smart thermostats as a virtual power plant. Their platform shifts energy consumption to off-peak hours, reduces grid stress during peak demand, and enables utilities to defer billions in infrastructure upgrades by intelligently managing existing capacity.',
    category: 'smart-grid-energy',
    icon: '⚡',
    href: '/services/autogrid-ai-smart-grid-optimization',
    industry: 'Energy & Utilities',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (residential demand response)', pro: '$50K/year (utility pilot)', enterprise: '$500K+/year (grid-scale deployment)' },
    contactInfo: { website: 'https://auto-grid.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Virtual power plant: aggregates millions of EVs, batteries, and smart devices',
      'AI predicts energy demand 48 hours ahead with 95% accuracy',
      'Automated demand response: shifts load to off-peak without customer impact',
      'EV smart charging management: charges when grid is cleanest and cheapest',
      'Real-time grid balancing with sub-second response to frequency deviations',
      'Open standards: OCPP, OpenADR, IEEE 2030.5 compliant'
    ],
    benefits: [
      'Defer $10B+ in transmission and distribution infrastructure upgrades',
      'Reduce peak demand by 15-20% through intelligent load shifting',
      'Integrate 3x more renewable energy without grid instability',
      'EV owners save $500+/year on electricity with smart charging',
      'Utilities avoid blackouts during extreme weather events'
    ]
  }
];

export const wave217AiDrugDiscoveryServices: Service[] = [
  {
    id: 'insilico-medicine-ai-drug-discovery',
    title: 'Insilico Medicine — AI-Powered Drug Discovery Platform',
    description: 'Insilico Medicine uses generative AI and deep learning to discover new drug candidates in months instead of years. Their Pharma.AI platform generates novel molecular structures, predicts clinical trial outcomes, and identifies new disease targets. In 2023, Insilico advanced the first fully AI-discovered drug (for idiopathic pulmonary fibrosis) to Phase II clinical trials — a milestone that previously took the industry 4-5 years and $400M.',
    category: 'ai-drug-discovery',
    icon: '💊',
    href: '/services/insilico-medicine-ai-drug-discovery',
    industry: 'Pharmaceutical & Biotech',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Research collaboration', pro: '$5M/target (discovery to candidate)', enterprise: '$50M+ (full pipeline partnership)' },
    contactInfo: { website: 'https://insilico.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Generative AI designs novel drug molecules from scratch in 30 days',
      'Pharma.AI platform: target discovery → molecule generation → trial prediction',
      'First AI-discovered drug in Phase II clinical trials (IPF treatment)',
      '41 therapeutic programs in pipeline across cancer, fibrosis, and infectious disease',
      'Biomarker AI predicts patient response before clinical trials begin',
      'Partnerships with Sanofi, Menarini, and multiple top-20 pharma companies'
    ],
    benefits: [
      'Reduce drug discovery timeline from 4.5 years to 18 months',
      'Cut discovery costs from $400M to $50M per candidate',
      'Higher clinical trial success rates via AI-predicted patient response',
      'Address previously "undruggable" targets with novel molecular approaches',
      'Accelerate treatments for rare diseases that lack commercial incentive'
    ]
  }
];

export const wave2173dPrintedElectronicsServices: Service[] = [
  {
    id: 'optomec-aerosol-jet-3d-printing',
    title: 'Optomec — Aerosol Jet 3D-Printed Electronics',
    description: 'Optomec\'s Aerosol Jet technology prints electronic circuits directly onto 3D structures, enabling antennas, sensors, and circuit boards to be embedded into products during manufacturing. Unlike traditional PCB fabrication, Aerosol Jet prints conductive traces on any surface — curved, flexible, or rigid — at resolutions down to 10 microns. Applications span 5G antennas, IoT sensors, medical devices, and aerospace electronics.',
    category: '3d-printed-electronics',
    icon: '🖨️',
    href: '/services/optomec-aerosol-jet-3d-printing',
    industry: 'Advanced Manufacturing & Electronics',
    stage: 'published',
    popular: false,
    pricing: { basic: 'Prototype printing service ($5,000/run)', pro: '$250K/production system', enterprise: 'Custom integration ($1M+)' },
    contactInfo: { website: 'https://optomec.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Print conductive traces (silver, copper, gold) on any 3D surface',
      '10-micron resolution — finer than screen printing by 10x',
      'Aerosol Jet 500: production throughput of 100,000+ components/hour',
      'Print antennas directly onto smartphone housings, eliminating separate antenna components',
      'Multi-material printing: conductors, dielectrics, resistors, and semiconductors',
      'NASA-qualified for printing electronics on spacecraft components'
    ],
    benefits: [
      'Eliminate traditional PCB manufacturing — print circuits directly on products',
      'Reduce electronics weight by 60% in aerospace and automotive applications',
      '5G antenna printing: embed directly into device enclosures for optimal performance',
      'Rapid prototyping: go from CAD design to functional circuit in hours',
      'IoT sensor printing at 1/10th the cost of traditional MEMS fabrication'
    ]
  }
];
