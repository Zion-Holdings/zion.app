const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://ziontechgroup.com';
const PAGES = [
	'/',
	'/services',
	'/services-advertising',
	'/pricing',
	'/market-pricing',
	'/features',
	'/contact',
	'/about',
	'/resources',
	'/privacy',
	'/terms',
	'/cookies'
];

function generateSitemapXml(urls) {
	const body = urls
		.map((u) => `  <url>\n    <loc>${DOMAIN}${u}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${u === '/' ? '1.0' : '0.7'}</priority>\n  </url>`) 
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function main() {
	const outDir = path.join(process.cwd(), 'public');
	if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
	const xml = generateSitemapXml(PAGES);
	fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
	console.log('Sitemap written to public/sitemap.xml');
}

if (require.main === module) {
	main();
}

