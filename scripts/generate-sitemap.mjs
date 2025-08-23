import fs from 'fs';
import path from 'path';

/**
 * Recursively collect route paths from the provided directory. The function
 * converts Next.js style dynamic segments like `[id]` to `:id` so they appear
 * consistently in the generated sitemap. Files inside `api/` or directories
 * starting with an underscore are ignored.
 */
function collectRoutes(dir, base = '') {
  if (!fs.existsSync(dir)) return [];

const IGNORE_DIRS = new Set(['.git', '.github', 'node_modules', 'dist']);

  for (const entry of entries) {
    if (entry.startsWith('_') || entry === 'api') continue;
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      routes.push(...collectRoutes(full, `${base}/${entry}`));
      continue;
    }

    if (!/\.(?:js|jsx|ts|tsx)$/.test(entry)) continue;

    let route = base;
    const name = entry.replace(/\.(?:js|jsx|ts|tsx)$/, '');

    if (name !== 'index') {
      route += `/${name}`;
    }

    route = route
      .replace(/\[\.\.\.(.+?)\]/g, ':$1*')
      .replace(/\[(.+?)\]/g, ':$1');

    route = route.replace(/\/+/g, '/');
    if (route === '') route = '/';

    routes.push(route);
  }

  return routes;
}

// Gather routes from the Next.js pages directories
let routes = [
  ...collectRoutes(path.join(process.cwd(), 'pages')),
  ...collectRoutes(path.join(process.cwd(), 'src', 'pages')),
];

  // Ensure root is present
  if (!urls.includes('')) urls.push('');

  const now = new Date().toISOString();
  const xmlUrls = urls
    .sort()
    .map((p) => {
      const loc = baseUrl + p;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${p === '' ? '1.0' : '0.6'}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlUrls}\n</urlset>\n`;

  await fs.writeFile(path.join(projectRoot, 'sitemap.xml'), xml, 'utf8');
  console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
}

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robots);

console.warn(`Generated ${routes.length} routes to sitemap.xml and robots.txt`);
