import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/contact" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-gray-200">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
				<p className="text-gray-300 mb-8 max-w-2xl">We'd love to hear from you. Send us a message and we'll get back within 1 business day.</p>
				<div className="grid md:grid-cols-2 gap-8">
					<form action="https://formsubmit.co/kleber@ziontechgroup.com" method="POST" className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-6">
						<input type="hidden" name="_captcha" value="false" />
						<input type="hidden" name="_subject" value="New contact from ziontechgroup.com" />
						<div>
							<label className="block text-sm text-gray-400 mb-1">Name</label>
							<input name="name" required className="w-full px-3 py-2 rounded bg-black/40 border border-gray-700 text-white" />
						</div>
						<div>
							<label className="block text-sm text-gray-400 mb-1">Email</label>
							<input type="email" name="email" required className="w-full px-3 py-2 rounded bg-black/40 border border-gray-700 text-white" />
						</div>
						<div>
							<label className="block text-sm text-gray-400 mb-1">Message</label>
							<textarea name="message" rows={6} required className="w-full px-3 py-2 rounded bg-black/40 border border-gray-700 text-white" />
						</div>
						<button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">Send</button>
					</form>
					<div className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-6">
						<div>
							<div className="text-sm text-gray-400">Email</div>
							<a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300">kleber@ziontechgroup.com</a>
						</div>
						<div>
							<div className="text-sm text-gray-400">Phone</div>
							<a href="tel:+13024640950" className="text-cyan-300">+1 302 464 0950</a>
						</div>
						<div>
							<div className="text-sm text-gray-400">Address</div>
							<div>364 E Main St STE 1008 Middletown DE 19709</div>
						</div>
						<div className="pt-2">
							<Link href="/pricing" className="text-cyan-300">View pricing</Link>
							<span className="mx-2 text-gray-600">|</span>
							<Link href="/services" className="text-cyan-300">Browse services</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}