#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

function safeRead(filePath) {
	try {
		return fs.readFileSync(filePath, 'utf8');
	} catch {
		return '';
	}
}

(function main() {
	const outDir = path.join(process.cwd(), 'out');
	if (!fs.existsSync(outDir)) {
		console.log('[footer:inject] No out/ directory; skipping.');
		process.exit(0);
	}
	const files = fs.readdirSync(outDir).filter(f => f.endsWith('.html'));
	for (const file of files) {
		const full = path.join(outDir, file);
		const html = safeRead(full);
		if (!html) continue;
		const footer = '\n<!-- automated footer -->\n';
		const updated = html.includes('</body>') ? html.replace('</body>', `${footer}</body>`) : (html + footer);
		try {
			fs.writeFileSync(full, updated);
		} catch {}
	}
	console.log('[footer:inject] Completed.');
	process.exit(0);
})();
