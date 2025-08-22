import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709'
	};

	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Contact | Zion Tech Group</title>
				<meta name="description" content="Get in touch with Zion Tech Group. Call, email, or visit us to start your project." />
				<link rel="canonical" href="https://ziontechgroup.com/contact" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Contact</h1>
				<p className="text-gray-300 mb-8 max-w-2xl">We respond fast. Reach us via phone or email, or send a message and we’ll get back within one business day.</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<div className="p-6 bg-black/50 border border-gray-700/60 rounded-xl">
						<div className="flex items-center gap-3 text-cyan-300"><Phone className="w-5 h-5" /><a href={`tel:${contact.mobile.replace(/[^+\d]/g, '')}`} className="hover:underline">{contact.mobile}</a></div>
					</div>
					<div className="p-6 bg-black/50 border border-gray-700/60 rounded-xl">
						<div className="flex items-center gap-3 text-purple-300"><Mail className="w-5 h-5" /><a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a></div>
					</div>
					<div className="p-6 bg-black/50 border border-gray-700/60 rounded-xl">
						<div className="flex items-center gap-3 text-emerald-300"><MapPin className="w-5 h-5" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noreferrer" className="hover:underline">{contact.address}</a></div>
					</div>
				</div>

				<form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
					<input className="px-4 py-3 rounded-lg bg-black/50 border border-gray-700/60 focus:outline-none focus:border-cyan-500" placeholder="Full name" />
					<input className="px-4 py-3 rounded-lg bg-black/50 border border-gray-700/60 focus:outline-none focus:border-cyan-500" placeholder="Email address" type="email" />
					<input className="px-4 py-3 rounded-lg bg-black/50 border border-gray-700/60 focus:outline-none focus:border-cyan-500 md:col-span-2" placeholder="Company (optional)" />
					<textarea className="px-4 py-3 rounded-lg bg-black/50 border border-gray-700/60 focus:outline-none focus:border-cyan-500 md:col-span-2" placeholder="How can we help?" rows={6} />
					<button type="button" className="md:col-span-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">Send message</button>
				</form>
			</div>
		</UltraFuturisticBackground>
	);
}