import { Service } from './serviceTypes';

export const wave279ItAiServices: Service[] = [
  {
    id: 'it-platform-engineering-idp',
    title: 'Platform Engineering & Internal Developer Platform',
    description: 'Build golden paths for engineering teams with IDPs, self-service portals, developer environments, and automated compliance. Reduce cognitive load and accelerate delivery without centralizing control.',
    category: 'platform-engineering',
    icon: '🏗️',
    href: '/services/platform-engineering-idp',
    industry: 'Developer Experience & DevOps',
    stage: 'published',
    popular: true,
    pricing: { basic: '$399/mo', pro: '$1,199/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Self-service infrastructure catalogs (Kubernetes, serverless, databases)',
      'Internal developer portal with scorecards and SLO visibility',
      'Template-driven environments via Terraform/Pulumi/Crossplane',
      'Automated policy enforcement (OPA/Gatekeeper, Kyverno)',
      'IDP analytics: DORA metrics, onboarding time, deployment frequency',
      'GitOps workflows with automated environment provisioning'
    ],
    benefits: [
      'Reduce onboarding time from days to under 1 hour',
      'Cut platform support tickets by 60% through self-service',
      'Improve deployment frequency by 3x with standardized pipelines',
      'Free senior engineers from repetitive integration work'
    ]
  },
  {
    id: 'it-zero-trust-ai-architecture',
    title: 'Zero Trust Architecture for AI & ML Workloads',
    description: 'Secure AI pipelines, model endpoints, training clusters, and data lakes with zero-trust controls. Prevent data poisoning, model exfiltration, and unauthorized inference access at every layer.',
    category: 'zero-trust-ai',
    icon: '🛡️',
    href: '/services/zero-trust-ai-architecture',
    industry: 'AI Security & Compliance',
    stage: 'published',
    popular: true,
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'ML pipeline attestation and artifact signing',
      'Inference gateway with per-user rate limits and anomaly detection',
      'Model encryption in transit, at rest, and during inference',
      'RBAC with workload identity for Kubernetes/GPU clusters',
      'Prompt injection and jailbreak detection guardrails',
      'Automated compliance reporting for NIST AI RMF, EU AI Act'
    ],
    benefits: [
      'Prevent unauthorized model changes and data poisoning',
      'Pass AI security audits with documented controls',
      'Eliminate prompt injection risks in production LLMs',
      'Enable compliant AI deployment in regulated industries'
    ]
  },
  {
    id: 'it-observability-stack-modernization',
    title: 'Observability Stack Modernization (OpenTelemetry, eBPF, Profiling)',
    description: 'Migrate from legacy monitoring to modern observability with OpenTelemetry, eBPF-based network observability, continuous profiling, and unified dashboards. Reduce MTTR and cognitive overload.',
    category: 'observability',
    icon: '🔍',
    href: '/services/observability-modernization',
    industry: 'IT Operations & Observability',
    stage: 'published',
    popular: false,
    pricing: { basic: '$349/mo', pro: '$999/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'OpenTelemetry collector deployment and instrumentation',
      'eBPF-driven network flow and socket metrics',
      'Continuous profiling (Go, Java, Python, Node, Rust)',
      'Unified dashboards in Grafana, Datadog, or New Relic',
      'SLO/SLA/Error Budget tracking and alerting',
      'Service topology mapping and dependency tracking'
    ],
    benefits: [
      'Reduce MTTR by 40% with unified telemetry',
      'Cut observability tooling costs by 25%',
      'Eliminate vendor lock-in with open standards',
      'Detect performance regressions before customers do'
    ]
  },
  {
    id: 'ai-model-adapter-finetuning',
    title: 'AI Model Fine-Tuning, Adapters & Safeguards',
    description: 'Fine-tune LLMs and vision models on proprietary data with LoRA/QLoRA adapters. Deploy with prompt caching, guardrails, and evaluation suites. Reduce hallucination and align outputs with brand and compliance requirements.',
    category: 'ai-model-ops',
    icon: '🧪',
    href: '/services/ai-model-adapter-finetuning',
    industry: 'AI Engineering & MLOps',
    stage: 'published',
    popular: true,
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'LoRA/QLoRA fine-tuning on domain-specific datasets',
      'Prompt caching, prefix caching, and speculative decoding',
      'Custom evaluation harnesses (MT-Bench, factual accuracy)',
      'Guardrails and structured output enforcement',
      'Adapter registry for multi-tenant model serving',
      'A/B testing and canary deployment for model updates'
    ],
    benefits: [
      'Improve model accuracy on domain tasks by 20-40%',
      'Deploy smaller, cheaper models with adapter switching',
      'Reduce hallucination rates with instruction tuning',
      'Launch AI features safely with guardrails in place'
    ]
  },
  {
    id: 'ai-synthetic-data-generation',
    title: 'Synthetic Data Generation for ML & Testing',
    description: 'Generate production-realistic synthetic data for ML training, privacy compliance, and QA testing. Preserve statistical distributions and edge cases without exposing PII or sensitive records.',
    category: 'ai-synthetic-data',
    icon: '🎭',
    href: '/services/ai-synthetic-data-generation',
    industry: 'Data Engineering & AI',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Tabular synthetic data for ML training (CTGAN, TVAE)',
      'Image and video synthesis for CV model fine-tuning',
      'PII-safe synthetic datasets for regulated industries',
      'Statistical parity testing and bias mitigation',
      'Synthetic sensor data for IoT and industrial ML',
      'API/SDK for programmatic synthetic generation'
    ],
    benefits: [
      'Train ML models without compliance risk',
      'Overcome data scarcity for rare event classification',
      'Test data pipelines and ETL without touching PII',
      'Accelerate AI development cycles by 5x'
    ]
  },
  {
    id: 'ai-agent-orchestration-platform',
    title: 'AI Agent Orchestration & Multi-Agent Platform',
    description: 'Design, deploy, and manage autonomous AI agent swarms for complex operations. Coordinate specialized agents with state machines, memory, tools, and human-in-the-loop approval gates.',
    category: 'ai-agent-platform',
    icon: '🤖',
    href: '/services/ai-agent-orchestration-platform',
    industry: 'Autonomous AI & Agentic Systems',
    stage: 'published',
    popular: true,
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Multi-agent topology designer (sequential, parallel, swarm)',
      'Shared memory and context passing between agents',
      'Tool registry with sandboxed function execution',
      'Human-in-the-loop approval and escalation workflows',
      'Agent observability: traces, reasoning chains, token accounting',
      'Persistent state and checkpoint/rollback for long-running workflows'
    ],
    benefits: [
      'Automate complex end-to-end operations with coordinated agents',
      'Reduce manual process steps by 80%',
      'Scale AI beyond single-prompt chat to persistent autonomous work',
      'Maintain audit trails and human oversight throughout'
    ]
  },
  {
    id: 'it-incident-response-runbook-automation',
    title: 'IT Incident Response & Runbook Automation',
    description: 'Turn incident response from fire drills into automated workflows. Embed runbooks into ChatOps, auto-triage with AI, and orchestrate remediation across AWS, Azure, GCP, and on-prem systems.',
    category: 'incident-response',
    icon: '🚒',
    href: '/services/it-incident-response-runbook-automation',
    industry: 'IT Operations & SRE',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI-powered alert classification and noise reduction',
      'Executable runbooks with approval gates and rollback',
      'ChatOps integration (Slack, Teams, PagerDuty, Opsgenie)',
      'Automated RCA draft generation from logs and metrics',
      'Chaos engineering experiments for resilience validation',
      'Post-incident review automation and action item tracking'
    ],
    benefits: [
      'Cut MTTR by 50% with automated remediation playbooks',
      'Reduce on-call engineer burnout through intelligent triage',
      'Eliminate tribal knowledge dependency with documented runbooks',
      'Accelerate continuous improvement via automated post-mortems'
    ]
  },
  {
    id: 'it-data-fabric-mesh',
    title: 'Enterprise Data Fabric & Mesh Platform',
    description: 'Connect siloed data sources into a unified, governed data ecosystem. Enable domain-oriented data ownership with self-service discovery, quality controls, and lineage-aware access policies.',
    category: 'data-fabric-mesh',
    icon: '🧵',
    href: '/services/enterprise-data-fabric-mesh',
    industry: 'Enterprise Data & Analytics',
    stage: 'published',
    popular: false,
    pricing: { basic: '$599/mo', pro: '$1,799/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Self-service data discovery and catalog with semantic search',
      'Domain-oriented ownership and data product contracts',
      'Automated data quality rules and anomaly detection',
      'Federation across databases, warehouses, lakes, and SaaS',
      'Fine-grained access control and lineage-aware governance',
      'Streaming and batch pipelines with unified orchestration'
    ],
    benefits: [
      'Break down data silos across departments and clouds',
      'Reduce data engineering lead time by 60%',
      'Improve data quality with automated validation checks',
      'Accelerate regulatory compliance with unified governance'
    ]
  },
  {
    id: 'ai-governance-compliance-platform',
    title: 'AI Governance & Compliance Platform',
    description: 'Govern AI systems with policy enforcement, audit trails, bias detection, and model cards. Ensure compliance with EU AI Act, NIST AI RMF, ISO 42001, and internal AI risk policies across all models and deployments.',
    category: 'ai-governance',
    icon: '⚖️',
    href: '/services/ai-governance-compliance-platform',
    industry: 'AI Governance & Risk',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Automated policy enforcement and guardrails',
      'Model cards and lineage tracking',
      'Bias detection and fairness metrics',
      'EU AI Act and NIST AI RMF compliance dashboards',
      'Audit-ready traceability and evidence packs',
      'Risk scoring and approval workflows for high-risk AI'
    ],
    benefits: [
      'Deploy AI with documented governance and audit trails',
      'Reduce compliance risk with automated evidence collection',
      'Build stakeholder trust with transparent AI operations',
      'Meet regulatory requirements before enforcement deadlines'
    ]
  },
  {
    id: 'it-security-operations-center-ai',
    title: 'AI-Powered Security Operations Center (SOC)',
    description: 'Augment or replace manual SOC workflows with AI: real-time threat hunting, alert triage, incident classification, and automated response playbooks. Integrates with SIEM, EDR, and threat intelligence feeds.',
    category: 'ai-soc',
    icon: '🛡️',
    href: '/services/ai-soc-platform',
    industry: 'Cybersecurity & IT Operations',
    stage: 'published',
    popular: true,
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI alert triage with false-positive reduction by 90%',
      'Automated threat hunting across logs and endpoints',
      'Playbook automation (contain, investigate, remediate)',
      'Threat intelligence enrichment and IOC correlation',
      'SIEM/EDR integration (Splunk, CrowdStrike, Sentinel, etc.)',
      'Executive risk dashboards and SLA tracking'
    ],
    benefits: [
      'Reduce SOC alert fatigue and manual investigation time by 70%',
      'Detect threats faster with AI-assisted hunting',
      'Respond to incidents in minutes instead of hours',
      'Maximize existing security tool investments with intelligent automation'
    ]
  },
  {
    id: 'edge-ai-inference-platform',
    title: 'Edge AI Inference & IoT Intelligence Platform',
    description: 'Deploy trained AI models to edge devices, gateways, and IoT sensors with low-latency inference, model monitoring, and OTA updates. Optimize for bandwidth, compute, and power constraints.',
    category: 'edge-ai',
    icon: '📡',
    href: '/services/edge-ai-inference-platform',
    industry: 'Edge Computing & IoT',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Optimized inference runtime (ONNX, TensorRT, CoreML)',
      'Model compression and quantization for edge devices',
      'OTA model updates with A/B testing and rollback',
      'Edge-to-cloud data pipeline orchestration',
      'Model performance monitoring and drift detection',
      'Device fleet management and configuration'
    ],
    benefits: [
      'Run AI inference with sub-millisecond latency at the edge',
      'Reduce bandwidth costs by 80% with on-device processing',
      'Maintain model freshness with seamless OTA updates',
      'Scale to thousands of devices with centralized management'
    ]
  },
  {
    id: 'digital-twin-simulation-service',
    title: 'Digital Twin & Simulation-as-a-Service',
    description: 'Create living digital replicas of physical assets, production lines, or supply chains for simulation, optimization, and predictive insights. Supports real-time telemetry, scenario planning, and what-if analysis.',
    category: 'digital-twin',
    icon: '🪞',
    href: '/services/digital-twin-simulation-service',
    industry: 'Manufacturing & Engineering',
    stage: 'published',
    popular: false,
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Physics-based simulation and surrogate modeling',
      'Real-time telemetry ingestion and state synchronization',
      'What-if scenario planning and sensitivity analysis',
      'Virtual commissioning and process optimization',
      'Integration with SCADA, MES, and ERP systems',
      '3D visualization and immersive review environments'
    ],
    benefits: [
      'Reduce physical prototyping and testing costs by 60%',
      'Predict failures before they occur on real assets',
      'Optimize processes without disrupting production',
      'Accelerate innovation cycles with rapid virtual iterations'
    ]
  },
  {
    id: 'ai-qa-test-automation-platform',
    title: 'AI-Powered QA & Test Automation Platform',
    description: 'Automate functional, regression, and performance testing with AI-generated test scripts, visual validation, and self-healing locators. Reduce test maintenance and expand coverage without adding headcount.',
    category: 'ai-qa',
    icon: '🧪',
    href: '/services/ai-qa-test-automation',
    industry: 'Software Quality & DevOps',
    stage: 'published',
    popular: false,
    pricing: { basic: '$199/mo', pro: '$599/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI-generated test scripts from user stories and requirements',
      'Self-healing selectors resilient to UI changes',
      'Visual regression and pixel-perfect validation',
      'Cross-browser and cross-device test orchestration',
      'Performance and load testing with AI-driven test data',
      'Test analytics: flake detection, failure root-cause analysis'
    ],
    benefits: [
      'Reduce test creation time by 70% with AI-authored scripts',
      'Cut test maintenance overhead by 60% via self-healing locators',
      'Increase release velocity without sacrificing quality',
      'Catch visual regressions that traditional assertions miss'
    ]
  },
  {
    id: 'managed-detection-response-ai',
    title: 'Managed Detection & Response (MDR) with AI',
    description: '24/7 threat detection and response service augmented with AI. Continuous monitoring, behavior analytics, incident containment, and weekly threat briefings delivered as a fully managed security operations partner.',
    category: 'mdr-ai',
    icon: '🚨',
    href: '/services/mdr-ai',
    industry: 'Cybersecurity & IT Services',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/endpoint/mo', pro: '$599/endpoint/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      '24/7 security monitoring with AI-enhanced analytics',
      'Behavior-based anomaly detection across endpoints, networks, cloud',
      'Automated containment playbooks and threat isolation',
      'Weekly executive threat briefings and trend reports',
      'Integration with existing EDR/XDR and SIEM investments',
      'Dedicated security analyst team with AI augmentation'
    ],
    benefits: [
      'Gain enterprise-grade security operations without hiring full SOC',
      'Respond to threats in minutes with AI-assisted triage',
      'Reduce mean time to detect and contain by 80%',
      'Align security posture with compliance requirements (SOC 2, ISO 27001)'
    ]
  },
  {
    id: 'cloud-cost-optimization-ai',
    title: 'AI-Driven Cloud Cost Optimization & FinOps',
    description: 'Continuously optimize AWS, Azure, and GCP spend with AI. Right-size resources, eliminate waste, schedule non-production environments, and negotiate better commitments using predictive cost modeling.',
    category: 'cloud-finops',
    icon: '💰',
    href: '/services/cloud-cost-optimization',
    industry: 'Cloud & IT Finance',
    stage: 'published',
    popular: true,
    pricing: { basic: '$199/mo', pro: '$599/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Automated right-sizing and idle resource elimination',
      'AI-based reserved instance and savings plan recommendations',
      'Cost anomaly detection with root-cause attribution',
      'Cross-cloud unified visibility with tagging governance',
      'Showback/chargeback and budget enforcement automation',
      'Weekly cost reports with action items and savings tracking'
    ],
    benefits: [
      'Reduce cloud spend by 30-50% without performance tradeoffs',
      'Identify and eliminate millions in annual waste',
      'Automate FinOps so engineering can focus on products',
      'Make data-driven decisions with clear cost attribution'
    ]
  },
  {
    id: 'low-code-ai-app-platform',
    title: 'Low-Code AI Application Platform',
    description: 'Empower business teams to build internal tools, workflows, and customer-facing apps with AI-assisted UI generation, natural language requirements, and multi-source data integration. No frontend expertise required.',
    category: 'low-code-ai',
    icon: '🧩',
    href: '/services/low-code-ai-app-platform',
    industry: 'Enterprise Software & Low-Code',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Natural-language-to-UI generation and refinement',
      'Drag-and-drop workflow builder with AI actions',
      'Pre-built connectors for databases, APIs, SaaS tools',
      'Role-based access, audit logs, and enterprise security',
      'One-click deployment on cloud or self-hosted environments',
      'Embedded analytics and AI copilots inside every app'
    ],
    benefits: [
      'Ship internal and customer apps in days, not months',
      'Reduce backlog by empowering non-developers to build',
      'Standardize UI/UX and security across custom tools',
      'Accelerate digital transformation with minimal engineering overhead'
    ]
  },
  {
    id: 'data-observability-quality-ai',
    title: 'Data Observability & Quality AI Platform',
    description: 'Monitor data freshness, volume, distribution, and schema with AI-powered anomaly detection. Auto-detect breaking changes, classify incidents, and suggest fixes. Keep analytics and ML training reliable.',
    category: 'data-observability',
    icon: '📊',
    href: '/services/data-observability-quality',
    industry: 'Data Engineering & Analytics',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Column-level profiling and freshness monitoring',
      'AI anomaly detection across metrics, logs, and traces',
      'Automated data lineage and impact analysis',
      'Schema change detection and breaking-change alerts',
      'Self-healing quality rules and automated remediation',
      'Integration with Databricks, Snowflake, BigQuery, Redshift'
    ],
    benefits: [
      'Prevent bad data from reaching dashboards and ML models',
      'Cut data incident MTTR by 80% with automated root-cause suggestions',
      'Build trust in data across engineering, analytics, and business teams',
      'Reduce on-call data engineering burden with proactive alerts'
    ]
  },
  {
    id: 'ai-knowledge-management-enterprise',
    title: 'Enterprise AI Knowledge Management Platform',
    description: 'Unify fragmented knowledge bases, wikis, documents, and tickets into a single AI-powered knowledge platform. Natural language search, auto-generated answers, and knowledge graph insights for employees and customers.',
    category: 'ai-knowledge',
    icon: '🗂️',
    href: '/services/ai-knowledge-management',
    industry: 'Enterprise Knowledge & Support',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Unified content ingestion from Confluence, SharePoint, Drive, Notion',
      'Semantic search with natural language queries',
      'Generative answers with source citations and confidence',
      'Knowledge graph for entity relationships and topic mapping',
      'Feedback loops to improve answer accuracy over time',
      'Admin dashboard with usage analytics and content health'
    ],
    benefits: [
      'Reduce support ticket volume by 40% with instant AI answers',
      'Cut employee search time from hours to seconds',
      'Preserve institutional knowledge despite turnover',
      'Deliver consistent, accurate answers across teams and channels'
    ]
  },
  {
    id: 'serverless-platform-advisory',
    title: 'Serverless Architecture & Platform Advisory',
    description: 'Design and migrate to event-driven serverless architectures on AWS, Azure, and GCP. Reduce operational overhead with managed functions, queues, and storage. Includes cost modeling and reliability trade-off analysis.',
    category: 'serverless-advisory',
    icon: '☁️',
    href: '/services/serverless-platform-advisory',
    industry: 'Cloud Architecture & IT',
    stage: 'published',
    popular: false,
    pricing: { basic: '$399/mo', pro: '$1,199/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Event-driven architecture design and implementation',
      'Function-as-a-Service migration and refactoring',
      'Managed queue and stream architecture (SQS, EventBridge, Pub/Sub)',
      'Cold start optimization and performance tuning',
      'Observability and tracing for distributed serverless workloads',
      'Cost modeling and capacity planning for variable traffic'
    ],
    benefits: [
      'Reduce infrastructure management overhead by 80%',
      'Scale to millions of users with zero capacity planning',
      'Pay only for compute you consume — often 40-60% cheaper',
      'Improve resilience with managed retries, DLQs, and multi-region failover'
    ]
  },
  {
    id: 'ai-geospatial-spatial-intelligence',
    title: 'AI Geospatial & Spatial Intelligence Platform',
    description: 'Process satellite imagery, aerial photography, and geospatial vectors with AI for object detection, change monitoring, and predictive spatial analytics. Supports agriculture, defense, logistics, and climate use cases.',
    category: 'geospatial-ai',
    icon: '🌍',
    href: '/services/ai-geospatial-spatial-intelligence',
    industry: 'Geospatial, Agriculture & Logistics',
    stage: 'published',
    popular: false,
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Satellite and aerial imagery object detection',
      'Time-series change detection (construction, deforestation, flooding)',
      'Route optimization with live traffic and weather overlay',
      'Crop health monitoring and yield prediction',
      'Geospatial feature extraction from LiDAR and radar',
      'Web map integration and GIS-format export'
    ],
    benefits: [
      'Automate manual image analysis at planetary scale',
      'Detect changes and anomalies before they become incidents',
      'Optimize routes and logistics with real-world geospatial context',
      'Make faster, data-driven decisions with accurate spatial intelligence'
    ]
  }
];
