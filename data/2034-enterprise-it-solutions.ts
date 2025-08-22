export interface EnterpriseITSolution {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing?: {
    starter?: string;
    professional?: string;
    enterprise?: string;
  };
  features: string[];
  link: string;
  launchDate?: string;
  rating?: number;
}

export const enterpriseITSolutions: EnterpriseITSolution[] = [
  {
    id: 'zero-trust-network-architecture',
    name: 'Zero Trust Network Architecture (ZTNA)',
    description: 'Design and implementation of zero-trust access with continuous verification, network segmentation, and least-privilege policies.',
    category: 'Enterprise IT',
    pricing: {
      starter: '$6,000 one-time + $1,500/mo',
      professional: '$15,000 one-time + $3,500/mo',
      enterprise: 'Custom quote'
    },
    features: [
      'Identity-aware access controls',
      'Micro-segmentation and policy enforcement',
      'SSO/SCIM integration (Okta/Auth0)',
      'SIEM/SOAR integrations',
      'Compliance reporting (SOC2, ISO)'
    ],
    link: 'https://ziontechgroup.com/zero-trust-network-architecture/',
    launchDate: '2024-11-01',
    rating: 4.9
  },
  {
    id: 'managed-postgres-ha',
    name: 'Managed Postgres HA',
    description: 'High-availability PostgreSQL with automated backups, failover, observability, and performance tuning.',
    category: 'Databases & Platform',
    pricing: {
      starter: '$1,200/mo',
      professional: '$2,400/mo',
      enterprise: 'Custom quote'
    },
    features: [
      'Patroni/pg_auto_failover or cloud-native HA',
      'Automated PITR backups and retention policies',
      'Query and index optimization',
      'SLA-backed SRE on-call',
      'Dashboards and alerts'
    ],
    link: 'https://ziontechgroup.com/managed-postgres-ha/',
    launchDate: '2025-01-10',
    rating: 4.8
  },
  {
    id: 'edge-computing-orchestration',
    name: 'Edge Computing Orchestration',
    description: 'Deploy and manage applications across edge regions with GitOps, canary rollouts, and policy controls.',
    category: 'Cloud & Edge',
    pricing: {
      starter: '$2,000/mo',
      professional: '$5,000/mo',
      enterprise: 'Custom quote'
    },
    features: [
      'Multi-region blue/green and canary',
      'Traffic steering and latency-based routing',
      'Config and secret management',
      'Observability and budgets',
      'Security baselines and hardening'
    ],
    link: 'https://ziontechgroup.com/edge-computing-orchestration-platform/',
    launchDate: '2024-09-15',
    rating: 4.7
  },
  {
    id: 'ai-powered-devops-platform',
    name: 'AI-Powered DevOps Platform',
    description: 'Automation of CI/CD, test intelligence, release management, and incident response using AI copilots.',
    category: 'DevOps & Platform',
    pricing: {
      starter: '$1,500/mo',
      professional: '$3,000/mo',
      enterprise: 'Custom quote'
    },
    features: [
      'Self-healing pipelines',
      'Automated test selection and flake detection',
      'Change risk scoring and approvals',
      'Incident triage with runbooks',
      'SLO/SLA tracking'
    ],
    link: 'https://ziontechgroup.com/ai-powered-devops-platform/',
    launchDate: '2025-02-01',
    rating: 4.8
  },
  {
    id: 'quantum-secure-cloud-infrastructure',
    name: 'Quantum-Secure Cloud Infrastructure',
    description: 'Hardened cloud baseline with PQC-ready cryptography, vaulting, and secure-by-default patterns.',
    category: 'Security & Compliance',
    pricing: {
      starter: '$3,500/mo',
      professional: '$7,500/mo',
      enterprise: 'Custom quote'
    },
    features: [
      'Key rotation and secrets management',
      'mTLS, TLS 1.3, and posture checks',
      'IAM guardrails and policy-as-code',
      'Asset inventory and drift detection',
      'Compliance mappings (SOC2, HIPAA, PCI)'
    ],
    link: 'https://ziontechgroup.com/quantum-secure-cloud-infrastructure/',
    launchDate: '2024-12-12',
    rating: 4.9
  }
];