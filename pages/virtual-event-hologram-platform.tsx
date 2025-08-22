import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function VirtualEventHologramPage() {
	return (
		<>
			<Head>
				<title>Virtual Event Hologram Platform | Zion Tech Group</title>
				<meta name="description" content="Immersive hologram presenters, interactive booths, and analytics for webinars and conferences." />
				<link rel="canonical" href="https://ziontechgroup.com/virtual-event-hologram-platform" />
			</Head>
			<ServiceLanding
				title="Virtual Event Hologram Platform"
				description="Host immersive virtual events with real-time holographic presenters, interactive booths, and spatial audio networking."
				subtitle="Unforgettable, scalable experiences"
				pricePerMonthUSD={3999}
				implementationWeeks="3-6 weeks"
				roiNote="Increase engagement and sponsorship value"
				features={["Real-time holographic capture (Volumetric/AI)","Spatial audio rooms and networking","Interactive expo booths and demos","Ticketing, analytics, and CRM integrations","Multi-CDN low-latency streaming","Accessibility and localization"]}
				industries={["Events", "Education", "Media", "Enterprises"]}
				canonical="https://ziontechgroup.com/virtual-event-hologram-platform"
			/>
		</>
	);
}

