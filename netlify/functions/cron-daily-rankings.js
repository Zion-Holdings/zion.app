const fs = require('fs');
const path = require('path');
const { upsertFile } = require('./_lib/github');

exports.handler = async function() {
  try {
    // Demo ranking: based on certifications and progress
    const usersPath = path.join(process.cwd(), 'data', 'learn', 'users.json');
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

    const entries = Object.values(users).map((u) => ({
      userId: u.userId,
      name: u.name || u.userId,
      points: (u.certifications?.length || 0) * 100 + Object.values(u.progress || {}).reduce((acc, p) => acc + (p.percent || 0), 0)
    }));
    const top = entries.sort((a, b) => b.points - a.points).slice(0, 100);

    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;

    const content = JSON.stringify({ updatedAt: Date.now(), top }, null, 2);

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/marketplace/rankings-daily.json', content, message: 'chore(automation): daily rankings update', token });
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, topCount: top.length }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};