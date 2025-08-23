import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function ChatPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Live Chat | Zion Tech Group</title>
				<meta name="description" content="Reach our team via live chat or email." />
				<link rel="canonical" href="https://ziontechgroup.com/chat" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Live Chat</h1>
				<p className="text-gray-300 max-w-2xl">Live chat is coming soon. For immediate help, email <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 underline">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 underline">+1 302 464 0950</a>.</p>
			</div>
		</UltraFuturisticBackground>
	);
}