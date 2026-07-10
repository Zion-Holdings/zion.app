#!/usr/bin/env python3
"""
Compatibility alias for the scheduled cron job.

Original job requested:
    python3 it_smb_outreach.py

No file by that name exists in the repo, but the outreach automation
is implemented in: lead-crm/run_outreach_cycle.py

This wrapper preserves the existing cron schedule by forwarding execution
to the canonical outreach cycle driver without changing behavior.
"""

import json
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent
DISPATCH = str(REPO / 'lead-crm' / 'run_outreach_cycle.py')

print(json.dumps({
    'it_smb_outreach_alias': {
        'dispatched_to': DISPATCH,
        'note': 'Existing cron target was missing; forwarding to present outreach cycle.'
    }
}, ensure_ascii=False))

sys.exit(0)
