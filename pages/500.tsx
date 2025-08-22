import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function ErrorPage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
			<SEO title="Server Error | Zion Tech Group" description="An unexpected error occurred." noindex nofollow />
			<h1 className="text-5xl font-bold mb-4">500</h1>
			<p className="text-gray-300 mb-8">An unexpected error occurred. Please try again later.</p>
			<Link href="/" className="text-cyan-400 hover:text-cyan-300 underline">Return to Home</Link>
		</div>
	);
}