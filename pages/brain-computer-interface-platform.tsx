import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function BrainComputerInterfacePlatform() {
	return (
		<ServiceLanding
			title="Brain-Computer Interface Platform"
			description="Research and prototype BCIs with safe neural signal processing, ML decoding, and real-time feedback systems for assistive and industrial applications."
			subtitle="Bridging minds and machines"
			pricePerMonthUSD={9999}
			implementationWeeks="12-24 weeks"
			roiNote="Enable novel assistive tech and hands-free control"
			features={[
				"EEG/EMG signal acquisition toolkit",
				"Neural decoding models and pipelines",
				"Low-latency feedback and control",
				"Simulation and safety sandboxes",
				"Compliance and ethics guidance",
				"Hardware partner integrations"
			]}
			industries={["Healthcare", "Industrial", "Research"]}
			canonical="https://ziontechgroup.com/brain-computer-interface-platform"
		/>
	);
}