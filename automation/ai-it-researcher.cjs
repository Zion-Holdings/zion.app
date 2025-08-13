#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'reports', 'ai-lab');
const RESEARCH_DIR = path.join(OUTPUT_DIR, 'research');

function ensureDir(dir) {
	fs.mkdirSync(dir, { recursive: true });
}

function formatDateUTC(d = new Date()) {
	const yyyy = d.getUTCFullYear();
	const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
	const dd = String(d.getUTCDate()).padStart(2, '0');
	return `${yyyy}-${mm}-${dd}`;
}

async function fetchJSON(url) {
	const res = await fetch(url, { headers: { 'User-Agent': 'zion.app/ai-it-researcher' } });
	if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
	return await res.json();
}

async function fetchText(url) {
	const res = await fetch(url, { headers: { 'User-Agent': 'zion.app/ai-it-researcher' } });
	if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
	return await res.text();
}

function stripHtml(input) {
	return input.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function slugify(text) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-')
		.slice(0, 80);
}

async function fetchHNFrontPageAI() {
	const url = 'https://hn.algolia.com/api/v1/search?query=AI&tags=front_page';
	const data = await fetchJSON(url);
	return (data.hits || []).map((h) => ({
		id: `hn_${h.objectID}`,
		title: h.title || h.story_title || 'HN Item',
		url: h.url || h.story_url || `https://news.ycombinator.com/item?id=${h.objectID}`,
		source: 'Hacker News',
		summary: h._highlightResult?.title?.value?.replace(/<[^>]*>/g, '') || '',
		tags: ['news', 'hn', 'ai'],
	}));
}

async function fetchGoogleAIBlogRSS() {
	const url = 'https://ai.googleblog.com/feeds/posts/default?alt=rss';
	const xml = await fetchText(url);
	const items = Array.from(xml.matchAll(/<item>[\s\S]*?<\/item>/g)) || [];
	return items.map((m, idx) => {
		const block = m[0];
		const title = (block.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || 'Google AI Blog';
		const link = (block.match(/<link>([\s\S]*?)<\/link>/) || [])[1] || '';
		const desc = (block.match(/<description>([\s\S]*?)<\/description>/) || [])[1] || '';
		return {
			id: `googleai_${slugify(title)}_${idx}`,
			title: stripHtml(title),
			url: link.trim(),
			source: 'Google AI Blog',
			summary: stripHtml(desc).slice(0, 400),
			tags: ['blog', 'google', 'ai'],
		};
	});
}

async function fetchArxivAICsRecent() {
	const url = 'http://export.arxiv.org/api/query?search_query=cat:cs.AI&sortBy=submittedDate&sortOrder=descending&max_results=20';
	const xml = await fetchText(url);
	const entries = Array.from(xml.matchAll(/<entry>[\s\S]*?<\/entry>/g)) || [];
	return entries.map((m, idx) => {
		const block = m[0];
		const title = (block.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || 'arXiv cs.AI';
		const link = (block.match(/<link[^>]*href=\"([^\"]+)\"[^>]*>/) || [])[1] || '';
		const summary = (block.match(/<summary>([\s\S]*?)<\/summary>/) || [])[1] || '';
		return {
			id: `arxiv_${slugify(title)}_${idx}`,
			title: stripHtml(title),
			url: link.trim(),
			source: 'arXiv cs.AI',
			summary: stripHtml(summary).slice(0, 600),
			tags: ['research', 'arxiv', 'ai'],
		};
	});
}

async function main() {
	ensureDir(RESEARCH_DIR);
	const today = formatDateUTC();
	const outFile = path.join(RESEARCH_DIR, `research-${today}.json`);

	const results = [];
	try { results.push(...await fetchHNFrontPageAI()); } catch (e) { console.error('HN fetch failed', e.message); }
	try { results.push(...await fetchGoogleAIBlogRSS()); } catch (e) { console.error('Google AI RSS failed', e.message); }
	try { results.push(...await fetchArxivAICsRecent()); } catch (e) { console.error('arXiv fetch failed', e.message); }

	const byUrl = new Map();
	for (const r of results) {
		if (!r.url) continue;
		if (!byUrl.has(r.url)) byUrl.set(r.url, r);
	}
	const unique = Array.from(byUrl.values());

	fs.writeFileSync(outFile, JSON.stringify({ date: today, count: unique.length, items: unique }, null, 2));
	console.log(`Wrote research file: ${outFile} (${unique.length} items)`);

	const indexFile = path.join(RESEARCH_DIR, 'index.json');
	let index = [];
	if (fs.existsSync(indexFile)) {
		try { index = JSON.parse(fs.readFileSync(indexFile, 'utf8')); } catch {}
	}
	const existingDates = new Set(index.map((e) => e.date));
	if (!existingDates.has(today)) {
		index.unshift({ date: today, file: `research-${today}.json`, count: unique.length });
	} else {
		index = index.map((e) => e.date === today ? { ...e, count: unique.length } : e);
	}
	fs.writeFileSync(indexFile, JSON.stringify(index.slice(0, 60), null, 2));
	console.log(`Updated research index: ${indexFile}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});