import React from 'react';
import { professionalServices } from '../../data/professional-services';
import { ArrowRight, CheckCircle, DollarSign, Mail, Phone } from 'lucide-react';

interface ServiceLandingProps {
	serviceId: string;
}

export default function ServiceLanding({ serviceId }: ServiceLandingProps) {
	const service = professionalServices.find(s => s.id === serviceId);

	if (!service) {
		return (
			<section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
						Service Coming Soon
					</h1>
					<p className="text-gray-300">We are preparing this offering. Please contact us for early access.</p>
					<div className="mt-8 flex justify-center gap-4">
						<a href="/contact" className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg">
							Contact Us <ArrowRight className="w-5 h-5 ml-2" />
						</a>
					</div>
				</div>
			</section>
		);
	}

	const priceLabel = typeof (service as any).price === 'number'
		? `$${(service as any).price.toLocaleString()}${(service as any).period || '/month'}`
		: `${(service as any).price}${(service as any).period || ''}`;

	return (
		<section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<header className="mb-10 text-center">
					<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
						{service.name}
					</h1>
					<p className="text-gray-300 text-lg max-w-3xl mx-auto">{service.tagline}</p>
				</header>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2 space-y-6">
						<div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
							<h2 className="text-2xl font-semibold text-white mb-3">Overview</h2>
							<p className="text-gray-300 leading-relaxed">{service.description}</p>
						</div>

						<div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
							<h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
							<ul className="space-y-2">
								{service.features.slice(0, 8).map((f, i) => (
									<li key={i} className="flex items-start gap-2 text-gray-200">
										<CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
										<span>{f}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
								<h3 className="text-xl font-semibold text-white mb-3">Use Cases</h3>
								<ul className="list-disc list-inside text-gray-300 space-y-1">
									{service.useCases?.map((u, i) => <li key={i}>{u}</li>)}
								</ul>
							</div>
							<div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
								<h3 className="text-xl font-semibold text-white mb-3">Integrations</h3>
								<ul className="list-disc list-inside text-gray-300 space-y-1">
									{(service.integrations as any)?.map((u: string, i: number) => <li key={i}>{u}</li>)}
								</ul>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						<div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/30">
							<div className="text-sm text-gray-400 mb-1">From</div>
							<div className="text-3xl font-bold text-white flex items-center gap-2">
								<DollarSign className="w-6 h-6 text-cyan-400" /> {priceLabel}
							</div>
							{(service as any).trialDays ? (
								<div className="text-sm text-gray-400 mt-1">Free trial: {(service as any).trialDays} days</div>
							) : null}
							<div className="mt-4 grid grid-cols-1 gap-3">
								<a href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg">
									Talk to Sales <ArrowRight className="w-5 h-5 ml-2" />
								</a>
								<a href="/market-pricing" className="inline-flex items-center justify-center bg-black/40 border border-gray-700/60 text-gray-200 font-semibold py-3 px-4 rounded-lg">
									View Market Pricing
								</a>
							</div>
						</div>

						<div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
							<h3 className="text-xl font-semibold text-white mb-2">ROI & Positioning</h3>
							<p className="text-gray-300"><span className="font-semibold text-cyan-300">ROI:</span> {service.roi}</p>
							<p className="text-gray-300 mt-2"><span className="font-semibold text-cyan-300">Market Position:</span> {service.marketPosition}</p>
						</div>

						<div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
							<h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
							<div className="space-y-2 text-gray-300">
								<a className="flex items-center gap-2" href={`tel:${(service as any).contactInfo?.mobile?.replace(/[^+\d]/g, '') || ''}`}>
									<Phone className="w-4 h-4 text-cyan-400" /> {(service as any).contactInfo?.mobile}
								</a>
								<a className="flex items-center gap-2" href={`mailto:${(service as any).contactInfo?.email || ''}`}>
									<Mail className="w-4 h-4 text-purple-400" /> {(service as any).contactInfo?.email}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}