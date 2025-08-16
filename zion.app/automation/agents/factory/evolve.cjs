const fs = require('fs');
const path = require('path');

function argv(key, fallback) {
	const idx = process.argv.indexOf(key);
	return idx !== -1 ? process.argv[idx + 1] : fallback;
}

const activeDir = argv('--active', 'zion.app/automation/cursor-agents/active');
const analyticsDir = argv('--analytics', 'zion.app/automation/analytics');
const outDir = argv('--out', 'zion.app/automation/cursor-agents/proposals');
const keepTop = parseInt(argv('--keep-top', '10'), 10);
const mutations = parseInt(argv('--mutations', '2'), 10);

const active = fs.existsSync(activeDir) ? fs.readdirSync(activeDir).filter(f => f.endsWith('.json')) : [];
const scores = fs.existsSync(analyticsDir) ? fs.readdirSync(analyticsDir).filter(f => f.endsWith('.json')) : [];

const scoreMap = new Map();
for (const f of scores) {
	try {
		const m = JSON.parse(fs.readFileSync(path.join(analyticsDir, f), 'utf8'));
		scoreMap.set(m.agentId, m.score ?? 0);
	} catch {}
}

const ranked = active
	.map(f => {
		const a = JSON.parse(fs.readFileSync(path.join(activeDir, f), 'utf8'));
		return { file: f, agent: a, score: scoreMap.get(a.id) ?? 0 };
	})
	.sort((a, b) => b.score - a.score)
	.slice(0, keepTop);

fs.mkdirSync(outDir, { recursive: true });

for (const { agent } of ranked) {
	for (let i = 0; i < mutations; i++) {
		const id = `${agent.topic}-${Date.now()}-mut${i}`;
		const mutated = {
			...agent,
			id,
			name: `evolved-${id}`,
			version: (agent.version || 1) + 1,
			prompt: `${agent.prompt}\nRefine for higher proactive impact; focus on higher-value actions.`,
			metadata: { ...agent.metadata, evolvedFrom: agent.id, evolvedAt: new Date().toISOString() }
		};
		fs.writeFileSync(path.join(outDir, `${id}.json`), JSON.stringify(mutated, null, 2));
	}
}

console.log(`Evolved ${ranked.length} base agents x ${mutations} mutations into ${outDir}`);