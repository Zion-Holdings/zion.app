from pathlib import Path
root = Path('.')

package = root / 'package.json'
txt = package.read_text()
old_line = '    "lighthouse:production": "node scripts/checks/lighthouse-production-check.cjs || npx lighthouse http://localhost:3000 --output=json --output-path=automation/reports/lighthouse-production-latest.json"'
new_line = '    "lighthouse:production": "npx lighthouse https://ziontechgroup.com --chrome-flags=\'--headless --no-sandbox --disable-gpu\' --output=json --output-path=automation/reports/lighthouse-production-latest.json"'
count = txt.count(old_line)
if count != 1:
    raise SystemExit(f'expected 1 lighthouse target, found {count}')
package.write_text(txt.replace(old_line, new_line, 1))
print('updated package.json')

wf = root / '.github/workflows/unstoppable-retry-guard.yml'
wt = wf.read_text()
old_cmd = 'npm run lint && npm run type-check && npm run build && break || true'
new_cmd = 'npm run lint:check && npm run type-check && npm run build && break || true'
count = wt.count(old_cmd)
if count != 1:
    raise SystemExit(f'expected 1 lint command, found {count}')
wf.write_text(wt.replace(old_cmd, new_cmd, 1))
print('updated unstoppable-retry-guard.yml')
