const { execSync } = require('child_process');
const fs = require('fs');
const files = execSync('find app/services -name "page.tsx" -exec grep -L "alternates" {} + 2>/dev/null', {encoding:'utf8'}).trim().split('\n').filter(f=>f);
let fixed=0;
for(const file of files) {
  const content = fs.readFileSync(file,'utf8');
  if(content.includes('redirect(') || content.includes('generateMetadata')) continue;
  if(!content.includes('export const metadata')) continue;
  const canonical = '/' + file.replace('/page.tsx','');
  const newContent = content.replace(
    /(export const metadata = \{[\s\S]*?description:.*?,\n)(\s*\};)/,
    `$1  alternates: { canonical: '${canonical}' },\n$2`
  );
  if(newContent !== content) { fs.writeFileSync(file, newContent); fixed++; }
}
console.log('Fixed ' + fixed + ' pages');
