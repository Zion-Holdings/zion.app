const fs = require('fs');
const path = require('path');
const { upsertFile } = require('./_lib/github');

exports.handler = async function() {
  try {
    const usersPath = path.join(process.cwd(), 'data', 'learn', 'users.json');
    const coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    const courses = JSON.parse(fs.readFileSync(coursesPath, 'utf-8'));

    const summary = {
      updatedAt: Date.now(),
      totals: {
        users: Object.keys(users).length,
        courses: courses.length,
        completions: Object.values(users).reduce((acc, u) => acc + (u.certifications?.length || 0), 0)
      },
      topBadges: Object.values(users).reduce((map, u) => {
        (u.badges || []).forEach((b) => { map[b] = (map[b] || 0) + 1; });
        return map;
      }, {})
    };

    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;

    const content = JSON.stringify(summary, null, 2);

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/learn/insights-weekly.json', content, message: 'chore(automation): weekly learning insights', token });
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, summary }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};