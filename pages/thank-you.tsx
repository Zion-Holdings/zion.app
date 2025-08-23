import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function ThankYouPage() {
	const pageTitle = 'Thank You — Zion Tech Group';
	const pageDescription = 'Thanks for contacting Zion Tech Group. We will be in touch soon.';

	return (
		<>
			<SEO title={pageTitle} description={pageDescription} canonical="/thank-you" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4 max-w-2xl text-center">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">Thank you</h1>
					<p className="mt-4 text-gray-300">Your message has been received. Our team will get back to you shortly.</p>
					<div className="mt-8 flex items-center justify-center gap-4">
						<Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Back to Home</Link>
						<Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Explore Services</Link>
					</div>
				</div>
			</section>
		</>
	);
}