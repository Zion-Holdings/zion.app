import React, { useEffect } from 'react';
import Head from 'next/head';

export default function LinkedInRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https://www.linkedin.com/company/zion-tech-group');
		}
	}, []);

	return (
		<>
			<Head>
				<title>LinkedIn | Zion Tech Group</title>
				<link rel="canonical" href="https://www.linkedin.com/company/zion-tech-group" />
				<meta httpEquiv="refresh" content="0;url=https://www.linkedin.com/company/zion-tech-group" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<a href="https://linkedin.com/company/zion-tech-group" className="text-cyan-400 underline">
					Continue to LinkedIn
				</a>
			</div>
		</>
	);
}