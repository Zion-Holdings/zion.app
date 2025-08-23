import React from 'react';
import SEO from '../components/SEO';

export default function Custom500() {
	return (
		<div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
			<SEO title="Server Error – Zion Tech Group" />
			<h1 className="text-5xl font-bold mb-4">500</h1>
			<p className="text-gray-300 mb-8 max-w-xl">Something went wrong on our end. Please try again or return home.</p>
			<a href="/" className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">Go Home</a>
		</div>
	);
}