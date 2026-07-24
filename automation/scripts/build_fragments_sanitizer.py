#!/usr/bin/env python3
"""Neutralize broken generated service/solution pages that crash the static export.
If a bad slug HTML file exists under docs/services or docs/solutions, remove it
so npm run build can finish.
"""
import json, re, shutil
from pathlib import Path
from datetime import datetime, timezone

REPORT = Path('/Users/miami2/zion-support.github.io/automation/reports/build-fragments-latest.json')
BAD_SLUGS = {'ai-agent-development-platform'}

def main():
    now = datetime.now(timezone.utc)
    run_id = now.strftime('%Y%m%d-%H%M%S')
    removed = []
    for base in [Path('docs/services'), Path('docs/solutions')]:
        if not base.exists():
            continue
        for p in base.glob('*/index.html'):
            slug = p.parent.name
            if slug in BAD_SLUGS:
                p.unlink()
                # remove empty parent dir
                try:
                    p.parent.rmdir()
                except OSError:
                    pass
                removed.append(str(p))
    report = {
        'ts': now.isoformat(),
        'run_id': run_id,
        'missing_next_source': True,
        'notes': 'Removed known bad static page fragments that break export',
        'removed': removed,
    }
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(report, ensure_ascii=False))

if __name__ == '__main__':
    main()
