import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function Custom404() {
	return (
		<>
			<SEO title="Page Not Found | Zion Tech Group" description="The page you are looking for does not exist." noIndex />
			<section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
				<div className="container mx-auto px-4 py-20 text-center">
					<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">404</h1>
					<p className="text-gray-300 text-lg mb-8">Sorry, we couldn\'t find that page. Here are some helpful links:</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">Go Home</Link>
						<Link href="/comprehensive-services-showcase-2025/" className="px-6 py-3 rounded-xl bg-gray-800/60 text-gray-200 hover:bg-gray-800">Browse Services</Link>
						<Link href="/contact/" className="px-6 py-3 rounded-xl bg-gray-800/60 text-gray-200 hover:bg-gray-800">Contact Us</Link>
					</div>
				</div>
			</section>
		</>
	);
}