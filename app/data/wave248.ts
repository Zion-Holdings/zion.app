import { Service } from './serviceTypes';

// =============================================================================
// Wave 248 — Real Cutting-Edge AI/IT Services (2025-2026)
// Research by OWL Agent — 2026-06-11
// =============================================================================

// AI Services — Real cutting-edge AI companies
export const wave248AiServices: Service[] = [
  {
    id: 'arthur-ai-model-monitoring',
    title: 'Arthur AI — Model Monitoring & LLM Observability',
    description:
      'Enterprise-grade AI model monitoring platform that tracks model performance, detects data drift, monitors LLM outputs for hallucinations, and provides real-time alerts for production AI systems. Arthur AI helps teams ensure their models remain accurate, fair, and reliable at scale.',
    features: [
      'Real-time model performance monitoring with automated drift detection for both traditional ML and LLM deployments',
      'LLM-specific observability including hallucination detection, output quality scoring, and prompt-response analysis',
      'Bias and fairness monitoring across demographic groups with automated compliance reporting for AI regulations',
      'Custom alerting rules with Slack, PagerDuty, and email integrations for immediate incident response',
      'Model comparison dashboards for A/B testing, champion-challenger analysis, and rollback decision support',
      'API-first architecture that integrates with any ML stack including AWS SageMaker, Databricks, and custom deployments',
    ],
    benefits: [
      'Reduce model-related incidents by 80% with proactive drift detection before failures impact users',
      'Ensure AI compliance with automated fairness auditing and regulatory reporting for EU AI Act and NIST frameworks',
      'Accelerate model deployment cycles with confidence that production monitoring catches issues automatically',
      'Improve LLM output quality with continuous hallucination detection and response accuracy tracking',
      'Scale AI operations without proportional increase in ML engineering headcount through automation',
    ],
    pricing: { basic: 'Pro: $500/mo (5 models, basic alerts)', pro: 'Business: $2K/mo (25 models, advanced analytics)', enterprise: 'Enterprise: Custom (unlimited models, SLA, dedicated support)' },
    contactInfo: { website: 'https://www.arthur.ai', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔍',
    href: '/services/arthur-ai-model-monitoring',
    popular: true,
    category: 'ai-infrastructure',
    industry: 'AI/ML',
    stage: 'published',
  },
  {
    id: 'galileo-ai-llm-evaluation',
    title: 'Galileo AI — LLM Evaluation & GenAI Quality Platform',
    description:
      'Specialized LLM evaluation and Generative AI quality platform that helps enterprises measure, monitor, and improve the reliability of production AI applications. Galileo provides automated evaluation metrics, hallucination detection, and rapid iteration tools for teams building with large language models.',
    features: [
      'Automated LLM evaluation metrics including faithfulness, relevance, coherence, and safety scoring',
      'Hallucination detection with explainable scores that identify specific claims lacking grounding in source material',
      'Rapid experimentation environment for testing prompts, models, and RAG configurations with side-by-side comparison',
      'Production monitoring dashboards tracking LLM quality metrics over time with drift detection and alerting',
      'Custom evaluation rubrics that align with business-specific quality criteria and domain requirements',
      'API and SDK integrations for embedding evaluation into CI/CD pipelines and automated testing workflows',
    ],
    benefits: [
      'Reduce LLM quality issues by 90% with automated evaluation that catches problems before users are impacted',
      'Accelerate GenAI product development with rapid experimentation tools that reduce iteration cycles from days to hours',
      'Build user trust in AI applications with transparent quality metrics and hallucination detection',
      'Standardize LLM quality across teams with shared evaluation rubrics and automated scoring',
      'Reduce manual QA costs by automating the evaluation of LLM outputs at scale',
    ],
    pricing: { basic: 'Developer: Free tier (1K evaluations/mo)', pro: 'Team: $500+/mo (100K evaluations, custom rubrics)', enterprise: 'Enterprise: Custom (unlimited, production monitoring, SSO)' },
    contactInfo: { website: 'https://www.rungalileo.io', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🧪',
    href: '/services/galileo-ai-llm-evaluation',
    category: 'llm-evaluation',
    industry: 'AI/ML',
    stage: 'published',
  },
  {
    id: 'credolabs-responsible-ai-governance',
    title: 'Credo AI — Responsible AI Governance Platform',
    description:
      'Enterprise governance platform for responsible AI that helps organizations manage AI risk, ensure regulatory compliance, and build trustworthy AI systems. Credo AI provides end-to-end AI governance from inventory and risk assessment through monitoring and audit reporting.',
    features: [
      'AI system inventory and risk assessment with automated classification based on impact, data sensitivity, and regulatory scope',
      'Policy enforcement engine that maps AI systems to applicable regulations (EU AI Act, NIST AI RMF, sector-specific rules)',
      'Bias and fairness testing with automated demographic analysis and disparate impact measurement across protected classes',
      'Audit trail and documentation generator for regulatory submissions, internal audits, and stakeholder transparency reports',
      'Real-time monitoring dashboards for responsible AI metrics including fairness, transparency, and accountability indicators',
      'Integration with MLOps and model registry platforms for automated governance workflows throughout the AI lifecycle',
    ],
    benefits: [
      'Achieve AI regulatory compliance 3x faster with automated policy mapping and documentation generation',
      'Reduce AI-related legal and reputational risk with proactive bias detection and fairness monitoring',
      'Build stakeholder trust with transparent AI governance documentation and audit-ready reporting',
      'Scale AI governance without proportional headcount increase through automation and policy-as-code',
      'Future-proof AI investments against evolving global AI regulations with adaptable governance frameworks',
    ],
    pricing: { basic: 'Starter: $1K/mo (up to 10 AI systems)', pro: 'Growth: $5K+/mo (50 systems, full policy engine)', enterprise: 'Enterprise: Custom (unlimited systems, dedicated CSM)' },
    contactInfo: { website: 'https://www.credo.ai', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚖️',
    href: '/services/credolabs-responsible-ai-governance',
    category: 'responsible-ai',
    industry: 'AI Governance',
    stage: 'published',
  },
];

// IT Services — Real cutting-edge IT/AI infrastructure companies
export const wave248ItServices: Service[] = [
  {
    id: 'protect-ai-ml-security',
    title: 'Protect AI — AI/ML Model Security Platform',
    description:
      'Purpose-built AI security platform that protects machine learning models and AI systems from adversarial attacks, model theft, data poisoning, and supply chain threats. Protect AI provides comprehensive security scanning for the ML/AI lifecycle from development through production deployment.',
    features: [
      'ML model vulnerability scanning that identifies adversarial attack vectors, model inversion risks, and extraction vulnerabilities',
      'AI supply chain security scanning for poisoned training data, backdoored models, and compromised dependencies',
      'Real-time production monitoring for adversarial inputs, prompt injection attacks, and model exploitation attempts',
      'Model watermarking and fingerprinting to detect unauthorized model copying and intellectual property theft',
      'Compliance automation for AI security frameworks including NIST AI RMF, EU AI Act, and industry-specific regulations',
      'Integration with MLOps platforms including MLflow, Kubeflow, and cloud-native AI services for seamless security embedding',
    ],
    benefits: [
      'Prevent costly AI security incidents with proactive vulnerability scanning before models reach production',
      'Protect intellectual property with model watermarking that detects unauthorized copying and deployment',
      'Meet emerging AI security regulations with automated compliance reporting and audit trail generation',
      'Secure the AI supply chain against data poisoning and backdoor attacks that compromise model integrity',
      'Enable confident AI deployment with continuous security monitoring that catches threats in real-time',
    ],
    pricing: { basic: 'Developer: Free tier (limited scans, open-source tools)', pro: 'Team: $2K+/mo (full scanning, CI/CD integration)', enterprise: 'Enterprise: Custom (production monitoring, SLA, dedicated support)' },
    contactInfo: { website: 'https://protectai.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛡️',
    href: '/services/protect-ai-ml-security',
    popular: true,
    category: 'ai-security',
    industry: 'Cybersecurity',
    stage: 'published',
  },
  {
    id: 'scale-ai-data-labeling-platform',
    title: 'Scale AI — Data Labeling & Annotation Platform',
    description:
      'Industry-leading data labeling platform that provides high-quality training data for AI models across text, image, video, and 3D sensor data. Scale AI combines human expert annotators with AI-assisted tools to deliver production-grade labeled data at scale for autonomous vehicles, LLMs, and computer vision.',
    features: [
      'Multi-modal data annotation supporting text, image, video, LiDAR, radar, and sensor fusion data types',
      'AI-assisted labeling with pre-annotation models that accelerate human annotators by 5-10x',
      'Expert annotator workforce with domain specialists in healthcare, finance, legal, and autonomous driving',
      'Quality assurance with multi-stage review, inter-annotator agreement scoring, and automated error detection',
      'RLHF (Reinforcement Learning from Human Feedback) pipelines specifically designed for LLM fine-tuning',
      'Enterprise-grade security with SOC 2 Type II compliance, data encryption, and configurable data residency',
    ],
    benefits: [
      'Reduce data labeling costs by 50% while improving quality through AI-assisted annotation workflows',
      'Accelerate AI model development timelines from months to weeks with rapid, high-quality training data delivery',
      'Access specialized annotators for niche domains like medical imaging, legal document analysis, and autonomous driving',
      'Improve model accuracy with consistently labeled data that meets rigorous quality standards',
      'Scale labeling operations from thousands to millions of annotations without managing an in-house labeling team',
    ],
    pricing: { basic: 'Starter: Pay-per-task (self-serve platform)', pro: 'Pro: $10K+/mo (dedicated team, QA, project management)', enterprise: 'Enterprise: Custom (SLAs, security, custom workflows)' },
    contactInfo: { website: 'https://scale.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🏷️',
    href: '/services/scale-ai-data-labeling-platform',
    category: 'ai-data-labeling',
    industry: 'AI/ML',
    stage: 'published',
  },
];

// Micro-SaaS placeholder (empty — all 5 services are AI/IT enterprise)
export const wave248MicroSaasServices: Service[] = [];
