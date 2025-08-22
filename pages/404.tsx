import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<>
			<Head>
				<title>Page Not Found | Zion Tech Group</title>
				<meta name="description" content="Sorry, we couldn't find that page. Return to the homepage or explore our services." />
				<meta name="robots" content="noindex,follow" />
			</Head>
			<section className="px-6 py-24 lg:px-8 text-center">
				<h1 className="text-4xl font-bold sm:text-5xl">404 — Not Found</h1>
				<p className="mt-4 text-gray-300">The page you are looking for doesn’t exist or has moved.</p>
				<div className="mt-8 flex items-center justify-center gap-x-6">
					<Link href="/" className="rounded-md bg-white/10 px-5 py-3 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20">Go Home</Link>
					<Link href="/services" className="text-base font-semibold leading-6 text-white/80 hover:text-white">Explore Services →</Link>
				</div>
			</section>
		</>
	);
}