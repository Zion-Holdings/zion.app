import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';

export default function ServerErrorPage() {
	return (
		<Layout>
			<SEO title="Server Error | Zion Tech Group" description="An unexpected error occurred. Please try again later." noindex />
			<main className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-24">
				<div className="text-center max-w-2xl">
					<h1 className="text-5xl font-bold mb-4">500</h1>
					<p className="text-gray-300 mb-8">An unexpected error occurred. Please try again later.</p>
					<a href="/" className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition-colors">Go home</a>
				</div>
			</main>
		</Layout>
	);
}