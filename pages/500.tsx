import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function Custom500() {
	return (
		<div className="min-h-[60vh] flex items-center justify-center text-center px-6">
			<SEO title="Server Error | Zion Tech Group" description="An unexpected error occurred." noindex nofollow />
			<div>
				<h1 className="text-5xl font-extrabold mb-4">500</h1>
				<p className="text-gray-300 mb-8">Something went wrong on our end.</p>
				<Link href="/" className="text-cyan-400 hover:text-cyan-300">Go back home</Link>
			</div>
		</div>
	);
}