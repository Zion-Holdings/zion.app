#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'reports', 'ai-lab');
const RESEARCH_DIR = path.join(OUTPUT_DIR, 'research');
const ARTICLES_DIR = path.join(OUTPUT_DIR, 'articles');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }
function nowISO() { return new Date().toISOString(); }
function slugify(text) {
	return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 80);
}

function createArticleFromItem(item) {
	const title = item.title || 'AI/IT Insight';
	const slug = `${slugify(title)}-${Date.now()}`;
	const lines = [];
	lines.push(`# ${title}`);
	lines.push('');
	lines.push(`- Source: [${item.source || 'source'}](${item.url})`);
	lines.push(`- Tags: ${(item.tags || []).join(', ')}`);
	lines.push(`- Created: ${nowISO()}`);
	lines.push('');
	lines.push('## Summary');
	lines.push(item.summary || '');
	lines.push('');
	lines.push('## Why it matters');
	lines.push('- Practical impact on AI/IT teams');
	lines.push('- Risks and limitations to consider');
	lines.push('- Opportunities for products and services');
	lines.push('');
	lines.push('## Recommended next steps');
	lines.push('- Evaluate relevance to your stack and roadmap');
	lines.push('- Prototype small experiments to validate value');
	lines.push('- Track updates and community feedback');
	lines.push('');
	return { slug, content: lines.join('\n') };
}

function pickTopItems(all) {
	const seen = new Set();
	const selected = [];
	for (const it of all) {
		if (!it.title) continue;
		const key = slugify(it.title);
		if (seen.has(key)) continue;
		seen.add(key);
		selected.push(it);
		if (selected.length >= 6) break;
	}
	return selected;
}

function readLatestResearchItems() {
	const indexFile = path.join(RESEARCH_DIR, 'index.json');
	if (!fs.existsSync(indexFile)) return [];
	let index = [];
	try { index = JSON.parse(fs.readFileSync(indexFile, 'utf8')); } catch {}
	const latest = index[0];
	if (!latest) return [];
	const file = path.join(RESEARCH_DIR, latest.file);
	if (!fs.existsSync(file)) return [];
	try {
		const data = JSON.parse(fs.readFileSync(file, 'utf8'));
		return data.items || [];
	} catch {
		return [];
	}
}

function updateArticlesIndex(entries) {
	const indexFile = path.join(ARTICLES_DIR, 'index.json');
	let index = [];
	if (fs.existsSync(indexFile)) {
		try { index = JSON.parse(fs.readFileSync(indexFile, 'utf8')); } catch {}
	}
	const urls = new Set(index.map((e) => e.url));
	for (const e of entries) {
		if (!urls.has(e.url)) {
			index.unshift(e);
			urls.add(e.url);
		}
	}
	fs.writeFileSync(indexFile, JSON.stringify(index.slice(0, 200), null, 2));
}

function main() {
	ensureDir(ARTICLES_DIR);
	const items = readLatestResearchItems();
	if (!items.length) {
		console.log('No research items found; run ai-it-researcher first.');
		process.exit(0);
	}
	const selected = pickTopItems(items);
	const created = [];
	for (const it of selected) {
		const { slug, content } = createArticleFromItem(it);
		const file = path.join(ARTICLES_DIR, `${slug}.md`);
		fs.writeFileSync(file, content);
		const url = `/reports/ai-lab/articles/${slug}.md`;
		created.push({ title: it.title, url, createdAt: nowISO(), tags: it.tags || [], source: it.source || '' });
		console.log(`Created: ${file}`);
	}
	updateArticlesIndex(created);
}

main();