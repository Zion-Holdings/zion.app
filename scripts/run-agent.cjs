#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function readJson(filePath) {
	try {
		return JSON.parse(fs.readFileSync(filePath, 'utf8'));
	} catch (err) {
		return null;
	}
}

function ensureDir(dir) {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
}

function writeChangelog(agentId, changes) {
	ensureDir('automation/analytics');
	const file = path.join('automation/analytics', `agent-${agentId}-changes.json`);
	fs.writeFileSync(file, JSON.stringify({ agentId, timestamp: new Date().toISOString(), changes }, null, 2));
}

function main() {
	const idx = process.argv.indexOf('--blueprint');
	const blueprintPath = idx !== -1 ? process.argv[idx + 1] : null;
	if (!blueprintPath || !fs.existsSync(blueprintPath)) {
		console.log('No blueprint provided or file missing.');
		process.exit(0);
	}
	const bp = readJson(blueprintPath) || {};
	const agentId = path.basename(blueprintPath, '.json');

	// Minimal demonstration: update docs/CHANGELOG_AI.md with a note
	const changelog = path.join('docs', 'CHANGELOG_AI.md');
	ensureDir('docs');
	let content = fs.existsSync(changelog) ? fs.readFileSync(changelog, 'utf8') : '# AI Changelog\n';
	const entry = `\n- ${new Date().toISOString()} – Agent ${agentId} executed. Goal: ${bp.goal || 'improve app'}.`;
	content += entry;
	fs.writeFileSync(changelog, content, 'utf8');

	// Optionally touch a simple automation analytics dashboard placeholder
	ensureDir('automation/analytics');
	const dashboard = path.join('automation/analytics', 'factory-latest.json');
	fs.writeFileSync(dashboard, JSON.stringify({ agentId, blueprint: bp, time: Date.now() }, null, 2));

	writeChangelog(agentId, [{ file: 'docs/CHANGELOG_AI.md', action: 'append' }]);
	console.log(`Agent ${agentId} created a changelog entry.`);
}

main();