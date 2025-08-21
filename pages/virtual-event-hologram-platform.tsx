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
			<ServiceLanding serviceId="virtual-event-hologram-platform" />
		</>
	);
}

