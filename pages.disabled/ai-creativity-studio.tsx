import React from 'react';
import Head from 'next/head';

export default function AICreativityStudioPage() {
	return (
		<>
			<Head>
				<title>AI Creativity Studio | Zion Tech Group</title>
				<meta name="description" content="Generate on-brand creative assets at scale using AI." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-creativity-studio" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-gray-200">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">AI Creativity Studio</h1>
				<p className="text-gray-300 max-w-3xl">Creative content generation and orchestration for marketing teams.</p>
			</div>
		</>
	);
}