import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Contact | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/contact" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Talk to Us</h1>
				<p className="text-gray-300 mb-10 max-w-2xl">We ship outcomes in weeks. Call, email, or visit to get a tailored plan and pricing.</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<a href={`tel:${contact.mobile}`} className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50">
						<Phone className="w-5 h-5 text-cyan-400" />
						<div className="mt-3 font-semibold">Call</div>
						<div className="text-gray-300">{contact.mobile}</div>
					</a>
					<a href={`mailto:${contact.email}`} className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-purple-500/50">
						<Mail className="w-5 h-5 text-purple-400" />
						<div className="mt-3 font-semibold">Email</div>
						<div className="text-gray-300">{contact.email}</div>
					</a>
					<a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-pink-500/50">
						<MapPin className="w-5 h-5 text-pink-400" />
						<div className="mt-3 font-semibold">Visit</div>
						<div className="text-gray-300 text-sm">{contact.address}</div>
					</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}