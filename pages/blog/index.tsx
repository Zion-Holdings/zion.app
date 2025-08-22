import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogIndex() {
	return (
		<>
			<Head>
				<title>Blog | Zion Tech Group</title>
				<meta name="description" content="Insights on AI, cloud, security, and micro SaaS." />
				<link rel="canonical" href="https://ziontechgroup.com/blog" />
			</Head>
			<div className="min-h-screen pt-28 px-4">
				<div className="max-w-5xl mx-auto">
					<h1 className="text-4xl font-bold mb-6">Blog</h1>
					<ul className="space-y-3 text-cyan-300">
						<li><Link href="/blog/performance-optimization">Performance Optimization</Link></li>
						<li><Link href="/blog/cloud-native-automation">Cloud-Native Automation</Link></li>
						<li><Link href="/blog/ai-automation-trends-2025">AI Automation Trends 2025</Link></li>
						<li><Link href="/blog/future-of-work">Future of Work</Link></li>
						<li><Link href="/blog/ai-ethics-automation">AI Ethics & Automation</Link></li>
						<li><Link href="/blog/autonomous-content-generation">Autonomous Content Generation</Link></li>
					</ul>
				</div>
			</div>
		</>
	);
}

