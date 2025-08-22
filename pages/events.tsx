import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Calendar, Video, MapPin, Clock, ArrowRight, Mic2, Users, Sparkles } from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

const EventsPage: React.FC = () => {
	const upcomingEvents = [
		{
			title: 'AI Innovation Summit 2025',
			date: '2025-10-12',
			location: 'San Francisco, CA',
			description: 'Explore the latest breakthroughs in AI, agentic systems, and automation with live demos and workshops.',
			cta: 'Register Now'
		},
		{
			title: 'Quantum Computing for Enterprise',
			date: '2025-11-03',
			location: 'New York, NY',
			description: 'Practical strategies to adopt quantum-ready infrastructure and secure communications.',
			cta: 'Save Your Seat'
		}
	];

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	};

	return (
		<UltraFuturisticBackground variant="quantum">
			<div className="min-h-screen">
				<Head>
					<title>Events - Zion Tech Group | Conferences, Meetups, and Live Sessions</title>
					<meta name="description" content="Join Zion Tech Group at upcoming events, conferences, and meetups. Discover AI, quantum, and micro SaaS innovations with live demos and workshops." />
				</Head>

				<section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto text-center">
						<motion.h1 
							className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							Events
						</motion.h1>
						<motion.p 
							className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Meet our team, see live demos, and learn from experts at our flagship events.
						</motion.p>
					</div>
				</section>

				<section className="py-10 px-4 sm:px-6 lg:px-8">
					<div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
						{upcomingEvents.map((event) => (
							<div key={event.title} className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-300">
								<div className="flex items-start gap-4 mb-4">
									<div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
										<Calendar className="w-7 h-7" />
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-bold text-white">{event.title}</h3>
										<div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mt-2">
											<span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {formatDate(event.date)}</span>
											<span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {event.location}</span>
										</div>
										<p className="text-gray-300 mt-4">{event.description}</p>
									</div>
								</div>
								<a href="/contact" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white mt-2">
									{event.cta} <ArrowRight className="w-4 h-4" />
								</a>
							</div>
						))}
					</div>
				</section>

				<section className="py-10 px-4 sm:px-6 lg:px-8">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3"><Users className="w-7 h-7 text-cyan-400" /> Why Attend</h2>
						<ul className="grid gap-4 md:grid-cols-3 text-gray-300">
							<li className="bg-gray-900/40 rounded-2xl p-6 border border-gray-800/50">Live AI & quantum demos</li>
							<li className="bg-gray-900/40 rounded-2xl p-6 border border-gray-800/50">Expert workshops and labs</li>
							<li className="bg-gray-900/40 rounded-2xl p-6 border border-gray-800/50">1:1 solution architecture</li>
						</ul>
					</div>
				</section>

				<section className="py-10 px-4 sm:px-6 lg:px-8">
					<div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
						<div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800/50">
							<h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2"><Video className="w-5 h-5 text-purple-400" /> Prefer virtual?</h3>
							<p className="text-gray-300">Check out our live and on-demand sessions.</p>
							<a href="/webinars" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white mt-2">Explore Webinars <ArrowRight className="w-4 h-4" /></a>
						</div>
						<div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800/50">
							<h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2"><Mic2 className="w-5 h-5 text-emerald-400" /> Speaking & Sponsorship</h3>
							<p className="text-gray-300">Partner with us for talks, panels, or community meetups.</p>
							<a href="/contact" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white mt-2">Contact Us <ArrowRight className="w-4 h-4" /></a>
						</div>
					</div>
				</section>

			</div>
		</UltraFuturisticBackground>
	);
};

export default EventsPage;