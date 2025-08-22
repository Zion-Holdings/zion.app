import Head from 'next/head';
import Link from 'next/link';

export default function AIDreamInterpreterPlatform() {
	return (
		<>
			<Head>
				<title>AI Dream Interpreter Platform | Zion Tech Group</title>
				<meta name="description" content="AI-powered dream analysis and interpretation with psychology-informed prompts." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-dream-interpreter-platform/" />
				<meta property="og:title" content="AI Dream Interpreter Platform" />
				<meta property="og:description" content="AI-powered dream analysis and interpretation with psychology-informed prompts." />
				<meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
			</Head>
			<main className="min-h-screen bg-black text-white">
				<section className="container mx-auto px-4 py-24">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">AI Dream Interpreter Platform</h1>
					<p className="text-gray-300 max-w-3xl mb-8">Analyze patterns and themes using multi-model pipelines to generate insights and journaling prompts.</p>
					<div className="flex gap-4">
						<Link href="/contact" className="px-6 py-3 bg-cyan-600 rounded-lg font-semibold">Contact Sales</Link>
						<Link href="/pricing" className="px-6 py-3 border border-gray-700 rounded-lg">View Pricing</Link>
					</div>
				</section>
			</main>
		</>
	);
}