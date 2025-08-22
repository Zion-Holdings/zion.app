import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiPoweredSpaceTechnology() {
	return (
		<ServiceLanding
			title="AI-Powered Space Technology"
			description="Apply AI to mission planning, anomaly detection, and autonomous operations for satellites and space systems."
			subtitle="Smarter missions, safer operations"
			pricePerMonthUSD={14999}
			implementationWeeks="8-16 weeks"
			roiNote="Increase mission reliability and reduce operating costs"
			features={[
				"Autonomous fault detection and recovery",
				"Trajectory optimization and scheduling",
				"Telemetry anomaly detection",
				"Ground station automation",
				"Digital twins and simulation",
				"Standards-compliant data pipelines"
			]}
			industries={["Space", "Defense", "Research"]}
			canonical="https://ziontechgroup.com/ai-powered-space-technology"
		/>
	);
}