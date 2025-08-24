import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function LegalPage() {
	return (
		<>
			<SEO title="Legal | Zion Tech Group" description="Legal resources including privacy policy, terms of service, and cookies." canonical="/legal" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-6">Legal</h1>
				<ul className="list-disc ml-6 text-gray-300 space-y-2">
					<li><Link href="/privacy" className="text-cyan-400">Privacy Policy</Link></li>
					<li><Link href="/terms" className="text-cyan-400">Terms of Service</Link></li>
					<li><Link href="/cookies" className="text-cyan-400">Cookie Policy</Link></li>
				</ul>
			</div>
		</>
	);
}