import fs from 'fs';
import path from 'path';

function collectRoutes(dir, parent = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];
  for (const entry of entries) {
    if (entry.name.startsWith('_')) continue; // ignore _app, _document etc
    if (entry.isDirectory()) {
      if (entry.name === 'api') continue; // skip API routes
      routes = routes.concat(collectRoutes(path.join(dir, entry.name), parent + '/' + entry.name));
    } else if (entry.isFile()) {
      const match = entry.name.match(/^(.*)\.(tsx|jsx|js|ts)$/);
      if (!match) continue;
      const name = match[1];
      let route = parent;
      if (name === 'index') {
        route = route || '/';
      } else if (name.startsWith('[') && name.endsWith(']')) {
        const param = name.slice(1, -1);
        if (param.startsWith('...')) {
          route += '/:' + param.slice(3) + '*';
        } else {
          route += '/:' + param;
        }
      } else {
        route += '/' + name;
      }
      routes.push(route.replace(/\/+/g, '/'));
    }
  }
  return routes;
}

function routeToRegex(route) {
  return new RegExp('^' + route
    .replace(/\/\*/g, '(?:.*)')
    .replace(/:[^\/]+/g, '[^/]+')
    .replace(/\//g, '\\/') + '$');
}

function collectLinks(searchDirs) {
  const links = new Set();
  const fileRegex = /\.(ts|tsx|js|jsx)$/;
  const linkRegex = /(href|to)=\"(\/[^\"#?]+)\"/g;
  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue;
    const stack = [dir];
    while (stack.length) {
      const current = stack.pop();
      for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
        const resPath = path.join(current, entry.name);
        if (entry.isDirectory()) stack.push(resPath);
        else if (entry.isFile() && fileRegex.test(entry.name)) {
          const content = fs.readFileSync(resPath, 'utf8');
          let m;
          while ((m = linkRegex.exec(content)) !== null) {
            links.add(m[2]);
          }
        }
      }
    }
  }
  return Array.from(links);
}

const pagesDir = path.join(process.cwd(), 'pages');
const routes = collectRoutes(pagesDir);

const baseUrl = 'https://example.com';
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const r of routes) {
  xml += `  <url><loc>${baseUrl}${r}</loc></url>\n`;
}
xml += '</urlset>\n';

if (!fs.existsSync('public')) fs.mkdirSync('public');
fs.writeFileSync(path.join('public', 'dynamic-sitemap.xml'), xml);

// Validate internal links
const links = collectLinks(['pages', 'src']);
const unmatched = [];
for (const link of links) {
  if (!routes.some(r => routeToRegex(r).test(link))) {
    unmatched.push(link);
  }
}
if (unmatched.length) {
  console.log('Links without matching route:');
  for (const l of unmatched) console.log('  ' + l);
} else {
  console.log('All links have matching routes');
}
