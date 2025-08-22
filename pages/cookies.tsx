import React from 'react';
import Head from 'next/head';

export default function CookiesPage() {
	return (
		<>
			<Head>
				<title>Cookie Policy | Zion Tech Group</title>
				<meta name="description" content="Cookie usage policy for Zion Tech Group." />
				<link rel="canonical" href="https://ziontechgroup.com/cookies/" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-gray-200">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">Cookie Policy</h1>
				<p className="text-gray-300 mb-6">We use cookies to enhance your experience, analyze site traffic, and personalize content. By using our site, you consent to cookies in accordance with this policy.</p>
				<ul className="list-disc pl-6 space-y-2 text-gray-300">
					<li>Essential cookies for site functionality.</li>
					<li>Analytics cookies to understand usage and improve performance.</li>
					<li>Preference cookies to remember your settings.</li>
				</ul>
				<p className="text-gray-300 mt-6">Questions? Email <a className="text-cyan-400 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
			</div>
		</>
	);
}