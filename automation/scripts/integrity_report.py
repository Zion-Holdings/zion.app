#!/usr/bin/env python
import sys
import json
import hashlib
from pathlib import Path
from datetime import datetime

def write_report(paths, out):
    report = {
        'generated_at': datetime.utcnow().isoformat() + 'Z',
        'files': []
    }
    for p in paths:
        data = Path(p).read_bytes()
        report['files'].append({
            'path': p,
            'bytes': len(data),
            'sha256': hashlib.sha256(data).hexdigest()
        })
    Path(out).write_text(json.dumps(report, indent=2), encoding='utf-8')
    print('REPORT', out)

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print('usage: integrity_report.py <path...> <out.json>')
        sys.exit(1)
    write_report(sys.argv[1:-1], sys.argv[-1])
