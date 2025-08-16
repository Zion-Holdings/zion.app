#!/usr/bin/env node
const fs = require('fs');

const input = process.argv[2] || 'automation/analytics/external-links.json';
let data = [];
try {
	data = JSON.parse(fs.readFileSync(input, 'utf8'));
} catch (e) {
	data = [];
}

const ideas = (data.links || []).slice(0, 5).map((url, i) => ({
	id: `seo-content-${i + 1}`,
	goal: 'expand content and internal linking',
	actions: [
		{
			type: 'content',
			target: `pages/blog/auto-${i + 1}.tsx`,
			prompt: `Summarize insights from ${url} and produce a post with internal links.`
		}
	]
}));

process.stdout.write(JSON.stringify(ideas, null, 2));