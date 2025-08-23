#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function kebab(str){
  return str.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}

(function main(){
  const changelog = path.join(process.cwd(), 'docs', 'AUTONOMOUS_CHANGELOG.md');
  if (!fs.existsSync(changelog)) {
    console.log('No changelog found, skipping blog generation');
    process.exit(0);
  }
  const md = fs.readFileSync(changelog, 'utf8');
  const firstLine = md.split('\n')[0] || 'Autonomous Changelog';
  const title = firstLine.replace(/^#\s*/,'').trim() || 'Autonomous Changelog';
  const date = new Date().toISOString().slice(0,10);
  const slug = `${date}-${kebab(title)}`;

  const outDir = path.join(process.cwd(), 'pages', 'blog');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `${slug}.tsx`);

  const content = `import Link from 'next/link';

export default function Post(){
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">${title}</h1>
      <p className="text-sm text-gray-600">Published ${date}</p>
      <article className="prose max-w-none whitespace-pre-wrap">{` + "`" + md.replace(/`/g,'\`') + "`" + `}</article>
      <Link href="/blog"><span className="inline-block mt-4 text-blue-600">Back to Blog</span></Link>
    </div>
  );
}
`;

  fs.writeFileSync(outFile, content);
  console.log('Wrote blog post', outFile);
})();