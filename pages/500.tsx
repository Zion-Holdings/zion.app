import React from 'react';
import SEO from '../components/SEO';

export default function ServerErrorPage() {
	return (
		<>
			<SEO title="Server Error | Zion Tech Group" description="An unexpected error occurred." noindex nofollow />
			<div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
				<h1 className="text-5xl font-bold mb-4">500 - Server Error</h1>
				<p className="text-gray-300 max-w-2xl">An unexpected error occurred. Please try again later or return to the homepage.</p>
				<a href="/" className="mt-8 inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors">Go Home</a>
			</div>
		</>
	);
}