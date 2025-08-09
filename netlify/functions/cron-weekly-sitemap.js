const { upsertFile } = require('./_lib/github');

exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '';
    const pages = ['/', '/about', '/learn', '/dao', '/certifications', '/blog', '/services', '/talent'];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
      pages.map((p) => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +
      `</urlset>`;

    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'public/sitemap-autogen.xml', content: xml, message: 'chore(automation): weekly sitemap refresh', token });
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: pages.length }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};