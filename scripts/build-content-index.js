import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/);
  if (!match) return null;
  const meta = JSON.parse(match[1]);
  const content = match[2].trim();
  const slug = path.basename(filePath).replace(/\.md$/, '');
  return { ...meta, id: slug, slug, content };
}

function build(dir) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  return files.map(f => parseFile(path.join(dir, f))).filter(Boolean);
}

function writeTS(data, outPath, varName, typeImport, typeFile) {
  const ts = `import { ${typeImport} } from '@/types/${typeFile}';\nexport const ${varName}: ${typeImport}[] = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(outPath, ts);
}

const blog = build(path.join(__dirname, '..', 'content', 'blog'));
const caseStudies = build(path.join(__dirname, '..', 'content', 'case-studies'));
const tutorials = build(path.join(__dirname, '..', 'content', 'tutorials'));
const partners = build(path.join(__dirname, '..', 'content', 'partners'));

writeTS(blog, path.join(__dirname, '..', 'src', 'data', 'blog-posts.ts'), 'BLOG_POSTS', 'BlogPost', 'blog');
writeTS(caseStudies, path.join(__dirname, '..', 'src', 'data', 'case-studies.ts'), 'CASE_STUDIES', 'CaseStudy', 'caseStudy');
writeTS(tutorials, path.join(__dirname, '..', 'src', 'data', 'tutorials.ts'), 'TUTORIALS', 'Tutorial', 'tutorial');
writeTS(partners, path.join(__dirname, '..', 'src', 'data', 'partner-profiles.ts'), 'PARTNER_PROFILES', 'PartnerProfileContent', 'partners');
