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

export const enterpriseITSolutions = [
	{
		name: 'Zero-Trust Network Architecture Assessment',
		description: 'Comprehensive ZTNA gap analysis, reference architectures, and phased rollout plan with policy and identity mapping.',
		category: 'Enterprise IT',
		pricing: { monthly: 4500 },
		features: [
			'Identity- and context-based access control design',
			'Micro-segmentation blueprint and enforcement plan',
			'Okta/AAD conditional access policy hardening',
			'Pilot rollout with success metrics'
		]
	},
	{
		name: 'Autonomous IT Operations Center',
		description: 'AIOps with incident auto-triage, runbook automation, and SLO guardrails for self-healing infrastructure.',
		category: 'Enterprise IT',
		pricing: { monthly: 6500 },
		features: [
			'24/7 incident auto-triage and routing',
			'Automated remediation via runbooks',
			'Error budget SLO enforcement',
			'Post-incident AI summaries'
		]
	},
	{
		name: 'Cloud Cost Optimization & FinOps',
		description: 'Multi-cloud cost visibility, anomaly detection, and rightsizing with savings targets and reporting.',
		category: 'Enterprise IT',
		pricing: { monthly: 3000 },
		features: [
			'Cost allocation and tagging strategy',
			'Anomaly detection and alerting',
			'Idle/over-provisioned resource cleanup',
			'Quarterly savings reports'
		]
	},
	{
		name: 'Enterprise Observability Platform',
		description: 'Unified logs, metrics, traces and profiling with golden signals and on-call health dashboards.',
		category: 'Enterprise IT',
		pricing: { monthly: 3800 },
		features: [
			'OpenTelemetry-based ingestion',
			'Golden signals dashboards',
			'Proactive SLO and error budget alerts',
			'CI/CD and on-call integrations'
		]
	},
	{
		name: 'Secure SDLC & Supply Chain Hardening',
		description: 'SBOM generation, dependency risk scanning, signed builds, and policy gates in CI.',
		category: 'Enterprise IT',
		pricing: { monthly: 4200 },
		features: [
			'SBOM and vulnerability reporting',
			'CI policy gates (SAST/DAST/IAST)',
			'Artifact signing and provenance (SLSA)',
			'Developer education and playbooks'
		]
	},
	{
		name: 'Managed Postgres HA (Enterprise)',
		description: 'SRE-backed HA Postgres with PITR, automated failover, and performance tuning for mission-critical apps.',
		category: 'Enterprise IT',
		pricing: { monthly: 5200 },
		features: [
			'Failover and replication management',
			'Point-in-time recovery and backups',
			'Performance tuning and capacity planning',
			'24/7 monitoring and on-call'
		]
	}
];