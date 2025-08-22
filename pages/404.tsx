import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function NotFoundPage() {
	return (
		<>
			<SEO title="Page Not Found | Zion Tech Group" description="Sorry, the page you are looking for does not exist." noindex />
			<div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
				<h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">404</h1>
				<p className="text-gray-300 mb-8">Sorry, the page you are looking for does not exist.</p>
				<Link href="/" className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-black transition-colors">
					Go back home
				</Link>
			</div>
		</>
	);
}