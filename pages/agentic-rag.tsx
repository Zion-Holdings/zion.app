import React from 'react';
import Head from 'next/head';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';
import Button from '../components/ui/Button';
import { Database, Link, Gauge, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react';

export default function AgenticRAGPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	const plans = [
		{ name: 'Starter', price: '$199/month', items: ['100K tokens/month', 'Web/PDF ingestion', 'Basic reranker', 'CSV export'] },
		{ name: 'Pro', price: '$599/month', items: ['2M tokens/month', 'GitHub/S3 connectors', 'Hybrid search + rerank', 'Eval kits'] },
		{ name: 'Enterprise', price: 'Custom', items: ['Siloed indexes', 'SOC2/ISO support', 'Private VPC', 'SAML/SSO'] },
	];

	return (
		<UltraFuturisticMatrixBackground>
			<Head>
				<title>Agentic RAG Platform | Zion Tech Group</title>
				<meta name="description" content="High-accuracy retrieval augmented generation with ingestion, indexing, reranking, and evaluation built-in." />
				<link rel="canonical" href="https://ziontechgroup.com/agentic-rag" />
			</Head>

			<div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-4xl mx-auto mb-12">
					<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">Agentic RAG</h1>
					<p className="text-xl text-gray-300">Ingest everything. Retrieve precisely. Answer confidently with sources and chain-of-thought.</p>
					<div className="mt-6 flex justify-center gap-3">
						<Button href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl"><Rocket className="w-4 h-4 mr-2" />Request a Demo</Button>
						<Button href="/resources" variant="outline" className="border-gray-600 text-gray-200">Explore Docs</Button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
					{plans.map((p) => (
						<div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
							<h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
							<div className="text-cyan-400 font-semibold mb-4">{p.price}</div>
							<ul className="space-y-2 text-gray-300 text-sm">
								{p.items.map((i) => (
									<li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-400" /> <span>{i}</span></li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-gray-400 text-sm mb-2">Ingestion</div>
						<div className="text-white text-xl font-semibold flex items-center gap-2"><Link className="w-5 h-5 text-cyan-400" /> Connectors</div>
						<p className="text-gray-400 mt-2 text-sm">Web, PDFs, DOCX, Markdown, GitHub, and cloud storage with auto-chunking.</p>
					</div>
					<div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-gray-400 text-sm mb-2">Indexing</div>
						<div className="text-white text-xl font-semibold flex items-center gap-2"><Database className="w-5 h-5 text-purple-400" /> Hybrid + Rerank</div>
						<p className="text-gray-400 mt-2 text-sm">Embedding + keyword + reranker for fidelity. Namespace partitioning with filters.</p>
					</div>
					<div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-gray-400 text-sm mb-2">Evaluation</div>
						<div className="text-white text-xl font-semibold flex items-center gap-2"><Gauge className="w-5 h-5 text-rose-400" /> Accuracy & Sources</div>
						<p className="text-gray-400 mt-2 text-sm">Evals with reference answers, source grounding checks, and hallucination detection.</p>
					</div>
				</div>

				<div className="max-w-3xl mx-auto mt-16 bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
						<div className="flex items-center justify-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><span>{contactInfo.mobile}</span></div>
						<div className="flex items-center justify-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><span>{contactInfo.email}</span></div>
						<div className="flex items-center justify-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><span className="text-xs">{contactInfo.address}</span></div>
					</div>
					<div className="text-center">
						<Button href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Talk to Engineering</Button>
					</div>
				</div>
			</div>
		</UltraFuturisticMatrixBackground>
	);
}