import NextHead from 'next/head';

export default function BlogPage() {
	return (
		<div className="min-h-screen bg-gray-900 pt-20 px-4 sm:px-6 lg:px-8">
			<NextHead>
				<title>Blog & Insights | Zion Tech Group</title>
				<meta name="description" content="Insights on AI safety, quantum computing, FinOps, and platform engineering." />
				<link rel="canonical" href="https://ziontechgroup.com/blog" />
			</NextHead>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Blog & Insights</h1>
				<ul className="space-y-4">
					<li className="bg-gray-900/60 border border-gray-700 rounded-2xl p-6">
						<h2 className="text-xl font-semibold text-white mb-2">AI Guardrails: Practical Evals That Catch Real Issues</h2>
						<p className="text-gray-300 text-sm">How to stand up evals and CI gates for safety and reliability.</p>
					</li>
					<li className="bg-gray-900/60 border border-gray-700 rounded-2xl p-6">
						<h2 className="text-xl font-semibold text-white mb-2">SIEM Pipelines without the Pain</h2>
						<p className="text-gray-300 text-sm">Normalization, enrichment, and cost control patterns that work.</p>
					</li>
				</ul>
			</div>
		</div>
	);
}