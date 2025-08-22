import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AutonomousItOperationsCenter() {
	return (
		<ServiceLanding
			title="Autonomous IT Operations Center"
			description="Self-healing IT operations with AI-powered incident detection, runbook automation, remediation, and SLO governance across hybrid cloud."
			subtitle="AI-powered, self-healing IT operations"
			pricePerMonthUSD={1299}
			implementationWeeks="3-6 weeks"
			roiNote="Cut MTTR by 50–70% and reduce tickets by 30–40%"
			features={[
				"AIOps anomaly detection",
				"Automated runbooks and remediation",
				"SLO burn-rate monitoring",
				"ChatOps and escalation workflows",
				"Cloud/on-prem integrations",
				"Compliance and audit trails"
			]}
			industries={["Enterprise IT", "SRE/Platform", "Managed Services"]}
			canonical="https://ziontechgroup.com/autonomous-it-operations-center"
		/>
	);
}