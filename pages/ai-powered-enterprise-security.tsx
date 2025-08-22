import Head from 'next/head';
import Link from 'next/link';

export default function AIPoweredEnterpriseSecurity() {
	return (
		<>
			<Head>
				<title>AI-Powered Enterprise Security | Zion Tech Group</title>
				<meta name="description" content="Continuous threat detection, anomaly response, and posture hardening using AI." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-powered-enterprise-security/" />
				<meta property="og:title" content="AI-Powered Enterprise Security" />
				<meta property="og:description" content="Continuous threat detection, anomaly response, and posture hardening using AI." />
				<meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
			</Head>
			<main className="min-h-screen bg-black text-white">
				<section className="container mx-auto px-4 py-24">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">AI-Powered Enterprise Security</h1>
					<p className="text-gray-300 max-w-3xl mb-8">Detect, triage, and remediate threats across cloud, endpoint, and identity with AI.</p>
					<div className="flex gap-4">
						<Link href="/contact" className="px-6 py-3 bg-cyan-600 rounded-lg font-semibold">Get Started</Link>
						<Link href="/pricing" className="px-6 py-3 border border-gray-700 rounded-lg">View Pricing</Link>
					</div>
				</section>
			</main>
		</>
	);
}