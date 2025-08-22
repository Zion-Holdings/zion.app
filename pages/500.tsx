import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function ErrorPage() {
	return (
		<>
			<SEO title="Server Error — Zion Tech Group" description="Something went wrong. Please try again or contact support." />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4 text-center max-w-3xl">
					<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-text-cyan-purple">500 — Server Error</h1>
					<p className="mt-6 text-lg md:text-xl text-gray-300">We’re working to fix the issue. In the meantime, you can continue browsing.</p>
					<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Go Home</Link>
						<Link href="/support/" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Get Support</Link>
					</div>
				</div>
			</section>
		</>
	);
}