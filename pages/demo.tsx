import Head from 'next/head';

export default function DemoPage() {
	return (
		<>
			<Head>
				<title>Book a Demo | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/demo" />
			</Head>
			<div className="min-h-screen bg-black text-white pt-24">
				<div className="max-w-3xl mx-auto p-6">
					<h1 className="text-4xl font-bold mb-4">Book a Demo</h1>
					<p className="text-gray-300 mb-8">See our AI, IT and Micro SAAS solutions in action.</p>
					<a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded text-white inline-block">Request Demo</a>
				</div>
			</div>
		</>
	);
}