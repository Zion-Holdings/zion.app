import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function NotFoundPage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
			<SEO title="Page Not Found | Zion Tech Group" description="The page you are looking for does not exist." noindex nofollow />
			<h1 className="text-5xl font-bold mb-4">404</h1>
			<p className="text-gray-300 mb-8">The page you are looking for doesn\'t exist.</p>
			<Link href="/" className="text-cyan-400 hover:text-cyan-300 underline">Return to Home</Link>
		</div>
	);
}