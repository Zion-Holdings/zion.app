import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';

export default function ChatPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Live Chat | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/chat" />
				<meta name="description" content="Chat with Zion Tech Group about AI, cloud, and micro SaaS services. Fast responses and expert guidance." />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<div className="max-w-3xl mx-auto space-y-6">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">Live Chat</h1>
					<Card className="p-6 bg-black/50 border border-gray-700/60 text-center">
						<div className="text-gray-300">Live chat integration will appear here. Meanwhile, contact us:</div>
						<div className="mt-4 text-gray-200">{contactInfo.mobile} • {contactInfo.email}</div>
						<div className="mt-2 text-gray-400 text-sm">Address: {contactInfo.address}</div>
					</Card>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}