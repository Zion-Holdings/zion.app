#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const componentsToScan = [
	'components/layout/UltraFuturisticNavigation2035.tsx',
	'components/layout/UltraFuturisticFooter2035.tsx',
	'components/layout/EnhancedSidebar2025.tsx'
];

const pagesDir = path.join(projectRoot, 'pages');
const dataDir = path.join(projectRoot, 'data');
const outputJson = path.join(dataDir, 'missing-slugs.json');

function collectHrefsFromFile(filePath) {
	const fullPath = path.join(projectRoot, filePath);
	if (!fs.existsSync(fullPath)) return [];
	const content = fs.readFileSync(fullPath, 'utf8');
	const hrefRegex = /href\s*[:=]\s*["'](\/[A-Za-z0-9-_/#?]+)["']/g;
	const results = new Set();
	let match;
	while ((match = hrefRegex.exec(content)) !== null) {
		const raw = match[1];
		if (!raw.startsWith('/')) continue;
		// strip anchors and query strings
		const cleaned = raw.split('#')[0].split('?')[0];
		if (!cleaned || cleaned === '/' || cleaned === '') continue;
		results.add(cleaned);
	}
	return Array.from(results);
}

function fileExistsForRoute(routePath) {
	// routePath like "/market-pricing"
	const slug = routePath.replace(/^\//, '');
	const candidates = [
		path.join(pagesDir, `${slug}.tsx`),
		path.join(pagesDir, `${slug}.jsx`),
		path.join(pagesDir, `${slug}.ts`),
		path.join(pagesDir, `${slug}.js`),
		path.join(pagesDir, slug, 'index.tsx'),
		path.join(pagesDir, slug, 'index.jsx'),
		path.join(pagesDir, slug, 'index.ts'),
		path.join(pagesDir, slug, 'index.js')
	];
	return candidates.some((p) => fs.existsSync(p));
}

function main() {
	const hrefs = new Set();
	componentsToScan.forEach((rel) => {
		collectHrefsFromFile(rel).forEach((h) => hrefs.add(h));
	});

	// Normalize and filter out anchors only and known external schemes (shouldn't appear due to regex)
	const paths = Array.from(hrefs)
		.map((p) => p.replace(/\/$/, ''))
		.filter((p) => p && p.startsWith('/') && !p.includes('://'))
		// Filter out section anchors references in services like /services#...
		.filter((p) => !p.includes('#'));

	// Deduplicate and sort
	const unique = Array.from(new Set(paths)).sort();

	// Determine which are missing
	const missing = unique.filter((p) => !fileExistsForRoute(p));

	// Ensure data directory exists
	fs.mkdirSync(dataDir, { recursive: true });
	fs.writeFileSync(outputJson, JSON.stringify(missing.map((p) => p.replace(/^\//, '')), null, 2));

	console.log(`Discovered ${unique.length} unique internal routes from navigation.`);
	console.log(`Missing routes (to be generated): ${missing.length}`);
	missing.forEach((m) => console.log(`- ${m}`));
}

main();