import Head from 'next/head';

export default function ChatPage() {
	return (
		<>
			<Head>
				<title>Live Chat | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/chat" />
			</Head>
			<div className="min-h-screen bg-black text-white pt-24">
				<div className="max-w-3xl mx-auto p-6">
					<h1 className="text-4xl font-bold mb-4">Live Chat</h1>
					<p className="text-gray-300 mb-6">Chat is coming soon. Reach us now via phone or email.</p>
					<div className="flex gap-4">
						<a href="tel:+13024640950" className="px-6 py-3 bg-gray-800 rounded">Call +1 302 464 0950</a>
						<a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded text-white">Email Us</a>
					</div>
				</div>
			</div>
		</>
	);
}