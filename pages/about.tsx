import SEO from '../components/SEO';
import Link from 'next/link';

export default function AboutPage() {
	return (
		<div className="min-h-screen pt-24 pb-16">
			<SEO title="About | Zion Tech Group" description="Learn about Zion Tech Group's mission and solutions." canonical="https://ziontechgroup.com/about/" />
			<div className="container mx-auto px-4 max-w-4xl">
				<h1 className="text-4xl md:text-5xl font-bold gradient-text-cyan-purple mb-6">About Zion Tech Group</h1>
				<p className="text-gray-300 mb-6">We build AI-first, cloud-native platforms and micro SaaS products that drive measurable business outcomes. Our team combines deep engineering with pragmatic delivery.</p>
				<div className="grid sm:grid-cols-2 gap-4 mb-10">
					<a href="tel:+13024640950" className="px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center">Call +1 302 464 0950</a>
					<a href="mailto:kleber@ziontechgroup.com" className="px-4 py-3 rounded-lg border border-cyan-500/40 text-cyan-300 text-center">kleber@ziontechgroup.com</a>
				</div>
				<p className="text-sm text-gray-400">Address: 364 E Main St STE 1008 Middletown DE 19709</p>
				<div className="mt-8"><Link href="/services" className="text-cyan-300 underline">Explore our services</Link></div>
			</div>
		</div>
	);
}