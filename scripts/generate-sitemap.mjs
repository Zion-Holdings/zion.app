import fs from 'fs';
import path from 'path';
import ts from 'typescript';
import vm from 'vm';

function requireTS(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const result = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const sandbox = { module: { exports: {} }, exports: {} };
  vm.runInNewContext(result.outputText, sandbox, { filename: filePath });
  return sandbox.module.exports;
}

const { completeSitemap } = requireTS(path.join(process.cwd(), 'src', 'config', 'sitemap.ts'));

const baseUrl = 'https://app.ziontechgroup.com';
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const item of completeSitemap) {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}${item.path}</loc>\n`;
  if (item.lastmod) xml += `    <lastmod>${item.lastmod}</lastmod>\n`;
  if (item.changeFreq) xml += `    <changefreq>${item.changeFreq}</changefreq>\n`;
  if (item.priority) xml += `    <priority>${item.priority}</priority>\n`;
  xml += '  </url>\n';
}
xml += '</urlset>\n';
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml);

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robots);

console.log('Generated sitemap.xml and robots.txt');
