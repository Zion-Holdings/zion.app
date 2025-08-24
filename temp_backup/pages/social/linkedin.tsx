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
				<meta name="robots" content="index, follow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<p>Redirecting to LinkedIn...</p>
			</div>
		</>
	);
}