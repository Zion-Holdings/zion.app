#!/usr/bin/env python3
"""
Zion Content Loop — batch publisher + enhancer + sitemap refresh.

Runs a controlled batch from topics.json, enhances internal links,
and refreshes sitemap/feed if present.
"""
from __future__ import annotations
import json, subprocess, sys
from pathlib import Path

REPO = Path('/data/data/com.termux/files/home/zion-support.github.io')
GENERATOR = REPO / 'content-loop' / 'generator.py'
ENHANCER = REPO / 'content-loop' / 'scripts' / 'enhance_links.py'
SITEMAP = REPO / 'content-loop' / 'sitemap-refresh.py'
BATCH = 30


def run(cmd: list[str]) -> int:
    print('+ ' + ' '.join(str(c) for c in cmd))
    p = subprocess.run(cmd, cwd=REPO, capture_output=True, text=True)
    if p.stdout.strip():
        print(p.stdout.strip())
    if p.returncode != 0 and p.stderr.strip():
        print('ERR: ' + p.stderr.strip(), file=sys.stderr)
    return p.returncode


def main() -> int:
    if not GENERATOR.exists():
        print('generator.py not found', file=sys.stderr)
        return 2

    print(f'Running generator with batch={BATCH}')
    rc = run([sys.executable, str(GENERATOR), '--count', str(BATCH)])
    if rc != 0:
        return rc

    print('Enhancing internal links')
    if ENHANCER.exists():
        run([sys.executable, str(ENHANCER)])

    print('Refreshing sitemap/feed if available')
    if SITEMAP.exists():
        run([sys.executable, str(SITEMAP)])

    print('Content loop batch complete')
    print('Reseeding topics...')
    reseeder = REPO / 'content-loop' / 'scripts' / 'reseeder.py'
    if reseeder.exists():
        rc_reseed = run([sys.executable, str(reseeder)])
        if rc_reseed == 0:
            print('Reseed complete')
        else:
            print('Reseed returned non-zero', file=sys.stderr)
    else:
        print('No reseeder found; skipping reseed')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
