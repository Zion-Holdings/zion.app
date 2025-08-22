import React from 'react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
	return (
		<>
			<SEO title="Page Not Found | Zion Tech Group" description="Sorry, the page you are looking for does not exist." noindex nofollow />
			<div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
				<h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
				<p className="text-gray-300 max-w-2xl">
					The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
				</p>
				<a href="/" className="mt-8 inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors">Go Home</a>
			</div>
		</>
	);
}