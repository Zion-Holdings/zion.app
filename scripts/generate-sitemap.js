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
			const re = /link\s*:\s*['"](https?:\/\/[^'"\s]+)['"]/g;
			let match;
			while ((match = re.exec(content))) {
				try {
					const url = new URL(match[1]);
					if (url.hostname.endsWith('ziontechgroup.com')) {
						let p = url.pathname;
						if (!p.endsWith('/')) p += '/';
						links.add(p);
					}
				} catch {}
			}
		} catch {}
	}
	return Array.from(links);
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
	const staticRoutes = listPageRoutes();
	const dataLinks = listServiceLinksFromData();
	const all = Array.from(new Set([...staticRoutes, ...dataLinks])).sort();

	const lines = [];
	lines.push('<?xml version="1.0" encoding="UTF-8"?>');
	lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
	for (const route of all) {
		const loc = `${BASE_URL}${route}`;
		const priority = priorityForPath(route);
		const changefreq = changefreqForPath(route);
		lines.push('  <url>');
		lines.push(`    <loc>${loc}</loc>`);
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
			if (!/Sitemap:\s*https?:\/\/[^\n]+\/sitemap\.xml/.test(existing)) {
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