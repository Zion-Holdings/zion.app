import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AutonomousITOperationsCenter() {
	return (
		<ServiceLanding
			title="Autonomous IT Operations Center"
			description="Self-healing, policy-driven IT operations with AI agents that detect, diagnose, and resolve incidents across your stack."
			subtitle="Reduce MTTR and toil with autonomous ops"
			pricePerMonthUSD={3999}
			implementationWeeks="Implementation: 4-8 weeks"
			roiNote="50-80% reduction in incident handling time"
			features={[
				"Anomaly detection and correlation",
				"Automated runbooks and remediation",
				"Change risk analysis and approvals",
				"SLOs, error budgets, and guardrails",
				"Incident insights and postmortems",
				"Integrations: Datadog, New Relic, Splunk, PagerDuty"
			]}
			industries={["Enterprise IT", "SaaS", "Telecom", "Finance"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/autonomous-it-operations-center"
		/>
	);
}