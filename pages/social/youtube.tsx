import React, { useEffect } from 'react';
import Head from 'next/head';

export default function YouTubeRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https://www.youtube.com/@ziontechgroup');
		}
	}, []);

	return (
		<>
			<Head>
				<title>YouTube | Zion Tech Group</title>
				<link rel="canonical" href="https://www.youtube.com/@ziontechgroup" />
				<meta httpEquiv="refresh" content="0;url=https://www.youtube.com/@ziontechgroup" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https://www.youtube.com/@ziontechgroup" className="text-cyan-400 underline">
					Continue to YouTube
				</a>
			</div>
		</>
	);
}