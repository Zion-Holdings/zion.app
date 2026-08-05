#!/usr/bin/env python3
"""
Compatibility alias for the scheduled cron job.

Original cron target:
    python3 it_smb_outreach.py

Forwards execution to the canonical outreach cycle driver so the cron
produces the real mine -> queue -> tailor -> git workflow.
"""
import json
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent
DISPATCH = REPO / 'lead-crm' / '_small_wave_send_run.py'

sys.argv = [str(DISPATCH), *sys.argv[1:]]
sys.path.insert(0, str(REPO))

__name__ = '__main__'
exec(DISPATCH.read_text(encoding='utf-8'))
