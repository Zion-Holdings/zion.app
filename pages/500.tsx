import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function ServerErrorPage() {
	return (
		<>
			<SEO title="Server Error | Zion Tech Group" description="Something went wrong. Please try again later." noindex nofollow />
			<section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
						500 – Server Error
					</h1>
					<p className="text-gray-300 max-w-2xl mx-auto mb-8">
						An unexpected error occurred. If the problem persists, contact our team and we’ll help right away.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/" className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
							Go to Homepage
						</Link>
						<a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 rounded-xl font-semibold border border-gray-600 text-gray-200">
							Contact Support
						</a>
					</div>
				</div>
			</section>
		</>
	);
}