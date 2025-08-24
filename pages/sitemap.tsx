import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SitemapPage() {
	const mainPages = [
		{ name: 'Home', href: '/', description: 'Welcome to Zion Tech Group' },
		{ name: 'About', href: '/about', description: 'Learn about our mission and vision' },
		{ name: 'Team', href: '/team', description: 'Meet our expert team' },
		{ name: 'Services', href: '/services', description: 'Explore our comprehensive services' },
		{ name: 'Solutions', href: '/solutions', description: 'Industry-specific solutions' },
		{ name: 'Pricing', href: '/pricing', description: 'Transparent pricing for all services' },
		{ name: 'Contact', href: '/contact', description: 'Get in touch with our team' },
		{ name: 'Blog', href: '/blog', description: 'Latest insights and updates' },
		{ name: 'Careers', href: '/careers', description: 'Join our team' },
		{ name: 'Trust', href: '/trust', description: 'Security and compliance information' }
	];

	const aiAutomationServices = [
		{ name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant', description: 'Advanced AI-powered research automation' },
		{ name: 'Advanced AI Automation Services', href: '/advanced-ai-automation-services', description: 'Comprehensive AI automation solutions' },
		{ name: 'Agentic RAG System', href: '/agentic-rag', description: 'Intelligent retrieval-augmented generation' },
		{ name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform', description: 'Next-generation quantum computing solutions' }
	];

	const cybersecurityServices = [
		{ name: 'Advanced Cybersecurity Suite', href: '/advanced-cybersecurity-suite', description: 'Comprehensive security protection' },
		{ name: 'SOC2 Compliance Automation', href: '/soc2-compliance-automation', description: 'Automated compliance management' }
	];

	const infrastructureServices = [
		{ name: 'Advanced IT Infrastructure Services', href: '/advanced-it-infrastructure-services', description: 'Enterprise-grade infrastructure solutions' },
		{ name: 'AI-Powered IT Asset Management', href: '/ai-powered-it-asset-management', description: 'Intelligent asset tracking and management' },
		{ name: '5G Enterprise Solutions', href: '/5g-enterprise-solutions', description: 'Next-generation network infrastructure' }
	];

	const businessOperationsServices = [
		{ name: 'Autonomous Business Operations Platform', href: '/autonomous-business-operations-platform', description: 'Self-managing business processes' },
		{ name: 'Advanced Research Automation', href: '/advanced-research-automation', description: 'Streamlined research workflows' }
	];

	const toolsAndUtilities = [
		{ name: 'URL Shortener', href: '/url-shortener', description: 'Professional URL shortening service' },
		{ name: 'Website Performance Monitor', href: '/website-performance-monitor', description: 'Real-time performance tracking' },
		{ name: 'WCAG Accessibility Scanner', href: '/wcag-accessibility-scanner', description: 'Web accessibility compliance checker' },
		{ name: 'Whitepaper Builder', href: '/whitepaper-builder', description: 'Professional document creation tool' }
	];

	const resources = [
		{ name: 'Documentation', href: '/docs', description: 'Comprehensive guides and API docs' },
		{ name: 'Technology Insights', href: '/technology-insights', description: 'Latest technology trends and insights' },
		{ name: 'Tool Comparison', href: '/tool-comparison', description: 'Compare different technology solutions' },
		{ name: 'Startup Tools', href: '/startup-tools', description: 'Essential tools for startups' }
	];

	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Sitemap | Zion Tech Group</title>
				<meta name="description" content="Complete overview of all pages and services available on the Zion Tech Group website." />
				<link rel="canonical" href="https://ziontechgroup.com/sitemap" />
			</Head>
			<div className="max-w-6xl mx-auto space-y-12">
				<div className="text-center">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Sitemap</h1>
					<p className="text-xl text-white/80 max-w-3xl mx-auto">
						Complete overview of all pages and services available on our website. Navigate easily to find what you're looking for.
					</p>
				</div>

				{/* Main Pages */}
				<div>
					<h2 className="text-2xl font-bold text-white mb-6">Main Pages</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{mainPages.map(page => (
							<Link 
								key={page.href} 
								href={page.href}
								className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group"
							>
								<div className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">{page.name}</div>
								<div className="text-white/60 text-sm mt-1">{page.description}</div>
							</Link>
						))}
					</div>
				</div>

				{/* AI & Automation Services */}
				<div>
					<h2 className="text-2xl font-bold text-white mb-6">🤖 AI & Automation Services</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{aiAutomationServices.map(service => (
							<Link 
								key={service.href} 
								href={service.href}
								className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group"
							>
								<div className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">{service.name}</div>
								<div className="text-white/60 text-sm mt-1">{service.description}</div>
							</Link>
						))}
					</div>
				</div>

				{/* Cybersecurity Services */}
				<div>
					<h2 className="text-2xl font-bold text-white mb-6">🔒 Cybersecurity Services</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{cybersecurityServices.map(service => (
							<Link 
								key={service.href} 
								href={service.href}
								className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group"
							>
								<div className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">{service.name}</div>
								<div className="text-white/60 text-sm mt-1">{service.description}</div>
							</Link>
						))}
					</div>
				</div>

				{/* Infrastructure Services */}
				<div>
					<h2 className="text-2xl font-bold text-white mb-6">🏗️ Infrastructure Services</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{infrastructureServices.map(service => (
							<Link 
								key={service.href} 
								href={service.href}
								className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group"
							>
								<div className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">{service.name}</div>
								<div className="text-white/60 text-sm mt-1">{service.description}</div>
							</Link>
						))}
					</div>
				</div>

				{/* Business Operations Services */}
				<div>
					<h2 className="text-2xl font-bold text-white mb-6">⚙️ Business Operations Services</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{businessOperationsServices.map(service => (
							<Link 
								key={service.href} 
								href={service.href}
								className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group"
							>
								<div className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">{service.name}</div>
								<div className="text-white/60 text-sm mt-1">{service.description}</div>
							</Link>
						))}
					</div>
				</div>

				{/* Tools & Utilities */}
				<div>
					<h2 className="text-2xl font-bold text-white mb-6">🛠️ Tools & Utilities</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{toolsAndUtilities.map(tool => (
							<Link 
								key={tool.href} 
								href={tool.href}
								className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group"
							>
								<div className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">{tool.name}</div>
								<div className="text-white/60 text-sm mt-1">{tool.description}</div>
							</Link>
						))}
					</div>
				</div>

				{/* Resources */}
				<div>
					<h2 className="text-2xl font-bold text-white mb-6">📚 Resources</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{resources.map(resource => (
							<Link 
								key={resource.href} 
								href={resource.href}
								className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group"
							>
								<div className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">{resource.name}</div>
								<div className="text-white/60 text-sm mt-1">{resource.description}</div>
							</Link>
						))}
					</div>
				</div>

				{/* Additional Services */}
				<div>
					<h2 className="text-2xl font-bold text-white mb-6">🚀 Additional Services</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						<Link 
							href="/services-advertising"
							className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group"
						>
							<div className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">Services Advertising</div>
							<div className="text-white/60 text-sm mt-1">Promote your services effectively</div>
						</Link>
						<Link 
							href="/market-pricing"
							className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group"
						>
							<div className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">Market Pricing</div>
							<div className="text-white/60 text-sm mt-1">Competitive pricing analysis</div>
						</Link>
						<Link 
							href="/comprehensive-2025-services-showcase"
							className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group"
						>
							<div className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">2025 Services Showcase</div>
							<div className="text-white/60 text-sm mt-1">Comprehensive service overview</div>
						</Link>
					</div>
				</div>

				{/* Quick Navigation */}
				<div className="text-center p-8 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
					<h2 className="text-2xl font-bold text-white mb-4">Need Help Finding Something?</h2>
					<p className="text-white/80 mb-6">
						Can't find what you're looking for? Our team is here to help you navigate our services and find the right solution.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href="/contact" 
							className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
						>
							Contact Us
						</Link>
						<Link 
							href="/services" 
							className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
						>
							Browse Services
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
