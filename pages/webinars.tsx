import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Video, Play, Clock, User, ArrowRight, CalendarDays, Sparkles } from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

const WebinarsPage: React.FC = () => {
	const sessions = [
		{
			title: 'Building Reliable Agentic Systems',
			length: '45 min',
			presenter: 'Lead AI Architect',
			description: 'Design patterns, guardrails, and evaluation for production-grade AI agents.',
			cta: 'Watch On-Demand'
		},
		{
			title: 'Quantum-Secure Cloud Explained',
			length: '35 min',
			presenter: 'Principal Researcher',
			description: 'How to adopt quantum-safe cryptography and prepare your infrastructure.',
			cta: 'Register Live'
		}
	];

	return (
		<UltraFuturisticBackground variant="quantum">
			<div className="min-h-screen">
				<Head>
					<title>Webinars - Zion Tech Group | Live and On-Demand Sessions</title>
					<meta name="description" content="Watch Zion Tech Group webinars covering AI agents, quantum infrastructure, security, and modern platform engineering. Live and on-demand." />
				</Head>

				<section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto text-center">
						<motion.h1 
							className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							Webinars
						</motion.h1>
						<motion.p 
							className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Learn the latest best practices in AI, quantum, and platform engineering from our experts.
						</motion.p>
					</div>
				</section>

				<section className="py-10 px-4 sm:px-6 lg:px-8">
					<div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
						{sessions.map((s) => (
							<div key={s.title} className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-400/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-300">
								<div className="flex items-start gap-4 mb-4">
									<div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
										<Video className="w-7 h-7" />
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-bold text-white">{s.title}</h3>
										<div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mt-2">
											<span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {s.length}</span>
											<span className="flex items-center gap-2"><User className="w-4 h-4" /> {s.presenter}</span>
										</div>
										<p className="text-gray-300 mt-4">{s.description}</p>
									</div>
								</div>
								<a href="/contact" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white mt-2">
									{s.cta} <ArrowRight className="w-4 h-4" />
								</a>
							</div>
						))}
					</div>
				</section>

				<section className="py-10 px-4 sm:px-6 lg:px-8">
					<div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
						<div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800/50">
							<h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2"><CalendarDays className="w-5 h-5 text-emerald-400" /> Looking for in-person?</h3>
							<p className="text-gray-300">Join us at upcoming conferences and meetups.</p>
							<a href="/events" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white mt-2">See Events <ArrowRight className="w-4 h-4" /></a>
						</div>
						<div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800/50">
							<h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2"><Play className="w-5 h-5 text-cyan-400" /> Topics We Cover</h3>
							<p className="text-gray-300">Agentic RAG, evals, quantum-safe cloud, observability, and FinOps automation.</p>
						</div>
					</div>
				</section>

			</div>
		</UltraFuturisticBackground>
	);
};

export default WebinarsPage;