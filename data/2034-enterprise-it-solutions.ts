export interface EnterpriseITSolution2034 {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly?: number;
    currency: string;
  };
  features: string[];
  link: string;
  popular: boolean;
  icon: string;
  color: string;
  textColor?: string;
  launchDate?: string;
  rating?: number;
}

export const enterpriseITSolutions: EnterpriseITSolution2034[] = [
  {
    id: 'managed-kubernetes-ha-2034',
    name: 'Managed Kubernetes HA',
    tagline: 'Production clusters with HA control plane, backups, and SLOs',
    description: 'We provision, harden, and operate Kubernetes clusters with opinionated defaults, SLOs, and 24/7 monitoring. Includes autoscaling, GitOps, and cost controls.',
    category: 'Cloud & Infrastructure',
    price: { monthly: 1999, yearly: 19990, currency: 'USD' },
    features: [
      'HA control plane and node pools',
      'Cluster backups and DR runbooks',
      'GitOps with ArgoCD/Flux',
      'HPA/VPA autoscaling and rightsizing',
      'Observability (OTel, Prometheus, Grafana)'
    ],
    link: 'https://ziontechgroup.com/services',
    popular: true,
    icon: '☸️',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-300',
    launchDate: '2025-01-15',
    rating: 4.8
  },
  {
    id: 'sre-on-call-automation-2034',
    name: 'SRE On-Call Automation',
    tagline: 'Reduce pages with golden signals and error budgets',
    description: 'We implement SLI/SLO with error budgets, auto-remediation playbooks, and incident tooling integration to reduce MTTR and alert fatigue.',
    category: 'Reliability & SRE',
    price: { monthly: 1499, yearly: 14990, currency: 'USD' },
    features: [
      'SLI/SLO/Error budget setup',
      'Auto-remediation workflows',
      'Incident comms & postmortems',
      'Runbooks and service catalog',
      'PagerDuty/Opsgenie integration'
    ],
    link: 'https://ziontechgroup.com/services',
    popular: true,
    icon: '📟',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    launchDate: '2025-02-01',
    rating: 4.7
  },
  {
    id: 'zero-trust-access-2034',
    name: 'Zero Trust Access (ZTNA)',
    tagline: 'Beyond VPN: identity- and device-aware access',
    description: 'Design and rollout of zero trust access using Cloudflare/Zitadel/Okta policies, device posture, and short-lived credentials.',
    category: 'Security',
    price: { monthly: 1299, yearly: 12990, currency: 'USD' },
    features: [
      'SSO/SAML/OIDC integration',
      'Per-app and per-API policies',
      'Device posture and MFA',
      'Just-in-time access (JIT)',
      'Audit trails and alerts'
    ],
    link: 'https://ziontechgroup.com/services',
    popular: false,
    icon: '🛡️',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-300',
    launchDate: '2025-02-10',
    rating: 4.6
  }
];