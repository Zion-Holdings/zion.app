import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

export default function LegalPage() {
	return (
		<>
			<Head>
				<title>Legal | Zion Tech Group</title>
				<meta name="description" content="Legal information, privacy policy, and terms of service for Zion Tech Group." />
				<link rel="canonical" href="https://ziontechgroup.com/legal/" />
			</Head>
			<Layout>
				<section className="min-h-[60vh] px-4 py-24">
					<h1 className="text-5xl font-bold mb-8">Legal</h1>
					<p className="text-gray-300 mb-6">For full legal details, view our policies:</p>
					<ul className="list-disc list-inside space-y-2 text-cyan-300">
						<li><Link href="/terms">Terms of Service</Link></li>
						<li><Link href="/privacy">Privacy Policy</Link></li>
						<li><Link href="/cookies">Cookie Policy</Link></li>
					</ul>
				</section>
			</Layout>
		</>
	);
}