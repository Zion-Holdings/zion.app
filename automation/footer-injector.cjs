#!/usr/bin/env node
// Safe no-op footer injector to avoid postbuild failures when automation isn't configured.
const fs = require('fs');
const path = require('path');

function main() {
	try {
		const baseDir = process.cwd();
		const outDirs = ['out', '.next'];
		let targetDirs = outDirs.map((d) => path.join(baseDir, d)).filter((p) => fs.existsSync(p));
		// If nothing to process, just exit quietly
		if (targetDirs.length === 0) {
			return;
		}
		// In a full implementation, we'd traverse HTML and inject a footer.
		// For now, we intentionally do nothing to keep builds clean.
	} catch (_) {
		// Swallow errors; this is a best-effort postbuild enhancement.
	}
}

main();

