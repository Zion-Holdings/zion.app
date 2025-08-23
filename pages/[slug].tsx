import React from 'react';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import SEO from '../components/SEO';

interface PageProps {
	title: string;
	slug: string;
	description: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const dataPath = path.join(process.cwd(), 'data', 'missing-slugs.json');
	let slugs: string[] = [];
	try {
		const content = fs.readFileSync(dataPath, 'utf8');
		slugs = JSON.parse(content);
	} catch {
		slugs = [];
	}

	const paths = slugs
		.filter(Boolean)
		.map((s) => ({ params: { slug: s } }));

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
	const slug = String(params?.slug || '');
	const title = slug
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
	return {
		props: {
			title,
			slug,
			description: `This page for ${title} is coming soon. In the meantime, explore our services and pricing.`
		}
	};
};

export default function DynamicPage({ title, slug, description }: PageProps) {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com';
	const canonical = `${baseUrl.replace(/\/$/, '')}/${slug}/`;
	
	return (
		<>
			<SEO 
				data={{
					pageTitle: `${title} | Zion Tech Group`,
					pageDescription: description,
					pageKeywords: [title, 'Services', 'Technology']
				}}
			/>
			<div className="container mx-auto px-4 py-16">
				<nav className="text-sm text-gray-400 mb-6">
					<Link href="/" className="hover:text-white">Home</Link>
					<span className="mx-2">/</span>
					<span className="text-gray-300">{title}</span>
				</nav>
				<h1 className="text-4xl font-bold mb-4">{title}</h1>
				<p className="text-gray-300 mb-8">{description}</p>
				<div className="flex gap-4">
					<Link href="/services" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Browse Services</Link>
					<Link href="/pricing" className="px-6 py-3 rounded-lg border border-cyan-500/40 text-cyan-300">View Pricing</Link>
					<Link href="/contact" className="px-6 py-3 rounded-lg border border-gray-700 text-gray-200">Contact Sales</Link>
				</div>
				<div className="mt-12 text-sm text-gray-500">Auto-generated route: /{slug}</div>
			</div>
		</>
	);
}