import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

const TopContactBar: React.FC = () => {
	const phone = '+1 302 464 0950';
	const email = 'kleber@ziontechgroup.com';

	return (
		<div className="fixed top-0 inset-x-0 z-50">
			<div className="bg-gradient-to-r from-cyan-600/40 via-purple-600/40 to-fuchsia-600/40 backdrop-blur-md border-b border-white/10">
				<div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
					<div className="flex items-center gap-4">
						<a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 text-gray-200 hover:text-white">
							<Phone className="w-4 h-4 text-cyan-300" />
							<span>{phone}</span>
						</a>
						<a href={`mailto:${email}`} className="flex items-center gap-2 text-gray-200 hover:text-white">
							<Mail className="w-4 h-4 text-purple-300" />
							<span>{email}</span>
						</a>
					</div>
					<div className="hidden sm:flex items-center gap-3">
						<Link href="/pricing" className="text-gray-200 hover:text-white">Pricing</Link>
						<span className="text-gray-400">|</span>
						<Link href="/contact" className="text-gray-200 hover:text-white">Contact</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopContactBar;

