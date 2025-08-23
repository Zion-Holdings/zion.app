import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
	Star, Brain, Atom, Rocket, Shield, Globe, 
	Zap, Target, Users, Award, CheckCircle, ArrowRight
} from 'lucide-react';

export default function ServicesAdvertisingPage() {
	const services = [
		{
			id: 'ai-evaluation-orchestrator',
			name: 'AI Evaluation Orchestrator',
			description: 'Automate LLM evals, regression tests, red-teaming, and leaderboards across OpenAI, Anthropic, Groq, and more.',
			features: [
				'Automated LLM evaluation pipelines',
				'Regression testing and monitoring',
				'Red-teaming and safety testing',
				'Performance leaderboards',
				'Multi-provider support (OpenAI, Anthropic, Groq)',
				'Custom evaluation metrics'
			],
			budget: '$50–$400/mo + API usage',
			icon: <Brain className="w-8 h-8" />,
			color: 'from-purple-500 to-pink-500'
		},
		{
			id: 'vector-search-starter',
			name: 'Vector Search Starter',
			description: 'Production RAG starter with Pinecone/Weaviate/Elastic, eval harness, and observability.',
			features: [
				'Production-ready RAG implementation',
				'Vector database integration',
				'Evaluation and testing framework',
				'Performance monitoring',
				'Scalable architecture',
				'Custom embedding support'
			],
			budget: '$50–$1,000/mo',
			icon: <Target className="w-8 h-8" />,
			color: 'from-blue-500 to-cyan-500'
		},
		{
			id: 'managed-postgres-ha',
			name: 'Managed Postgres HA',
			description: 'SRE-backed high availability Postgres with PITR backups, failover, and tuning.',
			features: [
				'High availability setup',
				'Point-in-time recovery',
				'Automated failover',
				'Performance tuning',
				'24/7 monitoring',
				'Backup and disaster recovery'
			],
			budget: '$1,200–$5,000/mo',
			icon: <Shield className="w-8 h-8" />,
			color: 'from-green-500 to-emerald-500'
		},
		{
			id: 'ai-guardrails-safety',
			name: 'AI Guardrails & Safety',
			description: 'Policy engine, PII detection, jailbreak protection, and audit logs for LLM apps.',
			features: [
				'Policy enforcement engine',
				'PII detection and redaction',
				'Jailbreak protection',
				'Comprehensive audit logging',
				'Compliance monitoring',
				'Real-time threat detection'
			],
			budget: '$0–$500/mo',
			icon: <Shield className="w-8 h-8" />,
			color: 'from-red-500 to-orange-500'
		},
		{
			id: 'identity-sso-scim',
			name: 'Identity & SSO/SCIM',
			description: 'Enterprise SSO and user lifecycle with Okta/Auth0/WorkOS integration.',
			features: [
				'Single sign-on (SSO)',
				'User lifecycle management',
				'SCIM provisioning',
				'Multi-factor authentication',
				'Role-based access control',
				'Enterprise integration'
			],
			budget: '$100–$1,500/mo',
			icon: <Users className="w-8 h-8" />,
			color: 'from-indigo-500 to-purple-500'
		},
		{
			id: 'status-page-slo-monitor',
			name: 'Status Page & SLO Monitor',
			description: 'Public status pages, incident comms, and SLO/error budget tracking.',
			features: [
				'Public status pages',
				'Incident communication',
				'SLO monitoring',
				'Error budget tracking',
				'Performance metrics',
				'Customer notifications'
			],
			budget: '$20–$200/mo',
			icon: <Globe className="w-8 h-8" />,
			color: 'from-yellow-500 to-orange-500'
		},
		{
			id: 'tls-certificate-monitor',
			name: 'TLS Certificate Monitor',
			description: 'Expiry alerts, issuance auditing, and auto-renew guidance.',
			features: [
				'Certificate expiry monitoring',
				'Issuance auditing',
				'Auto-renewal guidance',
				'Security compliance',
				'Alert notifications',
				'Certificate inventory'
			],
			budget: '$5–$50/mo',
			icon: <CheckCircle className="w-8 h-8" />,
			color: 'from-teal-500 to-green-500'
		},
		{
			id: 'domain-dns-monitor',
			name: 'Domain & DNS Monitor',
			description: 'WHOIS, nameserver, and DNS record drift detection with alerts.',
			features: [
				'WHOIS monitoring',
				'DNS record tracking',
				'Drift detection',
				'Alert notifications',
				'Change history',
				'Security monitoring'
			],
			budget: '$5–$40/mo',
			icon: <Globe className="w-8 h-8" />,
			color: 'from-blue-500 to-indigo-500'
		}
	];

	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<SEO 
				title="Services Advertising | Zion Tech Group" 
				description="Comprehensive technology services and solutions from Zion Tech Group - AI, quantum computing, cybersecurity, and enterprise solutions" 
				canonical="https://ziontechgroup.com/services-advertising/" 
			/>
			
			<div className="max-w-7xl mx-auto space-y-16">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
						Zion Tech Group Services
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Revolutionary AI, quantum computing, and enterprise technology solutions that transform businesses and drive innovation
					</p>
				</motion.div>

				{/* Quick Contact */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50"
				>
					<a 
						href="tel:+13024640950" 
						className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
					>
						Call +1 302 464 0950
					</a>
					<a 
						href="mailto:kleber@ziontechgroup.com" 
						className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
					>
						Email kleber@ziontechgroup.com
					</a>
					<a 
						href="/pricing" 
						className="px-6 py-3 rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300"
					>
						View Pricing
					</a>
					<div className="text-slate-400 text-sm text-center md:text-left">
						<span className="block md:inline">Address: 364 E Main St STE 1008 Middletown DE 19709</span>
						<span className="hidden md:inline mx-2">·</span>
						<a 
							className="text-cyan-400 underline hover:text-cyan-300" 
							href="https://ziontechgroup.com" 
							target="_blank" 
							rel="noopener noreferrer"
						>
							ziontechgroup.com
						</a>
					</div>
				</motion.div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 * index }}
							className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
						>
							<div className="flex items-center gap-3 mb-4">
								<div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
									{service.icon}
								</div>
								<h2 className="text-xl font-semibold text-white">{service.name}</h2>
							</div>
							
							<p className="text-slate-300 text-sm mb-4 leading-relaxed">
								{service.description}
							</p>
							
							<div className="mb-4">
								<h3 className="text-white font-semibold mb-2">Key Features:</h3>
								<ul className="space-y-1">
									{service.features.slice(0, 4).map((feature, idx) => (
										<li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
											<CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
											{feature}
										</li>
									))}
								</ul>
							</div>
							
							<div className="flex items-center justify-between">
								<span className="text-cyan-400 font-semibold text-sm">
									{service.budget}
								</span>
								<a
									href={`/contact?service=${encodeURIComponent(service.name)}`}
									className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 transition-colors"
								>
									Learn More
									<ArrowRight className="w-4 h-4" />
								</a>
							</div>
						</motion.div>
					))}
				</div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50"
				>
					<h2 className="text-3xl font-bold text-white mb-4">
						Ready to Transform Your Business?
					</h2>
					<p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
						Join the future of technology with Zion Tech Group's revolutionary AI, quantum computing, and enterprise solutions.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="/contact"
							className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
						>
							Get Started Today
						</a>
						<a
							href="/pricing"
							className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
						>
							View Pricing
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	);
}