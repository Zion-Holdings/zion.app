import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SEO from '../components/SEO';

interface SearchResult {
	url: string;
	title: string;
}

export default function SearchPage() {
	const router = useRouter();
	const queryParam = typeof router.query.q === 'string' ? router.query.q : '';
	const [query, setQuery] = useState(queryParam);
	const [urls, setUrls] = useState<string[]>([]);

	useEffect(() => {
		setQuery(queryParam);
	}, [queryParam]);

	useEffect(() => {
		let cancelled = false;
		(async () => {
			try {
				const res = await fetch('/sitemap.xml');
				const xml = await res.text();
				if (cancelled) return;
				const matches = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g));
				const locs = matches.map((m) => m[1]).filter(Boolean);
				setUrls(locs);
			} catch {
				setUrls([]);
			}
		})();
		return () => { cancelled = true; };
	}, []);

	const results: SearchResult[] = useMemo(() => {
		const q = (query || '').trim().toLowerCase();
		if (!q) return [];
		return urls
			.filter((u) => u.toLowerCase().includes(q))
			.slice(0, 50)
			.map((u) => ({ url: u, title: u.replace(/^https?:\/\//, '') }));
	}, [urls, query]);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		router.replace({ pathname: '/search', query: query ? { q: query } : {} }, undefined, { shallow: true });
	};

	return (
		<>
			<SEO title="Search | Zion Tech Group" description="Search Zion Tech Group pages and services." canonical="https://ziontechgroup.com/search/" />
			<section className="py-16 bg-gradient-to-b from-black to-gray-900 min-h-[70vh]">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Search</h1>
					<form onSubmit={onSubmit} className="max-w-2xl mb-8">
						<label htmlFor="q" className="sr-only">Search query</label>
						<div className="flex gap-2">
							<input id="q" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search pages, services…" className="flex-1 px-4 py-3 rounded-xl bg-black/40 border border-gray-700 text-white" />
							<button type="submit" className="px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Search</button>
						</div>
					</form>

					{(query && results.length === 0) && (
						<p className="text-gray-400">No results found. Try a different query.</p>
					)}

					<ul className="space-y-3">
						{results.map((r) => (
							<li key={r.url} className="p-4 bg-black/30 border border-gray-800/50 rounded-xl hover:border-cyan-500/40 transition-colors">
								<Link href={r.url.replace(/^https?:\/\/[^/]+/, '')} className="text-cyan-400 hover:text-cyan-300">
									{r.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
}