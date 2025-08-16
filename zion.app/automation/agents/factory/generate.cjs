const fs = require('fs');
const path = require('path');

function argv(key, fallback) {
	const idx = process.argv.indexOf(key);
	return idx !== -1 ? process.argv[idx + 1] : fallback;
}

const topic = argv('--topic', 'general');
const count = parseInt(argv('--count', '3'), 10);
const outDir = argv('--out', 'zion.app/automation/cursor-agents/proposals');

fs.mkdirSync(outDir, { recursive: true });
for (let i = 0; i < count; i++) {
	const id = `${topic}-${Date.now()}-${i}`;
	const agent = {
		id,
		topic,
		name: `auto-${id}`,
		version: 1,
		prompt: `You are an autonomous agent for ${topic}. Optimize proactive actions.`,
		config: { temperature: 0.3, top_p: 0.9, max_tokens: 2048 },
		metadata: { createdAt: new Date().toISOString(), source: 'factory' }
	};
	fs.writeFileSync(path.join(outDir, `${id}.json`), JSON.stringify(agent, null, 2));
}
console.log(`Generated ${count} agent(s) for topic "${topic}" in ${outDir}`);