import { useEffect, useState } from 'react';

interface ArticleEntry {
	title: string;
	url: string;
	createdAt: string;
	tags?: string[];
	source?: string;
}

export default function AILabPage() {
	const [items, setItems] = useState<ArticleEntry[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function load() {
			try {
				const res = await fetch('/reports/ai-lab/articles/index.json');
				if (res.ok) {
					const data = await res.json();
					setItems(Array.isArray(data) ? data : []);
				}
			} catch (err) {
				console.error('Failed to load AI Lab index', err);
			}
			setLoading(false);
		}
		load();
	}, []);

	return (
		<main className="max-w-5xl mx-auto px-4 py-10">
			<h1 className="text-3xl font-bold mb-4">AI Lab: Fresh Insights</h1>
			<p className="text-gray-600 mb-8">Continuously generated articles derived from public AI/IT research and news.</p>
			{loading && <p>Loading…</p>}
			{!loading && items.length === 0 && <p>No content yet. Check back soon.</p>}
			<ul className="space-y-4">
				{items.map((it, idx) => (
					<li key={idx} className="border rounded p-4 hover:bg-gray-50 transition">
						<a href={it.url} className="text-lg font-semibold underline" rel="noopener noreferrer">
							{it.title}
						</a>
						<div className="text-sm text-gray-500 mt-1">
							<span>{new Date(it.createdAt).toLocaleString()}</span>
							{it.source ? <span> • {it.source}</span> : null}
						</div>
						{it.tags && it.tags.length > 0 && (
							<div className="mt-2 text-sm text-gray-600">Tags: {it.tags.join(', ')}</div>
						)}
					</li>
				))}
			</ul>
		</main>
	);
}