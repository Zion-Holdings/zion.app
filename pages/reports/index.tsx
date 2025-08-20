import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

type ReportsIndexProps = {
	updates: { slug: string; title: string }[];
};

export async function getStaticProps() {
	const updatesDirectory = path.join(process.cwd(), 'pages', 'reports', 'updates');
	let updates: { slug: string; title: string }[] = [];

	try {
		const fileNames = fs
			.readdirSync(updatesDirectory)
			.filter((file) => file.endsWith('.tsx'))
			.sort()
			.reverse();

		updates = fileNames.map((file) => {
			const slug = file.replace(/\.tsx$/, '');
			const title = `Autonomous Update — ${slug.replace(/^update-/, '').replace(/-/g, ': ').replace(/: (\d{2})$/, ': $1')}`;
			return { slug, title };
		});
	} catch {
		updates = [];
	}

	return {
		props: {
			updates,
		},
	};
}

export default function ReportsIndexPage({ updates }: ReportsIndexProps) {
	return (
		<>
			<Head>
				<title>Reports & Updates | Zion Tech Group</title>
				<meta name="description" content="Explore the latest autonomous updates, reports, and analytics from Zion Tech Group." />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<main className="container mx-auto px-6 py-12">
					<section className="text-center mb-12">
						<h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
							Reports & Updates
						</h1>
						<p className="text-white/80 max-w-3xl mx-auto">
							Latest autonomous system updates, platform reports, and analytics.
						</p>
					</section>

					<section className="mx-auto max-w-6xl">
						<h2 className="text-2xl font-bold text-white/90 mb-4">Latest Updates</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{updates.length === 0 && (
								<div className="text-white/70">No updates available.</div>
							)}
							{updates.map((update) => (
								<Link
									key={update.slug}
									href={`/reports/updates/${update.slug}`}
									className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30"
								>
									<div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
									<h3 className="text-lg font-semibold">{update.title}</h3>
									<div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
								</Link>
							))}
						</div>
					</section>

					<section className="text-center mt-16">
						<Link href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all">
							← Back to Home
						</Link>
					</section>
				</main>
			</div>
		</>
	);
}

