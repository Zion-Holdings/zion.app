import React, { useEffect } from 'react';
import Head from 'next/head';

export default function TwitterRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https://twitter.com/ziontechgroup');
		}
	}, []);

	return (
		<>
			<Head>
				<title>Twitter | Zion Tech Group</title>
				<link rel="canonical" href="https://twitter.com/ziontechgroup" />
				<meta httpEquiv="refresh" content="0;url=https://twitter.com/ziontechgroup" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https://twitter.com/ziontechgroup" className="text-cyan-400 underline">
					Continue to Twitter
				</a>
			</div>
		</>
	);
}