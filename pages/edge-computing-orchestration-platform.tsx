import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function EdgeComputingOrchestrationPlatform() {
	return (
		<ServiceLanding
			title="Edge Computing Orchestration Platform"
			description="Deploy, manage, and observe applications across thousands of distributed edge nodes with policy and intent-based automation."
			subtitle="Operate at the edge with confidence"
			pricePerMonthUSD={5999}
			implementationWeeks="Implementation: 6-10 weeks"
			roiNote="Lower latency, bandwidth costs, and outages at the edge"
			features={[
				"Zero-touch provisioning and updates",
				"GitOps and policy-as-code orchestration",
				"Secure mesh networking and secret management",
				"Health checks, rollbacks, and A/B",
				"Edge observability and audit trails",
				"Integrations: K3s, K8s, Nomad, Cloudflare, Akamai"
			]}
			industries={["Retail", "Telecom", "Manufacturing", "Media"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/edge-computing-orchestration-platform"
		/>
	);
}