import React, { useEffect } from 'react';
import Head from 'next/head';

export default function TwitterRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https://x.com/ziontechgroup');
		}
	}, []);

	return (
		<>
			<Head>
				<title>X (Twitter) | Zion Tech Group</title>
				<link rel="canonical" href="https://x.com/ziontechgroup" />
				<meta httpEquiv="refresh" content="0;url=https://x.com/ziontechgroup" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https://x.com/ziontechgroup" className="text-cyan-400 underline">
					Continue to X (Twitter)
				</a>
			</div>
		</>
	);
}