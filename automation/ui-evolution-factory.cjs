#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

function log(m) { console.log(`[${new Date().toISOString()}] [ui-evolution-factory] ${m}`); }

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

(function main() {
	const outDir = path.join(process.cwd(), 'automation', 'cursor-agents', 'generated');
	ensureDir(outDir);

	const modes = ['low-risk', 'balanced', 'aggressive'];
	for (const mode of modes) {
		const agent = {
			name: `ui-evolution-${mode}-${Date.now()}`,
			mode,
			objective: 'Improve UX, responsiveness, and CLS without breaking changes',
			guards: ['typecheck', 'build'],
			strategies: ['small-css-adjustments', 'layout-optimizations', 'image-optimizations']
		};
		const file = path.join(outDir, `${agent.name}.json`);
		fs.writeFileSync(file, JSON.stringify(agent, null, 2) + '\n');
		log(`Wrote ${file}`);
	}
})();