import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function BlogPage() {
	return (
		<Layout>
			<Head>
				<title>Blog | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/blog" />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Blog & News</h1>
				<p className="text-gray-300">Insights, guides, and announcements. New content coming soon.</p>
			</section>
		</Layout>
	);
}