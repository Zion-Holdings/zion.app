import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import ContactForm from '../components/ContactForm';

export default function ContactLanding() {
	return (
		<UltraFuturisticBackground variant="contact" intensity="high">
			<Head>
				<title>Contact Us | Zion Tech Group</title>
				<meta name="description" content="Get in touch with Zion Tech Group for AI, quantum computing, cybersecurity, and enterprise technology solutions. Contact: +1 302 464 0950." />
				<link rel="canonical" href="https://ziontechgroup.com/contact" />
			</Head>
			<div className="container mx-auto px-4 py-24 space-y-12 text-white">
				<div className="text-center space-y-6">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Contact Us</h1>
					<p className="text-gray-300 max-w-3xl mx-auto">Ready to transform your business with cutting-edge technology? Let's discuss how we can help you achieve your goals.</p>
				</div>
				
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div className="space-y-8">
						<div>
							<h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
							<div className="space-y-4">
								<div className="flex items-center space-x-3">
									<span className="text-blue-400">📞</span>
									<span>+1 302 464 0950</span>
								</div>
								<div className="flex items-center space-x-3">
									<span className="text-blue-400">✉️</span>
									<span>kleber@ziontechgroup.com</span>
								</div>
								<div className="flex items-center space-x-3">
									<span className="text-blue-400">📍</span>
									<span>364 E Main St STE 1008<br />Middletown DE 19709</span>
								</div>
								<div className="flex items-center space-x-3">
									<span className="text-blue-400">🌐</span>
									<span>https://ziontechgroup.com</span>
								</div>
							</div>
						</div>
						
						<div>
							<h2 className="text-2xl font-bold mb-4">Our Services</h2>
							<div className="grid grid-cols-1 gap-3">
								<a href="/ai-services" className="text-blue-400 hover:text-blue-300">AI & Machine Learning</a>
								<a href="/quantum-computing" className="text-blue-400 hover:text-blue-300">Quantum Computing</a>
								<a href="/cybersecurity" className="text-blue-400 hover:text-blue-300">Cybersecurity</a>
								<a href="/cloud-platform" className="text-blue-400 hover:text-blue-300">Cloud Solutions</a>
								<a href="/data-analytics" className="text-blue-400 hover:text-blue-300">Data Analytics</a>
								<a href="/devops-automation" className="text-blue-400 hover:text-blue-300">DevOps & Automation</a>
							</div>
						</div>
					</div>
					
					<div>
						<ContactForm />
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}
