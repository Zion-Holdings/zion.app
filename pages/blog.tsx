import React from 'react';
import Head from 'next/head';

export default function BlogPage() {
	return (
		<>
			<Head>
				<title>Blog | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/blog" />
			</Head>
			<section className="relative py-16 lg:py-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Blog</h1>
					<p className="text-gray-300">Insights, updates, and case studies coming soon.</p>
				</div>
			</section>
		</>
	);
}