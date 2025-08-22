import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<>
			<SEO title="Page Not Found | Zion Tech Group" description="The page you are looking for doesn't exist." noIndex />
			<div className="container mx-auto px-4 py-24 text-center">
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Page not found</h1>
				<p className="text-gray-300 mb-8">The page you're looking for may have been moved or removed.</p>
				<div className="flex items-center justify-center gap-4">
					<Link href="/" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl">Go Home</Link>
					<Link href="/services" className="border border-gray-600 text-gray-200 px-6 py-3 rounded-xl">Browse Services</Link>
				</div>
			</div>
		</>
	);
}