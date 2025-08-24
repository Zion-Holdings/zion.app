exports.handler = async function(event, context) {
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const openaiKey = process.env.OPENAI_API_KEY || '';

  if (!githubToken) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: 'GITHUB_TOKEN required' }) };
  }

  const ghHeaders = { Authorization: `token ${githubToken}`, 'Content-Type': 'application/json', 'User-Agent': 'netlify-ai-issue-labeler' };

  async function listRecentIssues() {
    const res = await fetch(`https://api.github.com/repos/${githubRepo}/issues?state=open&per_page=20` , { headers: ghHeaders });
    const arr = await res.json();
    return Array.isArray(arr) ? arr.filter(i => !i.pull_request) : [];
  }

  function ruleLabels(title, body) {
    const text = `${title}\n${body || ''}`.toLowerCase();
    const labels = new Set();
    if (/(bug|error|exception|crash|fail)/.test(text)) labels.add('bug');
    if (/(docs|readme|documentation|typo)/.test(text)) labels.add('docs');
    if (/(perf|performance|slow|bundle)/.test(text)) labels.add('performance');
    if (/(a11y|accessibility|contrast|alt)/.test(text)) labels.add('a11y');
    if (/(feat|feature|enhancement|improve)/.test(text)) labels.add('enhancement');
    if (labels.size === 0) labels.add('triage');
    return Array.from(labels);
  }

  async function aiSuggestLabels(title, body) {
    if (!openaiKey) return null;
    try {
      const prompt = `Suggest at most 3 concise github labels for this issue. Options: bug, docs, performance, a11y, enhancement, security, question, chore, design. Respond as a JSON array of strings.\nTitle: ${title}\nBody: ${body || ''}`;
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${openaiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0 })
      });
      const json = await res.json();
      const content = json?.choices?.[0]?.message?.content?.trim();
      try { const arr = JSON.parse(content); if (Array.isArray(arr)) return arr.slice(0,3); } catch {}
      return null;
    } catch { return null; }
  }

  async function addLabels(issueNumber, labels) {
    if (!labels || labels.length === 0) return { ok: true, skipped: true };
    const res = await fetch(`https://api.github.com/repos/${githubRepo}/issues/${issueNumber}/labels`, {
      method: 'POST', headers: ghHeaders, body: JSON.stringify({ labels })
    });
    return { ok: res.ok, status: res.status };
  }

  const issues = await listRecentIssues();
  const actions = [];
  for (const issue of issues) {
    if (issue.labels && issue.labels.length > 0) continue;
    const rule = ruleLabels(issue.title || '', issue.body || '');
    const ai = await aiSuggestLabels(issue.title || '', issue.body || '');
    const finalLabels = Array.from(new Set([...(rule||[]), ...(ai||[])]));
    const res = await addLabels(issue.number, finalLabels);
    actions.push({ issue: issue.number, labels: finalLabels, result: res });
  }

  const log = { generatedAt: new Date().toISOString(), totalOpen: issues.length, labeled: actions.length, actions };

  // Try to store log as an artifact in repo
  try {
    const headers = ghHeaders;
    let sha;
    const path = 'data/reports/ai-issue-labeler-log.json';
    const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}` , { headers });
    if (getRes.ok) { const j = await getRes.json(); sha = j.sha; }
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, {
      method: 'PUT', headers, body: JSON.stringify({ message: `chore: update AI issue labeler log (${new Date().toISOString()})`, content: Buffer.from(JSON.stringify(log, null, 2)).toString('base64'), sha })
    });
    return { statusCode: 200, body: JSON.stringify({ ok: true, log, store: { ok: putRes.ok, status: putRes.status } }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: true, log, store: { ok: false, error: String(e) } }) };
  }
};