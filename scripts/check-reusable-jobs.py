#!/usr/bin/env python3
"""Detect GitHub Actions YAML constructs that fail GitHub's stricter parser
even though they're valid YAML. Key rules:
  - A reusable workflow call job (jobs.<id>.uses starts with './') CANNOT have:
    timeout-minutes, runs-on, steps, env, outputs, etc. at the job level.
"""
import re, glob, sys

def job_blocks(txt):
    """Yield (job_id, job_text) for each job under 'jobs:'."""
    lines = txt.split('\n')
    in_jobs = False
    i = 0
    while i < len(lines):
        raw = lines[i]
        if raw.startswith('jobs:'):
            in_jobs = True
            i += 1
            continue
        if in_jobs:
            if re.match(r'^[a-zA-Z]', raw) and not raw.startswith(' '):
                # left a top-level key (not under jobs) -> stop
                break
            m = re.match(r'^  ([A-Za-z0-9_.-]+):\s*$', raw)
            if m:
                jid = m.group(1)
                block = []
                j = i + 1
                while j < len(lines) and (lines[j].startswith('    ') or lines[j].strip() == ''):
                    block.append(lines[j])
                    j += 1
                yield jid, '\n'.join(block)
                i = j
                continue
        i += 1

for f in sorted(glob.glob('.github/workflows/*.yml')):
    txt = open(f).read()
    for jid, block in job_blocks(txt):
        uses = ''
        for line in block:
            mm = re.match(r'^    uses:\s*(.+)', line)
            if mm:
                uses = mm.group(1).strip()
                break
        if uses.startswith('.github/workflows/') or uses.startswith('./.github/workflows/'):
            illegal = []
            for bad in ['timeout-minutes', 'runs-on', 'steps', 'env', 'outputs', 'strategy', 'continue-on-error', 'if']:
                if re.search(r'^\s*%s:' % re.escape(bad), block, re.M):
                    illegal.append(bad)
            if illegal:
                print('ILLEGAL-ON-REUSABLE:', f, '| job:', jid, '| uses:', uses, '| has:', illegal)
print('scan complete')
