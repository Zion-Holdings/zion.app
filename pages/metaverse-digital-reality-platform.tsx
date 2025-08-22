import Head from 'next/head';
import Link from 'next/link';

export default function MetaverseDigitalRealityPlatform() {
	return (
		<>
			<Head>
				<title>Metaverse Digital Reality Platform | Zion Tech Group</title>
				<meta name="description" content="Immersive virtual worlds platform for events, training, and collaboration." />
				<link rel="canonical" href="https://ziontechgroup.com/metaverse-digital-reality-platform/" />
				<meta property="og:title" content="Metaverse Digital Reality Platform" />
				<meta property="og:description" content="Immersive virtual worlds platform for events, training, and collaboration." />
				<meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
			</Head>
			<main className="min-h-screen bg-black text-white">
				<section className="container mx-auto px-4 py-24">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">Metaverse Digital Reality Platform</h1>
					<p className="text-gray-300 max-w-3xl mb-8">Build persistent 3D spaces with identity, commerce, and real-time collaboration.</p>
					<div className="flex gap-4">
						<Link href="/contact" className="px-6 py-3 bg-cyan-600 rounded-lg font-semibold">Contact Sales</Link>
						<Link href="/pricing" className="px-6 py-3 border border-gray-700 rounded-lg">View Pricing</Link>
					</div>
				</section>
			</main>
		</>
	);
}