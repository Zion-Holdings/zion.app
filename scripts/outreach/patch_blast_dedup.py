import json, hashlib
from pathlib import Path
from datetime import datetime
ROOT = Path(__file__).resolve().parent.parent
DEDUP_DIR = ROOT / 'outreach_monitor' / 'processed'
DEDUP_DIR.mkdir(parents=True, exist_ok=True)
BLAST_LOG = DEDUP_DIR / 'blast_log.jsonl'

# Hashes for recent duplicate subject blasts seen in this session
recent = [
    ('business@manag.co', 'Parceria em It Managed Services — Zion T'),
    ('contacts@manag.io', 'Parceria em It Managed Services — Zion T'),
    ('partnerships@manag.co', 'Parceria em It Managed Services — Zion T'),
    ('leads@manag.br', 'Parceria em It Managed Services — Zion T'),
    ('contacts@manag.ai', ''),
]

with BLAST_LOG.open('a', encoding='utf-8') as f:
    for email, subject in recent:
        h = hashlib.sha256(f'{email}|{subject}'.encode()).hexdigest()[:16]
        f.write(json.dumps({
            'ts': int(datetime.now().timestamp()),
            'email': email,
            'subject': subject,
            'hash': h,
            'action': 'blocked_blast_duplicate'
        }) + '\n')
        p = DEDUP_DIR / f'dedup_{email.split("@")[0]}.json'
        p.write_text(json.dumps({
            'contact': email,
            'subject': subject,
            'hash': h,
            'block_reason': 'blast_duplicate',
            'ts': int(datetime.now().timestamp())
        }, indent=2), encoding='utf-8')
print('wrote', BLAST_LOG, 'and dedup files')
