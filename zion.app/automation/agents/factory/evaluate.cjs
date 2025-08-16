const fs = require('fs');
const path = require('path');

function argv(key, fallback) {
	const idx = process.argv.indexOf(key);
	return idx !== -1 ? process.argv[idx + 1] : fallback;
}

const agentFile = argv('--agent');
const tasksDir = argv('--tasks', 'zion.app/automation/cursor-tasks');
const outDir = argv('--out', 'zion.app/automation/analytics');

if (!agentFile) {
	console.error('--agent is required');
	process.exit(1);
}

const agent = JSON.parse(fs.readFileSync(agentFile, 'utf8'));
const tasks = fs.existsSync(tasksDir) ? fs.readdirSync(tasksDir).filter(f => f.endsWith('.json')) : [];

let score = 0;
let total = 0;

for (const t of tasks) {
	// Placeholder: plug in your real task runner and metric computation here.
	total += 1;
	score += Math.random(); // replace with actual evaluation
}

const avg = total ? score / total : 0;
fs.mkdirSync(outDir, { recursive: true });
const out = {
	agentId: agent.id,
	agentFile,
	tasksEvaluated: total,
	score: Number(avg.toFixed(3)),
	evaluatedAt: new Date().toISOString()
};
fs.writeFileSync(path.join(outDir, `${agent.id}.json`), JSON.stringify(out, null, 2));
console.log(JSON.stringify(out));