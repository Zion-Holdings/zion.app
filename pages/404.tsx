import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';

export default function NotFoundPage() {
	return (
		<Layout>
			<SEO title="Page Not Found | Zion Tech Group" description="The page you are looking for doesn't exist." noindex />
			<main className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-24">
				<div className="text-center max-w-2xl">
					<h1 className="text-5xl font-bold mb-4">404</h1>
					<p className="text-gray-300 mb-8">The page you are looking for could not be found.</p>
					<a href="/" className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition-colors">Go home</a>
				</div>
			</main>
		</Layout>
	);
}