function mdEscape(s){return String(s||'').replace(/\|/g,'\\|');}

async function fetchJsonFromRepo(repo, path, ref, token) {
  const res = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(path)}?ref=${ref}`, {
    headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot', 'Accept': 'application/vnd.github.v3.raw' }
  });
  if (!res.ok) return null;
  try { return JSON.parse(await res.text()); } catch { return null; }
}

exports.handler = async function(event, context) {
  try {
    const repo = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
    const token = process.env.GITHUB_TOKEN;
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!token) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'No GITHUB_TOKEN set, skipping commit' }) };
    }

    const linkHealth = await fetchJsonFromRepo(repo, 'data/link-health.json', branch, token);
    const promos = await fetchJsonFromRepo(repo, 'data/homepage-promos.json', branch, token);
    const seo = await fetchJsonFromRepo(repo, 'data/seo-audit.json', branch, token);

    const date = new Date().toISOString().slice(0,10);

    let md = `# Daily Automation Report — ${date}\n\n`;
    if (linkHealth) {
      const failing = (linkHealth.results||[]).filter(r => !r.ok);
      md += `## Link Health\n\n`;
      md += `Total routes: ${(linkHealth.results||[]).length}, Failing: ${failing.length}\n\n`;
      if (failing.length) {
        md += `| Route | Status | Error |\n|---|---:|---|\n`;
        for (const f of failing) md += `| ${mdEscape(f.route)} | ${f.status} | ${mdEscape(f.error||'')} |\n`;
        md += `\n`;
      }
    }
    if (promos) {
      md += `## Homepage Promos\n\n`;
      for (const p of (promos.promos||[])) {
        md += `- ${p.title} (${p.href})\n`;
      }
      md += `\n`;
    }
    if (seo) {
      md += `## SEO Audit\n\n`;
      md += `Pages: ${seo.totals?.pages||0}, With Title: ${seo.totals?.withTitle||0}, With Meta Description: ${seo.totals?.withMetaDesc||0}\n\n`;
      if (seo.issues && seo.issues.length) {
        md += `Top issues (first 10):\n\n`;
        for (const issue of seo.issues.slice(0,10)) {
          md += `- ${issue.path} — ${issue.hasTitle?'':'missing <title>'} ${issue.hasMetaDesc?'':'missing meta description'}\n`;
        }
        md += `\n`;
      }
    }

    const reportPath = `data/reports/daily-${date}.md`;
    const reportB64 = Buffer.from(md, 'utf8').toString('base64');

    // Fetch existing sha for report
    let sha = undefined;
    {
      const check = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(reportPath)}?ref=${branch}`, {
        headers: { 'Authorization': `token ${token}`, 'User-Agent': 'zion-autobot' }
      });
      if (check.ok) {
        const json = await check.json();
        sha = json.sha;
      }
    }

    const resReport = await fetch(`https://api.github.com/repos/${repo}/contents/${encodeURIComponent(reportPath)}`, {
      method: 'PUT',
      headers: { 'Authorization': `token ${token}`, 'Content-Type': 'application/json', 'Accept': 'application/vnd.github+json', 'User-Agent': 'zion-autobot' },
      body: JSON.stringify({ message: `chore(report): daily automation report ${date}`, content: reportB64, branch, sha })
    });

    const jsonReport = await resReport.json();
    if (!resReport.ok) return { statusCode: resReport.status, body: JSON.stringify({ error: jsonReport }) };

    return { statusCode: 200, body: JSON.stringify({ ok: true, report: reportPath, commit: jsonReport.commit && jsonReport.commit.sha }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};