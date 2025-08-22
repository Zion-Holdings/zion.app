import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function DemoPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Book a Demo | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/demo" />
				<meta name="description" content="Schedule a live demo of our AI, cloud, and micro SaaS solutions. See features and pricing aligned to the market." />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<div className="max-w-3xl mx-auto space-y-6">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">Book a Demo</h1>
					<Card className="p-6 bg-black/50 border border-gray-700/60">
						<form action="https://formsubmit.co/kleber@ziontechgroup.com" method="POST" className="space-y-4">
							<input type="hidden" name="_subject" value="Demo Request - ziontechgroup.com" />
							<input type="hidden" name="_captcha" value="false" />
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm text-gray-300 mb-1">Name</label>
									<input name="name" required className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 focus:border-cyan-500 outline-none" />
								</div>
								<div>
									<label className="block text-sm text-gray-300 mb-1">Email</label>
									<input type="email" name="email" required className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 focus:border-cyan-500 outline-none" />
								</div>
							</div>
							<div>
								<label className="block text-sm text-gray-300 mb-1">Company</label>
								<input name="company" className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 focus:border-cyan-500 outline-none" />
							</div>
							<div>
								<label className="block text-sm text-gray-300 mb-1">Interested Service</label>
								<input name="service" placeholder="e.g., LLM Gateway" className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 focus:border-cyan-500 outline-none" />
							</div>
							<div>
								<label className="block text-sm text-gray-300 mb-1">Notes</label>
								<textarea name="notes" rows={4} className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 focus:border-cyan-500 outline-none" />
							</div>
							<Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Request Demo</Button>
						</form>
					</Card>
					<div className="text-center text-sm text-gray-400">Prefer email? {contactInfo.email} • Call {contactInfo.mobile}</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}