import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function FiveGPrivateNetworkPage() {
	return (
		<>
			<Head>
				<title>5G Private Network Solutions | Zion Tech Group</title>
				<meta name="description" content="Design and operate private 5G with SIM/eSIM lifecycle, QoS, MEC, and security." />
				<link rel="canonical" href="https://ziontechgroup.com/5g-private-network-solutions" />
			</Head>
			<ServiceLanding serviceId="5g-private-network-solutions" />
		</>
	);
}

