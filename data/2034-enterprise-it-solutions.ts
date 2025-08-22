export type EnterpriseSolution = {
	id: string;
	name: string;
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity';
	tagline: string;
	description: string;
	features: string[];
	pricing: {
		starter: string;
		professional?: string;
		enterprise?: string;
	};
	marketSize?: string;
	customerCount?: number;
	demo?: string;
	contact?: string;
	status?: 'Live' | 'Beta' | 'GA';
};

export const enterpriseITSolutions = [
  {
    id: 'managed-kubernetes-eks-aks-gke',
    name: 'Managed Kubernetes (EKS/AKS/GKE)',
    category: 'Enterprise IT',
    description: 'Production-grade Kubernetes management with GitOps, autoscaling, cost controls, and SLOs across AWS EKS, Azure AKS, and Google GKE.',
    pricing: { monthly: 3500 },
    features: [
      'Cluster provisioning and upgrades',
      'GitOps (Argo CD/Flux) and policy as code (OPA/Gatekeeper)',
      'Autoscaling, HPA/VPA, and PodDisruptionBudgets',
      'Service mesh (Istio/Linkerd) and mTLS',
      'Observability stack (Prometheus, Grafana, Loki, Tempo)',
      'Backup and DR runbooks with tested recovery',
      '24x7 on-call SRE with runbooks'
    ],
    link: 'https://ziontechgroup.com/managed-kubernetes',
    launchDate: '2025-10-01',
    rating: 4.8
  },
  {
    id: 'cloud-landing-zone',
    name: 'Cloud Landing Zone (AWS/Azure/GCP)',
    category: 'Enterprise IT',
    description: 'Secure multi-account landing zone with identity, networking, guardrails, and automated governance.',
    pricing: { monthly: 2500 },
    features: [
      'Multi-account structure and baseline guardrails',
      'SSO integration (Okta/Auth0/Entra)',
      'Network hub-and-spoke with Transit Gateway/VTIs',
      'CIS/NIST-aligned controls and audit readiness',
      'Automated account vending and tagging strategy'
    ],
    link: 'https://ziontechgroup.com/cloud-landing-zone',
    launchDate: '2025-07-15',
    rating: 4.7
  },
  {
    id: 'zero-trust-network-architecture',
    name: 'Zero Trust Network Architecture',
    category: 'Enterprise IT',
    description: 'Strong identity, device posture, and context-aware access using BeyondCorp principles.',
    pricing: { monthly: 1800 },
    features: [
      'IdP/SSO integration and MFA',
      'Device posture checks and conditional access',
      'Segmented access and just-in-time elevation',
      'Privileged access management and auditing'
    ],
    link: 'https://ziontechgroup.com/zero-trust-network-architecture',
    launchDate: '2025-08-20',
    rating: 4.7
  },
  {
    id: 'data-warehouse-modernization',
    name: 'Data Warehouse Modernization',
    category: 'Data & Analytics',
    description: 'Snowflake/BigQuery/Redshift modernization with ELT, governance, and cost optimization.',
    pricing: { monthly: 4200 },
    features: [
      'Modern ELT with dbt and orchestration',
      'Catalog and lineage with open metadata',
      'Data contracts and quality SLAs',
      'Cost guardrails and workload management'
    ],
    link: 'https://ziontechgroup.com/data-warehouse-modernization',
    launchDate: '2025-09-10',
    rating: 4.8
  },
  {
    id: 'managed-postgres-ha-enterprise',
    name: 'Managed Postgres HA (Enterprise)',
    category: 'Enterprise IT',
    description: 'Production Postgres with HA, PITR, tuning, and SRE-backed operations.',
    pricing: { monthly: 2200 },
    features: [
      'High availability and failover',
      'Backups with PITR and verification',
      'Performance tuning and connection pooling',
      'Security hardening and auditing'
    ],
    link: 'https://ziontechgroup.com/managed-postgres-ha',
    launchDate: '2025-06-01',
    rating: 4.8
  },
  {
    id: 'observability-platform',
    name: 'Unified Observability Platform',
    category: 'DevOps & Automation',
    description: 'Metrics, logs, traces, and user analytics with SLOs and golden signals.',
    pricing: { monthly: 1600 },
    features: [
      'Prometheus/Grafana and OpenTelemetry pipelines',
      'Distributed tracing (Tempo/Jaeger) and log aggregation (Loki/ELK)',
      'SLO/error budget tracking and alerting',
      'Runbooks, on-call, and incident workflows'
    ],
    link: 'https://ziontechgroup.com/observability-platform',
    launchDate: '2025-05-12',
    rating: 4.6
  },
  {
    id: 'finops-cloud-cost-management',
    name: 'FinOps Cloud Cost Management',
    category: 'Cloud Services',
    description: 'Showback/chargeback, commitment management, and engineering guardrails for lower cloud spend.',
    pricing: { monthly: 1400 },
    features: [
      'Cost visibility and tagging posture',
      'Savings Plans/RI strategy and automation',
      'Anomaly detection and budget alerts',
      'Right-sizing and idle resource cleanup'
    ],
    link: 'https://ziontechgroup.com/finops',
    launchDate: '2025-04-28',
    rating: 4.6
  },
  {
    id: 'sso-scim-enterprise',
    name: 'Enterprise SSO & SCIM',
    category: 'Enterprise Security',
    description: 'Single sign-on and automated user lifecycle provisioning with SCIM.',
    pricing: { monthly: 1200 },
    features: [
      'SAML/OIDC integrations',
      'SCIM provisioning and deprovisioning',
      'Role-based access control and audit',
      'Just-in-time user provisioning'
    ],
    link: 'https://ziontechgroup.com/enterprise-sso-scim',
    launchDate: '2025-03-14',
    rating: 4.7
  }
];