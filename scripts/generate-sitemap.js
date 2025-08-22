const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://ziontechgroup.com';

function listPageRoutes() {
	const pagesDir = path.join(process.cwd(), 'pages');
	const routes = new Set();

	function walk(dir, parentSegments = []) {
		const entries = fs.readdirSync(dir, { withFileTypes: true });
		for (const entry of entries) {
			// Skip special folders and files
			if (entry.name.startsWith('_')) continue;
			if (entry.name === 'api') continue;
			if (entry.name === 'reports') continue;

			const full = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				walk(full, parentSegments.concat(entry.name));
				continue;
			}

			// Only consider page files
			const m = entry.name.match(/^(.*)\.(tsx|ts|jsx|js)$/);
			if (!m) continue;

			const base = m[1];
			// Skip dynamic routes
			if (base.includes('[')) continue;

			const segments = parentSegments.concat(base);
			// index pages map to directory path
			if (base === 'index') {
				const route = '/' + parentSegments.join('/') + '/';
				routes.add(route.replace(/\/+/g, '/').replace('//', '/'));
			} else {
				const route = '/' + segments.join('/') + '/';
				routes.add(route.replace(/\/+/g, '/'));
			}
		}
	}

	walk(pagesDir);
	return Array.from(routes);
}

function normalizeDataRoute(p) {
	// Ensure trailing slash
	if (!p.endsWith('/')) p += '/';
	// If data link points to a root page that actually exists under /services/*, prefer the services route
	// Known mappings for legacy links
	const map = new Map([
		['/ai-customer-success-platform/', '/services/ai-customer-success-platform/'],
		['/intelligent-supply-chain-optimization/', '/services/intelligent-supply-chain-optimization/'],
		['/ai-financial-planning-platform/', '/services/ai-financial-planning-platform/'],
		['/ai-sales-intelligence-platform/', '/services/ai-sales-intelligence-platform/'],
		['/ai-powered-decision-engine/', '/services/ai-powered-decision-engine/'],
		['/intelligent-content-automation-platform/', '/services/intelligent-content-automation-platform/'],
		['/smart-crm-intelligence-suite/', '/services/smart-crm-intelligence-suite/']
	]);
	return map.get(p) || p;
}

function listServiceLinksFromData() {
	const dataDir = path.join(process.cwd(), 'data');
	if (!fs.existsSync(dataDir)) return [];
	const links = new Set();

	const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.ts') || f.endsWith('.tsx'));
	for (const file of files) {
		const full = path.join(dataDir, file);
		try {
			const content = fs.readFileSync(full, 'utf8');
			// Find link: 'https://ziontechgroup.com/...' or "..."
			const re = /link\s*:\s*['\"](https?:\/\/[^'\"\s]+)['\"]/g;
			let match;
			while ((match = re.exec(content))) {
				try {
					const url = new URL(match[1]);
					if (url.hostname.endsWith('ziontechgroup.com')) {
						let p = url.pathname;
						p = normalizeDataRoute(p);
						links.add(p);
					}
				} catch {}
			}
		} catch {}
	}
	return Array.from(links);
}

// New: collect static page routes with filesystem last modification time
function listPageRoutesWithLastMod() {
	const pagesDir = path.join(process.cwd(), 'pages');
	const entries = [];

	function walk(dir, parentSegments = []) {
		const dirEntries = fs.readdirSync(dir, { withFileTypes: true });
		for (const entry of dirEntries) {
			if (entry.name.startsWith('_')) continue;
			if (entry.name === 'api') continue;
			if (entry.name === 'reports') continue;

			const full = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				walk(full, parentSegments.concat(entry.name));
				continue;
			}

			const m = entry.name.match(/^(.*)\.(tsx|ts|jsx|js)$/);
			if (!m) continue;

			const base = m[1];
			if (base.includes('[')) continue;

			const segments = parentSegments.concat(base);
			let route;
			if (base === 'index') {
				route = '/' + parentSegments.join('/') + '/';
				route = route.replace(/\/+/g, '/').replace('//', '/');
			} else {
				route = '/' + segments.join('/') + '/';
				route = route.replace(/\/+/g, '/');
			}

			let lastmod;
			try {
				const stat = fs.statSync(full);
				lastmod = new Date(stat.mtime).toISOString();
			} catch {}

			entries.push({ route, lastmod });
		}
	}

	walk(pagesDir);

	const map = new Map();
	for (const e of entries) {
		const existing = map.get(e.route);
		if (!existing) {
			map.set(e.route, e);
			continue;
		}
		if (e.lastmod && (!existing.lastmod || e.lastmod > existing.lastmod)) {
			map.set(e.route, e);
		}
	}
	return Array.from(map.values());
}

function priorityForPath(p) {
	if (p === '/') return '1.0';
	if (p.startsWith('/services/')) return '0.8';
	if (p === '/services/') return '0.9';
	if (p === '/market-pricing/') return '0.7';
	return '0.6';
}

function changefreqForPath(p) {
	if (p === '/' || p === '/services/') return 'daily';
	if (p.startsWith('/services/')) return 'weekly';
	if (p === '/market-pricing/') return 'weekly';
	return 'monthly';
}

function generate() {
	const staticEntries = listPageRoutesWithLastMod();
	const dataLinks = listServiceLinksFromData().map((route) => ({ route }));

	const map = new Map();
	for (const e of staticEntries) map.set(e.route, e);
	for (const e of dataLinks) if (!map.has(e.route)) map.set(e.route, e);

	const all = Array.from(map.values()).sort((a, b) => a.route.localeCompare(b.route));

	const lines = [];
	lines.push('<?xml version="1.0" encoding="UTF-8"?>');
	lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
	for (const { route, lastmod } of all) {
		const loc = `${BASE_URL}${route}`;
		const priority = priorityForPath(route);
		const changefreq = changefreqForPath(route);
		lines.push('  <url>');
		lines.push(`    <loc>${loc}</loc>`);
		if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
		lines.push(`    <changefreq>${changefreq}</changefreq>`);
		lines.push(`    <priority>${priority}</priority>`);
		lines.push('  </url>');
	}
	lines.push('</urlset>');

	const outDir = path.join(process.cwd(), 'public');
	if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
	fs.writeFileSync(path.join(outDir, 'sitemap.xml'), lines.join('\n'));
	// Ensure robots.txt references sitemap
	const robotsPath = path.join(outDir, 'robots.txt');
	let robots = 'User-agent: *\nAllow: /\nSitemap: https://ziontechgroup.com/sitemap.xml\n';
	try {
		if (fs.existsSync(robotsPath)) {
			const existing = fs.readFileSync(robotsPath, 'utf8');
			if (!/Sitemap:\s*https?:\/\/[^^\n]+\/sitemap\.xml/.test(existing)) {
				robots = existing.trim() + '\nSitemap: https://ziontechgroup.com/sitemap.xml\n';
			} else {
				robots = existing;
			}
		}
	} catch {}
	fs.writeFileSync(robotsPath, robots);
	console.log(`[sitemap] Wrote ${all.length} routes to public/sitemap.xml`);
}

if (require.main === module) {
	try {
		generate();
	} catch (e) {
		console.error('[sitemap] generation failed:', e);
		process.exit(0); // Do not fail builds
	}
}