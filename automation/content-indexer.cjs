#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const DOCS_DIR = path.join(ROOT, 'docs');
const PUBLIC_DIR = path.join(ROOT, 'public');
const REGISTRY_PATH = path.join(PUBLIC_DIR, 'automation', 'content-registry.json');
const OG_MANIFEST_PATH = path.join(PUBLIC_DIR, 'og', 'manifest.json');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function readFileSafe(filePath) {
	try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function toRoute(pagesRoot, file) {
	let rel = path.relative(pagesRoot, file).replace(/\\/g, '/');
	// Exclude Next.js internals and dynamic routes by default
	if (rel.startsWith('_')) return null;
	if (/\[[^\]]+\]/.test(rel)) return null;
	if (!/\.(jsx?|tsx?|mdx?|md)$/.test(rel)) return null;

	// Strip extensions
	rel = rel.replace(/\.(jsx?|tsx?|mdx?|md)$/i, '');
	if (rel.endsWith('/index')) rel = rel.slice(0, -('/index'.length));
	return '/' + rel.replace(/^\/+/, '');
}

function extractTitle(content) {
	// Prefer <Head><title>...</title>
	const m = content.match(/<title>([\s\S]*?)<\/title>/i);
	if (m) return m[1].trim();
	// Try first H1
	const h1 = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
	if (h1) return cleanupText(h1[1]);
	// Try file-level export const title = '...'
	const t = content.match(/title\s*[:=]\s*["'`]([^"'`]+)["'`]/i);
	if (t) return t[1].trim();
	return null;
}

function extractDescription(content) {
	const m = content.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["'][^>]*>/i);
	if (m) return m[1].trim();
	// Try first paragraph
	const p = content.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
	if (p) return cleanupText(p[1]).slice(0, 240);
	return null;
}

function cleanupText(htmlish) {
	return htmlish
		.replace(/<[^>]+>/g, ' ')
		.replace(/\{[^}]+\}/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function guessType(route) {
	if (route === '/') return 'home';
	if (route.startsWith('/blog')) return 'article';
	if (route.startsWith('/reports')) return 'report';
	if (route.startsWith('/services')) return 'service';
	if (route.startsWith('/topics')) return 'topic';
	return 'page';
}

function guessTags(route, content) {
	const tags = new Set();
	for (const seg of route.split('/')) {
		if (!seg) continue;
		if (seg.length > 2 && !seg.includes('[') && !seg.includes(']')) tags.add(seg.replace(/[-_]/g, ' '));
	}
	const t = content.match(/tags\s*[:=]\s*\[([^\]]+)\]/i);
	if (t) {
		for (const raw of t[1].split(',')) {
			const v = raw.replace(/["'`]/g, '').trim();
			if (v) tags.add(v);
		}
	}
	return Array.from(tags).slice(0, 8);
}

function priorityFor(route) {
	if (route === '/') return 1.0;
	if (route.split('/').filter(Boolean).length === 1) return 0.7;
	if (route.startsWith('/reports') || route.startsWith('/blog')) return 0.6;
	return 0.5;
}

function loadOgManifest() {
	try {
		const raw = JSON.parse(fs.readFileSync(OG_MANIFEST_PATH, 'utf8'));
		return raw || {};
	} catch { return {}; }
}

function imageForTitle(ogManifest, title) {
	if (!title) return null;
	const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
	const entry = ogManifest[slug];
	return entry && entry.path ? entry.path : null;
}

function collectFiles() {
	const files = [];
	if (fs.existsSync(PAGES_DIR)) files.push(...glob.sync('**/*.{js,jsx,ts,tsx,md,mdx}', { cwd: PAGES_DIR, nodir: true }).map((f) => path.join(PAGES_DIR, f)));
	if (fs.existsSync(DOCS_DIR)) files.push(...glob.sync('**/*.{md,mdx}', { cwd: DOCS_DIR, nodir: true }).map((f) => path.join(DOCS_DIR, f)));
	return files;
}

(function main() {
	ensureDir(path.join(PUBLIC_DIR, 'automation'));
	const ogManifest = loadOgManifest();
	const files = collectFiles();
	const pages = [];
	for (const file of files) {
		const isInPages = file.startsWith(PAGES_DIR);
		const base = isInPages ? PAGES_DIR : DOCS_DIR;
		const route = isInPages ? toRoute(PAGES_DIR, file) : null;
		if (isInPages && !route) continue;
		const content = readFileSafe(file);
		const title = extractTitle(content) || path.basename(file).replace(/\.(jsx?|tsx?|mdx?|md)$/i, '').replace(/[-_]/g, ' ');
		const description = extractDescription(content);
		const type = guessType(route || '/docs');
		const tags = guessTags(route || '/docs', content);
		const stat = fs.statSync(file);
		const lastmod = stat.mtime.toISOString();
		const priority = priorityFor(route || '/docs');
		const image = imageForTitle(ogManifest, title);
		pages.push({
			file: path.relative(ROOT, file).replace(/\\/g, '/'),
			route: route || ('/docs/' + path.relative(DOCS_DIR, file).replace(/\\/g, '/').replace(/\.(md|mdx)$/i, '')),
			title,
			description,
			type,
			tags,
			features: [],
			benefits: [],
			capabilities: [],
			image,
			lastmod,
			priority
		});
	}

	// De-duplicate by route, keep newest lastmod
	const latestByRoute = new Map();
	for (const p of pages) {
		const prev = latestByRoute.get(p.route);
		if (!prev || new Date(p.lastmod) > new Date(prev.lastmod)) latestByRoute.set(p.route, p);
	}
	const out = { generatedAt: new Date().toISOString(), pages: Array.from(latestByRoute.values()).sort((a, b) => a.route.localeCompare(b.route)) };
	fs.writeFileSync(REGISTRY_PATH, JSON.stringify(out, null, 2));
	console.log(`Content registry written: ${REGISTRY_PATH} (pages: ${out.pages.length})`);
})();