import React from 'react';
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function EventsPage() {
	return (
		<UltraAdvancedFuturisticBackground>
			<SEO title="Events | Zion Tech Group" description="Upcoming events, webinars, and conferences from Zion Tech Group." canonical="https://ziontechgroup.com/events/" />
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto space-y-6">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Events</h1>
					<p className="text-slate-300">Check back soon for upcoming events and webinars. For speaking requests, contact us at <a className="underline text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}