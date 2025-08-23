import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function QuantumSecureCloudInfrastructure() {
	return (
		<ServiceLanding
			title="Quantum-Secure Cloud Infrastructure"
			description="Future-proof your cloud with PQC, encrypted networking, and key management designed to resist quantum attacks."
			subtitle="Protect data beyond the quantum horizon"
			pricePerMonthUSD={5999}
			implementationWeeks="6-10 weeks"
			roiNote="Meet emerging PQC compliance and safeguard long-lived data"
			features={[
				"PQC algorithms for data at-rest and in-transit",
				"Hybrid crypto transition plans",
				"HSM/KMS integrations and key rotation",
				"Zero Trust + PQC reference designs",
				"Threat modeling and validation",
				"NIST PQC roadmap alignment]}
			]}
			industries={["Financial Services", "Healthcare", "Government"]}
			canonical="https://ziontechgroup.com/quantum-secure-cloud-infrastructure]}
		/>
	);
}