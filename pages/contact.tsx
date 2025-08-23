import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Contact | Zion Tech Group</title>
				<meta name="description" content="Get in touch with Zion Tech Group. Sales, support, and general inquiries." />
				<link rel="canonical" href="https://ziontechgroup.com/contact" />
			</Head>

			<div className="container mx-auto px-4 py-16 text-white">
				<div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-6">
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-xl">
							<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Contact Us</h1>
							<p className="text-gray-300">We typically respond within the same business day. For urgent issues, please call the number below.</p>
						</div>

						<form className="p-6 bg-black/40 border border-gray-700/50 rounded-xl space-y-4" method="post" action={`mailto:${contactInfo.email}`}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm text-gray-400 mb-1">Full Name</label>
									<input required name="name" className="w-full px-3 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-white" />
								</div>
								<div>
									<label className="block text-sm text-gray-400 mb-1">Email</label>
									<input required type="email" name="email" className="w-full px-3 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-white" />
								</div>
								<div>
									<label className="block text-sm text-gray-400 mb-1">Phone</label>
									<input name="phone" className="w-full px-3 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-white" />
								</div>
								<div>
									<label className="block text-sm text-gray-400 mb-1">Company</label>
									<input name="company" className="w-full px-3 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-white" />
								</div>
							</div>
							<div>
								<label className="block text-sm text-gray-400 mb-1">How can we help?</label>
								<textarea required name="message" rows={6} className="w-full px-3 py-2 bg-gray-900/60 border border-gray-700 rounded-lg text-white" />
							</div>
							<div className="flex gap-3">
								<button type="submit" className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium">Send</button>
								<a href="/pricing" className="px-5 py-2 border border-gray-600 rounded-lg text-gray-200">View Pricing</a>
							</div>
						</form>
					</div>

					<div className="space-y-6">
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-xl space-y-3 text-sm">
							<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</a></div>
							<div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></div>
							<div className="flex items-start gap-2 text-green-400"><MapPin className="w-4 h-4 mt-0.5" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{contactInfo.address}</a></div>
						</div>
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-xl">
							<h3 className="text-white font-semibold mb-2">Looking for a custom bundle?</h3>
							<p className="text-gray-300 text-sm">See our <a href="/pricing" className="text-cyan-400 underline">Pricing</a> or <a href="/services" className="text-cyan-400 underline">All Services</a> for average market prices and productized packages.</p>
						</div>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}