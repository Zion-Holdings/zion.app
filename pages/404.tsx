import React from 'react';
import Link from 'next/link';

export default function Custom404() {
	return (
		<div className="min-h-[60vh] flex items-center justify-center text-center px-6">
			<div>
				<h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">404</h1>
				<p className="text-xl text-gray-300 mb-8">Page not found. The page you are looking for doesn’t exist or has been moved.</p>
				<Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-colors">
					<span>Go back home</span>
				</Link>
			</div>
		</div>
	);
}