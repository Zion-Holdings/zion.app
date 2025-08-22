import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { added2026Q2Services } from '../../data/added-2026-q2-services';

const DATA = [...additionalEnhancedServices, ...added2026Q2Services];

type Service = (typeof DATA)[number];

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = DATA.map((s) => ({ params: { slug: s.id } }));
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ service: Service }> = async ({ params }) => {
	const slug = String(params?.slug || '');
	const service = DATA.find((s) => s.id === slug);
	if (!service) return { notFound: true } as const;
	return { props: { service } };
};

export default function ServiceDetail({ service }: InferGetStaticPropsType<typeof getStaticProps>) {
	const title = `${service.name} | Zion Tech Group`;
	const description = service.description || service.tagline || 'Service details';
	const price = typeof (service as any).price === 'string' ? `${(service as any).price}${(service as any).period || ''}` : (service as any).price?.monthly ? `$${(service as any).price.monthly}/month` : 'Contact for pricing';

	return (
		<div className="container mx-auto px-4 py-16">
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={`https://ziontechgroup.com/services/${service.id}/`} />
			</Head>
			<nav className="text-sm text-gray-400 mb-6">
				<Link href="/" className="hover:text-white">Home</Link>
				<span className="mx-2">/</span>
				<Link href="/services" className="hover:text-white">Services</Link>
				<span className="mx-2">/</span>
				<span className="text-gray-300">{service.name}</span>
			</nav>
			<h1 className="text-4xl font-bold mb-4 gradient-text-cyan-purple">{service.name}</h1>
			<p className="text-gray-300 max-w-3xl mb-8">{description}</p>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<div className="lg:col-span-2 space-y-6">
					<div className="p-6 rounded-xl bg-white/5 border border-cyan-500/20">
						<h2 className="text-xl font-semibold mb-4 text-cyan-300">Key Features</h2>
						<ul className="list-disc list-inside text-gray-300 space-y-2">
							{(service.features || []).map((f, idx) => (<li key={idx}>{f}</li>))}
						</ul>
					</div>
					{(service.useCases?.length || 0) > 0 && (
						<div className="p-6 rounded-xl bg-white/5 border border-cyan-500/20">
							<h2 className="text-xl font-semibold mb-4 text-cyan-300">Use Cases</h2>
							<ul className="list-disc list-inside text-gray-300 space-y-2">
								{(service.useCases || []).map((u, idx) => (<li key={idx}>{u}</li>))}
							</ul>
						</div>
					)}
				</div>
				<aside className="space-y-4">
					<div className="p-6 rounded-xl bg-white/5 border border-cyan-500/20">
						<div className="text-sm text-gray-400">Starting at</div>
						<div className="text-3xl font-bold">{price}</div>
						<div className="mt-4 space-y-2 text-sm text-gray-300">
							{service.setupTime && <div>Setup: {service.setupTime}</div>}
							{service.trialDays && <div>Free trial: {service.trialDays} days</div>}
						</div>
						<div className="mt-6 grid grid-cols-1 gap-2">
							<a href="/contact" className="px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center">Contact Sales</a>
							<a href="tel:+13024640950" className="px-4 py-3 rounded-lg border border-cyan-500/40 text-cyan-300 text-center">Call +1 302 464 0950</a>
							<a href="mailto:kleber@ziontechgroup.com" className="px-4 py-3 rounded-lg border border-cyan-500/40 text-cyan-300 text-center">Email Us</a>
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
}