import Head from 'next/head';

export default function QuotePage() {
	return (
		<>
			<Head>
				<title>Request a Quote | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/quote" />
			</Head>
			<div className="min-h-screen bg-black text-white pt-24">
				<div className="max-w-4xl mx-auto p-6">
					<h1 className="text-4xl font-bold mb-4">Request a Quote</h1>
					<p className="text-gray-300 mb-8">Tell us about your project and well follow up within 1 business day.</p>
					<div className="grid gap-4">
						<input className="bg-black/50 border border-gray-700 rounded p-3" placeholder="Name" />
						<input className="bg-black/50 border border-gray-700 rounded p-3" placeholder="Email" />
						<input className="bg-black/50 border border-gray-700 rounded p-3" placeholder="Company" />
						<textarea className="bg-black/50 border border-gray-700 rounded p-3" placeholder="Project details" rows={6} />
						<a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded text-white inline-block text-center">Contact Sales</a>
					</div>
				</div>
			</div>
		</>
	);
}