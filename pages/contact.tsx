import React from 'react';
import SEO from '../components/SEO';

export default function ContactPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-white">
			<SEO title="Contact | Zion Tech Group" description="Get in touch with Zion Tech Group. Call +1 302 464 0950 or email kleber@ziontechgroup.com." canonical="https://ziontechgroup.com/contact/" />
			<div className="max-w-3xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Contact</h1>
				<p className="text-gray-300">We'd love to hear from you. Reach out for quotes, demos, or support.</p>
				<div className="space-y-3 text-lg">
					<p>Phone: <a className="text-cyan-400 underline" href="tel:+13024640950">+1 302 464 0950</a></p>
					<p>Email: <a className="text-purple-400 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
					<p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
				</div>
			</div>
		</div>
	);
}