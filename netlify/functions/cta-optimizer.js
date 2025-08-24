exports.handler = async function(event, context) {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const githubToken = process.env.GITHUB_TOKEN || '';
  const githubRepo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
  const githubBranch = process.env.GIT_BRANCH || 'main';

  function log(msg) { console.log(`[cta-optimizer] ${msg}`); }

  async function fetchText(url, timeoutMs = 15000) {
    if (!url) return '';
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(t);
      if (!res.ok) return '';
      return await res.text();
    } catch (e) {
      clearTimeout(t);
      return '';
    }
  }

  function extractCtas(html) {
    const matches = [];
    if (!html) return matches;
    const re = /<a\s+[^>]*>(.*?)<\/a>/gims;
    let m;
    while ((m = re.exec(html)) !== null) {
      const raw = m[0];
      const text = m[1].replace(/<[^>]+>/g, '').trim();
      const hrefMatch = raw.match(/href\s*=\s*"([^"]*)"/i) || raw.match(/href\s*=\s*'([^']*)'/i);
      const href = hrefMatch ? hrefMatch[1] : '';
      matches.push({ text, href, raw });
    }
    return matches.filter(a => a.text && a.text.length <= 60);
  }

  function suggestCtas(found) {
    const primaryKeywords = ['start', 'get', 'try', 'explore', 'open', 'run', 'launch'];
    const hasPrimary = found.some(a => /start|get|try|explore|open|run|launch/i.test(a.text));
    const suggestions = [];
    if (!hasPrimary) {
      suggestions.push({ type: 'primary', text: 'Launch Autonomous Automations', href: '/automation' });
    }
    const exploreExists = found.some(a => /automations/i.test(a.text));
    if (!exploreExists) {
      suggestions.push({ type: 'secondary', text: 'Explore Automations', href: '/automation' });
    }
    const healthExists = found.some(a => /health|audit|insight/i.test(a.text));
    if (!healthExists) {
      suggestions.push({ type: 'support', text: 'View Site Health', href: '/site-health' });
    }
    const newsExists = found.some(a => /news|updates|changelog/i.test(a.text));
    if (!newsExists) {
      suggestions.push({ type: 'support', text: 'Read Latest Updates', href: '/newsroom' });
    }
    // limit size
    return suggestions.slice(0, 6);
  }

  async function githubUpsert(path, contentStr, message) {
    if (!githubToken) return { ok: false, error: 'No GITHUB_TOKEN' };
    const content = Buffer.from(contentStr).toString('base64');
    const headers = {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'netlify-function-cta-optimizer'
    };
    // read sha if exists
    let sha;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(githubBranch)}`, { headers });
      if (getRes.ok) {
        const json = await getRes.json();
        sha = json.sha;
      }
    } catch {}

    const body = {
      message: message || `chore: update CTA suggestions (${new Date().toISOString()})`,
      content,
      branch: githubBranch,
      sha
    };
    const putRes = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${encodeURIComponent(path)}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    const ok = putRes.ok;
    const status = putRes.status;
    let error;
    if (!ok) {
      try { error = await putRes.text(); } catch (e) { error = String(e); }
    }
    return { ok, status, error };
  }

  try {
    const html = await fetchText(baseUrl ? `${baseUrl}/` : '');
    const anchors = extractCtas(html);
    const suggestions = suggestCtas(anchors);
    const result = {
      generatedAt: new Date().toISOString(),
      baseUrl,
      totals: { anchors: anchors.length, suggestions: suggestions.length },
      suggestions,
      sampleAnchors: anchors.slice(0, 20)
    };

    let commitResults = {};
    if (githubToken) {
      const jsonPath = 'public/reports/cta-suggestions.json';
      const mdPath = 'public/reports/cta-suggestions.md';
      const md = [
        '# CTA Suggestions',
        '',
        `Generated at: ${result.generatedAt}`,
        '',
        '## Suggestions',
        ...suggestions.map(s => `- [${s.text}](${s.href}) (${s.type})`),
        '',
        '## Sample anchors',
        ...result.sampleAnchors.map(a => `- ${a.text} — ${a.href}`)
      ].join('\n');
      const [r1, r2] = await Promise.all([
        githubUpsert(jsonPath, JSON.stringify(result, null, 2), 'chore: update CTA suggestions (json)'),
        githubUpsert(mdPath, md, 'chore: update CTA suggestions (md)')
      ]);
      commitResults = { json: r1, markdown: r2 };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, ...result, committed: Boolean(githubToken), commitResults })
    };
  } catch (err) {
    log(String(err));
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};