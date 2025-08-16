#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

// Prefer playwright if available; fall back to @playwright/test's chromium
let chromium;
try {
	chromium = require('playwright').chromium;
} catch (_) {
	try { chromium = require('@playwright/test').chromium; } catch (e) {
		console.error('Playwright chromium not found. Please add playwright or @playwright/test as a dependency.');
		process.exit(1);
	}
}

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'layout-audit');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);

function isSpecial(name) { return name.startsWith('_') || name.startsWith('['); }

function collectRoutes() {
	const routes = new Set();
	function walk(dir, routePrefix = '') {
		if (!fs.existsSync(dir)) return;
		const entries = fs.readdirSync(dir, { withFileTypes: true });

		// if directory has index.* treat as routePrefix
		const hasIndex = entries.some((e) => e.isFile() && /^(index)\.(tsx|jsx|ts|js)$/i.test(e.name));
		if (hasIndex && routePrefix) {
			routes.add(routePrefix);
		}

		for (const entry of entries) {
			const full = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				if (isSpecial(entry.name)) continue;
				const nextPrefix = path.posix.join(routePrefix || '/', entry.name).replace(/\\/g, '/');
				walk(full, nextPrefix);
			} else if (entry.isFile()) {
				if (!/\.(tsx|jsx|ts|js)$/i.test(entry.name)) continue;
				const base = entry.name.replace(/\.(tsx|jsx|ts|js)$/i, '');
				if (isSpecial(base)) continue;
				if (base === 'index') continue; // handled above
				const route = path.posix.join(routePrefix || '/', base).replace(/\\/g, '/');
				routes.add(route);
			}
		}
	}
	walk(PAGES_DIR, '');
	// root index exists implicitly at '/'
	routes.add('/');
	return Array.from(routes).sort();
}

function ts() { return new Date().toISOString().replace(/[:.]/g, '-'); }

async function auditRoute(page, baseURL, route) {
	const url = new URL(route, baseURL).toString();
	const consoleErrors = [];
	page.on('console', (msg) => {
		if (msg.type() === 'error') consoleErrors.push(String(msg.text()));
	});

	const nav = await page.goto(url, { waitUntil: 'networkidle' });
	const status = nav ? nav.status() : null;

	// Give the page a tiny settle time for late layout
	await page.waitForTimeout(200);

	const info = await page.evaluate(() => {
		function clip(s, n = 180) { return s.length > n ? s.slice(0, n) + '…' : s; }
		const docEl = document.documentElement;
		const body = document.body;
		const vpWidth = window.innerWidth;
		const vpHeight = window.innerHeight;
		const horizontalOverflow = (docEl.scrollWidth > docEl.clientWidth) || (body.scrollWidth > body.clientWidth);

		// Identify up to N offending elements contributing to horizontal overflow
		const offenders = [];
		if (horizontalOverflow) {
			const all = Array.from(document.querySelectorAll('body *'));
			for (const el of all) {
				try {
					const r = el.getBoundingClientRect();
					if (!r || !Number.isFinite(r.width)) continue;
					if (r.right > vpWidth + 1 || r.left < -1) {
						const cs = window.getComputedStyle(el);
						offenders.push({
							tag: el.tagName.toLowerCase(),
							classes: el.className || '',
							rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), right: Math.round(r.right) },
							styles: { position: cs.position, width: cs.width, whiteSpace: cs.whiteSpace, overflowX: cs.overflowX },
							outer: clip(el.outerHTML.replace(/\s+/g, ' ').trim())
						});
						if (offenders.length >= 12) break;
					}
				} catch (_) { /* ignore */ }
			}
		}

		const imgs = Array.from(document.images || []);
		const imagesWithoutDimensions = imgs.filter((img) => (!img.hasAttribute('width') || !img.hasAttribute('height')));

		return {
			viewport: { width: vpWidth, height: vpHeight },
			horizontalOverflow,
			offenders,
			images: {
				total: imgs.length,
				withoutDimensions: imagesWithoutDimensions.slice(0, 20).map((img) => ({ src: img.currentSrc || img.src || '', alt: img.alt || '', outer: clip(img.outerHTML.replace(/\s+/g, ' ').trim()) })),
				withoutDimensionsCount: imagesWithoutDimensions.length
			}
		};
	});

	return { route, url, status, consoleErrors, ...info };
}

(async function main() {
	const baseURL = process.env.BASE_URL || process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
	const routes = collectRoutes();
	const browser = await chromium.launch({ headless: true });
	const context = await browser.newContext();
	const page = await context.newPage();

	const results = [];
	for (const route of routes) {
		try {
			const r = await auditRoute(page, baseURL, route);
			results.push(r);
			console.log(`[layout] ${route} status=${r.status} overflow=${r.horizontalOverflow} missingImgDim=${r.images.withoutDimensionsCount}`);
		} catch (e) {
			console.error(`[layout] ERROR route=${route}:`, e.message);
			results.push({ route, url: new URL(route, baseURL).toString(), status: null, error: String(e.message), consoleErrors: [], horizontalOverflow: null });
		}
	}

	await browser.close();

	const report = { generatedAt: new Date().toISOString(), baseURL, totalRoutes: routes.length, results };
	const outFile = path.join(REPORT_DIR, `layout-report-${ts()}.json`);
	fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
	console.log(`Layout audit report saved to ${outFile}`);

	// Also write/refresh a latest pointer for convenience
	fs.writeFileSync(path.join(REPORT_DIR, 'latest.json'), JSON.stringify({ path: outFile }, null, 2));
})();