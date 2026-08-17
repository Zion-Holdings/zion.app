const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync('grep -rl "canonical: \\'\\$canonical\\'"" --include="*.tsx" app/services/ 2>/dev/null', {encoding:'utf8'}).trim().split('\n').filter(f=>f);
let fixed = 0;
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const canonical = '/' + file.replace('/page.tsx', '');
  const newContent = content.replace(
    "canonical: '\\$canonical'",
    `canonical: '${canonical}'`
  );
  if (newContent !== content) {
    fs.writeFileSync(file, newContent);
    fixed++;
  }
}
console.log('Fixed ' + fixed + ' pages');
