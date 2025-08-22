import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function NotFoundPage() {
	return (
		<>
			<SEO title="Page Not Found — Zion Tech Group" description="Sorry, we couldn't find that page. Explore our services and resources." />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4 text-center max-w-3xl">
					<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-text-cyan-purple">404 — Page Not Found</h1>
					<p className="mt-6 text-lg md:text-xl text-gray-300">The page you are looking for doesn’t exist or has been moved.</p>
					<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Go Home</Link>
						<Link href="/services/" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Explore Services</Link>
					</div>
				</div>
			</section>
		</>
	);
}