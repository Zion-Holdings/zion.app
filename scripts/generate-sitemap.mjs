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

  const entries = fs.readdirSync(dir);
  const routes = [];

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

// Remove duplicates and sort for a stable sitemap
routes = [...new Set(routes)].sort();

const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL || 'https://app.ziontechgroup.com';
const lastmod = new Date().toISOString().split('T')[0];
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const route of routes) {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}${route}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += '  </url>\n';
}
xml += '</urlset>\n';
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml);

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robots);

console.log(`Generated ${routes.length} routes to sitemap.xml and robots.txt`);
