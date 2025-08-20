import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

type ReportsIndexProps = {
	updates: Array<{ title: string; href: string; dateKey: string }>;
};

export async function getStaticProps() {
	const updatesDir = path.join(process.cwd(), 'pages', 'reports', 'updates');
	let updates: Array<{ title: string; href: string; dateKey: string }> = [];
	try {
		const files = fs.readdirSync(updatesDir);
		updates = files
			.filter((file) => file.endsWith('.tsx') || file.endsWith('.mdx') || file.endsWith('.md'))
			.map((file) => {
				const name = file.replace(/\.(tsx|mdx|md)$/i, '');
				return {
					title: name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
					href: `/reports/updates/${name}`,
					dateKey: name,
				};
			})
			.sort((a, b) => (a.dateKey < b.dateKey ? 1 : -1));
	} catch {
		updates = [];
	}

	return { props: { updates } };
}

export default function ReportsIndexPage({ updates }: ReportsIndexProps) {
	return (
		<>
			<Head>
				<title>Reports & Updates — Zion Tech Group</title>
				<meta name="description" content="Browse platform reports, analytics, and the latest autonomous updates from Zion Tech Group." />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<main className="container mx-auto px-6 py-12">
					<section className="mb-10 text-center">
						<h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">Reports & Updates</h1>
						<p className="text-white/85 max-w-3xl mx-auto">Real-time updates, performance insights, and autonomous system activity.</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
						{updates.length === 0 ? (
							<p className="text-white/70">No updates found.</p>
						) : (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{updates.map((u) => (
									<Link key={u.href} href={u.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
										<div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
										<h3 className="text-lg font-semibold break-words">{u.title}</h3>
										<div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
									</Link>
								))}
							</div>
						)}
					</section>

					<section className="mt-12">
						<h2 className="text-2xl font-semibold mb-4">Other Resources</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							<Link href="/blog" className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors">Blog & Insights</Link>
							<Link href="/resources" className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors">Tools & Guides</Link>
							<Link href="/case-studies" className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors">Case Studies</Link>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}

