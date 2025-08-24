#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function fail(msg) {
	console.error(`[seo-health] ${msg}`);
	process.exitCode = 1;
}

function ok(msg) {
	console.log(`[seo-health] ${msg}`);
}

try {
	const publicDir = path.join(process.cwd(), 'public');
	if (!fs.existsSync(publicDir)) fail('public directory missing');
	const robotsPath = path.join(publicDir, 'robots.txt');
	const sitemapPath = path.join(publicDir, 'sitemap.xml');
	if (!fs.existsSync(robotsPath)) fail('robots.txt missing in public/'); else ok('robots.txt present');
	if (!fs.existsSync(sitemapPath)) fail('sitemap.xml missing in public/'); else ok('sitemap.xml present');

	if (fs.existsSync(robotsPath)) {
		const content = fs.readFileSync(robotsPath, 'utf8');
		if (!/User-agent:\s*\*/i.test(content)) fail('robots.txt missing User-agent: *');
		if (!/Allow:\s*\//i.test(content)) fail('robots.txt missing Allow: /');
		if (!/Sitemap:\s*https?:\/\/[^\s]+\/sitemap\.xml/i.test(content)) fail('robots.txt missing Sitemap absolute URL');
		else ok('robots.txt includes absolute Sitemap');
	}

	if (fs.existsSync(sitemapPath)) {
		const xml = fs.readFileSync(sitemapPath, 'utf8');
		if (!xml.includes('<urlset')) fail('sitemap.xml missing <urlset>'); else ok('sitemap.xml has <urlset>');
		const badCanonicals = (xml.match(/<loc>https:\/\/ziontechgroup\.com\/(?!.*\/)\w+<\/loc>/g) || []).length;
		if (badCanonicals > 0) fail(`sitemap.xml contains ${badCanonicals} non-trailing-slash URLs`); else ok('sitemap.xml URLs appear normalized');
	}

	// Basic check for default SEO presence in _app
	const appPath = path.join(process.cwd(), 'pages', '_app.tsx');
	if (fs.existsSync(appPath)) {
		const app = fs.readFileSync(appPath, 'utf8');
		if (!app.includes('DefaultSEO')) fail('DefaultSEO not detected in _app'); else ok('DefaultSEO detected in _app');
	}

	if (process.exitCode) {
		console.log('[seo-health] FAIL');
		process.exit(process.exitCode);
	} else {
		console.log('[seo-health] OK');
	}
} catch (e) {
	fail(`exception: ${e.message}`);
}