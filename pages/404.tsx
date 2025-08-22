import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function Custom404() {
	return (
		<div className="min-h-[60vh] flex items-center justify-center text-center px-6">
			<SEO title="Page Not Found | Zion Tech Group" description="The page you are looking for does not exist." noindex nofollow />
			<div>
				<h1 className="text-5xl font-extrabold mb-4">404</h1>
				<p className="text-gray-300 mb-8">Sorry, we couldn't find that page.</p>
				<Link href="/" className="text-cyan-400 hover:text-cyan-300">Go back home</Link>
			</div>
		</div>
	);
}