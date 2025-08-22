import React from 'react';
import SEO from '../components/SEO';

export default function TeamPage() {
	return (
		<>
			<SEO title="Our Team | Zion Tech Group" description="Meet the leadership team at Zion Tech Group." canonical="/team" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Our Team</h1>
				<p className="text-gray-300 mb-8">Profiles coming soon. For inquiries, contact us.</p>
			</div>
		</>
	);
}