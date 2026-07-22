const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'app', 'data', 'servicesData.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Create a set of existing IDs for quick lookup
const existingIds = new Set(data.map(s => s.id));

const newServices = [
  {
    id: 'ai-agent-development-platform',
    title: 'AI Agent Development Platform',
    category: 'ai',
    description: 'Build, deploy, and manage autonomous AI agents with our full-stack development platform featuring visual workflows, multi-agent orchestration, and enterprise-grade monitoring.',
    shortDescription: 'Full-stack platform for building and managing autonomous AI agents with visual workflows.',
    icon: '🤖',
    popular: true,
    features: [
      'Visual agent builder with drag-and-drop workflows',
      'Multi-agent orchestration and communication protocols',
      'Real-time monitoring and debugging dashboard',
      'Enterprise security with role-based access control',
      'Integration with 100+ APIs and data sources',
      'Automated testing and simulation environments'
    ],
    pricing: { model: 'custom', startingPrice: 15000, currency: 'USD', period: 'month' },
    outcomes: ['Reduce manual workflows by 80%', 'Deploy agents in days not months', 'Enterprise-grade security and compliance'],
    caseStudies: [],
    relatedServices: ['mlops-platform', 'ai-code-generation-platform', 'observability-platform']
  },
  {
    id: 'cloud-finops-automation',
    title: 'Cloud FinOps Automation',
    category: 'cloud',
    description: 'Automated financial operations for cloud infrastructure with real-time cost allocation, budget enforcement, and savings optimization across AWS, Azure, and GCP.',
    shortDescription: 'Automated cloud financial operations with real-time cost allocation and optimization.',
    icon: '☁️',
    popular: true,
    features: [
      'Real-time cost allocation and chargeback automation',
      'Budget enforcement with automated alerts',
      'Commitment optimization (RI, Savings Plans, CUDs)',
      'Multi-cloud unified cost visibility',
      'Anomaly detection with ML-powered forecasting',
      'Executive dashboards with ROI tracking'
    ],
    pricing: { model: 'custom', startingPrice: 8000, currency: 'USD', period: 'month' },
    outcomes: ['20-30% cloud cost reduction', 'Real-time budget visibility', 'Automated governance'],
    caseStudies: [],
    relatedServices: ['kubernetes-cost-optimization', 'disaster-recovery-automation', 'observability-platform']
  },
  {
    id: 'kubernetes-cost-optimization',
    title: 'Kubernetes Cost Optimization',
    category: 'cloud',
    description: 'Specialized cost optimization for Kubernetes clusters across EKS, AKS, GKE, and on-premise with pod-level resource rightsizing and cluster autoscaling.',
    shortDescription: 'Kubernetes-specific cost optimization with pod-level rightsizing and autoscaling.',
    icon: '⚙️',
    popular: false,
    features: [
      'Pod-level resource rightsizing recommendations',
      'Cluster autoscaling optimization',
      'Namespace-level cost allocation and showback',
      'Spot instance integration for batch workloads',
      'HPA/VPA tuning for cost efficiency',
      'Multi-cluster cost governance'
    ],
    pricing: { model: 'custom', startingPrice: 5000, currency: 'USD', period: 'month' },
    outcomes: ['40-60% K8s cost reduction', 'Automated rightsizing', 'Multi-cluster governance'],
    caseStudies: [],
    relatedServices: ['cloud-finops-automation', 'devops-platform-engineering', 'observability-platform']
  },
  {
    id: 'ai-powered-security-operations',
    title: 'AI-Powered Security Operations',
    category: 'security',
    description: 'Next-generation SOC automation with AI-driven threat detection, automated incident response, and predictive security analytics.',
    shortDescription: 'Next-gen SOC automation with AI threat detection and automated incident response.',
    icon: '🛡️',
    popular: true,
    features: [
      'ML-powered anomaly detection across logs and telemetry',
      'Automated incident triage and enrichment',
      'SOAR playbooks with adaptive response',
      'Threat intelligence correlation and hunting',
      'Compliance automation (SOC2, ISO27001, HIPAA)',
      'Executive risk dashboards with business context'
    ],
    pricing: { model: 'custom', startingPrice: 20000, currency: 'USD', period: 'month' },
    outcomes: ['90% faster incident response', '80% reduction in false positives', 'Continuous compliance'],
    caseStudies: ['global-bank-fraud-detection'],
    relatedServices: ['zero-trust-network-architecture', 'quantum-ready-cryptography', 'observability-platform']
  },
  {
    id: 'data-platform-engineering',
    title: 'Data Platform Engineering',
    category: 'data',
    description: 'End-to-end data platform modernization with lakehouse architecture, real-time streaming, and self-service analytics enablement.',
    shortDescription: 'Modern data platform with lakehouse architecture and real-time streaming.',
    icon: '📊',
    popular: false,
    features: [
      'Lakehouse architecture (Delta Lake, Iceberg, Hudi)',
      'Real-time streaming with Kafka/Flink',
      'Self-service BI with governed data mesh',
      'Data quality monitoring and observability',
      'Feature store for ML workloads',
      'Cost-optimized compute orchestration'
    ],
    pricing: { model: 'custom', startingPrice: 12000, currency: 'USD', period: 'month' },
    outcomes: ['Unified data platform', 'Real-time analytics', 'Self-service enablement'],
    caseStudies: [],
    relatedServices: ['mlops-platform', 'observability-platform', 'api-management-platform']
  },
  {
    id: 'devops-platform-engineering',
    title: 'DevOps Platform Engineering',
    category: 'devops',
    description: 'Internal developer platform with golden paths, automated compliance, and self-service infrastructure for high-velocity engineering teams.',
    shortDescription: 'Internal developer platform with golden paths and self-service infrastructure.',
    icon: '🚀',
    popular: true,
    features: [
      'Golden path templates for microservices',
      'Policy-as-code with OPA/Gatekeeper',
      'Self-service infrastructure via Backstage',
      'GitOps deployment with ArgoCD/Flux',
      'Developer experience metrics and optimization',
      'Supply chain security (SLSA, Sigstore)'
    ],
    pricing: { model: 'custom', startingPrice: 15000, currency: 'USD', period: 'month' },
    outcomes: ['50% faster deployments', '99.9% deployment success', 'Developer self-service'],
    caseStudies: [],
    relatedServices: ['observability-platform', 'api-management-platform', 'kubernetes-cost-optimization']
  },
  {
    id: 'mlops-platform',
    title: 'MLOps Platform',
    category: 'ai',
    description: 'Enterprise MLOps platform for model lifecycle management, feature engineering, experiment tracking, and automated ML pipelines.',
    shortDescription: 'Enterprise MLOps for model lifecycle, feature engineering, and automated pipelines.',
    icon: '🧠',
    popular: false,
    features: [
      'Experiment tracking and model registry',
      'Feature store with online/offline serving',
      'Automated model training and validation pipelines',
      'Model monitoring with drift detection',
      'A/B testing and canary deployments',
      'GPU resource optimization and scheduling'
    ],
    pricing: { model: 'custom', startingPrice: 10000, currency: 'USD', period: 'month' },
    outcomes: ['Faster model deployment', 'Automated retraining', 'Production ML reliability'],
    caseStudies: [],
    relatedServices: ['ai-agent-development-platform', 'data-platform-engineering', 'observability-platform']
  },
  {
    id: 'zero-trust-network-architecture',
    title: 'Zero Trust Network Architecture',
    category: 'security',
    description: 'Complete zero trust implementation with identity-aware access, micro-segmentation, and continuous verification for hybrid environments.',
    shortDescription: 'Complete zero trust with identity-aware access and micro-segmentation.',
    icon: '🔐',
    popular: false,
    features: [
      'Identity-aware proxy and access controls',
      'Micro-segmentation with service mesh',
      'Continuous authentication and authorization',
      'Device trust and posture assessment',
      'Encrypted traffic inspection at scale',
      'Policy-as-code for network segmentation'
    ],
    pricing: { model: 'custom', startingPrice: 18000, currency: 'USD', period: 'month' },
    outcomes: ['Zero trust maturity', 'Reduced blast radius', 'Continuous verification'],
    caseStudies: [],
    relatedServices: ['ai-powered-security-operations', 'quantum-ready-cryptography', 'api-management-platform']
  },
  {
    id: 'observability-platform',
    title: 'Observability Platform',
    category: 'devops',
    description: 'Unified observability with metrics, logs, traces, and profiling in a single platform with AI-powered anomaly detection and root cause analysis.',
    shortDescription: 'Unified observability with AI-powered anomaly detection and root cause analysis.',
    icon: '📈',
    popular: false,
    features: [
      'Unified metrics, logs, traces, and profiles',
      'AI-powered anomaly detection and correlation',
      'Automated root cause analysis',
      'Service-level objectives (SLO) management',
      'Distributed tracing with eBPF instrumentation',
      'Cost-optimized data retention and querying'
    ],
    pricing: { model: 'custom', startingPrice: 8000, currency: 'USD', period: 'month' },
    outcomes: ['MTTR reduction by 70%', 'Full-stack visibility', 'Proactive incident detection'],
    caseStudies: [],
    relatedServices: ['devops-platform-engineering', 'api-management-platform', 'mlops-platform']
  },
  {
    id: 'api-management-platform',
    title: 'API Management Platform',
    category: 'devops',
    description: 'Full lifecycle API management with gateway, developer portal, analytics, monetization, and governance for internal and external APIs.',
    shortDescription: 'Full lifecycle API management with gateway, portal, analytics, and monetization.',
    icon: '🔗',
    popular: false,
    features: [
      'High-performance API gateway with rate limiting',
      'Developer portal with interactive documentation',
      'API analytics and usage quotas',
      'Monetization with billing integration',
      'GraphQL federation and REST management',
      'Security policies (OAuth, mTLS, WAF)'
    ],
    pricing: { model: 'custom', startingPrice: 6000, currency: 'USD', period: 'month' },
    outcomes: ['API governance at scale', 'Developer self-service', 'Revenue from API products'],
    caseStudies: [],
    relatedServices: ['devops-platform-engineering', 'observability-platform', 'zero-trust-network-architecture']
  },
  {
    id: 'disaster-recovery-automation',
    title: 'Disaster Recovery Automation',
    category: 'cloud',
    description: 'Automated disaster recovery with RPO/RTO guarantees, chaos engineering integration, and compliance-ready recovery testing.',
    shortDescription: 'Automated DR with RPO/RTO guarantees and chaos engineering integration.',
    icon: '🔄',
    popular: false,
    features: [
      'Automated failover with health checks',
      'RPO/RTO measurement and reporting',
      'Chaos engineering integration (Litmus, Chaos Mesh)',
      'Compliance-ready recovery documentation',
      'Cross-region and cross-cloud replication',
      'Automated recovery testing schedules'
    ],
    pricing: { model: 'custom', startingPrice: 7000, currency: 'USD', period: 'month' },
    outcomes: ['RTO < 15 minutes', 'RPO < 1 minute', 'Automated compliance reporting'],
    caseStudies: [],
    relatedServices: ['cloud-finops-automation', 'devops-platform-engineering', 'observability-platform']
  },
  {
    id: 'ai-code-generation-platform',
    title: 'AI Code Generation Platform',
    category: 'ai',
    description: 'Enterprise AI coding assistant with custom model fine-tuning, security scanning, and integration with IDEs and CI/CD pipelines.',
    shortDescription: 'Enterprise AI coding assistant with custom fine-tuning and security scanning.',
    icon: '💻',
    popular: true,
    features: [
      'Custom model fine-tuning on private codebase',
      'Security vulnerability scanning in real-time',
      'IDE extensions (VS Code, JetBrains, Vim)',
      'CI/CD integration for automated reviews',
      'Code modernization and refactoring agents',
      'Compliance and license checking'
    ],
    pricing: { model: 'custom', startingPrice: 12000, currency: 'USD', period: 'month' },
    outcomes: ['40% faster development', 'Reduced security vulnerabilities', 'Consistent code quality'],
    caseStudies: [],
    relatedServices: ['ai-agent-development-platform', 'mlops-platform', 'devops-platform-engineering']
  },
  {
    id: 'digital-twin-platform',
    title: 'Digital Twin Platform',
    category: 'iot',
    description: 'Industrial digital twin platform for manufacturing, energy, and infrastructure with real-time simulation and predictive analytics.',
    shortDescription: 'Industrial digital twin platform with real-time simulation and predictive analytics.',
    icon: '🏭',
    popular: false,
    features: [
      'High-fidelity physics-based simulation',
      'Real-time IoT data ingestion at scale',
      'Predictive maintenance with digital twins',
      'Scenario planning and what-if analysis',
      'Integration with historian systems (OSIsoft, Wonderware)',
      'Edge computing for low-latency control'
    ],
    pricing: { model: 'custom', startingPrice: 25000, currency: 'USD', period: 'month' },
    outcomes: ['Reduced unplanned downtime', 'Optimized asset performance', 'Faster time-to-insight'],
    caseStudies: ['manufacturing-predictive-maintenance'],
    relatedServices: ['edge-computing-platform', 'data-platform-engineering', 'ai-powered-security-operations']
  },
  {
    id: 'blockchain-enterprise-solutions',
    title: 'Blockchain Enterprise Solutions',
    category: 'blockchain',
    description: 'Permissioned blockchain platforms for supply chain, identity, and financial services with enterprise governance and compliance.',
    shortDescription: 'Permissioned blockchain for supply chain, identity, and financial services.',
    icon: '⛓️',
    popular: false,
    features: [
      'Hyperledger Fabric and Besu deployment',
      'Smart contract development and auditing',
      'Tokenization platforms for assets',
      'Decentralized identity (DID/VC) solutions',
      'Cross-chain interoperability',
      'Regulatory compliance frameworks'
    ],
    pricing: { model: 'custom', startingPrice: 20000, currency: 'USD', period: 'month' },
    outcomes: ['Transparent supply chains', 'Automated compliance', 'New revenue models'],
    caseStudies: [],
    relatedServices: ['zero-trust-network-architecture', 'api-management-platform', 'data-platform-engineering']
  },
  {
    id: 'edge-computing-platform',
    title: 'Edge Computing Platform',
    category: 'iot',
    description: 'Distributed edge computing platform for low-latency applications with device management, container orchestration, and offline capabilities.',
    shortDescription: 'Distributed edge computing with device management and offline capabilities.',
    icon: '📡',
    popular: false,
    features: [
      'Kubernetes at the edge (K3s, OpenShift AI)',
      'Device fleet management and OTA updates',
      'Offline-first application patterns',
      'Edge AI inference with model optimization',
      '5G/MEC integration for ultra-low latency',
      'Secure boot and hardware root of trust'
    ],
    pricing: { model: 'custom', startingPrice: 15000, currency: 'USD', period: 'month' },
    outcomes: ['Sub-millisecond latency', 'Offline resilience', 'Massive device scale'],
    caseStudies: [],
    relatedServices: ['digital-twin-platform', 'iot-platform', 'observability-platform']
  },
  {
    id: 'quantum-ready-cryptography',
    title: 'Quantum-Ready Cryptography',
    category: 'security',
    description: 'Post-quantum cryptography migration with hybrid algorithms, crypto-agility frameworks, and NIST-standardized algorithms.',
    shortDescription: 'Post-quantum cryptography migration with hybrid algorithms and crypto-agility.',
    icon: '🔮',
    popular: false,
    features: [
      'Hybrid classical/post-quantum TLS',
      'Crypto-agility framework for algorithm rotation',
      'NIST PQC standards (Kyber, Dilithium, SPHINCS+)',
      'HSM integration for key management',
      'Certificate lifecycle automation',
      'Compliance with CNSA 2.0 / CNSA 2.1'
    ],
    pricing: { model: 'custom', startingPrice: 10000, currency: 'USD', period: 'month' },
    outcomes: ['Future-proof encryption', 'Regulatory compliance', 'Crypto-agility readiness'],
    caseStudies: [],
    relatedServices: ['ai-powered-security-operations', 'zero-trust-network-architecture', 'blockchain-enterprise-solutions']
  },
  {
    id: 'sustainability-carbon-accounting',
    title: 'Sustainability & Carbon Accounting',
    category: 'analytics',
    description: 'Enterprise carbon accounting platform with Scope 1/2/3 emissions tracking, science-based targets, and automated ESG reporting.',
    shortDescription: 'Carbon accounting with Scope 1/2/3 tracking and automated ESG reporting.',
    icon: '🌱',
    popular: false,
    features: [
      'Scope 1/2/3 emissions calculation engine',
      'Science-based target setting and tracking',
      'Automated ESG report generation (GRI, SASB, TCFD)',
      'Supplier emissions data collection portal',
      'Renewable energy certificate management',
      'Carbon offset marketplace integration'
    ],
    pricing: { model: 'custom', startingPrice: 8000, currency: 'USD', period: 'month' },
    outcomes: ['Net-zero roadmap', 'Regulatory compliance', 'Stakeholder reporting'],
    caseStudies: ['energy-grid-optimization'],
    relatedServices: ['data-platform-engineering', 'observability-platform', 'api-management-platform']
  }
];

let added = 0;
let skipped = 0;

for (const service of newServices) {
  if (existingIds.has(service.id)) {
    console.log(`Skipping ${service.id} - already exists`);
    skipped++;
  } else {
    data.push(service);
    console.log(`Added ${service.id}`);
    added++;
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`\nDone! Added ${added} services, skipped ${skipped}. Total: ${data.length}`);