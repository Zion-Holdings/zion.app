import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function ServerErrorPage() {
	return (
		<>
			<SEO title="Server Error — Zion Tech Group" description="An unexpected error occurred on the server." />
			<section className="min-h-[60vh] flex items-center justify-center text-center px-4">
				<div className="max-w-2xl">
					<h1 className="text-4xl md:text-6xl font-extrabold">500 — Server error</h1>
					<p className="mt-6 text-gray-300">Sorry, something went wrong. Please try again later.</p>
					<div className="mt-8">
						<Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Go back home</Link>
					</div>
				</div>
			</section>
		</>
	);
}