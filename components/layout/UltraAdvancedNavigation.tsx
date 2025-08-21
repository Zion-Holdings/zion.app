import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Menu, X, Zap, Brain, Atom, Building2, Monitor, DollarSign, Phone, Mail, FileText
} from 'lucide-react';

const UltraAdvancedNavigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const updateSize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		updateSize(); // Set initial value
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	const navigationItems: Array<{ name: string; href: string; icon?: React.ComponentType<any>; description?: string }>
		= [
			{ name: 'Home', href: '/' },
			{ name: 'AI', href: '/ai-services', icon: Brain, description: 'AI & ML services' },
			{ name: 'Quantum', href: '/quantum-cloud-infrastructure', icon: Atom, description: 'Quantum & space' },
			{ name: 'Enterprise IT', href: '/it-services', icon: Building2, description: 'Cloud, DevOps, Security' },
			{ name: 'Micro SaaS', href: '/micro-saas', icon: Monitor, description: 'Micro SaaS products' },
			{ name: 'Services', href: '/services', icon: Monitor, description: 'Directory of services' },
			{ name: 'Blog', href: '/blog', icon: FileText, description: 'Insights & updates' },
			{ name: 'Advertising', href: '/services-advertising', icon: DollarSign, description: 'Benefits & pricing references' },
			{ name: 'Market Pricing', href: '/market-pricing', icon: DollarSign, description: 'Vendor references' },
			{ name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Transparent, market-aligned pricing' },
			{ name: 'Contact', href: '/contact' }
		];

	return (
		<nav className="bg-gray-800 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					Your Logo
				</Link>

				{isMobile ? (
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-white focus:outline-none"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				) : (
					<div className="hidden md:flex space-x-6">
						{navigationItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="flex items-center space-x-2 hover:text-blue-300"
							>
								{item.icon && <item.icon size={20} />}
								<span>{item.name}</span>
								{item.description && (
									<span className="text-xs text-gray-400">{item.description}</span>
								)}
							</Link>
						))}
					</div>
				)}
			</div>

			{isOpen && (
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="absolute top-full left-0 w-full bg-gray-800 p-4 rounded-b-lg shadow-lg"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{navigationItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="flex items-center space-x-2 hover:text-blue-300"
								>
									{item.icon && <item.icon size={20} />}
									<span>{item.name}</span>
									{item.description && (
										<span className="text-xs text-gray-400">{item.description}</span>
									)}
								</Link>
							))}
						</div>
					</motion.div>
				</AnimatePresence>
			)}
		</nav>
	);
};

export default UltraAdvancedNavigation;