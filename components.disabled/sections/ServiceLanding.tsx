import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, DollarSign, Phone, Mail, ArrowRight } from 'lucide-react';

interface ServiceLandingProps {
	title: string;
	slug?: string;
	description: string;
	subtitle?: string;
	pricePerMonthUSD?: number;
	implementationWeeks?: string;
	roiNote?: string;
	features: string[];
	industries?: string[];
	ctaHref?: string;
	canonical?: string;
}

export default function ServiceLanding(props: ServiceLandingProps) {
	const {
		title,
		slug,
		description,
		subtitle,
		pricePerMonthUSD,
		implementationWeeks,
		roiNote,
		features,
		industries,
		ctaHref,
		canonical
	} = props;

	const price = typeof pricePerMonthUSD === 'number' ? `$${pricePerMonthUSD.toLocaleString()}/month` : undefined;
	const contactHref = ctaHref || '/contact';

	return (
		<>
			<Head>
				<title>{title} | Zion Tech Group</title>
				<meta name="description" content={description} />
				{canonical ? <link rel="canonical" href={canonical} /> : null}
			</Head>
			<section className="relative py-16 lg:py-24">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-3 gap-10">
						<div className="lg:col-span-2">
							<motion.h1 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} transition={{duration:.5}} className="text-3xl md:text-5xl font-extrabold text-white mb-4">
								{title}
							</motion.h1>
							{subtitle ? (
								<p className="text-gray-300 text-lg mb-6">{subtitle}</p>
							) : null}
							<p className="text-gray-300 leading-relaxed mb-8">{description}</p>

							<div className="grid sm:grid-cols-2 gap-4 mb-10">
								{features.map((feature) => (
									<div key={feature} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
										<CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
										<p className="text-gray-200 text-sm">{feature}</p>
									</div>
								))}
							</div>

							{industries && industries.length > 0 ? (
								<div className="mb-10">
									<h3 className="text-white font-semibold mb-3">Best for</h3>
									<div className="flex flex-wrap gap-2">
										{industries.map((i) => (
											<span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300 border border-white/10">{i}</span>
										))}
									</div>
								</div>
							) : null}
						</div>

						<div>
							<div className="sticky top-28 p-6 rounded-2xl bg-white/5 border border-white/10">
								<div className="space-y-4">
									{price ? (
										<div className="flex items-end gap-2">
											<span className="text-3xl font-bold text-white">{price.replace('/month','')}</span>
											<span className="text-gray-400 text-sm">/month</span>
										</div>
									) : null}
									{implementationWeeks || roiNote ? (
										<div className="text-sm text-gray-400 space-y-1">
											{implementationWeeks ? <div className="flex items-center gap-2"><ClockIcon /><span>{implementationWeeks}</span></div> : null}
											{roiNote ? <div className="flex items-center gap-2"><DollarSign className="w-3 h-3" /><span>{roiNote}</span></div> : null}
										</div>
									) : null}

									<div className="flex flex-col gap-3 pt-2">
										<Link href={contactHref} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all">
											<span>Get a Demo</span>
											<ArrowRight className="w-4 h-4" />
										</Link>
										<a href="tel:+13024640950" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all">
											<Phone className="w-4 h-4" />
											<span>+1 302 464 0950</span>
										</a>
										<a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all">
											<Mail className="w-4 h-4" />
											<span>kleber@ziontechgroup.com</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

function ClockIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
	);
}