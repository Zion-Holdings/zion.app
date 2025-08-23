import React, { useEffect } from 'react';
import Head from 'next/head';

export default function OutboundRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const params = new URLSearchParams(window.location.search);
			const url = params.get('u');
			if (url && /^https?:\/\//i.test(url)) {
				// Delay slightly to allow crawlers to register 200 OK on this page
				setTimeout(() => {
					window.location.replace(url);
				}, 150);
			}
		}
	}, []);

	const href = typeof window !== 'undefined' ? (new URLSearchParams(window.location.search).get('u') || '') : '';

	return (
		<>
			<Head>
				<title>Leaving ziontechgroup.com</title>
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8 text-center">
				<div>
					<h1 className="text-2xl font-semibold mb-3">You are leaving ziontechgroup.com</h1>
					{href ? (
						<a href={href} rel="nofollow noopener noreferrer" className="text-cyan-400 underline">Continue to external site</a>
					) : (
						<p className="text-gray-400">Missing or invalid URL.</p>
					)}
				</div>
			</div>
		</>
	);
}