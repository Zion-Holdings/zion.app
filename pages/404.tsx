import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function NotFoundPage() {
	return (
		<>
			<SEO title="Page Not Found | Zion Tech Group" description="The page you’re looking for doesn’t exist." noindex nofollow />
			<section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
						404 – Page Not Found
					</h1>
					<p className="text-gray-300 max-w-2xl mx-auto mb-8">
						We couldn’t find the page you were looking for. Try searching our services or return to the homepage.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/" className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
							Go to Homepage
						</Link>
						<Link href="/services" className="px-6 py-3 rounded-xl font-semibold border border-gray-600 text-gray-200">
							Explore Services
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}