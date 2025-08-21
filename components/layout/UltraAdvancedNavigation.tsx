import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Menu, X, Zap, Brain, Atom, Building2, Monitor, DollarSign, Phone, Mail
} from 'lucide-react';
const navContainerVariants = {
	hidden: { opacity: 0, y: -10 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const UltraAdvancedNavigation: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const navigationItems: Array<{ name: string; href: string; icon?: React.ComponentType<any>; description?: string }>
		= [
			{ name: 'Home', href: '/' },
			{ name: 'AI', href: '/ai-services', icon: Brain, description: 'AI & ML services' },
			{ name: 'Quantum', href: '/quantum-cloud-infrastructure', icon: Atom, description: 'Quantum & space' },
			{ name: 'Enterprise IT', href: '/it-services', icon: Building2, description: 'Cloud, DevOps, Security' },
			{ name: 'Micro SaaS', href: '/micro-saas', icon: Monitor, description: 'Micro SaaS products' },
			{ name: 'Services', href: '/services', icon: Monitor, description: 'Directory of services' },
			{ name: 'Advertising', href: '/services-advertising', icon: DollarSign, description: 'Benefits & pricing references' },
			{ name: 'Market Pricing', href: '/market-pricing', icon: DollarSign, description: 'Vendor references' },
			{ name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Transparent, market-aligned pricing' },
			{ name: 'Contact', href: '/contact' }
		];
	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' : 'bg-transparent'
			}`}
			aria-label="Primary"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={navContainerVariants}
						className="flex items-center"
					>
						<Link href="/" className="flex items-center space-x-3 group">
							<div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Zap className="w-6 h-6 text-white" />
							</div>
							<div className="hidden sm:block">
								<div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
									Zion Tech Group
								</div>
								<div className="text-xs text-gray-400">AI • Quantum • IT</div>
							</div>
						</Link>
					</motion.div>

					{/* Desktop nav */}
					<div className="hidden lg:flex items-center space-x-6">
						{navigationItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
							>
								{item.icon ? <item.icon className="w-4 h-4" /> : null}
								<span>{item.name}</span>
							</Link>
						))}
					</div>

					{/* Right side CTA */}
					<div className="hidden lg:flex items-center space-x-6">
						<a href="tel:+13024640950" className="text-sm text-gray-300 hover:text-white flex items-center gap-2">
							<Phone className="w-4 h-4" /> +1 302 464 0950
						</a>
						<a href="mailto:kleber@ziontechgroup.com" className="text-sm text-gray-300 hover:text-white flex items-center gap-2">
							<Mail className="w-4 h-4" /> Email
						</a>
						<motion.a
							href="/contact"
							className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Contact Sales
						</motion.a>
					</div>

					{/* Mobile menu button */}
					<div className="lg:hidden">
						<button
							aria-label="Toggle menu"
							className="p-2 rounded-lg bg-white/5 border border-white/10"
							onClick={() => setIsOpen((v) => !v)}
						>
							{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile panel */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="lg:hidden border-t border-gray-800/50 bg-black/90 backdrop-blur-xl"
					>
						<div className="px-4 py-4 space-y-2">
							{navigationItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="block px-3 py-3 rounded-lg hover:bg-white/5 text-gray-200"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</Link>
							))}
							<div className="pt-2 flex gap-3">
								<a href="tel:+13024640950" className="flex-1 text-center border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200">Call</a>
								<a href="mailto:kleber@ziontechgroup.com" className="flex-1 text-center border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200">Email</a>
							</div>
							<Link href="/contact" className="mt-2 block text-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">
								Contact Sales
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default UltraAdvancedNavigation;