#!/usr/bin/env python3
"""Fix malformed metadata blocks."""
from pathlib import Path
import re

repo = Path('/data/data/com.termux/files/home/zion-support.github.io')

FILES = [
  'app/contact-intent/page.tsx',
  'app/partnership-program/page.tsx',
  'app/solutions/data-analytics/page.tsx',
  'app/solutions/managed-it/page.tsx',
  'app/solutions/micro-saas/page.tsx',
  'app/solutions/security-compliance/page.tsx',
  'app/tools/json-formatter/page.tsx',
  'app/tools/jwt-decoder/page.tsx',
  'app/tools/qr-code-generator/page.tsx',
  'app/tools/regex-tester/page.tsx',
  'app/tools/uuid-generator/page.tsx',
  'app/tools/word-counter/page.tsx',
  'app/solutions/education/page.tsx',
  'app/solutions/financial-services/page.tsx',
  'app/solutions/government/page.tsx',
  'app/solutions/healthcare/page.tsx',
  'app/solutions/logistics/page.tsx',
  'app/solutions/manufacturing/page.tsx',
  'app/solutions/retail/page.tsx',
]
for rel in FILES:
    p = repo / rel
    text = p.read_text()
    if 'export const metadata' not in text:
        continue

    m = re.search(r"alternates:\s*\{canonical:\s*'([^']+)'", text)
    if not m:
        continue
    canonical = m.group(1)
    canonical = canonical.replace('//', '/')

    # Common malformed shapes after earlier automated fixes:
    # 1) alternates inside twitter, no twitter close yet
    # 2) alternates at top-level with double slash
    # Replace the first malformed alternates occurrence with a clean top-level block
    text = re.sub(
        r"alternates:\s*\{canonical:\s*'[^']+'\s*\},\s*\};\s*\n\s*export default",
        f"  }},\n  alternates: {{ canonical: '{canonical}' }},\n}};\n\nexport default",
        text,
        count=1,
    )
    text = re.sub(
        r"alternates:\s*\{canonical:\s*'[^']+'\s*\},",
        f"alternates: {{ canonical: '{canonical}' }},",
        text,
        count=1,
    )
    text = re.sub(
        r"alternates:\s*\{canonical:\s*'[^']+'\s*\};\s*\n\s*export default",
        f"alternates: {{ canonical: '{canonical}' }},\n}};\n\nexport default",
        text,
        count=1,
    )
    p.write_text(text)
    print('fixed', rel)
