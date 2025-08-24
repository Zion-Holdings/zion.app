import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function CookiePolicyPage() {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="low">
			<Head>
				<title>Cookie Policy | Zion Tech Group</title>
				<meta name="description" content="Cookie policy describing how we use cookies and your choices." />
				<link rel="canonical" href="https://ziontechgroup.com/cookies" />
			</Head>
			<div className="container mx-auto px-4 py-16 text-gray-200 space-y-6">
				<h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
				<p>We use cookies and similar technologies to provide, secure, and improve our services.</p>
				<h2 className="text-2xl font-semibold">What are cookies?</h2>
				<p>Cookies are small text files stored on your device by your browser. They help websites remember information about your visit.</p>
				<h2 className="text-2xl font-semibold">How we use cookies</h2>
				<ul className="list-disc list-inside space-y-1">
					<li>Essential: necessary for site functionality (authentication, preferences)</li>
					<li>Analytics: to understand usage and improve the experience</li>
					<li>Marketing: to measure campaign performance (where applicable)</li>
				</ul>
				<h2 className="text-2xl font-semibold">Your choices</h2>
				<p>You can manage cookies in your browser settings. Blocking some cookies may impact site functionality.</p>
				<h2 className="text-2xl font-semibold">Contact</h2>
				<p>For questions, contact us at <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
			</div>
		</UltraFuturisticBackground>
	);
}