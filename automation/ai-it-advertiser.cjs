#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'reports', 'ai-lab');
const ARTICLES_DIR = path.join(OUTPUT_DIR, 'articles');
const REGISTRY_FILE = path.join(process.cwd(), 'public', 'automation', 'content-registry.json');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function loadArticlesIndex() {
	const file = path.join(ARTICLES_DIR, 'index.json');
	if (!fs.existsSync(file)) return [];
	try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return []; }
}

function loadRegistry() {
	ensureDir(path.dirname(REGISTRY_FILE));
	if (!fs.existsSync(REGISTRY_FILE)) return [];
	try { return JSON.parse(fs.readFileSync(REGISTRY_FILE, 'utf8')); } catch { return []; }
}

function saveRegistry(entries) {
	fs.writeFileSync(REGISTRY_FILE, JSON.stringify(entries, null, 2));
}

function main() {
	const articles = loadArticlesIndex();
	if (!articles.length) {
		console.log('No articles to advertise.');
		process.exit(0);
	}
	const registry = loadRegistry();
	const existingLinks = new Set(registry.map((e) => e.link));
	let added = 0;
	for (const a of articles.slice(0, 10)) {
		if (existingLinks.has(a.url)) continue;
		registry.unshift({
			type: 'report',
			title: a.title,
			description: `New AI/IT insight: ${a.title}`,
			link: a.url,
			tags: a.tags || ['ai', 'insight'],
			createdAt: a.createdAt,
			source: a.source || 'AI Lab',
		});
		existingLinks.add(a.url);
		added++;
	}
	if (added > 0) {
		saveRegistry(registry.slice(0, 500));
		console.log(`Advertised ${added} new items to content registry.`);
	} else {
		console.log('No new items to advertise.');
	}
}

main();