import React from 'react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
	return (
		<>
			<SEO title="Page Not Found | Zion Tech Group" description="Sorry, we couldn't find the page you're looking for." noindex nofollow />
			<div className="min-h-[60vh] flex items-center justify-center px-6">
				<div className="text-center max-w-xl">
					<h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">404</h1>
					<p className="text-gray-300 mb-6">Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
					<div className="flex gap-3 justify-center">
						<a href="/" className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-colors">Go Home</a>
						<a href="/market-pricing/" className="px-5 py-3 rounded-lg border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 transition-colors">Explore Services</a>
					</div>
				</div>
			</div>
		</>
	);
}