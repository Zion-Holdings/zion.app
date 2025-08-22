import React from 'react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';

export default function NotFoundPage() {
	return (
		<UltraFuturisticBackground>
			<SEO title="Page Not Found | Zion Tech Group" description="The page you are looking for doesn't exist." noIndex />
			<div className="container mx-auto px-4 py-24 text-center">
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Page Not Found</h1>
				<p className="text-gray-300 mb-8">The page you were looking for doesn't exist. Try one of the options below.</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button href="/" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl">Go Home</Button>
					<Button href="/services" variant="outline" className="border border-gray-600 text-gray-200">Browse Services</Button>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}