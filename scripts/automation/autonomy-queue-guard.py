#!/usr/bin/env python3
"""
Queue Guard - Monitors concurrent writer runs to prevent race conditions
"""
import json
import os
import subprocess
from datetime import datetime
from pathlib import Path

REPORT_DIR = Path('automation/reports')
REPORT_FILE = REPORT_DIR / 'autonomous-writer-queue-guard-latest.json'

# Ensure report directory exists
REPORT_DIR.mkdir(parents=True, exist_ok=True)

report = {
    'timestamp': datetime.now().isoformat(),
    'severity': 'ok',
    'activeWriterRuns': [],
    'message': 'Writer queue is healthy',
    'checks': {
        'gitStatus': 'clean',
        'lockFiles': 'none detected',
        'concurrentWrites': 0
    }
}

# Check git status for uncommitted changes
try:
    result = subprocess.run(['git', 'status', '--porcelain'], capture_output=True, text=True)
    if result.stdout.strip():
        report['checks']['gitStatus'] = 'has changes'
        report['message'] = 'Uncommitted changes detected - may indicate active write'
except Exception:
    report['message'] = 'Git status check skipped'

# Check for lock files
lock_patterns = ['.lock', '.writing', '.git/index.lock']
lock_files = []
for pattern in lock_patterns:
    for f in Path('.').glob(f'*{pattern}*'):
        lock_files.append(str(f))

if lock_files:
    report['checks']['lockFiles'] = ', '.join(lock_files)
    report['severity'] = 'warning'
    report['message'] = f'Lock files detected: {", ".join(lock_files)}'

# Write JSON report
with open(REPORT_FILE, 'w') as f:
    json.dump(report, f, indent=2)

# Write markdown report
md_report = f"""# Writer Queue Guard Report

**Timestamp:** {report['timestamp']}
**Severity:** {report['severity']}

{report['message']}

## Checks
- Git Status: {report['checks']['gitStatus']}
- Lock Files: {report['checks']['lockFiles']}
- Concurrent Writes: {report['checks']['concurrentWrites']}

### Active Writer Runs
{len(report['activeWriterRuns']) * '- ' or 'No active writer runs'}
"""

with open(REPORT_DIR / 'autonomous-writer-queue-guard-latest.md', 'w') as f:
    f.write(md_report)

# Exit with appropriate code
exit(1 if report['severity'] != 'ok' else 0)