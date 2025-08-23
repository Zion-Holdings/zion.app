import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Target, 
  Zap, 
  ArrowRight,
  Check,
  Play,
  Phone,
  Mail,
  MapPin,
  Star,
  Cpu,
  Database,
  Cloud,
  Code,
  Users,
  BarChart3,
  Settings,
  Lock,
  Globe,
  TrendingUp
} from 'lucide-react';

const AIServicesLanding: React.FC = () => {
	const aiServices = [
		{
			title: 'AI Evaluation Orchestrator',
			description: 'Advanced AI evaluation and testing platform',
			href: '/ai-consciousness-evolution-2045',
			icon: Brain,
			color: 'from-purple-500 to-pink-500'
		},
		{
			title: 'AI Guardrails Suite',
			description: 'Comprehensive AI safety and compliance framework',
			href: '/ai-guardrails',
			icon: Shield,
			color: 'from-red-500 to-orange-500'
		},
		{
			title: 'Agentic RAG Platform',
			description: 'Intelligent retrieval-augmented generation system',
			href: '/agentic-rag',
			icon: Target,
			color: 'from-blue-500 to-cyan-500'
		},
		{
			title: 'AI Content Personalization',
			description: 'Dynamic content personalization engine',
			href: '/ai-content-personalization-engine',
			icon: Users,
			color: 'from-green-500 to-emerald-500'
		},
		{
			title: 'AI Decision Engine',
			description: 'Advanced AI-powered decision making platform',
			href: '/ai-powered-decision-engine',
			icon: Cpu,
			color: 'from-indigo-500 to-purple-500'
		},
		{
			title: 'AI Autonomous Business Operations',
			description: 'Fully automated business process management',
			href: '/ai-autonomous-business-operations',
			icon: BarChart3,
			color: 'from-yellow-500 to-orange-500'
		},
		{
			title: 'AI Support Triage Router',
			description: 'Intelligent customer support routing system',
			href: '/ai-support-triage-router',
			icon: Settings,
			color: 'from-teal-500 to-cyan-500'
		},
		{
			title: 'AI Code Review Assistant Pro',
			description: 'Advanced code review and analysis platform',
			href: '/ai-code-review-assistant-pro',
			icon: Code,
			color: 'from-pink-500 to-rose-500'
		},
		{
			title: 'AI Revenue Forecasting Copilot',
			description: 'Intelligent revenue prediction and analysis',
			href: '/ai-revenue-forecasting-copilot',
			icon: TrendingUp,
			color: 'from-emerald-500 to-green-500'
		}
	];

	const features = [
		'Production-ready AI services',
		'Advanced evaluation systems',
		'Safety guardrails',
		'RAG agents',
		'Content personalization',
		'Analytics and insights',
		'Enterprise-grade security',
		'Scalable infrastructure',
		'24/7 support',
		'Custom integrations'
	];

	const benefits = [
		'Faster AI deployment',
		'Improved accuracy',
		'Enhanced safety',
		'Cost optimization',
		'Risk mitigation',
		'Competitive advantage',
		'Innovation acceleration',
		'Operational efficiency'
	];

	return (
		<Layout 
			title="AI Services | Zion Tech Group"
			description="Explore our comprehensive AI platforms and solutions including evals, guardrails, agents, and personalization."
			keywords="AI services, AI platforms, AI solutions, AI evaluation, AI guardrails, Zion Tech Group"
			canonicalUrl="https://ziontechgroup.com/ai-services"
		>
			{/* Hero Section */}
			<section className="relative py-24 lg:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
				<div className="relative z-10 container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
							<Brain className="w-5 h-5 text-purple-400" />
							<span className="text-purple-300 text-sm font-medium">AI Services Platform</span>
						</div>
						
						<h1 className="text-5xl lg:text-7xl font-bold mb-6">
							<span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
								AI Services
							</span>
						</h1>
						
						<p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
							Production-ready AI services: evals, safety guardrails, RAG agents, personalization, and analytics. 
							Transform your business with cutting-edge AI technology.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
								<Play className="w-5 h-5" />
								Watch Demo
							</button>
							<button className="border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2">
								<Phone className="w-5 h-5" />
								Contact Sales
							</button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* AI Services Grid */}
			<section className="py-24 bg-black/50">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl lg:text-5xl font-bold mb-6">
							<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
								AI Services Portfolio
							</span>
						</h2>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Comprehensive AI solutions designed to accelerate your digital transformation and drive innovation.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{aiServices.map((service, index) => (
							<motion.a
								key={service.title}
								href={service.href}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-slate-900/50 border border-gray-700/60 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
							>
								<div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
									<service.icon className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
									{service.title}
								</h3>
								<p className="text-gray-300 text-sm mb-4">
									{service.description}
								</p>
								<div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
									<span className="text-sm font-medium">Learn More</span>
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
								</div>
							</motion.a>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl lg:text-5xl font-bold mb-6">
							<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
								Platform Features
							</span>
						</h2>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Enterprise-grade AI services with advanced capabilities and comprehensive support.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={feature}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
							>
								<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
									<Check className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">{feature}</h3>
								<p className="text-gray-300">
									Professional AI services designed for enterprise deployment and scalability.
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-24 bg-black/50">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl lg:text-5xl font-bold mb-6">
							<span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
								Business Benefits
							</span>
						</h2>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Transform your operations and gain competitive advantages with our AI services.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{benefits.map((benefit, index) => (
							<motion.div
								key={benefit}
								initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="flex items-start gap-4"
							>
								<div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
									<Star className="w-5 h-5 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
									<p className="text-gray-300">
										Leverage AI technology to drive business growth and operational excellence.
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl lg:text-5xl font-bold mb-6">
							<span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
								Ready to Transform?
							</span>
						</h2>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
							Start your AI transformation journey with our comprehensive services and expert support.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
								Get Started
								<ArrowRight className="w-5 h-5" />
							</button>
							<button className="border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2">
								<Phone className="w-5 h-5" />
								+1 302 464 0950
							</button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-24">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<h2 className="text-4xl lg:text-5xl font-bold mb-6">
								<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
									Get in Touch
								</span>
							</h2>
							<p className="text-xl text-gray-300 mb-12">
								Ready to revolutionize your AI capabilities? Contact our team today.
							</p>
							
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								<div className="flex flex-col items-center gap-4">
									<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
										<Phone className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-xl font-semibold text-white">Phone</h3>
									<p className="text-gray-300">+1 302 464 0950</p>
								</div>
								
								<div className="flex flex-col items-center gap-4">
									<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
										<Mail className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-xl font-semibold text-white">Email</h3>
									<p className="text-gray-300">kleber@ziontechgroup.com</p>
								</div>
								
								<div className="flex flex-col items-center gap-4">
									<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
										<MapPin className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-xl font-semibold text-white">Address</h3>
									<p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default AIServicesLanding;
