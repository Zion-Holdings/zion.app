import { Service } from './serviceTypes';

// Wave 216 — Swarm Intelligence, Edge AI Inference, Synthetic Data Generation,
// AI Governance & Compliance, Autonomous RPA, Federated Learning, and Space Computing
// Research by @OWL — 2026-06-19
// New categories: swarm-intelligence, edge-ai-inference, synthetic-data-generation,
// ai-governance-compliance, autonomous-rpa, federated-learning, space-computing

export const wave216SwarmIntelligenceServices: Service[] = [
  {
    id: 'kilobots-swarm-intelligence-platform',
    title: 'Kilobots — Swarm Intelligence Orchestration Platform',
    description: 'Kilobots provides a commercial-grade swarm intelligence platform for coordinating hundreds to thousands of autonomous agents working collectively. Inspired by ant colonies and bee hives, swarm intelligence enables distributed problem-solving for logistics optimization, warehouse robotics, agricultural drone fleets, and emergency response coordination without central control.',
    category: 'swarm-intelligence',
    icon: '🐜',
    href: '/services/kilobots-swarm-intelligence-platform',
    industry: 'Robotics & Logistics',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (simulation only)', pro: '$2,000/month (100 agents)', enterprise: 'Custom ($50K+/program)' },
    contactInfo: { website: 'https://kilobots.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Decentralized coordination algorithms — no single point of failure',
      'Support for 1000+ simultaneous heterogeneous robot agents',
      'Built-in consensus protocols: stigmergy, flocking, task allocation',
      'Digital twin simulation environment for pre-deployment testing',
      'ROS2 and MQTT integration for real hardware fleet management',
      'Emergent behavior analysis and safety constraint enforcement'
    ],
    benefits: [
      'Warehouse picking efficiency increased 40% vs centralized WMS',
      'Scalable to 10,000+ agents without performance degradation',
      'Self-healing: swarm adapts when individual agents fail',
      'Agricultural drone fleets coordinate crop monitoring autonomously',
      'Military-grade robustness using bio-inspired communication protocols'
    ]
  },
  {
    id: 'hivemapper-swarm-mapping-network',
    title: 'Hivemapper — Decentralized Swarm Mapping Network',
    description: 'Hivemapper operates a community-driven global mapping network using 100,000+ dashcam-equipped vehicles that collectively build and update maps in real time. Its swarm intelligence processes crowd-sourced video into 3D map tiles, detecting road changes, signage, and construction faster than any centralized mapping provider.',
    category: 'swarm-intelligence',
    icon: '🗺️',
    href: '/services/hivemapper-swarm-mapping-network',
    industry: 'Autonomous Vehicles & Mapping',
    stage: 'published',
    popular: false,
    pricing: { basic: 'Free (map consumer app)', pro: '$499/hardware kit', enterprise: '$50,000+/year (map data license)' },
    contactInfo: { website: 'https://hivemapper.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      '100,000+ crowd-sourced mapping vehicles across 50+ countries',
      'AI-powered change detection: identifies new construction, signs, detours in <24 hours',
      'Decentralized processing: video processed on-device and at edge nodes',
      'Map data available in 3D mesh and standard HD map formats',
      'Token-incentivized contributor network ensures continuous coverage',
      'API integration for autonomous vehicle fleet operators and logistics platforms'
    ],
    benefits: [
      'Maps updated 150x faster than Google Street View',
      'Reduce autonomous vehicle mapping costs by 90%',
      'Hyperlocal road condition data for insurance and municipal planning',
      'Privacy-first: personal identifying information processed at edge',
      'Open mapping ecosystem prevents vendor lock-in'
    ]
  }
];

export const wave216EdgeAiInferenceServices: Service[] = [
  {
    id: 'nvidia-jetson-edge-ai',
    title: 'NVIDIA Jetson — Edge AI Inference Platform',
    description: 'NVIDIA Jetson is the leading edge AI computing platform, delivering data center-level AI performance in power-constrained embedded systems. The Orin NX and AGX Orin modules provide up to 275 TOPS of AI compute for autonomous machines, industrial inspection, smart cities, and medical devices — all at under 60W power consumption.',
    category: 'edge-ai-inference',
    icon: '📡',
    href: '/services/nvidia-jetson-edge-ai',
    industry: 'Embedded Systems & Robotics',
    stage: 'published',
    popular: true,
    pricing: { basic: '$199/developer kit', pro: '$999/Orin NX module', enterprise: '$1,999/AGX Orin + volume pricing' },
    contactInfo: { website: 'https://nvidia.com/jetson', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AGX Orin delivers 275 TOPS INT8 AI performance in a compact module',
      'NVIDIA TensorRT for optimized model inference (YOLO, BERT, GPT)',
      'Multi-camera support: up to 16 concurrent camera streams via GMSL',
      'CUDA, cuDNN, and TensorRT libraries available out of the box',
      'IGX Orin for medical devices (FDA 510(k) cleared reference designs)',
      'Cloud-native orchestration via NVIDIA Fleet Command'
    ],
    benefits: [
      'Run foundation models (LLMs, diffusion) on edge without cloud dependency',
      'Sub-10ms latency for real-time autonomous vehicle decision-making',
      'Industrial defect detection at 500 parts/minute with 99.97% accuracy',
      'Power-efficient: x80 more efficient than data center GPU inference',
      'Deploy once: models developed on NVIDIA data center GPUs run on Jetson unchanged'
    ]
  },
  {
    id: 'qualcomm-ai-engine-mobile-edge',
    title: 'Qualcomm AI Engine — Mobile & IoT Edge AI Processing',
    description: 'Qualcomm AI Engine, integrated into Snapdragon mobile and IoT platforms, brings dedicated AI acceleration to over 1 billion devices. Its Hexagon Neural Processing Unit (NPU) handles on-device LLM inference (up to 7B parameters), real-time translation, voice assistants, and computational photography without cloud round-trips.',
    category: 'edge-ai-inference',
    icon: '📱',
    href: '/services/qualcomm-ai-engine-mobile-edge',
    industry: 'Mobile & IoT',
    stage: 'published',
    popular: false,
    pricing: { basic: 'Integrated into Snapdragon SoCs', pro: 'Developer access via Qualcomm Innovation Center', enterprise: 'Custom NPU firmware licensing available' },
    contactInfo: { website: 'https://qualcomm.com/ai', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Hexagon NPU supports 48 TOPS INT8 inference performance',
      'On-device LLM inference: Llama 3 7B at 15+ tokens/second',
      'Hybrid AI: automatic split between on-device and cloud inference',
      'Qualcomm AI Engine Direct — single API for GPU, CPU, NPU acceleration',
      'Supports ONNX, TensorFlow Lite, PyTorch Mobile runtimes',
      'Always-on voice, vision, and sensor processing at <5mW'
    ],
    benefits: [
      'User voice data never leaves the device — privacy by architecture',
      'Offline AI works in airplane mode, underground, remote areas',
      'Real-time multilingual translation for 40+ languages on Snapdragon',
      'Smartphone camera computational photography at professional quality',
      'Battery-efficient: 10-hour continuous AI workload vs 2 hours on GPU'
    ]
  }
];

export const wave216SyntheticDataGenerationServices: Service[] = [
  {
    id: 'synth-ai-synthetic-data-platform',
    title: 'Synthesia & Synthetic Data Vault — AI Training Data Generation',
    description: 'Synthetic data generation platforms create statistically equivalent artificial datasets that preserve the patterns and relationships of real data while eliminating privacy risks. Used by Fortune 500 companies to train ML models when real data is scarce, biased, or restricted by HIPAA/GDPR. Now generating tabular data, video, text, and 3D scenes at scale.',
    category: 'synthetic-data-generation',
    icon: '🧪',
    href: '/services/synth-ai-synthetic-data-platform',
    industry: 'Data Engineering & Privacy',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (10,000 rows/month)', pro: '$500/month (1M rows)', enterprise: 'Custom ($25K+/year)' },
    contactInfo: { website: 'https://mostly.ai', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Generative adversarial networks (GAN) and diffusion models for realistic data',
      'Statistical fidelity validation: synthetic data within 2% of real data distributions',
      'Privacy guarantee: zero-linkage attack demonstrated (K-anonymity preserved)',
      'Supports tabular, time-series, text, image, and video synthetic generation',
      'Smart imbalanced data augmentation for rare event ML training',
      'Data portability: export to Snowflake, BigQuery, Redshift, S3 formats'
    ],
    benefits: [
      'Train ML models when real data is unavailable or restricted by regulation',
      'Eliminate HIPAA/GDPR exposure from training datasets',
      'Balance imbalanced datasets for fraud detection and rare disease diagnosis',
      'Reduce data acquisition costs by 95% vs manual data collection',
      'Enable cross-border data sharing without privacy policy violations'
    ]
  }
];

export const wave216AiGovernanceComplianceServices: Service[] = [
  {
    id: 'ibm-ai-factsheets-governance',
    title: 'IBM AI Factsheets — Enterprise AI Governance & Compliance',
    description: 'IBM AI Factsheets provides end-to-end AI model governance, documenting model provenance, training data lineage, bias metrics, and regulatory compliance status. As AI regulation accelerates globally (EU AI Act, NIST AI RMF, Singapore Model AI Governance), AI Factsheets automates the compliance documentation that enterprises need to deploy AI responsibly and legally.',
    category: 'ai-governance-compliance',
    icon: '📋',
    href: '/services/ibm-ai-factsheets-governance',
    industry: 'Compliance & Risk Management',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (open-source toolkit)', pro: '$5,000/month (Watsonx.governance)', enterprise: 'Custom ($100K+/year)' },
    contactInfo: { website: 'https://ibm.com/watsonx/governance', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Automated model documentation: training data, hyperparameters, bias test results',
      'EU AI Act compliance mapping with automated risk tier classification',
      'NIST AI Risk Management Framework (AI RMF) aligned assessment workflows',
      'Real-time bias and fairness monitoring in production AI systems',
      'Explainability reports: SHAP, LIME, and counterfactual explanations generated automatically',
      'Audit trail and version control for all model changes and deployments'
    ],
    benefits: [
      'Avoid EU AI Act fines up to 7% of global revenue for non-compliant AI',
      'Reduce AI model audit preparation from weeks to hours',
      'Detect and remediate model drift and demographic bias in real time',
      'Board-ready AI governance reports generated automatically',
      'Accelerate AI deployment by satisfying compliance requirements faster'
    ]
  }
];

export const wave216AutonomousRpaServices: Service[] = [
  {
    id: 'ui-path-autonomous-agents-rpa',
    title: 'UiPath Autonomous Agents — Next-Generation Intelligent RPA',
    description: 'UiPath has evolved from rule-based robotic process automation to autonomous AI agents that handle end-to-end business processes with minimal human input. Their platform combines traditional RPA task automation with LLM-powered reasoning, computer vision understanding of any UI, and self-healing workflows that adapt when applications change.',
    category: 'autonomous-rpa',
    icon: '🤖',
    href: '/services/ui-path-autonomous-agents-rpa',
    industry: 'Enterprise Automation',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (Community edition)', pro: '$420/month (automation cloud)', enterprise: 'Custom ($50K+/year platform)' },
    contactInfo: { website: 'https://uipath.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Autonomous agents: multi-step reasoning across applications and documents',
      'Computer vision reads any screen — SAP, Salesforce, legacy mainframes, PDFs',
      'Self-healing: 95% of UI changes automatically detected and adapted',
      'Document understanding: extracts structured data from invoices, contracts, emails',
      'Integration Hub: 1,200+ pre-built connectors to enterprise systems',
      'Process mining discovers automation opportunities from system logs'
    ],
    benefits: [
      'Reduce finance and accounting processing costs by 80%',
      'Employees focus on strategic work instead of copy-paste tasks',
      '24/7 autonomous processing with exception handling and human-in-the-loop',
      'Compliance: every action logged with full audit trail',
      'ROI typically achieved within 6-9 months of deployment'
    ]
  }
];

export const wave216FederatedLearningServices: Service[] = [
  {
    id: 'intel-openfl-federated-learning',
    title: 'Intel OpenFL — Federated Learning Without Data Centralization',
    description: 'Intel OpenFL is an open-source framework for federated learning that enables organizations to collaboratively train AI models without sharing raw data. Each participant trains on local data, and only model weight updates (gradients) are shared — keeping sensitive data behind organizational firewalls. Projects include medical imaging AI across hospitals without sharing patient scans.',
    category: 'federated-learning',
    icon: '🔗',
    href: '/services/intel-openfl-federated-learning',
    industry: 'Healthcare & Multi-Enterprise AI',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Free (open-source)', pro: 'Supported build ($10K/year)', enterprise: 'Custom deployment ($50K+/program)' },
    contactInfo: { website: 'https://intel.com/openfl', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Horizontal and vertical federated learning supported with aggregation director',
      'Differential privacy and secure aggregation prevent gradient leakage',
      'Support for PyTorch and TensorFlow training pipelines',
      'Medical imaging proof-of-concept: 20-institution tumor segmentation model',
      'Intel SGX enclave support for hardware-secured collaborative training',
      'Federated analytics: compute statistics across silos without data movement'
    ],
    benefits: [
      'Train on 10x more data by collaborating without sharing',
      'HIPAA-compliant multi-hospital AI model development',
      'Banks collaboratively detect fraud without exposing customer transactions',
      '5G network optimization across carriers without sharing subscriber data',
      'Regulatory compliance: data never leaves organizational boundaries'
    ]
  }
];

export const wave216SpaceComputingServices: Service[] = [
  {
    id: 'leolabs-space-computing-orbit',
    title: 'LeoLabs — Space Computing & Orbital Data Centers',
    description: 'LeoLabs is pioneering orbital data centers that leverage the vacuum of space for zero-cooling-cost computing, direct downlinks to any point on Earth, and solar-powered AI inference. As terrestrial data centers face power and cooling constraints, space computing offers virtually unlimited scale for AI training, Earth observation analytics, and global content delivery.',
    category: 'space-computing',
    icon: '🛰️',
    href: '/services/leolabs-space-computing-orbit',
    industry: 'Aerospace & High-Performance Computing',
    stage: 'published',
    popular: false,
    pricing: { basic: 'Research partnership', pro: 'Orbital compute slot ($100K/mission)', enterprise: 'Dedicated orbital data center ($50M+)' },
    contactInfo: { website: 'https://leolabs.space', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Orbital data center modules with 10kW solar-powered compute capacity',
      'Direct-to-ground laser downlink at 100 Gbps per satellite',
      'Zero cooling cost: space vacuum provides infinite heat sink',
      'Earth observation AI: real-time ship, aircraft, and weather detection',
      'Radiation-hardened GPU modules for AI inference in orbit',
      'Constellation-as-a-service: deploy custom compute payloads in 18 months'
    ],
    benefits: [
      'Eliminate data center cooling costs (40% of total energy bill)',
      'Global coverage: compute and AI accessible from any location',
      'Process satellite imagery in orbit — reduce downlink bandwidth by 99%',
      'Carbon-neutral computing powered entirely by solar energy',
      'Strategic advantage: sovereign compute independent of terrestrial infrastructure'
    ]
  }
];
