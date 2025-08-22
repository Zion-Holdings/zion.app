import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709'
	};
	return (
		<Layout>
			<Head>
				<title>Contact | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/contact" />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Contact Us</h1>
				<p className="text-gray-300 mb-10">We respond quickly. Reach us via phone or email.</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 flex items-center gap-3">
						<Phone className="w-5 h-5 text-cyan-400" />
						<a href={`tel:${contact.mobile}`}>{contact.mobile}</a>
					</div>
					<div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 flex items-center gap-3">
						<Mail className="w-5 h-5 text-purple-400" />
						<a href={`mailto:${contact.email}`}>{contact.email}</a>
					</div>
					<div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 flex items-center gap-3">
						<MapPin className="w-5 h-5 text-emerald-400" />
						<span className="text-sm">{contact.address}</span>
					</div>
				</div>
			</section>
		</Layout>
	);
}