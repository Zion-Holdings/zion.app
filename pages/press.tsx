import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function PressPage() {
	return (
		<>
			<Head>
				<title>Press | Zion Tech Group</title>
				<meta name="description" content="Press releases, media coverage, and company news from Zion Tech Group." />
				<link rel="canonical" href="https://ziontechgroup.com/press/" />
			</Head>
			<Layout>
				<section className="min-h-[60vh] px-4 py-24">
					<h1 className="text-5xl font-bold mb-4">Press</h1>
					<p className="text-gray-300 mb-8">Find our latest press releases and media coverage.</p>
				</section>
			</Layout>
		</>
	);
}