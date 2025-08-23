import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function ZeroTrustSecurityPlatform() {
	return (
		<ServiceLanding
			title="Zero Trust Security Platform"
			description="Design and implement Zero Trust architecture: identity-aware access, micro-segmentation, continuous verification, and policy enforcement across apps, infra, and devices."
			subtitle="Never trust, always verify"
			pricePerMonthUSD={4999}
			implementationWeeks="3-6 weeks"
			roiNote="Reduce breach risk and blast radius; meet compliance faster"
			features={[
				"Identity and device posture checks",
				"Policy enforcement at network and application layers",
				"Service-to-service authentication (mTLS)",
				"Micro-segmentation and least privilege",
				"SIEM/SOAR integrations and automated response",
				"Reference architectures and runbooks"
			]}
			industries={["Financial Services", "Healthcare", "SaaS", "Government"]}
			canonical="https://ziontechgroup.com/zero-trust-security-platform"
		/>
	);
}

// Disable static generation to prevent SSR issues
export async function getServerSideProps() {
  return {
    props: {}
  };
}