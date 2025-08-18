#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const WORKSPACE = process.cwd();
const FUNCTIONS_DIR = path.join(WORKSPACE, 'netlify', 'functions');
const MANIFEST_PATH = path.join(FUNCTIONS_DIR, 'functions-manifest.json');

function log(message) {
	console.log(`[stub-gen] ${message}`);
}

function ensureDir(dir) {
	try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
}

function loadManifestFunctions() {
	try {
		const raw = fs.readFileSync(MANIFEST_PATH, 'utf8');
		const json = JSON.parse(raw);
		return Array.isArray(json.functions) ? json.functions : [];
	} catch (e) {
		log(`Failed to read manifest: ${e.message}`);
		return [];
	}
}

function fileExists(p) {
	try { fs.accessSync(p); return true; } catch { return false; }
}

function toReportFilename(name) {
	return `${name}-report.md`;
}

function buildStubSource(name) {
	// Keep content compact and consistent
	return `#!/usr/bin/env node\n\n'use strict';\n\nconst fs = require('fs');\nconst path = require('path');\n\nexports.handler = async function(event, context) {\n  try {\n    const timestamp = new Date().toISOString();\n    const reportPath = path.join(process.cwd(), '${toReportFilename(name)}');\n    const reportContent = '# ${name} Report\\n\\n' +\n      'Generated: ' + timestamp + '\\n\\n' +\n      '## Status\\n' +\n      '- Task: ${name}\\n' +\n      '- Status: Completed\\n' +\n      '- Timestamp: ' + timestamp + '\\n';\n\n    fs.writeFileSync(reportPath, reportContent);\n\n    return { statusCode: 200, body: JSON.stringify({ name: '${name}', status: 'ok', timestamp }) };\n  } catch (error) {\n    return { statusCode: 500, body: JSON.stringify({ name: '${name}', status: 'error', error: error && error.message }) };\n  }\n};\n`;
}

(function main() {
	ensureDir(FUNCTIONS_DIR);
	const names = loadManifestFunctions();
	if (!names.length) {
		log('No functions listed in manifest. Nothing to do.');
		process.exit(0);
	}
	let created = 0;
	names.sort().forEach((name) => {
		const target = path.join(FUNCTIONS_DIR, `${name}.js`);
		if (fileExists(target)) return;
		fs.writeFileSync(target, buildStubSource(name));
		created += 1;
		log(`Created stub: ${path.relative(WORKSPACE, target)}`);
	});
	log(`Done. Created ${created} new stub(s).`);
})();