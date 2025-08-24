import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function BrainComputerInterfacePlatform() {
	return (
		<ServiceLanding
			title="Brain-Computer Interface Platform"
			subtitle="Next-generation neural interface R&D platform"
			description="Accelerate BCI research and prototyping with neural signal acquisition, decoding models, and real-time interaction SDKs."
			pricePerMonthUSD={6999}
			implementationWeeks="Implementation: 8-12 weeks"
			roiNote="Purpose-built for labs and advanced R&D teams"
			features={[
				"Neural data acquisition and preprocessing",
				"Decoding models and training pipelines",
				"Low-latency stimulus and feedback loops",
				"Safety, ethics, and data governance",
				"Simulation tools and synthetic datasets",
				"SDKs: Python, C++, Unity for interaction"
			]}
			industries={["Healthcare R&D", "Neurotech", "Academia", "Defense"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/brain-computer-interface-platform"
		/>
	);
}