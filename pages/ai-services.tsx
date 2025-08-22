import SEO from '../components/SEO';
import Link from 'next/link';
import { additionalEnhancedServices } from '../data/additional-real-services';

export default function AIServicesPage() {
	const featured = additionalEnhancedServices.filter((s) => (s.category || '').toLowerCase().includes('ai')).slice(0, 6);
	return (
		<div className="min-h-screen pt-24 pb-16">
			<SEO title="AI Services | Zion Tech Group" description="LLM, RAG, MLOps, AI guardrails, vector search and more." canonical="https://ziontechgroup.com/ai-services/" />
			<div className="container mx-auto px-4 max-w-6xl">
				<h1 className="text-4xl md:text-6xl font-bold gradient-text-cyan-purple mb-6">AI Services</h1>
				<p className="text-gray-300 mb-8">From production RAG and vector search to AI guardrails and evaluation, we help teams ship AI responsibly and fast.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{featured.map((s) => (
						<Link key={s.id} href={`/services/${s.id}`} className="p-6 rounded-xl bg-white/5 border border-cyan-500/20 hover:border-cyan-400 transition">
							<h3 className="text-lg font-semibold text-white mb-2">{s.name}</h3>
							<p className="text-sm text-gray-300">{s.tagline || s.description}</p>
						</Link>
					))}
				</div>
				<div className="mt-10">
					<Link href={'/services?category=' + encodeURIComponent('AI & Machine Learning')} className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Browse all AI services</Link>
				</div>
			</div>
		</div>
	);
}
