#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'layout-audit');
const GLOBALS_CSS = path.join(ROOT, 'styles', 'globals.css');

function readLatestReport() {
	const latestPtr = path.join(REPORT_DIR, 'latest.json');
	if (!fs.existsSync(latestPtr)) return null;
	try {
		const p = JSON.parse(fs.readFileSync(latestPtr, 'utf8'));
		if (p && p.path && fs.existsSync(p.path)) return JSON.parse(fs.readFileSync(p.path, 'utf8'));
	} catch (_) { /* ignore */ }
	return null;
}

function ensureGlobalGuards() {
	if (!fs.existsSync(GLOBALS_CSS)) return { changed: false, reason: 'globals.css not found' };
	let css = fs.readFileSync(GLOBALS_CSS, 'utf8');
	let changed = false;

	const guards = [
		{
			check: /html,\s*body,\s*#__next\s*\{[\s\S]*?\}/m,
			// Ensure overflow-x hidden only if persistent overflow observed project-wide
			apply: (hasPersistentOverflow) => {
				if (!hasPersistentOverflow) return css;
				// Add a body overflow guard if not present
				if (!/body\s*\{[\s\S]*?overflow-x:\s*hidden;?/m.test(css)) {
					css += "\nbody { overflow-x: hidden; }\n";
					changed = true;
				}
				return css;
			}
		},
		{
			check: /a,\s*p,\s*li\s*\{[\s\S]*?\}/m,
			apply: () => {
				if (!/word-break:\s*break-word;/.test(css) || !/overflow-wrap:\s*anywhere;/.test(css)) {
					// We already have rules; ensure both properties exist
					const blockRe = /(a,\s*p,\s*li\s*\{)([\s\S]*?)(\})/m;
					css = css.replace(blockRe, (m, a, b, c) => {
						let body = b;
						if (!/overflow-wrap:\s*anywhere;/.test(body)) body += "\n  overflow-wrap: anywhere;";
						if (!/word-break:\s*break-word;/.test(body)) body += "\n  word-break: break-word;";
						return a + body + c;
					});
					changed = true;
				}
				return css;
			}
		}
	];

	return { guards, changedRef: () => changed, getCss: () => css, setCss: (v) => { css = v; } };
}

(function main() {
	const report = readLatestReport();
	if (!report) {
		console.log('No layout report found. Skipping.');
		process.exit(0);
	}
	const results = Array.isArray(report.results) ? report.results : [];
	const overflowCount = results.filter((r) => r && r.horizontalOverflow === true).length;
	const routesCount = results.length || 1;
	const overflowRatio = overflowCount / routesCount;

	const guards = ensureGlobalGuards();
	if (!guards || !guards.getCss) {
		console.log('globals.css not found; nothing to change.');
		process.exit(0);
	}

	let css = guards.getCss();
	const hasPersistentOverflow = overflowRatio > 0.15; // only enforce global guard if >15% routes overflow

	for (const g of guards.guards) {
		if (g.apply) css = g.apply(hasPersistentOverflow);
	}

	if (guards.changedRef && guards.changedRef()) {
		fs.writeFileSync(GLOBALS_CSS, css);
		console.log('Applied global CSS layout guards to styles/globals.css');
	} else {
		console.log('No global CSS changes required.');
	}

	// Emit suggestions file
	const suggestions = [];
	for (const r of results) {
		if (!r || !r.horizontalOverflow) continue;
		if (Array.isArray(r.offenders)) {
			for (const off of r.offenders) {
				suggestions.push({
					route: r.route,
					tip: 'Element exceeds viewport horizontally; consider applying max-w-full, overflow-x-auto on container, or whitespace-normal to child.',
					selectorHint: `${off.tag}.${String(off.classes || '').split(/\s+/).filter(Boolean).slice(0,3).join('.')}`,
					rect: off.rect,
				});
			}
		}
	}
	const sugPath = path.join(REPORT_DIR, `layout-suggestions-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
	fs.writeFileSync(sugPath, JSON.stringify({ generatedAt: new Date().toISOString(), overflowRatio, suggestions }, null, 2));
	console.log(`Suggestions saved to ${sugPath}`);
})();