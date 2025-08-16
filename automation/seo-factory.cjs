#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

function log(m) { console.log(`[${new Date().toISOString()}] [seo-factory] ${m}`); }

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

(function main() {
	const outDir = path.join(process.cwd(), 'automation', 'cursor-agents', 'generated');
	ensureDir(outDir);

	const focuses = ['metadata', 'links', 'content'];
	for (const focus of focuses) {
		const agent = {
			name: `seo-${focus}-${Date.now()}`,
			focus,
			objective: 'Improve Core Web Vitals, internal link graph, and metadata completeness',
			guards: ['build'],
			actions: focus === 'metadata' ? ['generate-missing-meta', 'fix-duplicates']
				: focus === 'links' ? ['generate-internal-links', 'fix-broken-links']
				: ['expand-content-headings', 'add-related-links']
		};
		const file = path.join(outDir, `${agent.name}.json`);
		fs.writeFileSync(file, JSON.stringify(agent, null, 2) + '\n');
		log(`Wrote ${file}`);
	}
})();