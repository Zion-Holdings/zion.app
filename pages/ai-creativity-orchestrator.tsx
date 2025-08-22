import Head from 'next/head';
import Link from 'next/link';

export default function AICreativityOrchestrator() {
	return (
		<>
			<Head>
				<title>AI Creativity Orchestrator | Zion Tech Group</title>
				<meta name="description" content="Multi-model AI creativity orchestration for design, marketing, and R&D teams." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-creativity-orchestrator/" />
				<meta property="og:title" content="AI Creativity Orchestrator" />
				<meta property="og:description" content="Multi-model AI creativity orchestration for design, marketing, and R&D teams." />
				<meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
			</Head>
			<main className="min-h-screen bg-black text-white">
				<section className="container mx-auto px-4 py-24">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">AI Creativity Orchestrator</h1>
					<p className="text-gray-300 max-w-3xl mb-8">Coordinate text, image, audio, and video models to generate on-brand assets, storyboards, campaigns, and product concepts with human-in-the-loop controls.</p>
					<div className="flex gap-4">
						<Link href="/contact" className="px-6 py-3 bg-cyan-600 rounded-lg font-semibold">Contact Sales</Link>
						<Link href="/pricing" className="px-6 py-3 border border-gray-700 rounded-lg">View Pricing</Link>
					</div>
				</section>
			</main>
		</>
	);
}