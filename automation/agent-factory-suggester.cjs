#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'layout-audit');
const OUT_DIR = path.join(ROOT, 'data', 'reports', 'agent-suggestions');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(OUT_DIR);

function latestSuggestions() {
	if (!fs.existsSync(REPORT_DIR)) return null;
	const files = fs.readdirSync(REPORT_DIR).filter((f) => f.startsWith('layout-suggestions-') && f.endsWith('.json')).sort();
	if (!files.length) return null;
	return path.join(REPORT_DIR, files[files.length - 1]);
}

function groupByRoute(suggestions) {
	const map = new Map();
	for (const s of suggestions) {
		if (!s || !s.route) continue;
		if (!map.has(s.route)) map.set(s.route, []);
		map.get(s.route).push(s);
	}
	return map;
}

(function main() {
	const sugPath = latestSuggestions();
	if (!sugPath) {
		console.log('No layout suggestions found. Skipping.');
		process.exit(0);
	}
	const data = JSON.parse(fs.readFileSync(sugPath, 'utf8'));
	const suggestions = Array.isArray(data.suggestions) ? data.suggestions : [];
	const byRoute = groupByRoute(suggestions);

	const issueBody = [];
	issueBody.push('# Layout Audit: Agent Factory Proposals');
	issueBody.push('');
	issueBody.push(`- Generated: ${new Date().toISOString()}`);
	issueBody.push(`- Overflow ratio: ${(data.overflowRatio * 100).toFixed(1)}%`);
	issueBody.push('');
	issueBody.push('## Proposed Agents & Workflows');
	issueBody.push('');
	issueBody.push('- Agent: Layout Overflow Auditor (Playwright)');
	issueBody.push('  - Crawls routes, flags horizontal overflow and missing image dimensions');
	issueBody.push('  - Outputs JSON reports and annotated offenders');
	issueBody.push('- Agent: Layout Fix Suggester');
	issueBody.push('  - Suggests Tailwind classes (max-w-full, overflow-x-auto, whitespace-normal)');
	issueBody.push('  - Applies guarded global CSS fallback when widespread issues are detected');
	issueBody.push('- Agent: PR Commenter');
	issueBody.push('  - Posts a summary table and top offenders per route on PRs');
	issueBody.push('');
	issueBody.push('### GitHub Actions Workflow Suggestion');
	issueBody.push('```yaml');
	issueBody.push('name: layout-audit');
	issueBody.push('on:');
	issueBody.push('  pull_request:');
	issueBody.push('    paths:');
	issueBody.push('      - "pages/**"');
	issueBody.push('      - "components/**"');
	issueBody.push('      - "styles/**"');
	issueBody.push('  schedule:');
	issueBody.push('    - cron: "0 3 * * *"');
	issueBody.push('jobs:');
	issueBody.push('  audit:');
	issueBody.push('    runs-on: ubuntu-latest');
	issueBody.push('    steps:');
	issueBody.push('      - uses: actions/checkout@v4');
	issueBody.push('      - uses: actions/setup-node@v4');
	issueBody.push('        with:');
	issueBody.push('          node-version: 20');
	issueBody.push('      - run: npm ci');
	issueBody.push('      - name: Build');
	issueBody.push('        run: npm run build');
	issueBody.push('      - name: Start server');
	issueBody.push('        run: npx serve -s out -l 3000 &');
	issueBody.push('      - name: Crawl & Audit');
	issueBody.push('        run: node automation/layout-crawler.cjs');
	issueBody.push('        env:');
	issueBody.push('          BASE_URL: http://localhost:3000');
	issueBody.push('      - name: Suggest Fixes');
	issueBody.push('        run: node automation/layout-fixer.cjs');
	issueBody.push('      - name: Upload Report Artifact');
	issueBody.push('        uses: actions/upload-artifact@v4');
	issueBody.push('        with:');
	issueBody.push('          name: layout-report');
	issueBody.push('          path: data/reports/layout-audit');
	issueBody.push('```');
	issueBody.push('');
	issueBody.push('## Top Offenders by Route');
	for (const [route, arr] of byRoute.entries()) {
		issueBody.push(`- ${route}`);
		for (const item of arr.slice(0, 3)) {
			issueBody.push(`  - ${item.selectorHint} at x=${item.rect?.x}, w=${item.rect?.w}`);
		}
	}

	const out = path.join(OUT_DIR, `layout-agent-proposals-${new Date().toISOString().replace(/[:.]/g, '-')}.md`);
	fs.writeFileSync(out, issueBody.join('\n'));
	console.log(`Agent factory proposal written to ${out}`);
})();