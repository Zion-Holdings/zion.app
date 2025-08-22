import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/contact" />
			</Head>
			<section className="relative py-16 lg:py-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Contact Zion Tech Group</h1>
					<p className="text-gray-300 mb-10 max-w-2xl">Wed love to learn about your goals and recommend the right solutions. Reach us anytime.</p>

					<div className="grid md:grid-cols-3 gap-6">
						<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
							<div className="text-sm text-gray-400 mb-2">Mobile</div>
							<a className="text-xl font-semibold text-white hover:text-cyan-400" href="tel:+13024640950">+1 302 464 0950</a>
						</div>
						<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
							<div className="text-sm text-gray-400 mb-2">E-mail</div>
							<a className="text-xl font-semibold text-white hover:text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
						</div>
						<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
							<div className="text-sm text-gray-400 mb-2">Address</div>
							<div className="text-white font-semibold">364 E Main St STE 1008</div>
							<div className="text-white">Middletown DE 19709</div>
						</div>
					</div>

					<div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
						<h2 className="text-white text-xl font-semibold mb-3">Get a quote or book a demo</h2>
						<p className="text-gray-300 mb-4">Email us, call us, or use the quick links below.</p>
						<div className="flex flex-wrap gap-3">
							<a href="tel:+13024640950" className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20">Call now</a>
							<a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20">Email us</a>
							<a href="/quote" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white">Get a quote</a>
							<a href="/demo" className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-600 text-white">Book a demo</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}