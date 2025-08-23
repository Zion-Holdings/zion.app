import React from 'react';
import SEO from '../components/SEO';

export default function Custom404() {
	return (
		<div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
			                <SEO title="Page Not Found – Zion Tech Group" noIndex />
			<h1 className="text-5xl font-bold mb-4">404</h1>
			<p className="text-gray-300 mb-8 max-w-xl">The page you're looking for doesn't exist or has moved.</p>
			<a href="/" className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">Go Home</a>
		</div>
	);
}