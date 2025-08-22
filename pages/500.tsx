import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function ServerError() {
	return (
		<>
			<SEO title="Server Error | Zion Tech Group" description="An unexpected error occurred." noIndex />
			<div className="container mx-auto px-4 py-24 text-center">
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Something went wrong</h1>
				<p className="text-gray-300 mb-8">Please try again later or return to the homepage.</p>
				<Link href="/" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl">Go Home</Link>
			</div>
		</>
	);
}